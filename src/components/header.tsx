'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X } from 'lucide-react'

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
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    }
  }, [hasScrolled, activeLink, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={cn({ 'sticky': hasScrolled })}>
      <a href="/" className="logo">
        <span className="text-gradient">HTG Huzaifa</span>
      </a>
      
      <div className="header-right">
        <nav className={cn('navbar', { 'open': isMenuOpen })}>
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
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
