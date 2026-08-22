import { products } from '../../../data/products'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getCurrentJobsPageRoute,
  getHomePageRoute,
  getProductDetailRoute,
  getProductsPageRoute,
  getSiteMapPageRoute,
} from '../../../routes/routes'

export function getNavItems() {
  return [
    { label: 'Home', to: getHomePageRoute() },
    { label: 'About Us', to: getAboutPageRoute() },
    {
      label: 'Industrial Minerals',
      to: getProductsPageRoute(),
      children: products.map((item) => ({
        label: item.label,
        to: getProductDetailRoute(item.slug),
      })),
    },
    { label: 'Current Jobs', to: getCurrentJobsPageRoute() },
    { label: 'Contact Us', to: getContactPageRoute() },
    { label: 'Site Map', to: getSiteMapPageRoute() },
  ]
}
