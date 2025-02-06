"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ElegantShape } from "@/components/elegant-shape";

export function CTASection() {
  return (
    <div className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Elegant shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="relative rounded-3xl border border-white/[0.08] bg-black/[0.08] backdrop-blur-md p-12 md:p-16 overflow-hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-indigo-500/30 blur-[120px] rounded-full" />
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-rose-500/30 blur-[120px] rounded-full" />

            <div className="relative text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 border border-white/[0.08]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  <span className="text-sm text-white/80">
                    Get Started Today
                  </span>
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mt-6 mb-4"
              >
                Ready to Transform Your Workflow?
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="text-lg text-white/60 mb-8 max-w-2xl mx-auto"
              >
                Join thousands of developers who are already using our platform
                to build amazing things
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <Button
                  className={cn(
                    "px-8 py-6 text-lg rounded-full",
                    "bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-rose-500/40",
                    "hover:from-indigo-500/50 hover:via-fuchsia-500/50 hover:to-rose-500/50",
                    "text-white border border-white/[0.12] shadow-lg",
                    "transition-all duration-300",
                    "font-medium"
                  )}
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
