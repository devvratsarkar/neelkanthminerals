import { getProductBySlug } from './products'

const slides = [
  {
    slug: 'bentonite-powder',
    title: ['Bentonite', 'Powder'],
    mobileTitle: ['Bentonite', 'Powder'],
    subtitle: 'Manufacturer, exporter and supplier of industrial minerals from Jodhpur, India',
    shortSubtitle: 'Industrial minerals manufactured and exported from Jodhpur',
    alt: 'Bentonite powder supplied by Neelkanth Minerals',
    objectPosition: 'center',
  },
  {
    slug: 'china-clay',
    title: ['China', 'Clay'],
    mobileTitle: ['China', 'Clay'],
    subtitle: 'High-grade China Clay for ceramics, paint, paper and industrial applications',
    shortSubtitle: 'High-grade China Clay for ceramics, paint and paper',
    alt: 'China clay from Neelkanth Minerals, Jodhpur',
    objectPosition: 'center',
  },
  {
    slug: 'diatomaceous-earth-powder',
    title: ['Diatomaceous', 'Earth Powder'],
    mobileTitle: ['Diatomaceous', 'Earth'],
    subtitle: 'Premium filtration and industrial-grade diatomaceous earth powder',
    shortSubtitle: 'Premium filtration-grade diatomaceous earth',
    alt: 'Diatomaceous earth powder for filtration and industrial use',
    objectPosition: 'center 30%',
  },
  {
    slug: 'quartz-powder',
    title: ['Quartz', 'Powder'],
    mobileTitle: ['Quartz', 'Powder'],
    subtitle: 'Pure quartz powder manufactured and exported from Jodhpur, India',
    shortSubtitle: 'Pure quartz powder from Jodhpur, India',
    alt: 'Quartz powder manufactured by Neelkanth Minerals',
    objectPosition: 'center',
  },
  {
    slug: 'silica-powder',
    title: ['Silica', 'Powder'],
    mobileTitle: ['Silica', 'Powder'],
    subtitle: 'Reliable silica powder supply with consistent quality and packaging',
    shortSubtitle: 'Consistent silica powder quality and packaging',
    alt: 'Silica powder packed for industrial supply',
    objectPosition: 'center',
  },
]

export const homeSlides = slides.map((slide) => {
  const product = getProductBySlug(slide.slug)

  return {
    ...slide,
    image: product?.image,
    mobileTitle: slide.mobileTitle ?? slide.title,
    shortSubtitle: slide.shortSubtitle ?? slide.subtitle,
    alt: slide.alt ?? product?.label ?? slide.title.join(' '),
  }
})
