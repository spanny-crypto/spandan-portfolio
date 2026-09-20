'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface ProjectsProps {
  projects: any[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="building" className="py-24 md:py-32 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-4">What I'm building</h2>
        <p className="text-text-secondary mb-16 text-lg">
          Every project has its own visual identity and a concise explanation. Some are live, others are being actively developed, and some are experiments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-card p-6 rounded-lg cursor-pointer hover:bg-bg-tertiary transition-colors"
            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <h3 className="heading-3">{project.name}</h3>
                  <p className="text-text-secondary text-sm">{project.tagline}</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                project.status === 'LIVE' ? 'bg-emerald-100 text-emerald-900' :
                project.status === 'BUILDING' ? 'bg-blue-100 text-blue-900' :
                project.status === 'PROTOTYPE' ? 'bg-amber-100 text-amber-900' :
                project.status === 'EXPERIMENT' ? 'bg-purple-100 text-purple-900' :
                'bg-slate-200 text-slate-900'
              }`}>
                {project.status}
              </span>
            </div>

            <p className="text-text-secondary mb-4">
              {project.description}
            </p>

            {expandedId === project.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 mt-4 pt-4 border-t border-border"
              >
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i} className="text-sm text-text-secondary">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span key={tech} className="text-xs bg-bg-secondary px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.links?.website || project.links?.github) && (
                  <div className="flex gap-3 pt-2">
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-2 text-text hover:text-text-secondary transition-colors"
                      >
                        <ExternalLink size={16} /> Website
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-2 text-text hover:text-text-secondary transition-colors"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
