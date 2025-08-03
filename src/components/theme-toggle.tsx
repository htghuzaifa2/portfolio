
'use client'

import * as React from 'react'
import { Moon, Sun, Sparkles } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme()

  const toggleTheme = () => {
    // Ensure 'dark' is a valid theme before finding its index
    const currentTheme = themes.includes(theme) ? theme : 'dark';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' && <Sun className="h-[1.8rem] w-[1.8rem] transition-all" />}
      {theme === 'dark' && <Moon className="h-[1.8rem] w-[1.8rem] transition-all" />}
      {theme === 'neon' && <Sparkles className="h-[1.8rem] w-[1.8rem] transition-all" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
