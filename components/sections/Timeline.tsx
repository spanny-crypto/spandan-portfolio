'use client';

import { motion } from 'framer-motion';

interface TimelineProps {
  timeline: any[];
}

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <section id="timeline" className="py-24 md:py-32 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-4">Founder Timeline</h2>
        <p className="text-text-secondary mb-16 text-lg">
          The journey from first experiments to building companies.
        </p>
      </motion.div>

      <div className="space-y-6">
        {timeline.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="flex gap-6 md:gap-12"
          >
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${
                event.type === 'achievement' ? 'bg-emerald-500' :
                event.type === 'building' ? 'bg-blue-500' :
                event.type === 'experiment' ? 'bg-purple-500' :
                event.type === 'milestone' ? 'bg-accent' :
                'bg-slate-400'
              }`} />
              {idx < timeline.length - 1 && (
                <div className="w-0.5 h-24 bg-border mt-2" />
              )}
            </div>

            <div className="pb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-2xl font-bold text-accent">{event.year}</span>
                <span className="text-xs font-bold px-2 py-1 rounded bg-bg-secondary text-text-secondary">
                  {event.type.toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-text-secondary">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
