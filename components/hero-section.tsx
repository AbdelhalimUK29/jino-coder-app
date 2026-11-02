"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-purple-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[30%] right-[10%] w-96 h-96 rounded-full bg-cyan-primary/10 blur-[150px] animate-pulse" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-primary/30 bg-cyan-primary/5 px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-primary" />
              <span className="font-heading text-xs text-cyan-primary tracking-wide">
                AI-Powered &bull; Anime Mentor &bull; Zero Setup
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text-primary"
            >
              Welcome to the{" "}
              <span className="gradient-text">Cyber-Dojo</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 font-sans text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              Train with JinoCoder, your legendary anime coding mentor. Forge
              your skills through boss fights, debug the glitch beasts, and
              compile glory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button size="lg" className="group">
                Begin Your Training
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Meet JinoCoder
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-panel rounded-panel border border-border-default overflow-hidden shadow-cyan-glow">
              <Image
                src="/assets/hero-section.jpg"
                alt="JinoCoder cyber-dojo hero workspace"
                width={1344}
                height={768}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
