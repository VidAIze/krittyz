"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ElegantShape } from "@/components/elegant-shape";

const integrationIcons = [
  { name: "Claude", icon: "/icons/claude.svg", invert: false },
  { name: "Cursor", icon: "/icons/cursor.svg", invert: true },
  { name: "DeepSeek", icon: "/icons/deepseek.svg", invert: false },
  { name: "Gemini", icon: "/icons/gemini.svg", invert: false },
  { name: "Anthropic", icon: "/icons/anthropic.svg", invert: true },
  { name: "Fireworks", icon: "/icons/fireworks.svg", invert: true },
  { name: "Grok", icon: "/icons/grok.svg", invert: true },
  { name: "LangChain", icon: "/icons/langchain.svg", invert: false },
  { name: "LobeHub", icon: "/icons/lobehub.svg", invert: false },
  { name: "LM Studio", icon: "/icons/lmstudio.svg", invert: true },
  { name: "OpenAI", icon: "/icons/openai.svg", invert: true },
  { name: "Replit", icon: "/icons/replit.svg", invert: false },
  { name: "Vercel", icon: "/icons/vercel.svg", invert: true },
  { name: "V0", icon: "/icons/v0.svg", invert: true },
];

interface MarqueeGroupProps {
  items: typeof integrationIcons;
  direction?: "left" | "right";
  speed?: number;
}

const MarqueeGroup = ({
  items,
  direction = "left",
  speed = 40,
}: MarqueeGroupProps) => {
  // Triple the items to ensure smooth infinite scroll
  const tripleItems = [...items, ...items, ...items];

  return (
    <div
      className={`flex gap-6 ${
        direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
      }`}
      style={{ animationDuration: `${speed}s` }}
    >
      {tripleItems.map((item, idx) => (
        <motion.div
          key={`${item.name}-${idx}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
            delay: Math.random() * 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          className="relative flex-shrink-0 group"
        >
          <div className="relative h-20 w-20 rounded-2xl border border-white/[0.08] bg-black/[0.08] backdrop-blur-md p-4 transition-all duration-300 group-hover:border-white/[0.15] group-hover:bg-black/[0.12]">
            <Image
              src={item.icon}
              alt={item.name}
              width={48}
              height={48}
              className={`w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity ${
                item.invert ? "invert" : ""
              }`}
            />
          </div>
          <div
            className={`absolute ${
              direction === "right" ? "-top-8" : "-bottom-8"
            } left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            <span className="text-sm text-white/60 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export function IntegrationsSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
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
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
              Powerful Integrations
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Connect with your favorite tools and services seamlessly
            </p>
          </motion.div>
        </div>

        {/* Marquee Container with Full Width */}
        <div className="relative w-full overflow-hidden">
          {/* Strong Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[25%] bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

          {/* Secondary Gradient Masks for Smoother Transition */}
          <div className="absolute left-[20%] top-0 bottom-0 w-[10%] bg-gradient-to-r from-transparent via-[#030303]/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-[20%] top-0 bottom-0 w-[10%] bg-gradient-to-l from-transparent via-[#030303]/10 to-transparent z-10 pointer-events-none" />

          {/* Marquee Content */}
          <div className="flex flex-col gap-12 mx-[-100%] w-[300%]">
            <div className="flex">
              <MarqueeGroup
                items={integrationIcons}
                direction="left"
                speed={35}
              />
            </div>
            <div className="flex">
              <MarqueeGroup
                items={integrationIcons}
                direction="right"
                speed={30}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
