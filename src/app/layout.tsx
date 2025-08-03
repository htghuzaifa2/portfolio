import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
});

const siteUrl = 'https://htghuzaifa.huzi.pk';

export const metadata: Metadata = {
  title: 'HTG Huzaifa - Portfolio',
  description: 'The professional portfolio of HTG Huzaifa, a creative developer specializing in Next.js, React, and modern web technologies. Explore projects and get in touch.',
  keywords: ['HTG Huzaifa', 'Portfolio', 'Web Developer', 'Next.js', 'React', 'Tailwind CSS', 'Freelancer', 'huzi.pk'],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'HTG Huzaifa - Portfolio',
    description: 'The professional portfolio of HTG Huzaifa, a creative developer specializing in Next.js, React, and modern web technologies.',
    images: [
      {
        url: 'https://i.postimg.cc/BvRdbqhD/logo.webp',
        width: 400,
        height: 400,
        alt: 'HTG Huzaifa Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTG Huzaifa - Portfolio',
    description: 'The professional portfolio of HTG Huzaifa, a creative developer specializing in Next.js, React, and modern web technologies.',
    images: ['https://i.postimg.cc/BvRdbqhD/logo.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head />
      <body className={cn("font-body antialiased")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
