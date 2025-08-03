'use server';

/**
 * @fileOverview A portfolio description generator AI agent.
 *
 * - generatePortfolioDescription - A function that handles the portfolio description generation process.
 * - GeneratePortfolioDescriptionInput - The input type for the generatePortfolioDescription function.
 * - GeneratePortfolioDescriptionOutput - The return type for the generatePortfolioDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioDescriptionInputSchema = z.object({
  projectDetails: z.string().describe('Detailed description of the project, including its goals, technologies used, and outcomes.'),
  assetsDescription: z.string().describe('Description of the assets being uploaded, such as images, videos, or documents.'),
});
export type GeneratePortfolioDescriptionInput = z.infer<typeof GeneratePortfolioDescriptionInputSchema>;

const GeneratePortfolioDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling portfolio description generated based on the provided details and assets.'),
  suggestedSkills: z.array(z.string()).describe('An array of relevant skills suggested based on the project details.'),
});
export type GeneratePortfolioDescriptionOutput = z.infer<typeof GeneratePortfolioDescriptionOutputSchema>;

export async function generatePortfolioDescription(
  input: GeneratePortfolioDescriptionInput
): Promise<GeneratePortfolioDescriptionOutput> {
  return generatePortfolioDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioDescriptionPrompt',
  input: {schema: GeneratePortfolioDescriptionInputSchema},
  output: {schema: GeneratePortfolioDescriptionOutputSchema},
  prompt: `You are a portfolio expert, skilled at creating compelling descriptions and identifying relevant skills for projects.

  Based on the following project details and asset descriptions, generate a portfolio description and suggest relevant skills.

  Project Details: {{{projectDetails}}}
  Assets Description: {{{assetsDescription}}}

  Description: A compelling description of the project for a portfolio.
  Suggested Skills: An array of relevant skills used in the project.
  `,
});

const generatePortfolioDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePortfolioDescriptionFlow',
    inputSchema: GeneratePortfolioDescriptionInputSchema,
    outputSchema: GeneratePortfolioDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
