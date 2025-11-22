
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const calculateScrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;

        if (winHeightPx > 0) {
            setScrollProgress(scrollPx / winHeightPx);
        } else {
            setScrollProgress(0);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        window.addEventListener("scroll", calculateScrollProgress);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("scroll", calculateScrollProgress);
        };
    }, []);

    const circumference = 2 * Math.PI * 20; // 2 * PI * radius

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background/60 text-primary shadow-lg backdrop-blur-sm transition-opacity duration-300 hover:bg-background/90 focus:outline-none",
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            <svg
                className="h-12 w-12"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="hsl(var(--border))"
                    strokeWidth="3"
                />
                <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - scrollProgress)}
                    className="rotate-[-90deg] origin-center transition-all duration-300 ease-linear"
                />
            </svg>
            <ArrowUp className="absolute h-6 w-6" />
        </button>
    );
}
