'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '@/data';

interface HeroProps {
  data: {
    name: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  now: { label: string; text: string };
}

export default function Hero({ data, now }: HeroProps) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 container-main">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-5">
            {photoFailed ? (
              <div
                aria-hidden="true"
                className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-slate-900 text-white flex items-center justify-center text-4xl font-bold"
              >
                S
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={siteConfig.photo}
                alt="Spandan Parakh, student, builder and founder"
                width={112}
                height={112}
                className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border border-border"
                onError={() => setPhotoFailed(true)}
              />
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-text-tertiary">{now.label}:</span>
              <span className="font-semibold">{now.text}</span>
            </span>
          </div>
          <h1 className="heading-1 mb-4">{siteConfig.fullName}</h1>
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
