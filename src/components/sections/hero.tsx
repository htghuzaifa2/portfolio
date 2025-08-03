'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'

const TypingEffect = () => {
    const [typedText, setTypedText] = useState('')
    const words = [
        "Web Developer",
        "SEO Optimization",
        "Website Performance & Responsiveness",
        "E-Commerce website builder",
        "next-js react sattics sites"
    ];
    
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

    return <span className="typed-text">{typedText}</span>
}


const HeroSection = () => {
  return (
    <section id="home" className="home">
       <div className="home-img animate-on-load">
           <Image
              src="https://i.postimg.cc/BvRdbqhD/logo.webp"
              alt="HTG Huzaifa Logo"
              width={400}
              height={400}
              priority
            />
        </div>
        <div className="home-content animate-on-load">
          <h1>
            Hi, It's <span>HTG Huzaifa</span>
          </h1>
          <h3 className="typing-text-container">
            I'm a&nbsp;<TypingEffect />
          </h3>
          <p className="description-text">
            The path isn't always clear, but the journey itself reveals who you're meant to be. I embrace the unfolding.
          </p>
          <div className="social-icons animate-on-load">
            <a href="https://wa.me/923251480148" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            </a>
            <a href="#" aria-label="Discord">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc-3"><path d="M5.2 3.8A10 10 0 1 0 18 20a10 10 0 0 0-12.8-16.2Z"/><circle cx="12" cy="12" r="2"/><path d="M12 14a2 2 0 1 0 0-4"/><path d="M12 12a4 4 0 1 1-4-4"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
           <Link href="/#portfolio" className="btn animate-on-load">
                <span>View Websites</span>
            </Link>
        </div>
    </section>
  )
}

export default HeroSection
