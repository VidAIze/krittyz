"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

interface FloatingNavbarProps {
  className?: string;
}

export function FloatingNavbar({ className }: FloatingNavbarProps) {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  // Transform values based on scroll
  const height = useTransform(scrollY, [0, 100], ["4rem", "3.5rem"]);
  const padding = useTransform(scrollY, [0, 100], ["1.5rem", "1rem"]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed top-6 inset-x-0 flex justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -150, rotate: -15 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          duration: 2.4,
          delay: 0.2,
          ease: [0.23, 0.86, 0.39, 0.96],
          opacity: { duration: 1.2 },
        }}
        style={{ scale }}
        className={cn("w-full max-w-6xl", className)}
      >
        <motion.div
          className="flex items-center justify-between rounded-full border border-white/[0.08] bg-black/[0.03] backdrop-blur-md"
          style={{
            height,
            paddingLeft: padding,
            paddingRight: padding,
          }}
        >
          {/* Logo Section */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/1f609.webp"
                alt="Krittyz Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span
                className={cn(
                  pacifico.className,
                  "text-2xl font-semibold text-white/90"
                )}
              >
                Krittyz
              </span>
            </Link>
          </motion.div>

          {/* Middle Content */}
          <nav className="hidden md:flex items-center gap-6">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/features"
                className="text-sm text-white/70 hover:text-white/90 transition-colors"
              >
                Features
              </Link>
            </motion.div>
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/pricing"
                className="text-sm text-white/70 hover:text-white/90 transition-colors"
              >
                Pricing
              </Link>
            </motion.div>
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/about"
                className="text-sm text-white/70 hover:text-white/90 transition-colors"
              >
                About
              </Link>
            </motion.div>
          </nav>

          {/* Get Started Button */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <Button className="rounded-full bg-gradient-to-b from-neutral-800 to-neutral-900 text-white hover:from-neutral-700 hover:to-neutral-800 border border-white/[0.08] shadow-lg transition-all duration-300">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
