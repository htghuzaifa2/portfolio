'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#portfolio', label: 'Websites' },
  { href: '/#contact', label: 'Contact us' },
]

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/#home')

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
      
      const sections = navLinks.map(link => document.getElementById(link.href.substring(2)));
      let currentSection = '';

      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = '/#' + section.id;
        }
      });

      setActiveLink(currentSection || '/#home');
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300 px-4 md:px-[9%]',
        hasScrolled ? 'bg-[rgba(0,0,0,0.8)] shadow-lg backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-[3.2rem] text-primary font-extrabold cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 hover:text-secondary [text-shadow:0_0_5px_hsl(var(--primary)/0.5)] hover:[text-shadow:0_0_10px_hsl(var(--secondary))]">
          HTG Huzaifa
        </Link>
        <div className="md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-4xl cursor-pointer z-[1001] transition-transform duration-300 ease-in-out"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="rotate-90" /> : <Menu />}
            </button>
        </div>

        <nav className={cn(
          'hidden md:flex items-center gap-16',
          'md:static md:w-auto md:p-0 md:bg-transparent md:flex-row',
          isMenuOpen 
            ? 'fixed top-20 right-0 w-[65%] h-auto flex-col items-center bg-[#161616] border-l-3 border-b-3 border-primary rounded-bl-2xl p-8 transition-all duration-300 ease-in-out'
            : 'hidden'
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={cn(
                "relative text-lg font-medium text-white transition-colors duration-300 ease-in-out border-b-3 border-transparent pb-2",
                "before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-0 before:bg-primary before:visibility-hidden before:transition-all before:duration-300 before:ease-in-out",
                "hover:text-primary hover:before:visibility-visible hover:before:w-full",
                activeLink === link.href && "text-primary before:visibility-visible before:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {isMenuOpen && (
            <nav className="md:hidden absolute top-full right-0 w-[65%] bg-[#161616] border-l-2 border-b-2 border-primary rounded-bl-2xl flex flex-col items-center p-4 transition-all duration-400 ease-in-out">
                 {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={cn("block text-2xl my-3 py-2 px-4 w-full text-center hover:bg-primary hover:text-black rounded-md", activeLink === link.href ? "bg-primary text-black" : "text-white")}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        )}

      </div>
    </header>
  )
}

export default Header
