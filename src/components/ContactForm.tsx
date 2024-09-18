'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { sendEmaillAction } from '@/app/api/serverActionEmail';

import { ToastContainer, toast } from 'react-toastify';

import { motion } from 'framer-motion';

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

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderName: '',
      senderEmail: '',
      whatServicesNeeded: '',
      senderMessage: '',
    },
  });
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append('senderName', data.senderName);
      formData.append('senderEmail', data.senderEmail);
      formData.append('whatServicesNeeded', data.whatServicesNeeded);
      formData.append('senderMessage', data.senderMessage);

      const response = await sendEmaillAction(formData);
      if (response.data) {
        toast.success('Email sent successfully. Thanks!');
      } else {
        toast.error('Failed to send email, please try again later');
      }
    } catch {
      toast.error('Failed to send email, please try again later');
    }
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }} // Animating from right
      animate={{ x: 0, opacity: 1 }} // Moving to the center
      transition={{ ease: 'easeInOut', duration: 2 }}
      className="flex w-full flex-col py-2 sm:p-6 md:p-8 lg:p-10"
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
              <FormItem>
                <FormLabel className="sm:text left-0 mr-2 text-base opacity-35">
                  01
                </FormLabel>
                <FormLabel className="text-base sm:text-lg">
                  What&rsquo;s your name?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe*"
                    {...field}
                    autoComplete="name"
                    className="text-sm focus:text-lg"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:text left-0 mr-2 text-base opacity-35">
                  02
                </FormLabel>
                <FormLabel className="text-base sm:text-lg">
                  What&rsquo;s your email?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@doe.com*"
                    {...field}
                    autoComplete="email"
                    className="focus:text-lg"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatServicesNeeded"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:text left-0 mr-2 text-base opacity-35">
                  03
                </FormLabel>
                <FormLabel className="text-base sm:text-lg">
                  What services are you looking for?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Web Development, DevOps, AWS services..."
                    {...field}
                    autoComplete="email"
                    className="focus:text-lg"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:text left-0 mr-2 text-base opacity-35">
                  04
                </FormLabel>
                <FormLabel className="text-base sm:text-lg">
                  Your message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hello Ivan, can you help me with..."
                    {...field}
                    className="focus:text-lg"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <button type="submit" className="block">
            <Rounded>
              <p className="z-10 m-0 flex items-center gap-3 whitespace-nowrap text-base">
                Get In Touch{' '}
                <Icon
                  icon="mdi:send"
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </p>
            </Rounded>
          </button>
          <ToastContainer />
        </form>
      </Form>
    </motion.div>
  );
}
