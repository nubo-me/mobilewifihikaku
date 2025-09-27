import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

type SitemapEntry = {
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const baseUrl = 'https://mobilewifihikaku.web.app'

const basePages: MetadataRoute.Sitemap = [
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
    url: `${baseUrl}/articles`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
]

const articleEntries: SitemapEntry[] = [
  // スマホユーザー向け記事（高優先度）
  {
    path: '/articles/smartphone-data-saving',
    lastModified: '2025-01-20',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/articles/sns-mobile-wifi',
    lastModified: '2025-01-22',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/articles/student-mobile-wifi',
    lastModified: '2025-01-25',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/articles/housewife-mobile-wifi',
    lastModified: '2025-01-25',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/articles/senior-mobile-wifi',
    lastModified: '2025-01-25',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  // 店長レビュー記事
  {
    path: '/articles/providers/broad-wimax',
    lastModified: '2025-09-27',
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    path: '/articles/providers/gmo-wimax',
    lastModified: '2025-09-27',
    changeFrequency: 'monthly',
    priority: 0.84,
  },
  {
    path: '/articles/providers/zeus-wifi',
    lastModified: '2025-09-27',
    changeFrequency: 'monthly',
    priority: 0.84,
  },
  {
    path: '/articles/providers/mugen-wifi',
    lastModified: '2025-09-27',
    changeFrequency: 'monthly',
    priority: 0.83,
  },
  // 利用目的別まとめ
  {
    path: '/articles/purpose/hitorigurashi',
    lastModified: '2025-09-27',
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: '/articles/purpose/game',
    lastModified: '2025-09-27',
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: '/articles/purpose/business-trip',
    lastModified: '2025-09-27',
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  // 既存の記事
  {
    path: '/articles/2025-ranking',
    lastModified: '2025-08-17',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/articles/beginner-guide',
    lastModified: '2025-01-15',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/articles/cloudsim-vs-physicalsim',
    lastModified: '2025-01-12',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/articles/data-capacity-comparison',
    lastModified: '2025-01-10',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/articles/international-wifi',
    lastModified: '2025-01-03',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: '/articles/no-contract-wifi',
    lastModified: '2025-01-05',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/articles/speed-improvement-tips',
    lastModified: '2025-01-08',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...basePages,
    ...articleEntries.map(({ path, lastModified, changeFrequency, priority }) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
    })),
  ]
}