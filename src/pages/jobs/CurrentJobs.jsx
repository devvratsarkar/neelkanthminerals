import { Link } from 'react-router-dom'
import InquiryForm from '../../components/common/forms/InquiryForm'
import { EnvelopeIcon, PhoneIcon } from '../../components/ui/AllSVG'
import { site } from '../../data/site'
import { getContactPageRoute, getHomePageRoute } from '../../routes/routes'

export default function CurrentJobsPage() {
  const openings = site.jobs ?? []

  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="custom_container py-12 lg:py-16">
          <p className="text-[12px] font-light text-white/55">
            <Link to={getHomePageRoute()} className="transition-colors hover:text-secondary">
              Home
            </Link>
            <span className="px-2 text-white/30">/</span>
            <span className="text-white">Current Jobs</span>
          </p>
          <div className="mt-6 mb-3 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Careers
            </p>
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold text-white sm:text-5xl">
            Current
            <span className="mt-1 block font-light text-secondary">Jobs</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 font-light text-white/65">
            Openings at {site.fullName}, {site.location}.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <div className="custom_container">
          {openings.length > 0 ? (
            <ul className="grid gap-4 lg:grid-cols-2">
              {openings.map((job) => (
                <li key={job.title} className="border border-primary/10 px-6 py-7">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase">
                    {job.location || site.location}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-primary">{job.title}</h2>
                  {job.type ? (
                    <p className="mt-2 text-sm text-black/50">{job.type}</p>
                  ) : null}
                  {job.summary ? (
                    <p className="mt-4 text-[15px] leading-7 text-black/65">{job.summary}</p>
                  ) : null}
                  <Link
                    to={getContactPageRoute()}
                    className="mt-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-secondary uppercase"
                  >
                    Apply now
                    <span className="block h-px w-6 bg-secondary" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="max-w-2xl border border-primary/10 px-6 py-10 sm:px-10 sm:py-12">
              <div className="mb-4 flex items-center gap-4">
                <span className="h-px w-10 bg-secondary" />
                <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                  Openings
                </p>
              </div>
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">No Opening Yet.</h2>
              <p className="mt-4 text-[16px] leading-8 text-black/65">
                There are no current vacancies at {site.fullName}. You can still share your profile
                with our Jodhpur team, and we will get in touch when a suitable role opens.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 border border-primary/15 px-5 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:border-secondary hover:text-secondary"
                >
                  <EnvelopeIcon className="size-3.5 text-secondary" />
                  {site.email}
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 border border-primary/15 px-5 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:border-secondary hover:text-secondary"
                >
                  <PhoneIcon className="size-3.5 text-secondary" />
                  {site.phone}
                </a>
              </div>
            </div>
          )}
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
