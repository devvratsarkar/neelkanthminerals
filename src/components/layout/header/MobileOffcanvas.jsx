import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../../../data/site'
import { getHomePageRoute } from '../../../routes/routes'
import {
  ChevronDownIcon,
  CloseIcon,
  EnvelopeIcon,
  FacebookIcon,
  LinkedinIcon,
  PhoneIcon,
  SiteLogoMark,
  TwitterIcon,
} from '../../ui/AllSVG'
import { getNavItems } from './navItems'

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

const CLOSE_MS = 520

export default function MobileOffcanvas({ open, onClose }) {
  const location = useLocation()
  const titleId = useId()
  const closeRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [entered, setEntered] = useState(false)
  const [expanded, setExpanded] = useState('')

  const items = getNavItems()
  const isProductPath = location.pathname.startsWith('/products')

  useEffect(() => {
    if (open) {
      setMounted(true)
      setExpanded(isProductPath ? 'Industrial Minerals' : '')
    } else {
      setEntered(false)
    }
  }, [open, isProductPath])

  useEffect(() => {
    if (open || !mounted) return undefined
    const timer = window.setTimeout(() => setMounted(false), CLOSE_MS)
    return () => window.clearTimeout(timer)
  }, [open, mounted])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!mounted || !open) return undefined

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEntered(true))
    })
    return () => window.cancelAnimationFrame(frame)
  }, [mounted, open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open, onClose])

  useEffect(() => {
    if (entered) closeRef.current?.focus()
  }, [entered])

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-80 lg:hidden" role="presentation">
      <button
        type="button"
        aria-label="Close menu"
        className={`offcanvas-backdrop absolute inset-0 bg-primary/55 backdrop-blur-[2px] ${
          entered ? 'is-open' : ''
        }`}
        onClick={onClose}
      />

      <aside
        id="mobile-offcanvas"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`offcanvas-panel absolute inset-y-0 right-0 flex w-[min(88vw,22.5rem)] flex-col bg-primary shadow-[-16px_0_40px_rgba(0,0,0,0.28)] ${
          entered ? 'is-open' : ''
        }`}
      >
        <div className="h-1 bg-secondary" />

        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <Link to={getHomePageRoute()} onClick={onClose} className="flex min-w-0 items-center gap-2.5">
            <SiteLogoMark variant="onDark" className="h-9 w-auto" />
            <span id={titleId} className="leading-none">
              <span className="block text-lg font-semibold text-white">Neelkanth</span>
              <span className="block text-lg font-semibold text-secondary">Minerals</span>
            </span>
          </Link>

          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center text-white transition-colors duration-300 hover:text-secondary"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-3" aria-label="Mobile">
          <ul>
            {items.map((item, index) => {
              const hasChildren = Boolean(item.children?.length)
              const isOpen = expanded === item.label

              return (
                <li
                  key={item.label}
                  className="offcanvas-item border-b border-white/10"
                  style={{ transitionDelay: entered ? `${90 + index * 55}ms` : '0ms' }}
                >
                  <div className="flex items-stretch">
                    <NavLink
                      to={item.to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex min-w-0 flex-1 items-center px-5 py-3.5 text-[14px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
                          isActive ? 'text-secondary' : 'text-white hover:text-secondary'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>

                    {hasChildren ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${item.label}`}
                        className="inline-flex w-12 items-center justify-center text-white/70 transition-colors duration-300 hover:text-secondary"
                        onClick={() => setExpanded(isOpen ? '' : item.label)}
                      >
                        <ChevronDownIcon
                          className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : ''}`}
                        />
                      </button>
                    ) : null}
                  </div>

                  {hasChildren ? (
                    <div className={`offcanvas-submenu ${isOpen ? 'is-open' : ''}`}>
                      <ul className="overflow-hidden bg-black/15">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              onClick={onClose}
                              className={({ isActive }) =>
                                `block px-8 py-2.5 text-[14px] font-medium capitalize transition-colors duration-300 ${
                                  isActive
                                    ? 'bg-secondary text-white'
                                    : 'text-white/75 hover:bg-secondary hover:text-white'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 px-5 py-5">
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 text-[14px] font-light text-white/70 transition-colors duration-300 hover:text-secondary"
          >
            <PhoneIcon className="size-4 text-secondary" />
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="mt-3 flex items-center gap-3 text-[14px] font-light text-white/70 transition-colors duration-300 hover:text-secondary"
          >
            <EnvelopeIcon className="size-4 text-secondary" />
            <span className="break-all">{site.email}</span>
          </a>

          <div className="mt-5 flex items-center">
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
      </aside>
    </div>,
    document.body,
  )
}
