"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
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
      transition={{ ease: "easeInOut", duration: 2 }}
      className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6 md:space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-custom-yellow text-base sm:text-lg">
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} autoComplete="name" />
                </FormControl>
                <FormDescription>Your name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-custom-yellow text-base sm:text-lg">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} autoComplete="email" />
                </FormControl>
                <FormDescription>name@example.com</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-custom-yellow text-base sm:text-lg">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormDescription>Your message</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="hover:bg-custom-yellow hover:text-custom-dark"
          >
            Get In Touch
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
