'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  sendEmaillAction,
  type SendEmailResult,
} from '@/app/api/serverActionEmail';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import Rounded from '@/components/common/Button/index';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Icon } from '@iconify/react/dist/iconify.js';

import { useState } from 'react';

const formSchema = z.object({
  senderName: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
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

// Red underline that grows from the left when the adjacent input is focused
// (peer). Replaces the static focus ring with a smoother, intentional accent.
function FieldUnderline() {
  return (
    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-custom-red transition-transform duration-300 ease-out peer-focus:scale-x-100" />
  );
}

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { resolvedTheme } = useTheme();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderName: '',
      senderEmail: '',
      whatServicesNeeded: '',
      senderMessage: '',
      company: '',
    },
  });
  // Maps each server-side error code to a user-facing toast message.
  type SendEmailErrorCode = Extract<SendEmailResult, { ok: false }>['code'];
  const errorMessages: Record<SendEmailErrorCode, string> = {
    RATE_LIMITED: 'Too many requests. Please try again later.',
    HONEYPOT: 'Spam detected. Please try again.',
    INVALID_EMAIL: 'Invalid email address.',
    VALIDATION: 'Please check your details and try again.',
    SEND_FAILED: 'Email Sending Failed. Please try again later.',
  };

  // submit handler
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // antibot check
    if (data.company) {
      toast.error('Spam detected. Please try again.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendEmaillAction(data);

      if (result.ok) {
        toast.success('Email sent successfully. I will get back to you soon.');
        form.reset();
      } else {
        toast.error(errorMessages[result.code]);
      }
    } catch {
      // Truly unexpected (e.g. network) failures only.
      toast.error('Unexpected error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      className="flex w-full flex-col gap-4 py-2 sm:p-6 md:p-8 lg:p-10"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-10 sm:space-y-12 md:space-y-14"
        >
          <FormField
            control={form.control}
            name="senderName"
            render={({ field }) => (
              <FormItem className="group">
                <FormLabel className="left-0 mr-2 text-base opacity-35 sm:text-left">
                  01
                </FormLabel>
                <FormLabel className="text-base transition-colors group-focus-within:text-custom-red sm:text-lg">
                  What&rsquo;s your name?
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="John Doe*"
                      {...field}
                      autoComplete="name"
                    />
                  </FormControl>
                  <FieldUnderline />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem className="group">
                <FormLabel className="left-0 mr-2 text-base opacity-35 sm:text-left">
                  02
                </FormLabel>
                <FormLabel className="text-base transition-colors group-focus-within:text-custom-red sm:text-lg">
                  What&rsquo;s your email?
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="john@doe.com*"
                      {...field}
                      autoComplete="email"
                    />
                  </FormControl>
                  <FieldUnderline />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatServicesNeeded"
            render={({ field }) => (
              <FormItem className="group">
                <FormLabel className="left-0 mr-2 text-base opacity-35 sm:text-left">
                  03
                </FormLabel>
                <FormLabel className="text-base transition-colors group-focus-within:text-custom-red sm:text-lg">
                  What services are you looking for?
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Web Development, DevOps, AWS services..."
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FieldUnderline />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderMessage"
            render={({ field }) => (
              <FormItem className="group">
                <FormLabel className="left-0 mr-2 text-base opacity-35 sm:text-left">
                  04
                </FormLabel>
                <FormLabel className="text-base transition-colors group-focus-within:text-custom-red sm:text-lg">
                  Your message
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Textarea
                      placeholder="Hello Ivan, can you help me with..."
                      {...field}
                    />
                  </FormControl>
                  <FieldUnderline />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  height: 0,
                  overflow: 'hidden',
                }}
              >
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Leave this field empty"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Rounded>
              <p className="z-10 m-0 flex items-center gap-3 whitespace-nowrap text-base">
                {isLoading ? 'Sending...' : 'Get In Touch'}
                <Icon
                  icon="mdi:send"
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </p>
            </Rounded>
          </button>
        </form>
      </Form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    </motion.div>
  );
}
