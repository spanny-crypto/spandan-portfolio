'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProgrammingLanguageProps {
  data: any;
}

export default function ProgrammingLanguage({ data }: ProgrammingLanguageProps) {
  const codeExample = `// Arkh - rapid prototyping syntax
fn main() {
  let idea = "build fast";
  let result = execute(idea);
  print(result);
}

// Minimal boilerplate
fn process(data) {
  data
    |> transform
    |> analyze
    |> output
}`;

  return (
    <section id="language" className="py-24 md:py-32 container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 mb-4">I decided to build a programming language</h2>
        <p className="text-text-secondary mb-12 text-lg max-w-2xl">
          Most programming languages optimize for different things. I built <span className="font-semibold text-text">{data.name}</span> to optimize for something nobody focuses on: getting an idea from your head to working code in minutes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-lg overflow-hidden border border-border"
        >
          <div className="bg-bg-secondary px-6 py-3 border-b border-border">
            <p className="text-sm font-mono text-text-secondary">arkh-example.ark</p>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto">
            <code className="text-text-secondary">
              {codeExample}
            </code>
          </pre>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="heading-3 mb-4">Design Philosophy</h3>
            <div className="space-y-3">
              {data.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-accent font-bold mt-1">→</span>
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-text-tertiary mb-4">
              <span className="font-semibold text-text">Status:</span> {data.status}
            </p>
          </div>

          {data.links?.github && (
            <a
              href={data.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center gap-2"
            >
              <Github size={18} /> View on GitHub
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
