
'use client'

import * as React from 'react'
import { Moon, Sun, Sparkles } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Ensure 'dark' is a valid theme before finding its index
    const currentTheme = themes.includes(theme) ? theme : 'dark';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  if (!mounted) {
    // Render a placeholder or null on the server and initial client render
    return <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled />
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' && <Sun className="h-[1.8rem] w-[1.8rem] transition-all" />}
      {theme === 'dark' && <Moon className="h-[1.8rem] w-[1.8rem] transition-all" />}
      {theme === 'neon' && <Sparkles className="h-[1.8rem] w-[1.8rem] transition-all" />}
    </Button>
  )
}
