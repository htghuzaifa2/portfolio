"use client"

import { motion } from "framer-motion"
import { Code, Gamepad2, Zap, Cpu } from "lucide-react"
import { NeonCard } from "@/components/ui/neon-card"

export function About() {
    const stats = [
        { icon: <Code className="w-6 h-6 text-neon-cyan" />, label: "Clean Code", value: "100%" },
        { icon: <Gamepad2 className="w-6 h-6 text-neon-purple" />, label: "Gamer Logic", value: "Level 99" },
        { icon: <Zap className="w-6 h-6 text-neon-green" />, label: "Efficiency", value: "Max" },
        { icon: <Cpu className="w-6 h-6 text-white" />, label: "Tech Stack", value: "Modern" },
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            About <span className="text-neon-cyan">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
                    </div>

                    <NeonCard className="p-6 md:p-12 bg-black/60 backdrop-blur-xl border-white/5">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h3 className="text-2xl font-bold flex items-center gap-3">
                                    HTG HUZAIFA
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    Hi, I’m Huzaifa — a developer by day, a gamer by night, and a lifelong learner in between. I build websites and web apps with HTML, CSS, JavaScript, React, and Next.js, turning ideas into smooth, fast, and user-friendly experiences.
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-neon-cyan" /> What I do best:
                                    </h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground pl-6 list-disc marker:text-neon-purple">
                                        <li>Craft clean, responsive designs that actually work on every screen.</li>
                                        <li>Write code that’s not just functional, but efficient and elegant.</li>
                                        <li>Solve problems like they’re puzzles (because coding is gaming with logic 🎮).</li>
                                    </ul>
                                </div>

                                <div className="pt-4">
                                    <h4 className="text-lg font-semibold text-white mb-2">🚀 My mission:</h4>
                                    <p className="text-sm text-muted-foreground italic border-l-2 border-neon-green pl-4 py-1">
                                        Keep creating things that inspire, solve problems, and make people say:
                                        “That’s awesome — how did you build that?”
                                    </p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-neon-cyan/30 transition-colors"
                                    >
                                        <div className="flex justify-center mb-2">{stat.icon}</div>
                                        <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                                        <div className="text-lg font-bold text-white">{stat.value}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </NeonCard>
                </motion.div>
            </div>
        </section>
    )
}
