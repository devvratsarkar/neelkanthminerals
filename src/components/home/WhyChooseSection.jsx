import { Link } from 'react-router-dom'
import { site } from '../../data/site'
import { getContactPageRoute } from '../../routes/routes'
import { CheckIcon } from '../ui/AllSVG'

const years = new Date().getFullYear() - site.established

export default function WhyChooseSection() {
  return (
    <section>
      <div className="bg-primary py-16 lg:py-20">
        <div className="custom_container max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-white uppercase sm:text-3xl lg:text-4xl lg:leading-tight">
            {years}+ years of experience for better results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 font-light text-white/70 sm:text-base">
            We supply high-grade industrial minerals in any quantity, with dependable lead times
            and the support of a well-structured warehousing setup in Jodhpur.
          </p>
          <Link
            to={getContactPageRoute()}
            className="mt-8 inline-flex items-center bg-secondary px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            Contact Us Today
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#f6f3ee]">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-4 py-16 sm:px-6 lg:py-24 lg:pr-12 lg:pl-[max(1.5rem,7.5vw)]">
            <div className="max-w-lg">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-secondary" />
                <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                  Why
                </p>
              </div>

              <h3 className="text-3xl font-semibold tracking-wide text-primary uppercase sm:text-4xl">
                Choose Us
              </h3>

              <p className="mt-5 text-[16px] leading-8 text-black/65">{site.whyChoose.intro}</p>

              <ul className="mt-8 space-y-3.5">
                {site.whyChoose.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-black/75">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                      <CheckIcon className="size-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative min-h-80 sm:min-h-105 lg:min-h-full">
            <img
              src="/images/why-choose.png"
              alt="Industrial minerals handling and supply"
              className="absolute inset-0 size-full object-cover object-center lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
