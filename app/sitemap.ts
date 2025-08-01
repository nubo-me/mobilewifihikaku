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
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 記事ページを追加
    {
      url: `${baseUrl}/articles/beginner-guide`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/cloudsim-vs-physicalsim`,
      lastModified: new Date('2025-01-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/data-capacity-comparison`,
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/speed-improvement-tips`,
      lastModified: new Date('2025-01-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
