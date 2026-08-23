import { Link, Navigate, useParams } from 'react-router-dom'
import InquiryForm from '../../components/common/forms/InquiryForm'
import { PhoneIcon } from '../../components/ui/AllSVG'
import { getProductBySlug, products } from '../../data/products'
import { site } from '../../data/site'
import { getHomePageRoute, getProductDetailRoute, getProductsPageRoute } from '../../routes/routes'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to={getProductsPageRoute()} replace />
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug)
  const titleParts = product.label.split(' ')
  const titleLead = titleParts.slice(0, -1).join(' ') || product.label
  const titleAccent = titleParts.length > 1 ? titleParts.at(-1) : null

  function scrollToInquiry() {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="custom_container py-12 lg:py-16">
          <p className="text-[12px] font-light text-white/55">
            <Link to={getHomePageRoute()} className="transition-colors hover:text-secondary">
              Home
            </Link>
            <span className="px-2 text-white/30">/</span>
            <Link to={getProductsPageRoute()} className="transition-colors hover:text-secondary">
              Industrial Minerals
            </Link>
            <span className="px-2 text-white/30">/</span>
            <span className="text-white">{product.label}</span>
          </p>
          <div className="mt-6 mb-3 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Industrial Mineral
            </p>
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold text-white sm:text-5xl">
            {titleLead}
            {titleAccent ? <span className="mt-1 block font-light text-secondary">{titleAccent}</span> : null}
          </h1>
        </div>
      </section>

      <section className="bg-[#f6f3ee] py-10 lg:py-14">
        <div className="custom_container grid items-start gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <figure className="group relative mx-auto w-full max-w-sm pr-4 pb-4 lg:sticky lg:top-28 lg:mx-0">
            <div className="absolute top-5 -right-3.5 -bottom-3.5 left-5 bg-primary" />
            <div className="absolute -right-3.5 -bottom-3.5 h-14 w-14 bg-secondary" />

            <div className="relative overflow-hidden bg-cream">
              <img
                src={product.image}
                alt={product.label}
                className="aspect-square w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
            </div>

            <figcaption className="absolute bottom-5 left-0 z-10 bg-primary px-5 py-3 text-[11px] font-semibold tracking-[0.22em] text-white uppercase">
              {product.unit}
            </figcaption>
          </figure>

          <div>
            <p className="text-[16px] leading-8 text-black/65">{product.summary}</p>

            <dl className="mt-8 divide-y divide-primary/10 border-y border-primary/10">
              {Object.entries(product.specs).map(([name, value]) => (
                <div
                  key={name}
                  className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-6"
                >
                  <dt className="text-[11px] font-semibold tracking-[0.16em] text-black/40 uppercase">
                    {name}
                  </dt>
                  <dd className="text-[15px] font-semibold text-primary">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToInquiry}
                className="group inline-flex items-center gap-3 bg-secondary px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-primary"
              >
                Send Enquiry
                <span className="block h-px w-6 bg-white/70 transition-all duration-300 group-hover:w-10" />
              </button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 border border-primary/15 px-5 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:border-secondary hover:text-secondary"
              >
                <PhoneIcon className="size-3.5 text-secondary" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-12">
        <div className="custom_container max-w-4xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Details
            </p>
          </div>
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Product Details</h2>
          <p className="mt-5 text-[16px] leading-8 text-black/65">{product.description}</p>
        </div>
      </section>

      <section className="bg-white pb-10 lg:pb-12">
        <div className="custom_container">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-4">
                <span className="h-px w-10 bg-secondary" />
                <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                  Range
                </p>
              </div>
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                Explore More
                <span className="mt-1 block font-light text-secondary">Products</span>
              </h2>
            </div>
            <Link
              to={getProductsPageRoute()}
              className="group inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-primary uppercase"
            >
              View full range
              <span className="block h-px w-8 bg-primary/30 transition-all duration-300 group-hover:w-12 group-hover:bg-secondary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link key={item.slug} to={getProductDetailRoute(item.slug)} className="group block">
                <article className="relative overflow-hidden bg-primary">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="aspect-4/5 w-full scale-[1.1] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.18]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary via-primary/70 to-transparent px-5 pt-20 pb-5">
                    <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                    <p className="mt-1 text-[11px] tracking-[0.16em] text-secondary uppercase">
                      {item.unit}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="home-section home-section-break bg-[#f6f3ee]">
        <div className="custom_container">
          <InquiryForm initialProduct={product} />
        </div>
      </section>
    </>
  )
}
