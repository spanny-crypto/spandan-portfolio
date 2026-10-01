import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data';

export const dynamic = 'force-static';

const aiBots = [
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended',
  'Bingbot', 'Googlebot', 'DuckDuckBot', 'CCBot', 'Bytespider', 'Amazonbot', 'Meta-ExternalAgent',
  'cohere-ai', 'MistralAI-User', 'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
