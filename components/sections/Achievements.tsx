'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface AchievementsProps {
  achievements: any[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section id="achievements" className="py-24 md:py-32 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-4">Verified Achievements</h2>
        <p className="text-text-secondary mb-16 text-lg">
          Work that's been recognized. Achievements that are verified.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-card p-6 rounded-lg border border-border hover:border-text-secondary transition-colors"
          >
            <div className="flex gap-4">
              <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                <p className="text-text-secondary text-sm mb-2">{achievement.date}</p>
                <p className="text-text-secondary">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
