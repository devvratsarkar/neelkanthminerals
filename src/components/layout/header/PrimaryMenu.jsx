import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '../../ui/AllSVG'
import { getNavItems } from './navItems'

const menuLinkClass = ({ isActive }) =>
  [
    'relative inline-block whitespace-nowrap px-1.5 text-[12px] font-semibold uppercase leading-none tracking-wide transition-colors duration-300 xl:px-2 xl:text-[14px] 2xl:px-2.5 2xl:text-[15px]',
    'before:absolute before:-top-2 before:left-1/2 before:h-0.5 before:w-5 before:-translate-x-1/2 before:bg-secondary before:opacity-0 before:transition-all before:duration-500',
    isActive ? 'text-secondary before:opacity-100' : 'text-[#242424] hover:text-secondary hover:before:opacity-100',
  ].join(' ')

export default function PrimaryMenu() {
  const items = getNavItems()

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
