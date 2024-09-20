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

export async function sendEmaillAction(formData: FormData) {
  if (formData.get('company')) {
    throw new Error('Failed to send email, please try again later');
  }

  // Sanitize the form data
  const sanitizedData = {
    senderName: validator.escape(formData.get('senderName') as string),
    senderEmail: validator.normalizeEmail(
      formData.get('senderEmail') as string,
    ) as string,
    whatServicesNeeded: validator.escape(
      formData.get('whatServicesNeeded') as string,
    ),
    senderMessage: validator.escape(formData.get('senderMessage') as string),
    company: validator.escape(formData.get('company') as string),
  };

  const parsedData = formSchema.safeParse(sanitizedData);

  if (!parsedData.success) {
    throw new Error('Invalid form data');
  }

  try {
    const response = await resend.emails.send({
      from: 'portfolio_v2@ivanravic.com',
      to: ['ravic.ivan88@gmail.com'],
      subject: 'New contact form submission from ivanravic.com',
      react: EmailTemplate({ ...parsedData.data }),
    });

    return response;
  } catch (err) {
    throw new Error('Failed to send email, please try again later');
  }
}
