import { Link } from 'react-router-dom'
import InquiryForm from '../../components/common/forms/InquiryForm'
import { CheckIcon } from '../../components/ui/AllSVG'
import { products } from '../../data/products'
import { site } from '../../data/site'
import { getContactPageRoute, getHomePageRoute, getProductDetailRoute } from '../../routes/routes'

const years = new Date().getFullYear() - site.established

const profileFacts = [
  { label: 'Managing Director', value: site.director },
  { label: 'Year of Establishment', value: String(site.established) },
  { label: 'Nature of Business', value: site.natureOfBusiness },
  { label: 'Origin', value: 'Jodhpur, Rajasthan' },
  { label: 'Certification', value: 'ISO 9001:2008' },
]

const highlights = [
  { label: 'Years', value: `${years}+` },
  { label: 'Minerals', value: String(products.length).padStart(2, '0') },
  { label: 'Origin', value: 'Jodhpur' },
]

export default function AboutUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute top-8 right-[8%] hidden text-[8rem] leading-none font-semibold text-white/5 select-none lg:block">
          {site.established}
        </div>
        <div className="custom_container py-14 lg:py-20">
          <p className="text-[12px] font-light text-white/55">
            <Link to={getHomePageRoute()} className="transition-colors hover:text-secondary">
              Home
            </Link>
            <span className="px-2 text-white/30">/</span>
            <span className="text-white">About Us</span>
          </p>
          <div className="mt-6 mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              About Us
            </p>
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold text-white sm:text-5xl">
            Company
            <span className="mt-1 block font-light text-secondary">Profile</span>
          </h1>
        </div>
      </section>

      <section className="home-section relative overflow-hidden bg-[#f6f3ee]">
        <div className="custom_container grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <figure className="group relative mx-auto w-full max-w-130 lg:mx-0">
            <div className="absolute top-7 -right-4.5 -bottom-4.5 left-7 bg-primary" />
            <div className="absolute -right-4.5 -bottom-4.5 h-16 w-16 bg-secondary" />
            <div className="relative overflow-hidden bg-cream">
              <img
                src={site.welcomeImage}
                alt="Industrial minerals from Neelkanth Minerals"
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/25 to-transparent" />
            </div>
            <figcaption className="absolute bottom-6 left-0 z-10 bg-primary px-5 py-3 text-[11px] font-semibold tracking-[0.22em] text-white uppercase">
              Since {site.established}
            </figcaption>
          </figure>

          <div className="relative max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-secondary" />
              <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                Who we are
              </p>
            </div>
            <h2 className="text-4xl leading-[1.1] font-semibold text-primary sm:text-5xl">
              Neelkanth
              <span className="mt-1 block font-light text-secondary">Minerals</span>
            </h2>
            <div className="mt-7 space-y-5 text-[16px] leading-8 text-black/65">
              {site.welcome.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{site.about.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-12">
        <div className="custom_container">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12">
            <div>
              <div className="mb-3 flex items-center gap-4">
                <span className="h-px w-10 bg-secondary" />
                <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                  Overview
                </p>
              </div>
              <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
                Company
                <span className="mt-1 block font-light text-secondary">Facts</span>
              </h2>
            </div>

            <dl className="divide-y divide-primary/10 border-y border-primary/10">
              {profileFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 py-3 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-5"
                >
                  <dt className="text-[11px] font-semibold tracking-[0.18em] text-black/40 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-[16px] font-semibold text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-primary/10 pt-6">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold text-primary sm:text-4xl">{item.value}</p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ee] py-10 lg:py-12">
        <div className="custom_container grid gap-5 lg:grid-cols-2">
          <article className="bg-white px-6 py-7 sm:px-8 sm:py-8">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-10 bg-secondary" />
              <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                Facility
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Our Infrastructure</h2>
            <p className="mt-3 text-[16px] leading-7 text-black/65">{site.about.infrastructure}</p>
          </article>
          <article className="bg-white px-6 py-7 sm:px-8 sm:py-8">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-10 bg-secondary" />
              <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                People
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Our Team</h2>
            <p className="mt-3 text-[16px] leading-7 text-black/65">{site.about.team}</p>
          </article>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-12">
        <div className="custom_container grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-4">
              <span className="h-px w-10 bg-secondary" />
              <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                Why
              </p>
            </div>
            <h2 className="text-3xl font-semibold tracking-wide text-primary uppercase sm:text-4xl">
              Choose Us
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-7 text-black/65">{site.whyChoose.intro}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {site.whyChoose.points.map((point) => (
              <li key={point} className="flex items-start gap-3 border border-primary/10 px-4 py-3.5">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                  <CheckIcon className="size-3" />
                </span>
                <span className="text-[15px] leading-6 text-black/75">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary">
        <div className="custom_container flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center lg:py-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-white uppercase sm:text-3xl">
              {years}+ years of industrial mineral supply
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 font-light text-white/70">
              Bulk orders of consistent grades, with warehousing support from {site.location}.
            </p>
          </div>
          <Link
            to={getContactPageRoute()}
            className="inline-flex items-center bg-secondary px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <section className="home-section bg-white">
        <div className="custom_container">
          <div className="home-section-head">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-secondary" />
              <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                Range
              </p>
            </div>
            <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
              Industrial
              <span className="mt-1 block font-light text-secondary">Minerals</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={getProductDetailRoute(product.slug)}
                className="border border-primary/10 px-4 py-2.5 text-sm text-primary transition-colors duration-300 hover:border-secondary hover:text-secondary"
              >
                {product.label}
              </Link>
            ))}
          </div>
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
