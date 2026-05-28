'use server';
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
  senderName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  senderEmail: z.string().email({
    message: 'Invalid email address.',
  }),
  whatServicesNeeded: z.string().min(5, {
    message: 'Services must be at least 3 characters.',
  }),
  senderMessage: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
  company: z.string().optional(),
});

export async function sendEmaillAction(data: z.infer<typeof formSchema>) {
  // Resolve the client IP and enforce rate limiting
  const headersList = headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip =
    forwardedFor?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    'unknown';

  if (!rateLimit(ip)) {
    throw new Error('Too many requests. Please try again later.');
  }

  if (data.company) {
    throw new Error('Failed to send email, please try again later');
  }

  // Narrow normalizeEmail, which can return false
  const normalizedEmail = validator.normalizeEmail(data.senderEmail);
  if (normalizedEmail === false) {
    throw new Error('Invalid email address.');
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
    // handling validation errors
    const errorMessages = parsedData.error.issues.map((issue) => issue.message);
    throw new Error(`Validation Error:${errorMessages.join(', ')}`);
  }

  try {
    const response = await resend.emails.send({
      from: 'send@ivanravic.com',
      to: ['ravic.ivan88@gmail.com'],
      subject: 'New contact form submission from ivanravic.com',
      react: EmailTemplate({ ...parsedData.data }),
    });

    return response;
  } catch (err) {
    console.error('Resend error:', err);
    throw new Error('Email Sending Failed. Please try again later.');
  }
}
