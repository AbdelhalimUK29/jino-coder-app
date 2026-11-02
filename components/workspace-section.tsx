"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, ShieldCheck, Terminal } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Mentorship",
    description: "Real-time guidance from a legendary anime coding hero.",
  },
  {
    icon: ShieldCheck,
    title: "Boss Fight Debugging",
    description: "Every error is a training battle — defeat glitch beasts.",
  },
  {
    icon: Terminal,
    title: "Live Terminal Experience",
    description: "Compile, refine, and forge your algorithms in one place.",
  },
];

export function WorkspaceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.95, 1.02]);
  const brightness = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="font-code text-xs text-cyan-primary tracking-widest uppercase mb-4">
              Enter the workspace
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
              The <span className="gradient-text">Cyber-Dojo</span> Workspace
            </h2>

            <p className="mt-6 font-sans text-lg text-text-secondary leading-relaxed max-w-xl">
              Step into a futuristic coding environment where AI meets anime.
              JinoCoder transforms your editor into a training ground — glitch
              beasts appear in real time, every bug is a boss fight, and every
              compile is a step toward mastery.
            </p>

            <div className="mt-10 flex flex-col gap-6 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-btn glass-panel border border-cyan-primary/30">
                    <feature.icon className="w-5 h-5 text-cyan-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm text-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            ref={ref}
            style={{ opacity, x, scale, filter: `brightness(${brightness})` }}
            className="relative"
          >
            <div className="glass-panel rounded-panel border border-border-default overflow-hidden shadow-cyan-glow">
              <Image
                src="/assets/futuristic-coding-workspace.jpg"
                alt="Futuristic JinoCoder coding workspace"
                width={1344}
                height={768}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
