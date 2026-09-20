'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    instagram: string;
  };
}

export default function Footer({ social }: FooterProps) {
  const socialLinks = [
    { icon: Github, href: social.github, label: 'GitHub' },
    { icon: Twitter, href: social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: social.youtube, label: 'YouTube' },
    { icon: Instagram, href: social.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Let's connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-bg-secondary rounded-lg transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} className="text-text-secondary hover:text-text transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Email CTA */}
          <div className="space-y-3">
            <p className="text-text-secondary">Want to collaborate or chat?</p>
            <a
              href="mailto:priyankanilesh2011@gmail.com"
              className="button-secondary inline-flex items-center gap-2"
            >
              <Mail size={18} /> Send me an email
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-text-tertiary text-sm">
              © 2024 Spandan. Built with curiosity and shipped with code.
            </p>
            <p className="text-text-tertiary text-sm mt-2">
              Currently building at <span className="font-semibold text-text">6Falcon</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
