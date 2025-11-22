import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "HTG Huzaifa",
  description: "Full-Stack Developer crafting intelligent, AI-powered web apps and stunning digital experiences. Explore my projects, skills, and creative tech journey.",
  keywords: [
    "HTG Huzaifa",
    "Huzi",
    "Full Stack Developer Pakistan",
    "Creative Technologist",
    "Next.js Developer",
    "AI Developer",
    "Firebase Developer",
    "Web Developer Portfolio",
    "Pakistan Developer"
  ],
  authors: [{ name: "HTG Huzaifa" }],
  creator: "HTG Huzaifa",
  publisher: "HTG Huzaifa",
  metadataBase: new URL("https://htghuzaifa.huzi.pk"),
  alternates: {
    canonical: "https://htghuzaifa.huzi.pk",
  },
  openGraph: {
    title: "HTG Huzaifa – Full-Stack Developer & Creative Technologist",
    description: "I build intelligent, fast, and AI-driven web experiences. Explore my projects, skills, and creative journey.",
    url: "https://htghuzaifa.huzi.pk",
    siteName: "HTG Huzaifa",
    type: "website",
    images: [
      {
        url: "https://htghuzaifa.huzi.pk/preview.jpg",
        width: 1200,
        height: 630,
        alt: "HTG Huzaifa Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTG Huzaifa – Full-Stack Developer & Creative Technologist",
    description: "Building AI-powered web tools and stunning digital experiences.",
    images: ["https://htghuzaifa.huzi.pk/preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "HTG Huzaifa",
              "url": "https://htghuzaifa.huzi.pk",
              "image": "https://htghuzaifa.huzi.pk/profile.jpg",
              "jobTitle": "Full-Stack Developer & Creative Technologist",
              "description": "I build modern, AI-driven web experiences using Next.js, Firebase, and Cloudflare.",
              "worksFor": {
                "@type": "Organization",
                "name": "Independent Developer"
              }
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
