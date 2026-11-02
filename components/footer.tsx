"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, AtSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Start Learning", href: "#start-learning" },
];

const socialLinks = [
  { label: "GitHub", href: "#", icon: Globe },
  { label: "Twitter", href: "#", icon: AtSign },
  { label: "Discord", href: "#", icon: MessageCircle },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative border-t border-border-default/60 glass-panel"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-cyan-primary" />
              <span className="font-logo text-xl font-bold tracking-[0.2em] gradient-text">
                JINOCODER
              </span>
            </Link>
            <p className="mt-4 font-sans text-sm text-text-muted leading-relaxed max-w-xs">
              The anime coding dojo for the modern apprentice.
            </p>
            <p className="mt-6 font-code text-xs text-text-disabled">
              © 2026 JinoCoder. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-text-primary">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 h-px w-full bg-border-default/60" />
            <p className="mt-6 font-code text-xs text-cyan-primary">
              {">"} support@jinocoder.dev
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-text-primary">
              Ready?
            </h3>
            <p className="mt-4 font-sans text-sm text-text-muted leading-relaxed max-w-xs">
              Your training begins the moment you step in.
            </p>
            <div className="mt-6">
              <Button size="md">Enter the Dojo</Button>
            </div>
            <p className="mt-6 font-code text-xs text-text-muted">
              {">"} Follow us for updates
            </p>
            <div className="mt-3 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-btn border border-border-default text-text-muted hover:text-cyan-primary hover:border-cyan-primary/60 transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
