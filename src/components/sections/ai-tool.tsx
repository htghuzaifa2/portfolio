'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { generatePortfolioDescription, type GeneratePortfolioDescriptionOutput } from '@/ai/flows/generate-portfolio-description'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Wand2, Sparkles, Loader2 } from 'lucide-react'

const aiFormSchema = z.object({
  projectDetails: z.string().min(50, { message: 'Please provide at least 50 characters for project details.' }),
  assetsDescription: z.string().min(20, { message: 'Please provide at least 20 characters for asset description.' }),
})

const AiToolSection = () => {
  const [generatedContent, setGeneratedContent] = useState<GeneratePortfolioDescriptionOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof aiFormSchema>>({
    resolver: zodResolver(aiFormSchema),
    defaultValues: {
      projectDetails: '',
      assetsDescription: '',
    },
  })

  async function onSubmit(values: z.infer<typeof aiFormSchema>) {
    setIsLoading(true)
    setGeneratedContent(null)
    try {
      const result = await generatePortfolioDescription(values)
      setGeneratedContent(result)
    } catch (error) {
      console.error('Failed to generate description:', error)
      // You could use react-hot-toast here to show an error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="ai-tool" className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Wand2 className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">AI-Powered Description Generator</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Struggling with words? Describe your project and let our AI craft a compelling portfolio description and suggest relevant skills for you.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="fade-in-up">
          <CardHeader>
            <CardTitle>Describe Your Project</CardTitle>
            <CardDescription>Provide as much detail as possible for the best results.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., I built a full-stack e-commerce platform using Next.js, Stripe for payments, and Tailwind CSS for styling..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="assetsDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asset Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., I've included screenshots of the homepage, product pages, and the checkout flow."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Description
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle>AI Generated Content</CardTitle>
            <CardDescription>Here's what our AI came up with. Feel free to copy and edit.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex h-full min-h-[300px] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : generatedContent ? (
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Generated Description</h3>
                  <p className="text-sm text-muted-foreground">{generatedContent.description}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Suggested Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {generatedContent.suggestedSkills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-card">
                <p className="text-center text-sm text-muted-foreground">Your generated content will appear here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AiToolSection
