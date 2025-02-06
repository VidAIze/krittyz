"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Shield, Sparkles, Code, Gem } from "lucide-react";
import { cn } from "@/lib/utils";
import { ElegantShape } from "@/components/elegant-shape";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02, rotate: 0.5 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-black/[0.03] backdrop-blur-md p-8",
        "transition-all duration-500",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-20">
        <div className="mb-4 inline-flex rounded-full bg-white/[0.05] p-3">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white/90">{title}</h3>
        <p className="text-white/60">{description}</p>
      </div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500" />
    </motion.div>
  );
};

export function FeaturesGrid() {
  const features = [
    {
      title: "Lightning Fast",
      description:
        "Experience blazing fast performance with our optimized infrastructure.",
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Rock Solid Security",
      description:
        "Enterprise-grade security to keep your data safe and sound.",
      icon: <Shield className="w-6 h-6 text-rose-400" />,
      className: "md:col-span-1 md:row-span-2",
    },
    {
      title: "Smart Automation",
      description: "Automate your workflow with intelligent features.",
      icon: <Rocket className="w-6 h-6 text-amber-400" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights with our powerful analytics tools.",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Developer Friendly",
      description:
        "Built with developers in mind, offering extensive API support.",
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Premium Support",
      description: "24/7 dedicated support to help you every step of the way.",
      icon: <Gem className="w-6 h-6 text-violet-400" />,
      className: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Elegant shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.1}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.2}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.15}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need to take your productivity to the next level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
