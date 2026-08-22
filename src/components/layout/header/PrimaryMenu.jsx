import { NavLink } from 'react-router-dom'
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
import { ChevronDownIcon } from '../../ui/AllSVG'

const menuLinkClass = ({ isActive }) =>
  [
    'relative inline-block whitespace-nowrap px-2 text-[14px] font-semibold uppercase leading-none tracking-wide transition-colors duration-300 xl:px-2.5 xl:text-[15px]',
    'before:absolute before:-top-2 before:left-1/2 before:h-0.5 before:w-5 before:-translate-x-1/2 before:bg-secondary before:opacity-0 before:transition-all before:duration-500',
    isActive ? 'text-secondary before:opacity-100' : 'text-[#242424] hover:text-secondary hover:before:opacity-100',
  ].join(' ')

export default function PrimaryMenu({ variant = 'desktop', onNavigate }) {
  const items = [
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

  if (variant === 'mobile') {
    return (
      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.label} className="border-b border-white/10">
            <NavLink
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                `block px-5 py-3.5 text-[15px] font-semibold uppercase ${
                  isActive ? 'bg-secondary text-white' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
            {item.children ? (
              <ul className="bg-primary/80">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <NavLink
                      to={child.to}
                      onClick={onNavigate}
                      className={({ isActive }) =>
                        `block px-8 py-2.5 text-sm font-medium capitalize ${
                          isActive ? 'bg-secondary text-white' : 'text-white/90 hover:bg-secondary'
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="flex items-center">
      {items.map((item) => (
        <li key={item.label} className="group relative">
          <NavLink to={item.to} className={menuLinkClass}>
            <span className="inline-flex items-center gap-1">
              {item.label}
              {item.children ? <ChevronDownIcon className="size-3.5" /> : null}
            </span>
          </NavLink>
          {item.children ? (
            <ul className="invisible absolute top-[110%] left-0 z-20 w-56 bg-primary py-0 opacity-0 shadow-[0_5px_35px_2px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100">
              {item.children.map((child) => (
                <li key={child.label}>
                  <NavLink
                    to={child.to}
                    className={({ isActive }) =>
                      `block w-full px-4 py-3.5 text-[15px] font-semibold capitalize leading-5 text-white transition-colors ${
                        isActive ? 'bg-secondary' : 'hover:bg-secondary'
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
