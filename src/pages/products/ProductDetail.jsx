import { Link, Navigate, useParams } from 'react-router-dom'
import { getProductBySlug, products } from '../../data/products'
import { getContactPageRoute, getProductDetailRoute, getProductsPageRoute } from '../../routes/routes'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to={getProductsPageRoute()} replace />
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 4)

  return (
    <section className="custom_container py-8 sm:py-12 lg:py-16">
      <p className="text-sm text-black/55">
        <Link to={getProductsPageRoute()} className="hover:text-secondary">
          Industrial Minerals
        </Link>
        <span className="px-2">/</span>
        <span className="text-primary">{product.label}</span>
      </p>

      <div className="mt-4 grid gap-5 sm:mt-6 sm:gap-8 lg:mt-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start lg:gap-10">
        <div className="overflow-hidden border border-black/10 bg-cream">
          <img
            src={product.image}
            alt={product.label}
            className="aspect-4/3 w-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl lg:text-4xl">
            {product.label}
          </h1>
          <p className="mt-2 text-black/70 sm:mt-3">{product.summary}</p>

          <dl className="mt-5 divide-y divide-black/10 border border-black/10 sm:mt-8">
            {Object.entries(product.specs).map(([name, value]) => (
              <div key={name} className="grid grid-cols-1 gap-1 px-4 py-3 text-sm sm:grid-cols-[160px_1fr] sm:gap-4 md:grid-cols-[200px_1fr]">
                <dt className="font-semibold text-primary">{name}</dt>
                <dd className="text-black/70">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 max-w-3xl leading-7 text-black/70 sm:mt-6">{product.description}</p>

          <p className="mt-3 text-sm text-black/55 sm:mt-4">Available unit: {product.unit}</p>

          <Link
            to={getContactPageRoute()}
            className="mt-5 inline-block bg-secondary px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary sm:mt-8"
          >
            Send Enquiry
          </Link>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 lg:mt-16">
        <h2 className="font-display text-xl font-semibold text-primary sm:text-2xl">Explore More Products</h2>
        <ul className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <li key={item.slug}>
              <Link
                to={getProductDetailRoute(item.slug)}
                className="block border border-black/10 bg-white p-4 transition-colors hover:border-secondary"
              >
                <img src={item.image} alt={item.label} className="mb-3 aspect-4/3 w-full object-cover" />
                <p className="font-semibold text-primary">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
