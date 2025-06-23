import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.origin
  const currentDate = new Date()

  // Define routes with proper priorities and change frequencies based on content type
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      // Add images for homepage (profile and hero images)
      images: [
        `${baseUrl}/seyam.JPG`,
        `${baseUrl}/hero.png`,
        `${baseUrl}/og.png`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/seyam.JPG`],
    },
    {
      url: `${baseUrl}/research`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      // Add project images
      images: [
        `${baseUrl}/projects/bgcit.png`,
        `${baseUrl}/projects/bgctech.png`,
        `${baseUrl}/projects/ecom.png`,
        `${baseUrl}/projects/gym.png`,
        `${baseUrl}/projects/hotel.png`,
        `${baseUrl}/projects/parishadbarta.png`,
        `${baseUrl}/projects/sazzad.png`,
      ],
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [
        `${baseUrl}/seyam.JPG`,
        // Add technology icons that showcase experience
        `${baseUrl}/icon/react.svg`,
        `${baseUrl}/icon/nextjs.svg`,
        `${baseUrl}/icon/typescript.svg`,
        `${baseUrl}/icon/python.svg`,
        `${baseUrl}/icon/tensorflow.svg`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
      images: [`${baseUrl}/seyam.JPG`],
    },
  ]

  // Add shell route which is the main entry point for the SPA
  const shellRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/shell`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ]

  return [...staticRoutes, ...shellRoutes]
} 