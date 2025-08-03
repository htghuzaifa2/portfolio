'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Youtube, Instagram } from 'lucide-react'
import Link from 'next/link'

const TypingEffect = () => {
    const [typedText, setTypedText] = useState('')
    const words = ["The Only Person.", "Who Destroy", "Faizi in FF.", "HTG HUZAIFA", "THE GOAT OF ALL TIME"];
    
    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                setTypedText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypedText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        };

        const typingInterval = setInterval(type, isDeleting ? 80 : 120);

        return () => clearInterval(typingInterval);
    }, []);

    return <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent [text-shadow:0_0_15px_hsl(var(--secondary)/0.8)]">{typedText}</span>
}


const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-[9%] py-24 pt-40">
       <div className="home container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 text-center md:text-left">
        <div className="home-content z-10 flex-1 flex flex-col items-center md:items-start animate-on-load" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 [text-shadow:0_0_10px_hsl(var(--primary)/0.7)]">
            Hi, It's <span className="text-primary">HTG Huzaifa</span>
          </h1>
          <h3 className="typing-text text-4xl sm:text-5xl font-bold min-h-[4rem] mb-8">
            I'm a <TypingEffect />
          </h3>
          <p className="text-lg leading-relaxed mb-10 max-w-2xl p-6 bg-white/5 border-l-4 border-primary rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:-translate-y-1 hover:scale-105">
            The path isn't always clear, but the journey itself reveals who you're meant to be. I embrace the unfolding.
          </p>
          <div className="social-icons mb-12 flex gap-4 animate-on-load" style={{ animationDelay: '0.6s' }}>
            <a href="https://wa.me/923251480148" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-16 h-16 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-3xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-2 hover:scale-125 hover:bg-primary hover:shadow-[0_0_30px_hsl(var(--primary)),0_0_60px_hsl(var(--primary)/0.7)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
            <a href="#" aria-label="Discord" className="w-16 h-16 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-3xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-2 hover:scale-125 hover:bg-primary hover:shadow-[0_0_30px_hsl(var(--primary)),0_0_60px_hsl(var(--primary)/0.7)]">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc-3"><path d="M5.2 3.8A10 10 0 1 0 18 20a10 10 0 0 0-12.8-16.2Z"/><circle cx="12" cy="12" r="2"/><path d="M12 14a2 2 0 1 0 0-4"/><path d="M12 12a4 4 0 1 1-4-4"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-16 h-16 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-3xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-2 hover:scale-125 hover:bg-primary hover:shadow-[0_0_30px_hsl(var(--primary)),0_0_60px_hsl(var(--primary)/0.7)]">
              <Youtube />
            </a>
            <a href="#" aria-label="Instagram" className="w-16 h-16 inline-flex justify-center items-center bg-transparent border-2 border-primary text-primary text-3xl rounded-full transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:text-black hover:-translate-y-2 hover:scale-125 hover:bg-primary hover:shadow-[0_0_30px_hsl(var(--primary)),0_0_60px_hsl(var(--primary)/0.7)]">
              <Instagram />
            </a>
          </div>
           <Button asChild size="lg" className="btn-ripple relative overflow-hidden inline-block py-6 px-16 bg-gradient-to-r from-primary to-secondary rounded-full text-lg text-black tracking-wider font-semibold border-2 border-primary transition-all duration-500 ease-in-out cursor-pointer shadow-[0_0_15px_hsl(var(--primary)/0.6)] z-10 hover:scale-110 hover:bg-black hover:text-primary hover:shadow-[0_0_35px_hsl(var(--primary)),_0_0_70px_hsl(var(--primary)/0.9)] hover:border-secondary animate-on-load" style={{ animationDelay: '0.8s' }}>
              <Link href="/#portfolio">
                <span className="relative z-20 flex items-center">View Websites <ArrowRight className="ml-2 h-5 w-5" /></span>
              </Link>
            </Button>
        </div>
        <div className="home-img z-10 flex-1 flex justify-center items-center p-8 animate-on-load" style={{ animationDelay: '0.4s' }}>
           <Image
              src="https://i.postimg.cc/BvRdbqhD/logo.webp"
              alt="HTG Huzaifa Logo"
              width={400}
              height={400}
              priority
              className="w-[75vw] md:w-[32vw] min-w-[280px] max-w-[450px] rounded-full border-4 border-primary shadow-[0_0_30px_hsl(var(--primary))] animate-[pulse_2.5s_infinite_alternate_ease-in-out] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:[animation-play-state:paused] hover:shadow-[0_0_45px_hsl(var(--primary)),_0_0_90px_hsl(var(--primary)/0.9)]"
            />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
