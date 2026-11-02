"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const terminalLines = [
  { label: "Mentor:", value: "JinoCoder" },
  { label: "Student:", value: "You" },
  { label: "Status:", value: "Training begins" },
];

export function TrainingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1.03]);
  const brightness = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="font-code text-xs text-cyan-primary tracking-widest uppercase mb-4">
              Meet your mentor
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
              Training <span className="gradient-text">Together</span>
            </h2>

            <p className="mt-6 font-sans text-lg text-text-secondary leading-relaxed max-w-xl">
              Every legendary coder once had a mentor. JinoCoder is yours — calm,
              wise, and always ready for the next training battle. Your journey
              from apprentice to expert starts here.
            </p>

            <div className="mt-10 w-full max-w-xl rounded-panel glass-panel border border-border-default p-5 font-code text-sm">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={line.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex items-center gap-2 py-1"
                >
                  <span className="text-cyan-primary">{">"}</span>
                  <span className="text-text-muted">{line.label}</span>
                  <span className="text-text-primary">{line.value}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center gap-2 py-1 text-cyan-primary"
              >
                <span>{">"}</span>
                <span className="animate-pulse">▋</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <Button size="lg" className="group">
                Begin the Journey
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            ref={ref}
            style={{ opacity, y, scale, filter: `brightness(${brightness})` }}
            className="relative"
          >
            <div className="glass-panel rounded-panel border border-border-default overflow-hidden shadow-cyan-glow">
              <Image
                src="/assets/jinocoder and student image.png"
                alt="JinoCoder training his apprentice"
                width={1254}
                height={1254}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
