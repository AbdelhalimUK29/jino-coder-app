"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Code2, Swords, Trophy, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Code2,
    title: "Enter the Dojo",
    description:
      "Create your account, pick your language, and step into the terminal. JinoCoder is already waiting.",
  },
  {
    number: "02",
    icon: Swords,
    title: "Train & Battle",
    description:
      "Write code, face glitch beasts, and debug in real time. JinoCoder guides you through every boss fight.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Forge Your Legacy",
    description:
      "Master new skills, compile clean code, and earn your place as a legendary coder in the dojo.",
  },
];

interface StepRowProps {
  step: (typeof steps)[number];
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  x: MotionValue<number>;
}

function StepRow({ step, opacity, y, x }: StepRowProps) {
  return (
    <motion.div
      style={{ opacity, y, x }}
      className="flex flex-col items-center text-center"
    >
      <div className="glass-panel rounded-panel border border-cyan-primary/30 p-5">
        <step.icon className="w-6 h-6 text-cyan-primary" />
      </div>
      <p className="mt-4 font-code text-xs text-cyan-primary tracking-widest">
        STEP {step.number}
      </p>
      <h3 className="mt-2 font-heading text-xl font-semibold text-text-primary">
        {step.title}
      </h3>
      <p className="mt-2 font-sans text-sm text-text-muted leading-relaxed max-w-sm">
        {step.description}
      </p>
    </motion.div>
  );
}

export function PathSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  const stepOne = {
    opacity: useTransform(scrollYProgress, [0, 0.33], [0, 1]),
    y: useTransform(scrollYProgress, [0, 0.33], [20, 0]),
    x: useTransform(scrollYProgress, [0, 0.33], [-20, 0]),
  };

  const stepTwo = {
    opacity: useTransform(scrollYProgress, [0.25, 0.55], [0, 1]),
    y: useTransform(scrollYProgress, [0.25, 0.55], [20, 0]),
    x: useTransform(scrollYProgress, [0.25, 0.55], [20, 0]),
  };

  const stepThree = {
    opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]),
    y: useTransform(scrollYProgress, [0.5, 0.8], [20, 0]),
    x: useTransform(scrollYProgress, [0.5, 0.8], [-20, 0]),
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-code text-xs text-cyan-primary tracking-widest uppercase">
            Your journey
          </p>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
            The <span className="gradient-text">Path</span>
          </h2>

          <p className="mt-6 font-sans text-lg text-text-secondary leading-relaxed">
            Every apprentice follows a path. Here&apos;s how JinoCoder takes you from
            zero to compiled glory.
          </p>
        </div>

        <div ref={ref} className="relative mt-16">
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-purple-primary/50 via-cyan-primary/50 to-transparent"
          />

          <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
            <StepRow step={steps[0]} {...stepOne} />
            <StepRow step={steps[1]} {...stepTwo} />
            <StepRow step={steps[2]} {...stepThree} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button size="lg" className="group">
            Start Training
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
