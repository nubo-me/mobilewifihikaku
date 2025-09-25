import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mobilewifihikaku.web.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // スマホユーザー向け記事（高優先度）
    {
      url: `${baseUrl}/articles/smartphone-data-saving`,
      lastModified: new Date('2025-01-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles/sns-mobile-wifi`,
      lastModified: new Date('2025-01-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles/student-mobile-wifi`,
      lastModified: new Date('2025-01-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles/housewife-mobile-wifi`,
      lastModified: new Date('2025-01-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles/senior-mobile-wifi`,
      lastModified: new Date('2025-01-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // 既存の記事
    {
      url: `${baseUrl}/articles/2025-ranking`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/beginner-guide`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/cloudsim-vs-physicalsim`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/data-capacity-comparison`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/international-wifi`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/articles/no-contract-wifi`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/speed-improvement-tips`,
      lastModified: new Date('2025-08-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}