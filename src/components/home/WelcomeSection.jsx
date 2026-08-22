import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import { getAboutPageRoute } from '../../routes/routes'

const facts = [
  { label: 'Established', value: String(site.established) },
  { label: 'Origin', value: 'Jodhpur' },
  { label: 'Business', value: 'Export' },
]

export default function WelcomeSection() {
  return (
    <section className="home-section relative overflow-hidden bg-[#f6f3ee]">
      <div className="pointer-events-none absolute top-16 right-[8%] hidden text-[9rem] leading-none font-semibold text-primary/4 select-none lg:block">
        {site.established}
      </div>

      <div className="custom_container grid items-center gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-24">
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
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Welcome to
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
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-primary/10 pt-7">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[10px] font-semibold tracking-[0.2em] text-black/40 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold tracking-wide text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            to={getAboutPageRoute()}
            className="group mt-10 inline-flex items-center gap-3 bg-secondary px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-primary"
          >
            Read More
            <span className="block h-px w-6 bg-white/70 transition-all duration-300 group-hover:w-10" />
          </Link>
        </div>
      </div>
    </section>
  )
}
