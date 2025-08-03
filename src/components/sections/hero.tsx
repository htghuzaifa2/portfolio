'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Mail } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full">
      <div className="container mx-auto flex h-full items-center justify-center px-4 md:px-6">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="fade-in-up">
            <Image
              src="https://i.postimg.cc/BvRdbqhD/logo.webp"
              alt="HTG Huzaifa Logo"
              width={150}
              height={150}
              priority
              className="mb-6 rounded-full border-4 border-primary/50 shadow-lg"
            />
          </div>
          <h1 className="fade-in-up font-headline text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: '0.2s' }}>
            HTG <span className="text-primary">Huzaifa</span>
          </h1>
          <p className="fade-in-up mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl" style={{ animationDelay: '0.4s' }}>
            A passionate developer crafting beautiful and functional web experiences. I turn ideas into interactive realities.
          </p>
          <div className="fade-in-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild>
              <Link href="/portfolio">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-grid-white/[0.05] dark:bg-grid-black/[0.1]"></div>
    </section>
  )
}

export default HeroSection
