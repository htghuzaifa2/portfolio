'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { MessageCircle, Send } from 'lucide-react'

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
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <MessageCircle className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
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

        <div className="mx-auto mt-12 max-w-xl">
          <Card className="fade-in-up">
            <CardHeader>
              <CardTitle>Contact on WhatsApp</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send on WhatsApp
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
