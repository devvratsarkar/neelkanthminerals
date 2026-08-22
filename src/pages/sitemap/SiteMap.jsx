import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getCurrentJobsPageRoute,
  getHomePageRoute,
  getProductDetailRoute,
  getProductsPageRoute,
} from '../../routes/routes'

export default function SiteMapPage() {
  const pages = [
    { label: 'Home', to: getHomePageRoute() },
    { label: 'About Us', to: getAboutPageRoute() },
    { label: 'Industrial Minerals', to: getProductsPageRoute() },
    { label: 'Current Jobs', to: getCurrentJobsPageRoute() },
    { label: 'Contact Us', to: getContactPageRoute() },
  ]

  return (
    <section className="custom_container py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary">
        Site Map
      </h1>
      <p className="mt-3 max-w-2xl text-black/70">
        Find your way around the Neelkanth Minerals website.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-primary">General Links</h2>
          <ul className="mt-4 space-y-2">
            {pages.map((page) => (
              <li key={page.to}>
                <Link to={page.to} className="text-black/70 hover:text-secondary">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary">Industrial Minerals</h2>
          <ul className="mt-4 space-y-2">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  to={getProductDetailRoute(product.slug)}
                  className="text-black/70 hover:text-secondary"
                >
                  {product.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
