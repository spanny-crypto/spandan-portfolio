'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#building', label: 'Building' },
    { href: '#language', label: 'Language' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#research', label: 'Research' },
    { href: '#about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-bg/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container-main flex justify-between items-center py-4">
        <div className="font-bold text-lg">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            Spandan
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-bg border-b border-border md:hidden">
            <div className="container-main py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
