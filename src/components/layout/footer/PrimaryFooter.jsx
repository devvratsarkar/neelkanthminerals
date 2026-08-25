import { Link } from 'react-router-dom'
import { products } from '../../../data/products'
import { site } from '../../../data/site'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getCurrentJobsPageRoute,
  getHomePageRoute,
  getProductDetailRoute,
  getProductsPageRoute,
  getSiteMapPageRoute,
} from '../../../routes/routes'
import {
  EnvelopeIcon,
  FacebookIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
} from '../../ui/AllSVG'
import SiteLogo from '../../ui/SiteLogo'

const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
}

const socialHover = {
  facebook: 'hover:border-[#3b5998] hover:bg-[#3b5998]',
  twitter: 'hover:border-[#00aff0] hover:bg-[#00aff0]',
  linkedin: 'hover:border-[#0274b3] hover:bg-[#0274b3]',
}

const quickLinks = [
  { label: 'Home', to: getHomePageRoute() },
  { label: 'About Us', to: getAboutPageRoute() },
  { label: 'Industrial Minerals', to: getProductsPageRoute() },
  { label: 'Current Jobs', to: getCurrentJobsPageRoute() },
  { label: 'Contact Us', to: getContactPageRoute() },
  { label: 'Site Map', to: getSiteMapPageRoute() },
]

const footerLinkClass =
  'block py-1.5 text-[15px] font-light text-white/65 transition-colors duration-300 hover:text-secondary'

function FooterHeading({ children }) {
  return (
    <div className="mb-6">
      <h2 className="text-[13px] font-semibold tracking-[0.22em] text-white uppercase">{children}</h2>
      <span className="mt-3 block h-0.5 w-10 bg-secondary" />
    </div>
  )
}

export default function PrimaryFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="h-1 bg-secondary" />

      <div className="custom_container py-14 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.35fr_0.85fr_1.1fr_1.05fr] xl:gap-16">
          <div>
            <Link to={getHomePageRoute()} className="inline-block">
              <SiteLogo variant="onDark" className="h-12 w-auto sm:h-14" />
            </Link>

            <p className="mt-6 max-w-sm text-[15px] leading-7 font-light text-white/65">
              Manufacturer, exporter and supplier of industrial minerals from {site.location} since{' '}
              {site.established}. Bulk supply with reliable warehousing and consistent grades.
            </p>

            <div className="mt-7 flex items-center">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.name]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className={`mr-2.5 inline-flex size-8 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 ${socialHover[social.name]}`}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <nav aria-label="Footer">
            <FooterHeading>Quick Links</FooterHeading>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Industrial minerals">
            <FooterHeading>Industrial Minerals</FooterHeading>
            <ul>
              {products.map((product) => (
                <li key={product.slug}>
                  <Link to={getProductDetailRoute(product.slug)} className={footerLinkClass}>
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>Get In Touch</FooterHeading>
            <ul className="space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-start gap-3 text-[15px] font-light text-white/65 transition-colors duration-300 hover:text-secondary"
                >
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-secondary" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-start gap-3 text-[15px] font-light text-white/65 transition-colors duration-300 hover:text-secondary"
                >
                  <EnvelopeIcon className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-[15px] font-light text-white/65">
                <LocationIcon className="mt-0.5 size-4 shrink-0 text-secondary" />
                {site.location}
              </li>
            </ul>

            <Link
              to={getContactPageRoute()}
              className="mt-8 inline-flex items-center bg-secondary px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="custom_container flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-light text-white/50">
            © {year} {site.fullName}. All rights reserved.
          </p>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-white/40 uppercase">
            ISO 9001:2008 Certified Company
          </p>
        </div>
      </div>
    </footer>
  )
}
