'use client'

import * as React from 'react'
import { Moon, Sun, Sparkles } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme()

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      <Sun className="h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all dark:hidden light:block neon:hidden" />
      <Moon className="h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all dark:block dark:rotate-0 dark:scale-100 light:hidden neon:hidden" />
      <Sparkles className="h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all neon:block neon:rotate-0 neon:scale-100 dark:hidden light:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
