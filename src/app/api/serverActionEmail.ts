'use server';
import { z } from 'zod';
import validator from 'validator';

import { Resend } from 'resend';

import { EmailTemplate } from '@/components/common/Emails/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

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
  if (data.company) {
    throw new Error('Failed to send email, please try again later');
  }
  // Sanitize the form data
  const sanitizedData = {
    senderName: validator.escape(data.senderName),
    senderEmail: validator.normalizeEmail(data.senderEmail),
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
    if (err instanceof Error) {
      throw new Error(`Email Sending Failed: ${err.message}`);
    } else {
      throw new Error('Email Sending Failed: Unknown error');
    }
  }
}
