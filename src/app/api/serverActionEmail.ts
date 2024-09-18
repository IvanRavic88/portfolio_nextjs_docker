'use server';
import { z } from 'zod';
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
});

export async function sendEmaillAction(formData: FormData) {
  const parsedData = formSchema.safeParse({
    senderName: formData.get('senderName'),
    senderEmail: formData.get('senderEmail'),
    whatServicesNeeded: formData.get('whatServicesNeeded'),
    senderMessage: formData.get('senderMessage'),
  });

  if (!parsedData.success) {
    throw new Error('Invalid form data');
  }
  console.log(parsedData.data);
  try {
    const response = await resend.emails.send({
      from: 'portfolio_v2@ivanravic.com',
      to: ['ravic.ivan88@gmail.com'],
      subject: 'New contact form submission from ivanravic.com',
      react: EmailTemplate({ ...parsedData.data }),
    });
    console.log(response);
    return response;
  } catch (err) {
    console.error('Error sending email', err);
    throw new Error('Failed to send email');
  }
}
