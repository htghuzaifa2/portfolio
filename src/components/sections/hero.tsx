"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import Link from "next/link"

export function Hero() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.1),transparent_50%)]" />

                {/* Animated Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-neon-purple/20 rounded-full blur-[80px] md:blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -30, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-neon-green/10 rounded-full blur-[60px] md:blur-[80px]"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative inline-block"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur opacity-20 animate-pulse" />
                        <motion.div
                            style={{ y: y2 }}
                            className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                            <span className="text-xs font-medium text-muted-foreground">Available for new projects</span>
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                        <motion.span
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            HTG Huzaifa – Full-Stack Developer
                        </motion.span>
                        <br />
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            & Creative Technologist
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        I craft intelligent, user-friendly web experiences and build powerful tools with a focus on modern AI-driven solutions.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href="#projects">
                            <MagneticButton className="h-12 px-8 text-base bg-white text-black hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all duration-300">
                                View Projects <ArrowRight className="ml-2 w-4 h-4" />
                            </MagneticButton>
                        </Link>

                        <Link href="https://wa.me/923251480148" target="_blank">
                            <MagneticButton variant="outline" className="h-12 px-8 text-base border-white/20 hover:border-neon-purple hover:text-neon-purple">
                                Contact Me
                            </MagneticButton>
                        </Link>
                    </motion.div>


                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <div className="w-1 h-2 bg-neon-cyan rounded-full" />
                </div>
            </motion.div>
        </section>
    )
}
