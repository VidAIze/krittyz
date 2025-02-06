"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ElegantShape } from "@/components/elegant-shape";

// Add Toggle Switch Component
const PricingToggle = ({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span
        className={cn(
          "text-sm transition-colors duration-200",
          !isYearly ? "text-white" : "text-white/60"
        )}
      >
        Monthly
      </span>
      <button
        onClick={onToggle}
        className="relative h-7 w-14 rounded-full bg-black/20 backdrop-blur-sm p-1 transition-colors duration-200 border border-white/[0.08] hover:border-white/[0.15]"
      >
        <motion.div
          initial={false}
          animate={{ x: isYearly ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500"
        />
      </button>
      <span
        className={cn(
          "text-sm transition-colors duration-200",
          isYearly ? "text-white" : "text-white/60"
        )}
      >
        Yearly
        <span className="ml-1.5 text-xs py-0.5 px-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-rose-500/10 text-indigo-300">
          Save 20%
        </span>
      </span>
    </div>
  );
};

// Update PricingCard props
interface PricingCardProps {
  title: string;
  price: string;
  yearlyPrice?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  index: number;
  isYearly?: boolean;
}

const PriceDisplay = ({ price, period }: { price: string; period: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1],
    }}
    className="flex items-baseline justify-center gap-1"
  >
    <span className="text-4xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
      {price}
    </span>
    {price !== "Free" && <span className="text-white/60">/{period}</span>}
  </motion.div>
);

// Update SinglePricingCard component
const SinglePricingCard = ({
  title,
  price,
  yearlyPrice = price,
  description,
  features,
  index,
  isYearly = false,
}: PricingCardProps) => {
  const displayPrice = isYearly ? yearlyPrice : price;
  const period = isYearly ? "year" : "month";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
        delay: 0.1,
      }}
      whileHover={{ y: -5 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="relative h-full rounded-3xl border-[1.5px] border-indigo-500/30 shadow-[0_0_30px_-12px_rgba(79,70,229,0.3)] bg-black/[0.03] backdrop-blur-md p-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

        <div className="relative space-y-8">
          {/* Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-3">
                {title}
              </h3>
              <p className="text-white/60 text-lg mb-6">{description}</p>
              <AnimatePresence mode="wait">
                <PriceDisplay
                  key={displayPrice + period}
                  price={displayPrice}
                  period={period}
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Features in two columns */}
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                }}
                className="flex items-center gap-3"
              >
                <div className="flex-none">
                  <div className="p-1 rounded-full bg-white/[0.05]">
                    <Check className="w-4 h-4 text-indigo-400" />
                  </div>
                </div>
                <span className="text-base text-white/60">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button className="w-full rounded-full bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-rose-500/40 text-white hover:from-indigo-500/50 hover:via-fuchsia-500/50 hover:to-rose-500/50 border-white/[0.12] shadow-lg text-lg py-6">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Update PricingCard component similarly
const PricingCard = ({
  title,
  price,
  yearlyPrice = price,
  description,
  features,
  isPopular,
  index,
  isYearly = false,
}: PricingCardProps) => {
  const displayPrice = isYearly ? yearlyPrice : price;
  const period = isYearly ? "year" : "month";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
        delay: 0.1 + index * 0.1,
      }}
      whileHover={{ y: -5 }}
      className="relative pt-4"
    >
      {isPopular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2 + index * 0.1,
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="absolute -top-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-rose-500/10 backdrop-blur-sm border border-white/[0.08] z-10"
        >
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
            Most Popular
          </span>
        </motion.div>
      )}

      <div
        className={cn(
          "relative h-full rounded-3xl border border-white/[0.08] bg-black/[0.03] backdrop-blur-md p-8",
          "group transition-all duration-500 hover:border-white/[0.15] hover:bg-black/[0.06]",
          isPopular &&
            "border-[1.5px] border-indigo-500/30 shadow-[0_0_30px_-12px_rgba(79,70,229,0.3)]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

        <div className="relative space-y-6">
          {/* Header */}
          <div className="text-center pb-6">
            <h3 className="text-xl font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2">
              {title}
            </h3>
            <p className="text-white/60 text-sm mb-4">{description}</p>
            <AnimatePresence mode="wait">
              <PriceDisplay
                key={displayPrice + period}
                price={displayPrice}
                period={period}
              />
            </AnimatePresence>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                }}
                className="flex items-center gap-3"
              >
                <div className="flex-none">
                  <div className="p-1 rounded-full bg-white/[0.05]">
                    <Check className="w-3 h-3 text-indigo-400" />
                  </div>
                </div>
                <span className="text-sm text-white/60">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              className={cn(
                "w-full rounded-full border border-white/[0.08] bg-black/[0.05] backdrop-blur-md",
                "hover:bg-black/[0.15] transition-all duration-300",
                isPopular &&
                  "bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-rose-500/40 text-white hover:from-indigo-500/50 hover:via-fuchsia-500/50 hover:to-rose-500/50 border-white/[0.12] shadow-lg"
              )}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingStyle = process.env.NEXT_PUBLIC_PRICING_STYLE || "full-pricing";

  const calculateYearlyPrice = (monthlyPrice: string) => {
    if (monthlyPrice === "Free") return "Free";
    const monthly = parseInt(monthlyPrice.replace("$", ""));
    const yearly = Math.floor(monthly * 12 * 0.8); // 20% discount
    return `$${yearly}`;
  };

  const singlePlan = {
    title: "Enterprise Plan",
    price: "$99",
    description: "Everything you need for a growing business",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support 24/7",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced security features",
      "Custom branding options",
      "API access",
      "Team collaboration tools",
    ],
  };

  const fullPricingPlans = [
    {
      title: "Starter",
      price: "Free",
      yearlyPrice: "Free",
      description: "Perfect for trying out our platform",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "24/7 support",
        "Community access",
      ],
    },
    {
      title: "Pro",
      price: "$29",
      yearlyPrice: "$278", // ~20% discount
      description: "Everything you need for professional work",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Custom domains",
        "Team collaboration",
        "Advanced security",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      yearlyPrice: "$950", // ~20% discount
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Advanced permissions",
        "Custom branding",
      ],
    },
  ];

  const headerText = {
    full: {
      title: "Simple, Transparent Pricing",
      description: "Choose the perfect plan for your needs. No hidden fees.",
    },
    partial: {
      title: "One Simple Plan",
      description: "Everything you need to scale your business. No complexity.",
    },
  };

  const { title, description } =
    pricingStyle === "full-pricing" ? headerText.full : headerText.partial;

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
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

      <div className="container relative z-10 mx-auto px-4 py-20">
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
            {title}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {description}
          </p>
          {pricingStyle === "full-pricing" && (
            <PricingToggle
              isYearly={isYearly}
              onToggle={() => setIsYearly(!isYearly)}
            />
          )}
        </motion.div>

        {pricingStyle === "full-pricing" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {fullPricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.title}
                {...plan}
                index={index}
                isYearly={isYearly}
              />
            ))}
          </div>
        ) : (
          <SinglePricingCard {...singlePlan} index={0} isYearly={false} />
        )}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
