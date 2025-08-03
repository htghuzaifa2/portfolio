'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'

const TypingEffect = () => {
    const [typedText, setTypedText] = useState('')
    const words = [
        "Web Developer Specialist",
        "SEO Optimization Expert",
        "Website Performance & Responsiveness Expert",
        "E-Commerce website builder Expert",
        "next-js react sattics sites Expert"
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
              width={200}
              height={200}
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
          <div className="social-icons animate-on-load">
            <a href="https://wa.me/923251480148" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.75 13.96c.25.13.41.2.52.34.11.14.15.42.06.64-.09.22-.44.54-1.13.91-.69.37-1.35.58-2.31.58-.96 0-1.81-.19-2.53-.58-.72-.39-1.32-.9-1.79-1.52-.47-.62-.82-1.34-1.04-2.16-.22-.82-.33-1.68-.33-2.58 0-.9.11-1.74.33-2.52.22-.78.56-1.47 1.02-2.06.46-.59 1.05-1.07 1.76-1.43.71-.36 1.48-.54 2.31-.54.83 0 1.6.18 2.31.54.71.36 1.29.87 1.76 1.43.47.56.82 1.24 1.04 2.02.22.78.33 1.6.33 2.46 0 .86-.11 1.67-.34 2.44-.23.77-.57 1.44-1.02 2.02zM12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zm0 18.13c-.96 0-1.89-.16-2.78-.47l-3.22.85.87-3.12c-.4-.93-.62-1.95-.62-3.02 0-4.4 3.55-7.95 7.95-7.95s7.95 3.55 7.95 7.95-3.55 7.95-7.95 7.95z"/></svg>
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
