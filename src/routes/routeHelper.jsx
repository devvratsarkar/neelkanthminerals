import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import AboutUsPage from '../pages/about/AboutUs'
import ProductsPage from '../pages/products/Products'
import ContactUsPage from '../pages/contact/ContactUs'
import EnquiryPage from '../pages/enquiry/Enquiry'
import FlipbookPage from '../pages/flipbook/Flipbook'
import SiteMapPage from '../pages/sitemap/SiteMap'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getEnquiryPageRoute,
  getFlipbookPageRoute,
  getHomePageRoute,
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
        path: getContactPageRoute(),
        element: <ContactUsPage />,
      },
      {
        path: getEnquiryPageRoute(),
        element: <EnquiryPage />,
      },
      {
        path: getFlipbookPageRoute(),
        element: <FlipbookPage />,
      },
      {
        path: getSiteMapPageRoute(),
        element: <SiteMapPage />,
      },
    ],
  },
]
