import { Link } from 'react-router-dom'
import InquiryForm from '../../components/common/forms/InquiryForm'
import {
  EnvelopeIcon,
  GlobeIcon,
  LocationIcon,
  PhoneIcon,
  UserIcon,
} from '../../components/ui/AllSVG'
import { site } from '../../data/site'
import { getHomePageRoute } from '../../routes/routes'

const contactDetails = [
  {
    label: 'Contact Person',
    icon: UserIcon,
    value: site.director,
  },
  {
    label: 'Address',
    icon: LocationIcon,
    value: site.address,
  },
  {
    label: 'Call Us',
    icon: PhoneIcon,
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: 'Email',
    icon: EnvelopeIcon,
    value: site.email,
    href: site.emailHref,
  },
  {
    label: 'Web Address',
    icon: GlobeIcon,
    value: site.website,
    href: site.website,
    external: true,
  },
]

export default function ContactUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="custom_container py-12 lg:py-16">
          <p className="text-[12px] font-light text-white/55">
            <Link to={getHomePageRoute()} className="transition-colors hover:text-secondary">
              Home
            </Link>
            <span className="px-2 text-white/30">/</span>
            <span className="text-white">Contact Us</span>
          </p>
          <div className="mt-6 mb-3 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Contact Us
            </p>
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold text-white sm:text-5xl">
            Neelkanth
            <span className="mt-1 block font-light text-secondary">Minerals & Traders</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <div className="custom_container">
          <div className="home-section-head">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-secondary" />
              <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                Get in touch
              </p>
            </div>
            <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
              Contact
              <span className="mt-1 block font-light text-secondary">Details</span>
            </h2>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon
              const content = item.href ? (
                <a
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="break-all text-[16px] font-semibold text-primary transition-colors hover:text-secondary"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[16px] font-semibold text-primary">{item.value}</p>
              )

              return (
                <div key={item.label} className="border border-primary/10 px-5 py-5">
                  <dt className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-black/40 uppercase">
                    <Icon className="size-4 text-secondary" />
                    {item.label}
                  </dt>
                  <dd className="mt-3">{content}</dd>
                </div>
              )
            })}

            <div className="border border-primary/10 px-5 py-5 sm:col-span-2 xl:col-span-1">
              <dt className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-black/40 uppercase">
                <GlobeIcon className="size-4 text-secondary" />
                Web Page
              </dt>
              <dd className="mt-3 space-y-2">
                {site.listings.map((listing) => (
                  <a
                    key={listing.href}
                    href={listing.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block break-all text-[15px] font-semibold text-primary transition-colors hover:text-secondary"
                  >
                    {listing.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="home-section home-section-break bg-[#f6f3ee]">
        <div className="custom_container">
          <InquiryForm />
        </div>
      </section>
    </>
  )
}
