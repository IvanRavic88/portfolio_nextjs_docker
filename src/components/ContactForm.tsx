'use client';

import Rounded from '@/components/common/Button/index';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { motion } from 'framer-motion';

import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
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
            name="name"
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
            name="email"
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
            name="name"
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
            name="message"
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
              <p className="z-10 m-0 whitespace-nowrap text-base">
                Get In Touch
              </p>
            </Rounded>
          </button>
        </form>
      </Form>
    </motion.div>
  );
}
