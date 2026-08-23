import { Outlet, ScrollRestoration } from 'react-router-dom'
import PrimaryFooter from './footer/PrimaryFooter.jsx'
import PrimaryHeader from './header/PrimaryHeader.jsx'

export default function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-white text-black">
      <ScrollRestoration />
      <PrimaryHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <PrimaryFooter />
    </div>
  )
}
