'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

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
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== hasScrolled) {
        setHasScrolled(isScrolled);
      }
      
      const sections = navLinks.map(link => {
        const href = link.href;
        if (href.startsWith('/#')) {
          return document.getElementById(href.substring(2));
        }
        return null;
      }).filter(Boolean);
      
      let currentSection = '';
      for (const section of sections) {
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = '/#' + section.id;
        }
      }

      if (currentSection && currentSection !== activeLink) {
        setActiveLink(currentSection);
      } else if (!currentSection && window.scrollY < 200) {
        setActiveLink('/#home');
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled, activeLink]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn({ 'sticky': hasScrolled })}>
      <Link href="/#home" className="logo">
        <span className="text-gradient">HTG Huzaifa</span>
      </Link>
      
      <input type="checkbox" id="menu-toggle" checked={isMenuOpen} onChange={toggleMenu} />
      
      <div className="header-right">
        <nav className="navbar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={cn({ active: activeLink === link.href })}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      </div>
    </header>
  )
}

export default Header
