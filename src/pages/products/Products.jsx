import { Link } from 'react-router-dom'
import ProductCard from '../../components/common/cards/ProductCard'
import InquiryForm from '../../components/common/forms/InquiryForm'
import { products } from '../../data/products'
import { site } from '../../data/site'
import { getHomePageRoute } from '../../routes/routes'

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute top-8 right-[8%] hidden text-[8rem] leading-none font-semibold text-white/5 select-none lg:block">
          {String(products.length).padStart(2, '0')}
        </div>
        <div className="custom_container py-12 lg:py-16">
          <p className="text-[12px] font-light text-white/55">
            <Link to={getHomePageRoute()} className="transition-colors hover:text-secondary">
              Home
            </Link>
            <span className="px-2 text-white/30">/</span>
            <span className="text-white">Industrial Minerals</span>
          </p>
          <div className="mt-6 mb-3 flex items-center gap-4">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
              Our range
            </p>
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold text-white sm:text-5xl">
            Industrial
            <span className="mt-1 block font-light text-secondary">Minerals</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 font-light text-white/65">
            Manufacturer, exporter and supplier of industrial minerals from {site.location}. Bulk
            supply with consistent grades and reliable warehousing.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-14">
        <div className="custom_container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
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
