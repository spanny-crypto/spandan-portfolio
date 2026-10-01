import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteConfig.url}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
  ];
}
