import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import AboutUsPage from '../pages/about/AboutUs'
import ProductsPage from '../pages/products/Products'
import ProductDetailPage from '../pages/products/ProductDetail'
import ContactUsPage from '../pages/contact/ContactUs'
import SiteMapPage from '../pages/sitemap/SiteMap'
import CurrentJobsPage from '../pages/jobs/CurrentJobs'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getCurrentJobsPageRoute,
  getHomePageRoute,
  getProductDetailRoute,
  getProductsPageRoute,
  getSiteMapPageRoute,
} from './routes'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      {
        path: getHomePageRoute(),
        element: <HomePage />,
      },
      {
        path: getAboutPageRoute(),
        element: <AboutUsPage />,
      },
      {
        path: getProductsPageRoute(),
        element: <ProductsPage />,
      },
      {
        path: getProductDetailRoute(':slug'),
        element: <ProductDetailPage />,
      },
      {
        path: getContactPageRoute(),
        element: <ContactUsPage />,
      },
      {
        path: getSiteMapPageRoute(),
        element: <SiteMapPage />,
      },
      {
        path: getCurrentJobsPageRoute(),
        element: <CurrentJobsPage />,
      },
    ],
  },
]
