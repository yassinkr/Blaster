"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SendBtn from './SendBtn'; // Your custom SendBtn component

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name is too long'),
  email: z.string().email('Invalid email format'),
  message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema), // Integrating Zod with React Hook Form
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Handle the submitted data
  };

  return (
    <div className="h-1/2 w-1/4 p-4  shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            id="name"
            type="text"
            {...register('name')}placeholder='Blaster OG'
            className="rounded-xl h-10 p-2 border text-black focus:outline-none focus:ring"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}placeholder='example@blaster.com'
            className="rounded-xl h-10 p-2 border text-black focus:outline-none focus:ring"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message" className="font-semibold">Message</label>
          <textarea
            id="message"
            {...register('message')} placeholder='Dear Blaster Team,'
            className="rounded-xl h-20 p-2 border text-black focus:outline-none focus:ring"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>
        <div>
          <SendBtn /> {/* Your custom Send button */}
        </div>
      </form>
    </div>
  );
};

export default Form;
