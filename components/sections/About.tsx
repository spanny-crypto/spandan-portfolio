'use client';

import { motion } from 'framer-motion';

interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  const paragraphs = about.split('\n\n');

  return (
    <section id="about" className="py-24 md:py-32 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-12">About Me</h2>

        <div className="max-w-2xl space-y-6">
          {paragraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
