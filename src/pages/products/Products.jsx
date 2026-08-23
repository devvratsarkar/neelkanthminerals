import ProductCard from '../../components/common/cards/ProductCard'
import { products } from '../../data/products'

export default function ProductsPage() {
  return (
    <section className="custom_container py-8 sm:py-12 lg:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary">
        Industrial Minerals
      </h1>
      <p className="mt-3 max-w-2xl text-black/70">
        Explore our industrial mineral range manufactured, exported and supplied from Jodhpur, India.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
