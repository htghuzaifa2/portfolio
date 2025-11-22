"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { NeonCard } from "@/components/ui/neon-card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
    {
        title: "E-Commerce Website",
        description: "A full-featured e-commerce platform with modern UI and seamless checkout.",
        tech: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
        link: "https://huzi.pk",
        color: "#00f3ff"
    },
    {
        title: "The Poetry of Allama Iqbal",
        description: "A digital collection of poetry with elegant typography and smooth navigation.",
        tech: ["Next.js", "React", "Tailwind CSS", "Webpack"],
        link: "#",
        color: "#bc13fe"
    },
    {
        title: "Useful Online Tools",
        description: "A suite of utility tools for developers and casual users.",
        tech: ["HTML", "CSS", "JavaScript", "Google Analytics"],
        link: "https://tools.huzi.pk",
        color: "#0aff00"
    },
    {
        title: "Personal Portfolio",
        description: "The website you're looking at right now! Built for speed and style.",
        tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        link: "https://htghuzaifa.huzi.pk",
        color: "#00f3ff"
    },
    {
        title: "WebP Converter",
        description: "Fast and efficient image format converter for web optimization.",
        tech: ["Next.js", "React", "Tailwind CSS", "Radix UI"],
        link: "https://webp.huzi.pk",
        color: "#bc13fe"
    },
    {
        title: "Advanced Web Toolkit",
        description: "Comprehensive toolkit for web development tasks.",
        tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare"],
        link: "https://tool.huzi.pk",
        color: "#0aff00"
    },
    {
        title: "Tech & AI Blogs",
        description: "Educational blog platform focusing on AI and modern tech trends.",
        tech: ["Next.js", "React", "Tailwind CSS", "Open Graph"],
        link: "https://blogs.huzi.pk",
        color: "#00f3ff"
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-neon-purple">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my latest work, side projects, and experiments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <NeonCard glowColor={project.color} className="h-full flex flex-col p-6 group hover:bg-white/5 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-neon-cyan transition-colors">
                                        {project.title}
                                    </h3>
                                    <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>

                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-normal">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </NeonCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
