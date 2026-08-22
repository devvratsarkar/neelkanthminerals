import { Link } from 'react-router-dom'
import { getProductDetailRoute } from '../../../routes/routes'

export default function ProductCard({ product }) {
  return (
    <Link
      to={getProductDetailRoute(product.slug)}
      className="group block overflow-hidden border border-black/10 bg-white transition-shadow hover:shadow-md"
    >
      <div className="overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.label}
          className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-primary group-hover:text-secondary">{product.label}</h2>
        <p className="mt-2 line-clamp-3 text-sm text-black/65">{product.summary}</p>
        <span className="mt-4 inline-block text-sm font-semibold uppercase text-secondary">
          View More
        </span>
      </div>
    </Link>
  )
}
