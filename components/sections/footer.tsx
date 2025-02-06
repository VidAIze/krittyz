"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Github, Twitter } from "lucide-react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Blog", href: "#blog" },
    { name: "Changelog", href: "#changelog" },
    { name: "Roadmap", href: "#roadmap" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "License", href: "#license" },
  ],
};

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#030303] border-t border-white/[0.08]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,#030303,transparent)]" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
            className="lg:col-span-4"
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
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
            <p className="text-white/60 text-sm max-w-sm">
              Empowering developers with intelligent tools and seamless
              workflows for enhanced productivity.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="#github"
                className="p-2 rounded-full border border-white/[0.08] bg-black/[0.08] backdrop-blur-md text-white/60 hover:text-white hover:border-white/[0.15] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#twitter"
                className="p-2 rounded-full border border-white/[0.08] bg-black/[0.08] backdrop-blur-md text-white/60 hover:text-white hover:border-white/[0.15] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-8">
            {/* Product Links */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={footerVariants}
            >
              <h3 className="font-medium text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={footerVariants}
            >
              <h3 className="font-medium text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={footerVariants}
            >
              <h3 className="font-medium text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="mt-16 pt-8 border-t border-white/[0.08]"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Krittyz. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#privacy"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export { Footer };
