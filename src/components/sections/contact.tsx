"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NeonCard } from "@/components/ui/neon-card"
import Link from "next/link"

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-neon-cyan">Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <NeonCard className="p-8 md:p-10 bg-black/60 backdrop-blur-xl text-center">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-2">
                                <Send className="w-8 h-8 text-neon-green" />
                            </div>

                            <h3 className="text-2xl font-bold text-white">Let's Chat!</h3>
                            <p className="text-muted-foreground max-w-md">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>

                            <Link href="https://wa.me/923251480148" target="_blank" className="w-full max-w-sm">
                                <MagneticButton className="w-full h-14 text-lg bg-[#25D366] text-white hover:bg-[#25D366]/90 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] border-none">
                                    Chat on WhatsApp <Send className="ml-2 w-5 h-5" />
                                </MagneticButton>
                            </Link>
                        </div>
                    </NeonCard>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-24 text-center text-sm text-muted-foreground pb-8">
                <p>© 2025 HTG Huzaifa. All rights reserved.</p>
            </footer>
        </section>
    )
}
