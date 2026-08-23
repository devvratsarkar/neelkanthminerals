import { Link } from 'react-router-dom'
import { getProductDetailRoute } from '../../../routes/routes'

export default function ProductCard({ product, index }) {
  return (
    <Link to={getProductDetailRoute(product.slug)} className="group block">
      <article className="relative overflow-hidden bg-primary">
        <img
          src={product.image}
          alt={product.label}
          className="aspect-4/5 w-full scale-[1.14] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.22]"
        />

        <div className="absolute inset-0 bg-primary/10 transition-colors duration-500 group-hover:bg-primary/35" />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary via-primary/75 to-transparent px-6 pt-32 pb-6">
          {typeof index === 'number' ? (
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold tracking-[0.28em] text-secondary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="block h-px w-7 bg-secondary/70" />
            </div>
          ) : null}

          <h2 className="mt-2.5 text-[1.35rem] leading-tight font-semibold text-white">
            {product.label}
          </h2>
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
  )
}
