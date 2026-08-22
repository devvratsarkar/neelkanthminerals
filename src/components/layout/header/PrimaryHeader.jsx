import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../../data/site'
import { getHomePageRoute } from '../../../routes/routes'
import {
  EnvelopeIcon,
  FacebookIcon,
  IsoSeal,
  LinkedinIcon,
  MenuIcon,
  PhoneIcon,
  QaSeal,
  SiteLogoMark,
  TwitterIcon,
} from '../../ui/AllSVG'
import MobileOffcanvas from './MobileOffcanvas'
import PrimaryMenu from './PrimaryMenu'

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

export default function PrimaryHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <div className="bg-primary py-2 sm:hidden">
        <div className="custom_container flex items-center justify-between gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex items-center text-[12px] font-light text-white transition-colors hover:text-secondary"
          >
            <PhoneIcon className="mr-1.5 size-3.5 text-secondary" />
            {site.phone}
          </a>
          <div className="flex items-center">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.name]
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`ml-1.5 inline-flex size-6.5 items-center justify-center rounded-full border border-white text-white transition-all duration-500 ${socialHover[social.name]}`}
                >
                  <Icon className="size-3" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="hidden bg-primary py-2.5 sm:block md:py-3.75 md:pb-2.5">
        <div className="custom_container flex flex-col items-center justify-between gap-3 xl:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 xl:justify-start">
            <a
              href={site.phoneHref}
              className="inline-flex items-center font-light text-white transition-colors hover:text-secondary"
            >
              <PhoneIcon className="mr-2.5 size-4 text-secondary" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center font-light text-white transition-colors hover:text-secondary"
            >
              <EnvelopeIcon className="mr-2.5 size-4 text-secondary" />
              {site.email}
            </a>
          </div>

          <div className="flex items-center">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.name]
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`ml-2.5 inline-flex size-7.5 items-center justify-center rounded-full border border-white text-white transition-all duration-500 ${socialHover[social.name]}`}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)]">
        <div className="custom_container flex items-center justify-between gap-3 py-2.5 sm:gap-4 sm:py-3">
          <Link to={getHomePageRoute()} className="flex shrink-0 items-center gap-2 sm:gap-3">
            <SiteLogoMark className="h-9 w-auto sm:h-12" />
            <span className="leading-none">
              <span className="block text-[18px] font-semibold text-primary sm:text-[26px]">
                Neelkanth
              </span>
              <span className="block text-[18px] font-semibold text-secondary sm:text-[26px]">
                Minerals
              </span>
            </span>
          </Link>

          <div className="hidden min-w-0 items-center lg:flex">
            <nav>
              <PrimaryMenu />
            </nav>
            <div className="ml-4 flex items-center gap-1.5 xl:ml-6 xl:gap-2">
              <QaSeal className="size-9 xl:size-11" />
              <IsoSeal className="size-9 xl:size-11" />
              <div className="leading-tight">
                <p className="text-[10px] font-semibold tracking-wide text-primary uppercase xl:text-[11px]">
                  Certified Company
                </p>
                <p className="text-base font-bold leading-none text-primary uppercase xl:text-lg">
                  ISO 9001:2008
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-primary transition-colors duration-300 hover:text-secondary sm:size-11 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-offcanvas"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <MobileOffcanvas open={mobileOpen} onClose={closeMobile} />
    </>
  )
}
