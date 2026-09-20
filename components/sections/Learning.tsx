'use client';

import { motion } from 'framer-motion';

interface LearningProps {
  learning: {
    engineering: string[];
    product: string[];
    business: string[];
    human: string[];
  };
}

export default function Learning({ learning }: LearningProps) {
  const categories = [
    { title: 'Engineering', items: learning.engineering, icon: '⚙️', color: 'from-slate-500 to-slate-600' },
    { title: 'Product', items: learning.product, icon: '🎯', color: 'from-blue-500 to-blue-600' },
    { title: 'Business', items: learning.business, icon: '💼', color: 'from-emerald-500 to-emerald-600' },
    { title: 'Human', items: learning.human, icon: '👥', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <section id="research" className="py-24 md:py-32 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-4">What I'm Learning</h2>
        <p className="text-text-secondary mb-16 text-lg">
          Active areas of exploration and study. These aren't certificates—they're things I'm actively building with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-card p-8 rounded-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="heading-3">{category.title}</h3>
            </div>

            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li key={i} className="text-text-secondary text-sm flex gap-2">
                  <span className="text-text-tertiary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
