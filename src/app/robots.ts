import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site.config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/*.json$',
          '/.well-known/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/_next/static/'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/_next/static/'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${siteConfig.origin}/sitemap.xml`,
    host: siteConfig.origin,
  }
}
