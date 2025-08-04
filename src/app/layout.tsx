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
const siteTitle = 'HTG Huzaifa Portfolio';
const siteDescription = 'Welcome to the official portfolio of HTG Huzaifa. A creative developer specializing in Next.js, React, and modern web performance. Explore my projects and get in touch to build something amazing.';
const siteKeywords = ['HTG Huzaifa', 'Portfolio', 'Web Developer', 'Next.js', 'React', 'Tailwind CSS', 'Freelancer', 'huzi.pk', 'htghuzaifa.huzi.pk'];
const siteLogo = 'https://i.postimg.cc/BvRdbqhD/logo.webp';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s - ${siteTitle}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: 'HTG Huzaifa', url: siteUrl }],
  creator: 'HTG Huzaifa',
  publisher: 'HTG Huzaifa',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    siteName: siteTitle,
    description: siteDescription,
    images: [
      {
        url: siteLogo,
        width: 400,
        height: 400,
        alt: 'HTG Huzaifa Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [siteLogo],
    creator: '@htghuzaifa',
  },
  icons: {
    icon: { url: siteLogo, type: 'image/webp' },
    shortcut: { url: siteLogo, type: 'image/webp' },
    apple: { url: siteLogo, type: 'image/webp' },
  },
  alternates: {
    canonical: siteUrl,
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
