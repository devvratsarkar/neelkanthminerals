import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { getProductDetailRoute, getProductsPageRoute } from '../../routes/routes'

export default function HomeProductsSection() {
  return (
    <section className="home-section bg-white">
      <div className="custom_container">
        <div className="home-section-head flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-secondary" />
              <p className="text-[11px] font-semibold tracking-[0.32em] text-secondary uppercase">
                Our
              </p>
            </div>
            <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
              Industrial
              <span className="mt-1 block font-light text-secondary">Minerals</span>
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              to={getProductDetailRoute(product.slug)}
              className="group block"
            >
              <article className="relative overflow-hidden bg-primary">
                <img
                  src={product.image}
                  alt={product.label}
                  className="aspect-4/5 w-full scale-[1.14] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.22]"
                />

                <div className="absolute inset-0 bg-primary/10 transition-colors duration-500 group-hover:bg-primary/35" />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary via-primary/75 to-transparent pt-32 pb-6 px-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.28em] text-secondary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="block h-px w-7 bg-secondary/70" />
                  </div>

                  <h3 className="mt-2.5 text-[1.35rem] leading-tight font-semibold text-white">
                    {product.label}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
                    {product.unit}
                  </p>

                  <p className="mt-4 flex translate-y-2 items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-secondary uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View product
                    <span className="block h-px w-6 bg-secondary transition-all duration-500 group-hover:w-9" />
                  </p>
                </div>

                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-secondary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
