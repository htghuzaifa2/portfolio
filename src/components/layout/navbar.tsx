"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MagneticButton } from "@/components/ui/magnetic-button"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tighter group relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50 group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-300">
                            HTG HUZAIFA
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-neon-cyan transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Link href="https://huzi.pk" target="_blank">
                            <MagneticButton variant="outline" className="ml-4 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10">
                                SHOP
                            </MagneticButton>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-white block rounded-full transition-colors duration-300"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-8 h-0.5 bg-neon-cyan block rounded-full transition-colors duration-300"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-white block rounded-full transition-colors duration-300"
                        />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-black/95 backdrop-blur-2xl border-l border-white/10 md:hidden shadow-[-10px_0_30px_rgba(0,243,255,0.1)]"
                        >
                            <div className="flex flex-col h-full p-6 pt-24">
                                <div className="flex flex-col gap-4">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 300, damping: 24 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block group relative overflow-hidden rounded-xl"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="relative p-4 border border-white/5 rounded-xl bg-white/5 group-hover:border-neon-cyan/30 transition-colors duration-300 flex items-center justify-between">
                                                    <span className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{item.name}</span>
                                                    <motion.span
                                                        initial={{ x: -10, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        →
                                                    </motion.span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-auto mb-8"
                                >
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-white/10 text-center space-y-4 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-transparent to-neon-purple/20 animate-pulse" />
                                        <h3 className="text-white font-bold relative z-10">Ready to collaborate?</h3>
                                        <Link href="https://huzi.pk" target="_blank" className="block relative z-10">
                                            <MagneticButton className="w-full bg-neon-cyan text-black font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] border-none">
                                                VISIT SHOP
                                            </MagneticButton>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
