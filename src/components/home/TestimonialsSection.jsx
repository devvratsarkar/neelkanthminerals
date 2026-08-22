import { site } from '../../data/site'

export default function TestimonialsSection() {
  return (
    <section className="home-section bg-white">
      <div className="custom_container">
        <div className="home-section-head">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Testimonial
            </p>
          </div>
          <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
            What Clients
            <span className="mt-1 block font-light text-secondary">Say</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {site.testimonials.map((item) => (
            <article
              key={item.author}
              className="border border-primary/10 px-8 py-10 sm:px-10 sm:py-12"
            >
              <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-5 text-[16px] leading-8 text-black/60">{item.quote}</p>
              <div className="mt-8 border-t border-primary/8 pt-6">
                <p className="font-semibold text-primary">{item.author}</p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-secondary uppercase">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
