import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { getProductDetailRoute, getProductsPageRoute } from '../../routes/routes'

export default function HomeProductsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="custom_container">
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              to={getProductDetailRoute(product.slug)}
              className="group block bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.label}
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent pt-24 pb-5 px-5">
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-white/55">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{product.label}</h3>
                  <p className="mt-2 max-w-[16ch] text-[11px] tracking-[0.16em] text-secondary uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View product
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
