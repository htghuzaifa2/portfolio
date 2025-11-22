"use client"

import { motion } from "framer-motion"
import { NeonCard } from "@/components/ui/neon-card"

const skills = [
    "React", "Next.js", "TypeScript", "JavaScript",
    "Tailwind CSS", "shadcn/ui", "Radix UI", "HTML",
    "CSS", "Framer Motion", "Webpack", "Cloudflare",
    "Vercel", "AI Integration", "Creative AI Solutions", "Passionate Gamer"
]

export function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        My <span className="text-neon-green">Skills</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div
                                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm 
                           hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] 
                           transition-all duration-300 cursor-default group"
                            >
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                                    {skill}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-transparent to-neon-purple/20 blur-3xl" />
                </div>
            </div>
        </section>
    )
}
