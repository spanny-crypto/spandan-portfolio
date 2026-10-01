import { portfolioData as d, siteConfig as site } from '@/data';

const id = (fragment: string) => `${site.url}/#${fragment}`;

const projectType = (p: { id: string }) =>
  p.id === 'glance' || p.id === 'luma' ? 'MobileApplication' : 'SoftwareApplication';

export function buildJsonLd() {
  const sameAs = Object.values(d.social);

  const person = {
    '@type': 'Person',
    '@id': id('person'),
    name: site.fullName,
    givenName: 'Spandan',
    familyName: 'Parakh',
    url: site.url,
    image: `${site.url}${site.photo}`,
    email: `mailto:${site.email}`,
    jobTitle: 'Founder',
    description:
      'Student, builder and founder of 6Falcon Technologies. Currently working on Janus.',
    knowsAbout: [
      'Software development',
      'Artificial intelligence',
      'Local-first computing',
      'Startups',
      'TypeScript',
      'Kotlin',
      'Python',
      'Go',
      'Android development',
      'Next.js',
    ],
    award: d.achievements.map((a) => `${a.title} (${a.date})`),
    worksFor: { '@id': id('6falcon') },
    sameAs,
    mainEntityOfPage: { '@id': id('profile') },
  };

  const company = {
    '@type': 'Organization',
    '@id': id('6falcon'),
    name: d.companies[0].name,
    description: d.companies[0].description,
    url: site.url,
    founder: { '@id': id('person') },
    email: site.email,
  };

  const foundation = {
    '@type': 'Organization',
    '@id': id('prerita-foundation'),
    name: d.foundation.name,
    description: `${d.foundation.description} ${d.foundation.mission}`,
    member: { '@id': id('person') },
  };

  const projects = d.projects.map((p) => ({
    '@type': projectType(p),
    '@id': id(p.id),
    name: p.name,
    alternateName: p.tagline,
    description: p.id === 'janus' ? 'Spandan is currently working on Janus.' : p.fullDescription,
    applicationCategory: 'BusinessApplication',
    operatingSystem: p.tech.includes('Android') ? 'Android' : 'Web',
    creator: { '@id': id('person') },
    publisher: { '@id': id('6falcon') },
    ...(p.links?.website ? { url: p.links.website } : {}),
    ...(p.links?.github ? { codeRepository: p.links.github } : {}),
    ...(p.features.length ? { featureList: p.features } : {}),
  }));

  const arkh = {
    '@type': 'ComputerLanguage',
    '@id': id('arkh'),
    name: d.programmingLanguage.name,
    description: `${d.programmingLanguage.subtitle}. ${d.programmingLanguage.description}`,
    creator: { '@id': id('person') },
    url: d.programmingLanguage.links.github,
  };

  const faq = {
    '@type': 'FAQPage',
    '@id': id('faq'),
    mainEntity: [
      ['Who is Spandan Parakh?', `Spandan Parakh is a student, builder and founder of 6Falcon Technologies. ${d.hero.subtitle}`],
      ['What is Spandan working on right now?', 'Spandan is currently working on Janus.'],
      ['What are Spandan Parakh\'s achievements?', d.achievements.map((a) => `${a.title} (${a.date}): ${a.description}`).join(' ')],
      ['What has Spandan built?', d.projects.filter((p) => p.id !== 'janus').map((p) => `${p.name} (${p.tagline})`).join(', ') + `, and the ${d.programmingLanguage.name} programming language.`],
      ['How can I contact Spandan Parakh?', `Email ${site.email}.`],
    ].map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': id('website'),
        url: site.url,
        name: `${site.fullName} - Portfolio`,
        inLanguage: 'en',
        publisher: { '@id': id('person') },
      },
      {
        '@type': 'ProfilePage',
        '@id': id('profile'),
        url: site.url,
        name: `${site.fullName} - Student, Builder, Founder`,
        isPartOf: { '@id': id('website') },
        mainEntity: { '@id': id('person') },
        dateModified: new Date().toISOString().slice(0, 10),
        inLanguage: 'en',
      },
      person,
      company,
      foundation,
      ...projects,
      arkh,
      faq,
    ],
  };
}

export function buildLlmsTxt(full: boolean) {
  const L: string[] = [];
  L.push(`# ${site.fullName}`, '');
  L.push(`> ${d.hero.title} Founder of 6Falcon Technologies. Currently working on Janus.`, '');
  L.push(`Canonical site: ${site.url}`, `Contact: ${site.email}`, '');
  L.push('## Current status', '', '- Working on Janus.', '');
  L.push('## Achievements', '');
  d.achievements.forEach((a) => L.push(`- ${a.title} (${a.date}): ${a.description}`));
  L.push('', '## Projects', '');
  d.projects.forEach((p) => {
    L.push(full && p.id !== 'janus' ? `### ${p.name} - ${p.tagline} [${p.status}]` : `- ${p.name} [${p.status}]: ${p.id === 'janus' ? 'Currently working on Janus.' : p.description}`);
    if (full && p.id !== 'janus') {
      L.push('', p.fullDescription, '');
      L.push(`Features: ${p.features.join('; ')}`, `Tech: ${p.tech.join(', ')}`);
      if (p.links?.website) L.push(`Website: ${p.links.website}`);
      if (p.links?.github) L.push(`GitHub: ${p.links.github}`);
      L.push('');
    }
  });
  L.push('', `## ${d.programmingLanguage.name} programming language`, '', d.programmingLanguage.description, '');
  L.push(`## ${d.foundation.name}`, '', `${d.foundation.description} ${d.foundation.mission}`, '');
  L.push('## Timeline', '');
  d.timeline.forEach((t) => L.push(`- ${t.year}: ${t.title} - ${t.description}`));
  L.push('', '## The challenge', '', `${d.challenge.goal} (${d.challenge.timeline}). ${d.challenge.description}`, '');
  if (full) {
    L.push('## About', '', d.about, '');
    L.push('## Research questions', '');
    d.research.forEach((r) => L.push(`- ${r.title}: ${r.question}`));
    L.push('', '## Skills and learning', '');
    Object.entries(d.learning).forEach(([k, v]) => L.push(`- ${k}: ${v.join('; ')}`));
    L.push('');
  }
  L.push('## Links', '');
  Object.entries(d.social).forEach(([k, v]) => L.push(`- ${k}: ${v}`));
  return L.join('\n') + '\n';
}
