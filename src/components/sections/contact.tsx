'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

const ContactSection = () => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappUrl = `https://wa.me/923251480148?text=${encodeURIComponent(
      `Hello, my name is ${values.name}. My email is ${values.email}. \n\n${values.message}`
    )}`
    window.open(whatsappUrl, '_blank')
    toast({
      title: 'Redirecting to WhatsApp...',
      description: 'Your message is ready to be sent.',
    })
    form.reset()
  }

  return (
    <section id="contact">
      <div className="section-heading">
        <h2>Contact Me</h2>
        <p>
          Have a project in mind or just want to say hello? Send me a message on{' '}
          <a
            href="https://wa.me/923251480148"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            WhatsApp
          </a>
          {' '}or use the form below.
        </p>
      </div>

      <div className="contact-container">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="input-group">
            <input {...form.register('name')} placeholder="Your Name" />
            {form.formState.errors.name && <p className="error">{form.formState.errors.name.message}</p>}
          </div>
          <div className="input-group">
            <input {...form.register('email')} placeholder="Your Email" />
            {form.formState.errors.email && <p className="error">{form.formState.errors.email.message}</p>}
          </div>
          <div className="input-group">
            <textarea {...form.register('message')} placeholder="Your Message" />
            {form.formState.errors.message && <p className="error">{form.formState.errors.message.message}</p>}
          </div>
          <button type="submit" className="btn">
            <span>Send on WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
