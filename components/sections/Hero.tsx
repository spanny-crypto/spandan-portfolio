'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  data: {
    name: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 container-main">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 mb-4">{data.name}</h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-6 font-medium">
            {data.title}
          </p>
          <p className="text-lg text-text-tertiary mb-12 max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 flex-col sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#building"
            className="button-primary inline-block text-center"
          >
            {data.cta1}
          </a>
          <a
            href="#about"
            className="button-secondary inline-block text-center"
          >
            {data.cta2}
          </a>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="absolute -z-10 top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-slate-200/20 to-slate-100/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
