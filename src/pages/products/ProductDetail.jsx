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
    <section className="custom_container py-16">
      <p className="text-sm text-black/55">
        <Link to={getProductsPageRoute()} className="hover:text-secondary">
          Industrial Minerals
        </Link>
        <span className="px-2">/</span>
        <span className="text-primary">{product.label}</span>
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start">
        <div className="overflow-hidden border border-black/10 bg-cream">
          <img
            src={product.image}
            alt={product.label}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-primary">
            {product.label}
          </h1>
          <p className="mt-3 text-black/70">{product.summary}</p>

          <dl className="mt-8 divide-y divide-black/10 border border-black/10">
            {Object.entries(product.specs).map(([name, value]) => (
              <div key={name} className="grid grid-cols-[160px_1fr] gap-4 px-4 py-3 text-sm sm:grid-cols-[200px_1fr]">
                <dt className="font-semibold text-primary">{name}</dt>
                <dd className="text-black/70">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 max-w-3xl leading-7 text-black/70">{product.description}</p>

          <p className="mt-4 text-sm text-black/55">Available unit: {product.unit}</p>

          <Link
            to={getContactPageRoute()}
            className="mt-8 inline-block bg-secondary px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary"
          >
            Send Enquiry
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-primary">Explore More Products</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <li key={item.slug}>
              <Link
                to={getProductDetailRoute(item.slug)}
                className="block border border-black/10 bg-white p-4 transition-colors hover:border-secondary"
              >
                <img src={item.image} alt={item.label} className="mb-3 aspect-[4/3] w-full object-cover" />
                <p className="font-semibold text-primary">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
