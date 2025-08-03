'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
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

      if (currentSection !== activeLink) {
        setActiveLink(currentSection || '/#home');
      }
    }

    window.addEventListener('scroll', handleScroll);
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
      <Link href="/#home" className="logo">HTG Huzaifa</Link>
      
      <input type="checkbox" id="menu-toggle" checked={isMenuOpen} onChange={toggleMenu} />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

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
    </header>
  )
}

export default Header
