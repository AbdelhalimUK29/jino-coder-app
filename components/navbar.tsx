"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Start Learning", href: "#start-learning" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-border-default/60"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setOpen(false)}
          >
            <Code2 className="w-6 h-6 text-cyan-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-logo text-xl font-bold tracking-[0.2em] gradient-text">
              JINOCODER
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-heading text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm">Enter the Dojo</Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-btn text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors duration-300"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden overflow-hidden border-t border-border-default/60"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-sm text-text-secondary hover:text-text-primary py-2 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button size="md" className="w-full">
                Enter the Dojo
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
