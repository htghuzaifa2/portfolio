'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'

const TypingEffect = () => {
    const [typedText, setTypedText] = useState('')
    const words = [
        "Web Developer",
        "SEO Expert",
        "Performance Specialist",
        "E-Commerce Builder",
        "Next.js Developer"
    ];
    
    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

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
                timeoutId = setTimeout(() => {
                  isDeleting = true;
                  requestAnimationFrame(type);
                }, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                timeoutId = setTimeout(() => {
                  requestAnimationFrame(type);
                }, 300);
            } else {
               timeoutId = setTimeout(() => {
                 requestAnimationFrame(type);
               }, isDeleting ? 60 : 100);
            }
        };

        requestAnimationFrame(type)

        return () => clearTimeout(timeoutId);
    }, []);

    return <span className="typed-text text-gradient">{typedText}</span>
}


const HeroSection = () => {
  return (
    <section id="home" className="home animate-on-load">
       <div className="home-img">
           <Image
              src="https://i.postimg.cc/BvRdbqhD/logo.webp"
              alt="HTG Huzaifa Portfolio Logo"
              width={200}
              height={200}
              priority
            />
        </div>
        <div className="home-content">
          <h1>
            Hi, I'm <span className="text-gradient">HTG Huzaifa</span>
          </h1>
          <h3 className="typing-text-container">
            I'm a&nbsp;<TypingEffect />
          </h3>
          <div className="button-group">
            <Link href="/#portfolio" className="btn">
                  <span>View Websites</span>
            </Link>
            <a href="https://wa.me/923251480148" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-rgb-animated">
                  <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
