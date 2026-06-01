'use server';
import { createElement } from 'react';

import { z } from 'zod';
import validator from 'validator';
import { headers } from 'next/headers';

import { Resend } from 'resend';

import { EmailTemplate } from '@/components/common/Emails/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory IP rate limiting: MAX_REQ requests per WINDOW_MS per IP
const ipBuckets = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQ = 3;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    ipBuckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (bucket.count >= MAX_REQ) return false;
  bucket.count++;
  return true;
}

const formSchema = z.object({
  senderName: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(100, {
      message: 'Name must be at most 100 characters.',
    }),
  senderEmail: z
    .string()
    .email({
      message: 'Invalid email address.',
    })
    .max(254, {
      message: 'Email must be at most 254 characters.',
    }),
  whatServicesNeeded: z
    .string()
    .min(5, {
      message: 'Services must be at least 5 characters.',
    })
    .max(150, {
      message: 'Services must be at most 150 characters.',
    }),
  senderMessage: z
    .string()
    .min(5, {
      message: 'Message must be at least 5 characters.',
    })
    .max(2000, {
      message: 'Message must be at most 2000 characters.',
    }),
  company: z.string().max(100).optional(),
});

export type SendEmailResult =
  | { ok: true }
  | {
      ok: false;
      code:
        | 'RATE_LIMITED'
        | 'HONEYPOT'
        | 'INVALID_EMAIL'
        | 'VALIDATION'
        | 'SEND_FAILED';
    };

export async function sendEmaillAction(
  data: z.infer<typeof formSchema>
): Promise<SendEmailResult> {
  // Resolve the client IP and enforce rate limiting
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip =
    forwardedFor?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    'unknown';

  if (!rateLimit(ip)) {
    return { ok: false, code: 'RATE_LIMITED' };
  }

  if (data.company) {
    return { ok: false, code: 'HONEYPOT' };
  }

  // Narrow normalizeEmail, which can return false
  const normalizedEmail = validator.normalizeEmail(data.senderEmail);
  if (normalizedEmail === false) {
    return { ok: false, code: 'INVALID_EMAIL' };
  }

  // Sanitize the form data
  const sanitizedData = {
    senderName: validator.escape(data.senderName),
    senderEmail: normalizedEmail,
    whatServicesNeeded: validator.escape(data.whatServicesNeeded),
    senderMessage: validator.escape(data.senderMessage),
  };

  const parsedData = formSchema.safeParse(sanitizedData);

  if (!parsedData.success) {
    // Log validation detail server-side only; do not leak to the client.
    const errorMessages = parsedData.error.issues.map((issue) => issue.message);
    console.error('Validation error:', errorMessages.join(', '));
    return { ok: false, code: 'VALIDATION' };
  }

  try {
    await resend.emails.send({
      from: 'send@ivanravic.com',
      to: ['ravic.ivan88@gmail.com'],
      subject: 'New contact form submission from ivanravic.com',
      react: createElement(EmailTemplate, { ...parsedData.data }),
    });

    return { ok: true };
  } catch (err) {
    console.error('Resend error:', err);
    return { ok: false, code: 'SEND_FAILED' };
  }
}
