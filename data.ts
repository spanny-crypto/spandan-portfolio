export const portfolioData = {
  hero: {
    name: 'Spandan',
    title: 'Student. Builder. Founder.',
    subtitle: 'Building software, companies, and experiments before I finish school.',
    cta1: 'Explore what I\'ve built',
    cta2: 'My story',
  },

  projects: [
    {
      id: 'falcon-os',
      name: 'Falcon OS',
      tagline: 'AI Operating System for Startups',
      description: 'A founder\'s operating system. Local AI agents (CEO, CTO, CFO, CMO, COO) running on your machine. No cloud bills. No data leaving your laptop.',
      fullDescription: 'Falcon OS is an Electron desktop application designed as a complete operating environment for startup founders. It provides AI-powered agents across critical business functions—CEO for strategic guidance, CTO for technical decisions, CFO for financial planning, CMO for marketing strategy, COO for operations. Every agent runs locally via Ollama, eliminating cloud costs while maintaining privacy. The interface features a dock, command palette, persistent chat history, and real-time delegation workflow.',
      status: 'BUILDING',
      color: 'from-slate-900 to-slate-700',
      icon: '⚙️',
      features: [
        'Multi-role AI agents (CEO, CTO, CFO, CMO, COO + 16 custom roles)',
        'Live delegation workflow with team synthesis',
        'Persistent chat history and session management',
        'Calendar, reminders, task tracking',
        'Voice drafting (LinkedIn content)',
        'Plan: goals to steps breakdown',
        'Runway: cash burn tracking',
        'Local Ollama (zero cloud cost)',
      ],
      tech: ['Electron', 'React', 'TypeScript', 'Tailwind', 'Ollama', 'Framer Motion'],
      links: {
        website: 'https://falconos.netlify.app',
        github: 'https://github.com/priyankanilesh/falcon-os',
      },
    },
    {
      id: 'mimo',
      name: 'Mimo',
      tagline: 'Personal Memory System',
      description: 'A local-first memory layer across your digital life. Useful context remembered and retrieved without manual organization.',
      fullDescription: 'Mimo is an invisible memory system designed to capture, organize, and retrieve important information from your digital life without requiring explicit effort. It learns from your behavior, correlates across platforms, and surfaces relevant context when you need it. Built around the concept of "Memory Atoms"—atomic units of useful information that can be composed into larger understanding.',
      status: 'DEPLOYED',
      color: 'from-indigo-900 to-indigo-700',
      icon: '🧠',
      features: [
        'Memory Atoms (atomic information units)',
        'Cross-platform context retrieval',
        'Zero manual organization required',
        'Local-first architecture',
        'Future: Android, Windows, wearables',
      ],
      tech: ['TypeScript', 'Local Storage', 'React', 'Next.js'],
      links: {
        github: 'https://github.com/priyankanilesh/mimo',
      },
    },
    {
      id: 'familyhealth',
      name: 'FamilyHealth AI',
      tagline: 'Family Nutrition Intelligence',
      description: 'Families eat together, but health is individual. One meal produces different recommendations based on each family member\'s goals and context.',
      fullDescription: 'FamilyHealth AI transforms how families approach nutrition. While families share meals, each member has unique health goals and contexts. The platform analyzes a single meal and generates personalized nutrition insights for each family member. A meal that\'s perfect protein for the athlete might be a carb-heavy choice for the diabetic, and a calcium-rich option for the teenager. This is nutrition intelligence built for how families actually work.',
      status: 'DEPLOYED',
      color: 'from-emerald-900 to-emerald-700',
      icon: '🍽️',
      features: [
        'Meal understanding and analysis',
        'Individual nutrition recommendations per family member',
        'Family profiles with health context',
        'Local AI processing',
        'Phone-first interaction',
        'Personalized health goals tracking',
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Ollama', 'TensorFlow Lite'],
      links: {
        github: 'https://github.com/priyankanilesh/familyhealth-ai',
      },
    },
    {
      id: 'haven',
      name: 'Haven',
      tagline: 'Safety and Evidence Organization',
      description: 'For people dealing with online harassment, extortion, and abuse. Organize evidence into structured documentation.',
      fullDescription: 'Haven is a privacy-first platform for victims of sextortion, intimate-image threats, and online blackmail. The product helps organize scattered evidence (screenshots, messages, timeline) into structured, police-report-ready documentation. It\'s designed to feel calm, trustworthy, and serious—not sensational. Evidence stays on-device by default. Local Gemma AI provides optional assistance without requiring cloud submission.',
      status: 'DEPLOYED',
      color: 'from-blue-900 to-blue-700',
      icon: '🛡️',
      features: [
        'Evidence collection and organization',
        'Screenshot OCR and analysis',
        'Risk classification system',
        'Police-report-style documentation',
        'Verified resource database (India helplines, Take It Down, StopNCII)',
        'Local Gemma AI summaries',
        'Client-side PDF export',
        'Quick exit button',
      ],
      tech: ['Next.js', 'TypeScript', 'IndexedDB', 'Tesseract.js', 'Ollama', 'jsPDF'],
      links: {
        github: 'https://github.com/priyankanilesh/haven',
      },
    },
    {
      id: 'strategy-radar',
      name: 'Strategy Shift Radar',
      tagline: 'Competitive Intelligence Software',
      description: 'Watch for meaningful changes in competitors: pricing, products, hiring, messaging, positioning. Signal → Correlation → Strategy Shift → Action.',
      fullDescription: 'Strategy Shift Radar is a competitive intelligence platform that automatically monitors and correlates signals across the competitive landscape. Instead of drowning in data, founders see patterns: when a competitor shifts pricing, launches a new product, hires aggressively in a new domain, and changes messaging—these correlate into a strategy shift you should know about. The workflow is clean: Signal detection → Pattern correlation → Strategy shift identification → Recommended actions.',
      status: 'DEPLOYED',
      color: 'from-orange-900 to-orange-700',
      icon: '📡',
      features: [
        'Signal monitoring (pricing, products, hiring, messaging)',
        'Pattern correlation across signals',
        'Strategy shift detection',
        'Actionable recommendations',
        'Competitor watchlist',
        'Historical timeline view',
      ],
      tech: ['Next.js', 'TypeScript', 'React', 'D3.js', 'PostgreSQL'],
      links: {
        github: 'https://github.com/priyankanilesh/strategy-radar',
      },
    },
    {
      id: 'kumbhos',
      name: 'KumbhOS / Kumbh Technology',
      tagline: 'Crowd Intelligence Platform',
      description: 'Built for Kumbh Mela. Real-time crowd density, infrastructure strain monitoring, predictive alerts. Charity work to save lives.',
      fullDescription: 'KumbhOS was built to address a critical real-world problem: the Kumbh Mela brings millions of pilgrims to a single location. Without real-time visibility into crowd density and infrastructure strain, disasters can occur. This platform was built as charity work and given to the government to provide real-time alerts, predictive modeling, and decision support. The work demonstrated ability to scale systems, handle millions of data points, and execute under real-world pressure.',
      status: 'DEPLOYED',
      color: 'from-purple-900 to-purple-700',
      icon: '🙏',
      features: [
        'Real-time crowd density monitoring',
        'Infrastructure strain tracking',
        'Predictive alerts and notifications',
        'Multi-zone visualization',
        'Historical analysis',
        'Government integration',
      ],
      tech: ['Next.js', 'TypeScript', 'Supabase', 'WebSockets', 'D3.js'],
      links: {
        github: 'https://github.com/priyankanilesh/kumbhos',
      },
    },
    {
      id: 'glance',
      name: 'Glance',
      tagline: 'Departure Reminder System',
      description: 'Before leaving home, your phone reminds you to check important things. Simple. Solves a stupid problem nobody thinks about.',
      fullDescription: 'Glance is deceptively simple: it detects when you leave home and reminds you what you might be forgetting. Passport? Laptop? Keys? Wallet? The system learns what\'s important to you and surfaces those reminders exactly when you need them—at the moment of departure.',
      status: 'LIVE',
      color: 'from-lime-900 to-lime-700',
      icon: '👋',
      features: [
        'Departure detection via GPS',
        'Smart reminders',
        'Customizable checklist',
        'Learning system',
        'Notification-based interaction',
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Android', 'Room', 'GPS Services'],
      links: {
        website: 'https://getglance.netlify.app',
      },
    },
    {
      id: 'luma',
      name: 'Luma',
      tagline: 'Child-Focused Phone Environment',
      description: 'A phone designed for kids. Parent authentication, family communication, Find My Phone, homework tracking, learning tools.',
      fullDescription: 'Luma is a reimagining of the phone experience for children. It combines parental oversight with genuine utility for kids: family communication, homework organization, learning resources, and device safety—all designed for how children actually use phones.',
      status: 'PROTOTYPE',
      color: 'from-pink-900 to-pink-700',
      icon: '📱',
      features: [
        'Parent authentication layer',
        'Family communication',
        'Find My Phone',
        'Homework tracking',
        'Learning resources',
        'App allowlist system',
        'Screen time management',
      ],
      tech: ['Flutter', 'Dart', 'Firebase', 'Android'],
      links: {
        github: 'https://github.com/priyankanilesh/luma',
      },
    },
  ],

  programmingLanguage: {
    name: 'Arkh',
    subtitle: 'A language for building faster',
    description: 'Most programming languages are designed to optimize for different things. I built Arkh to optimize for something nobody focuses on: getting an idea from your head to working code in minutes.',
    features: [
      'Syntax designed for rapid prototyping',
      'Minimal boilerplate',
      'Built-in AI-assisted type inference',
      'Local-first compilation',
      'Interop with existing ecosystems',
      'Developer experience as primary concern',
    ],
    status: 'EXPERIMENT',
    links: {
      github: 'https://github.com/priyankanilesh/arkh',
    },
  },

  companies: [
    {
      id: '6falcon',
      name: '6Falcon Technologies',
      description: 'The umbrella company behind startup experiments and product development.',
      role: 'Founder',
      status: 'ACTIVE',
      products: ['falcon-os', 'mimo', 'familyhealth', 'haven', 'strategy-radar', 'glance'],
    },
  ],

  foundation: {
    name: 'Prerita Foundation',
    description: 'A charitable initiative named after my sister. As trustee, I oversee community programs, education initiatives, and support work.',
    mission: 'Building community, education, and opportunity in underserved areas.',
    initiatives: [
      {
        title: 'Community Education Programs',
        description: 'Tech education and digital literacy for underserved communities',
        status: 'Active',
      },
      {
        title: 'Scholarship Fund',
        description: 'Direct financial support for students pursuing technical education',
        status: 'Active',
      },
    ],
  },

  timeline: [
    {
      year: 2017,
      title: 'Started building',
      description: 'First experiments with code, building small projects',
      type: 'milestone',
    },
    {
      year: 2019,
      title: 'Software experiments',
      description: 'First Android apps, web projects, learning full-stack development',
      type: 'milestone',
    },
    {
      year: 2021,
      title: 'AI and SaaS exploration',
      description: 'Diving deep into machine learning, building AI-powered products',
      type: 'milestone',
    },
    {
      year: 2023,
      title: 'Kumbhathon - Winner',
      description: 'Won hackathon with KumbhOS, crowd intelligence platform for Kumbh Mela',
      type: 'achievement',
    },
    {
      year: 2023,
      title: 'School Shark Tank - Funded',
      description: 'Pitched startup idea to school director, received funding',
      type: 'achievement',
    },
    {
      year: 2024,
      title: 'Startup experiments',
      description: 'Building Falcon OS, Mimo, FamilyHealth AI, Haven simultaneously',
      type: 'building',
    },
    {
      year: 2024,
      title: 'Programming language design',
      description: 'Started designing Arkh - a language for rapid prototyping',
      type: 'experiment',
    },
    {
      year: 2024,
      title: 'YC Application',
      description: 'Applying to Y Combinator Winter 2027 with portfolio of work',
      type: 'milestone',
    },
    {
      year: 2025,
      title: 'What\'s next',
      description: 'Shipping, learning, building.',
      type: 'future',
    },
  ],

  achievements: [
    {
      title: 'Kumbhathon - Winner',
      date: '2023',
      description: 'Won hackathon with KumbhOS - a crowd intelligence platform for monitoring Kumbh Mela',
      verified: true,
    },
    {
      title: 'School Shark Tank - Funded',
      date: '2023',
      description: 'Pitched startup concept to school director and received funding for development',
      verified: true,
    },
    {
      title: 'iQOO Hackathon - Participant',
      date: '2023',
      description: 'Competed in iQOO hackathon with hardware and software innovation',
      verified: true,
    },
    {
      title: 'Academic Excellence',
      date: '2024',
      description: 'SST: 80/80, Science: 79/80, Full marks on project submissions',
      verified: true,
    },
  ],

  learning: {
    engineering: [
      'Programming: TypeScript, Kotlin, Python, Go',
      'AI & ML: Local LLMs, Ollama, fine-tuning, prompt engineering',
      'Software Architecture: System design, scalability, local-first',
      'Mobile: Flutter, Jetpack Compose, Android native',
      'Backend: Next.js, Node.js, real-time systems, databases',
    ],
    product: [
      'Product Design: UX design, user research, iteration',
      'Experimentation: A/B testing, user feedback loops',
      'User Research: Understanding real problems, user interviews',
      'Design Systems: Accessibility, responsive design, motion',
    ],
    business: [
      'Startup Operations: Company building, go-to-market',
      'Sales & Marketing: Understanding customer needs',
      'Finance: Burn rate, runway, fundraising basics',
      'Competitive Intelligence: Monitoring the landscape',
    ],
    human: [
      'Psychology: Understanding motivation, behavior change',
      'Communication: Clear writing, public speaking, storytelling',
      'Persuasion: Making ideas compelling without manipulation',
      'Understanding People: Empathy, user perspective',
    ],
  },

  research: [
    {
      title: 'AI Systems for Startups',
      question: 'How can local AI agents actually help founders make better decisions?',
      hypothesis: 'Specialized AI personas focused on specific domains outperform general-purpose models',
      status: 'EXPLORING',
    },
    {
      title: 'Personal Memory & Context',
      question: 'Can we build a truly useful memory system that requires zero manual effort?',
      hypothesis: 'Memory systems fail because they require too much input; atomic retrieval without indexing is possible',
      status: 'EXPERIMENTING',
    },
    {
      title: 'Local-First Computing',
      question: 'What\'s actually possible without cloud infrastructure?',
      hypothesis: 'Most apps can run locally; cloud is a choice, not a requirement',
      status: 'BUILDING',
    },
    {
      title: 'Programming Language Design',
      question: 'Can syntax itself be optimized for developer happiness and rapid iteration?',
      hypothesis: 'Current languages optimize for machines; a language optimized for humans would look different',
      status: 'DESIGNING',
    },
  ],

  social: {
    github: 'https://github.com/priyankanilesh',
    twitter: 'https://twitter.com/priyankanilesh',
    linkedin: 'https://linkedin.com/in/priyankanilesh',
    youtube: 'https://youtube.com/@priyankanilesh',
    instagram: 'https://instagram.com/priyankanilesh',
  },

  about: `I became obsessed with building before I finished school.

When I encountered something I didn't know how to do, I learned it. When I couldn't find a tool that solved a problem, I tried to build one. When an idea failed, I moved to the next experiment.

I don't wait for university, a degree, or a job to give me permission to start. The work speaks. The code is real. The products are shipped.

I'm not interested in being called a "young entrepreneur" or a "future founder." I'm building now. The future is just more of this.

What matters: shipping, learning, iterating, shipping again.`,
};
