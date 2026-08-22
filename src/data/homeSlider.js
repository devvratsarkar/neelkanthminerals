import { getProductBySlug } from './products'

const slides = [
  {
    slug: 'bentonite-powder',
    title: ['Bentonite', 'Powder'],
    subtitle: 'Manufacturer, exporter and supplier of industrial minerals from Jodhpur, India',
  },
  {
    slug: 'china-clay',
    title: ['China', 'Clay'],
    subtitle: 'High-grade China Clay for ceramics, paint, paper and industrial applications',
  },
  {
    slug: 'diatomaceous-earth-powder',
    title: ['Diatomaceous', 'Earth Powder'],
    subtitle: 'Premium filtration and industrial-grade diatomaceous earth powder',
  },
  {
    slug: 'quartz-powder',
    title: ['Quartz', 'Powder'],
    subtitle: 'Pure quartz powder manufactured and exported from Jodhpur, India',
  },
  {
    slug: 'silica-powder',
    title: ['Silica', 'Powder'],
    subtitle: 'Reliable silica powder supply with consistent quality and packaging',
  },
]

export const homeSlides = slides.map((slide) => ({
  ...slide,
  image: getProductBySlug(slide.slug)?.image,
}))
