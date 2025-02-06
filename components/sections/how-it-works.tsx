"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Rocket, Zap } from "lucide-react";
import { useRef } from "react";
import { ElegantShape } from "@/components/elegant-shape";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  index: number;
  isInView: boolean;
}

const StepCard = ({
  step,
  title,
  description,
  icon,
  isLast,
  index,
  isInView,
}: StepCardProps) => {
  const animationDelay = 0.1 + index * 0.15; // Reduced delay

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
        delay: animationDelay,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
        delay: animationDelay,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.4, 0.25, 1],
        delay: animationDelay + 0.3,
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-start gap-6 md:gap-8 mb-12"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Step Number with Glow */}
      <motion.div variants={numberVariants} className="relative flex-none">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-black/[0.08] backdrop-blur-md">
          <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-xl font-bold text-transparent">
            {step}
          </span>
        </div>
        <div className="absolute -inset-3">
          <div className="h-full w-full rounded-full bg-indigo-500/20 blur-lg" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-full bg-white/[0.05]">{icon}</div>
          <h3 className="text-xl font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        <p className="text-white/60 max-w-lg">{description}</p>
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <motion.div
          variants={lineVariants}
          className="absolute left-7 top-14 w-[2px] bg-gradient-to-b from-white/[0.08] to-transparent"
        />
      )}
    </motion.div>
  );
};

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: "Sign Up Instantly",
      description:
        "Get started in seconds with our seamless onboarding process. No credit card required.",
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Configure Your Workspace",
      description:
        "Customize your environment with our intuitive setup wizard. Choose your preferences and tools.",
      icon: <Zap className="w-5 h-5 text-rose-400" />,
    },
    {
      title: "Launch Your Project",
      description:
        "Deploy your project with a single click. Watch your ideas come to life instantly.",
      icon: <Rocket className="w-5 h-5 text-amber-400" />,
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
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Get started in three simple steps and transform your workflow
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={index + 1}
              {...step}
              isLast={index === steps.length - 1}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
