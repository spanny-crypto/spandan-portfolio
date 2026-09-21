'use client';

import { motion } from 'framer-motion';
import { Target, Clock, TrendingUp } from 'lucide-react';

interface ChallengeProps {
  challenge: any;
}

export default function Challenge({ challenge }: ChallengeProps) {
  return (
    <section className="py-24 md:py-32 container-main bg-gradient-to-br from-accent to-slate-900 text-white rounded-2xl px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-amber-400" size={32} />
            <span className="text-amber-400 font-bold">🎯 THE CHALLENGE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {challenge.goal}
          </h2>

          <div className="flex items-center gap-2 mb-8">
            <Clock size={20} className="text-amber-400" />
            <p className="text-xl text-amber-100">{challenge.timeline}</p>
          </div>

          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {challenge.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenge.details.map((detail: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-start gap-3 bg-white/10 p-4 rounded-lg border border-white/20"
              >
                <TrendingUp className="text-amber-400 flex-shrink-0 mt-1" size={20} />
                <p className="text-white/90">{detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-sm text-amber-100 border-t border-white/20 pt-8"
          >
            <span className="font-bold">This is not a goal. This is a commitment.</span> Before I finish school, I'm shipping a SaaS product with real revenue. Not a prototype. Not a side project. A business.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
