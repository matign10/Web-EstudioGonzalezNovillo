import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gonzaleznovillo.com'

  // Sitio de una sola página: los fragmentos (#areas, #contacto, etc.)
  // son ignorados por los buscadores, por eso solo se lista la URL base.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
