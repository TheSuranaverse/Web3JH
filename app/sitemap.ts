import type { MetadataRoute } from 'next'

export function generateStaticParams() {
  // no dynamic IDs to pre-generate, so return an empty array
  return [];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://web3jh.xyz',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://web3jh.xyz/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://web3jh.xyz/events',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://web3jh.xyz/community',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://web3jh.xyz/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}