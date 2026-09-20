'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ResearchProps {
  research: any[];
}

export default function Research({ research }: ResearchProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-4">Research & Ideas</h2>
        <p className="text-text-secondary mb-16 text-lg">
          Questions I'm actively exploring. The thinking behind the building.
        </p>
      </motion.div>

      <div className="space-y-4">
        {research.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="bg-card rounded-lg border border-border overflow-hidden"
          >
            <button
              onClick={() => setExpandedId(expandedId === idx ? null : idx)}
              className="w-full p-6 flex justify-between items-start hover:bg-bg-secondary transition-colors"
            >
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.question}</p>
              </div>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 transition-transform ${
                  expandedId === idx ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedId === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-6 pb-6 space-y-3 border-t border-border pt-6"
              >
                <div>
                  <p className="text-sm font-semibold text-text mb-1">Hypothesis:</p>
                  <p className="text-sm text-text-secondary">{item.hypothesis}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text mb-1">Status:</p>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-bg-secondary text-text-secondary">
                    {item.status}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
