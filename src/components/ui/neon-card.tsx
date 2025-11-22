"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import React, { MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface NeonCardProps {
    children: React.ReactNode
    className?: string
    glowColor?: string
}

export function NeonCard({ children, className, glowColor = "#00f3ff" }: NeonCardProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()

        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            className={cn(
                "group relative border border-white/10 bg-black/40 overflow-hidden rounded-xl",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Mouse Follow Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${glowColor}33,
              transparent 80%
            )
          `,
                }}
            />

            {/* Ambient Auto-Glow (Visible on Mobile/Tablet) */}
            <div
                className="absolute inset-0 opacity-20 md:opacity-0 md:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`
                }}
            />

            {/* Border Glow Animation */}
            <div className="absolute inset-0 rounded-xl opacity-20 md:opacity-0 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,white_360deg)] animate-spin-slow opacity-30" style={{ animationDuration: '4s' }} />
            </div>

            <div className="relative h-full z-20">{children}</div>
        </div>
    )
}
