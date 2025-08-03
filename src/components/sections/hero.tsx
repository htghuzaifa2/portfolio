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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
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
