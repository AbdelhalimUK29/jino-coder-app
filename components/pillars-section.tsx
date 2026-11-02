"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const pillars = [
  {
    image: "/assets/cyberpunk-anime.jpg",
    width: 1392,
    height: 752,
    title: "The Mentor",
    description: "A legendary anime coding hero who never stops training you.",
  },
  {
    image: "/assets/cyberpunk-code-master.jpg",
    width: 1024,
    height: 1024,
    title: "Mastery",
    description: "Forge your skills through real code, real challenges, real growth.",
  },
  {
    image: "/assets/digital-night.jpg",
    width: 1344,
    height: 768,
    title: "The Realm",
    description: "Enter a futuristic digital dojo where every night is a new quest.",
  },
];

interface PillarCardProps {
  pillar: (typeof pillars)[number];
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
}

function PillarCard({ pillar, opacity, y, scale }: PillarCardProps) {
  return (
    <motion.div style={{ opacity, y, scale }} className="flex flex-col">
      <div className="glass-panel rounded-panel border border-border-default overflow-hidden shadow-cyan-glow">
        <Image
          src={pillar.image}
          alt={pillar.title}
          width={pillar.width}
          height={pillar.height}
          className="w-full h-56 lg:h-64 object-cover"
        />
      </div>
      <h3 className="mt-6 font-heading text-xl font-semibold text-text-primary">
        {pillar.title}
      </h3>
      <p className="mt-2 font-sans text-sm text-text-muted leading-relaxed">
        {pillar.description}
      </p>
    </motion.div>
  );
}

export function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cardOne = {
    opacity: useTransform(scrollYProgress, [0, 0.33], [0, 1]),
    y: useTransform(scrollYProgress, [0, 0.33], [30, 0]),
    scale: useTransform(scrollYProgress, [0, 0.33], [0.95, 1]),
  };

  const cardTwo = {
    opacity: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
    y: useTransform(scrollYProgress, [0.2, 0.5], [30, 0]),
    scale: useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]),
  };

  const cardThree = {
    opacity: useTransform(scrollYProgress, [0.4, 0.7], [0, 1]),
    y: useTransform(scrollYProgress, [0.4, 0.7], [30, 0]),
    scale: useTransform(scrollYProgress, [0.4, 0.7], [0.95, 1]),
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-code text-xs text-cyan-primary tracking-widest uppercase">
            Foundations of the dojo
          </p>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
            The Three <span className="gradient-text">Pillars</span>
          </h2>

          <p className="mt-6 font-sans text-lg text-text-secondary leading-relaxed">
            JinoCoder is built on three foundations — the anime mentor who guides
            you, the coding mastery you forge, and the digital realm where it all
            comes alive.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <PillarCard pillar={pillars[0]} {...cardOne} />
          <PillarCard pillar={pillars[1]} {...cardTwo} />
          <PillarCard pillar={pillars[2]} {...cardThree} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <Button size="lg" className="group">
            Choose Your Path
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
