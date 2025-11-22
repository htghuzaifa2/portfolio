"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import React, { useRef } from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    variant?: "primary" | "secondary" | "outline" | "ghost"
}

export function MagneticButton({ children, className, variant = "primary", ...props }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current!.getBoundingClientRect()

        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)

        x.set(middleX)
        y.set(middleY)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const variants = {
        primary: "bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] border-transparent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
        outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        ghost: "hover:bg-accent hover:text-accent-foreground border-transparent",
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={cn(
                "relative inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props as any}
        >
            {children}
        </motion.button>
    )
}
