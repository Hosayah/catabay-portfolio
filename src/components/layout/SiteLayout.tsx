import type { ReactNode } from 'react'
import type { Navigate, Route } from '../../types/portfolio'
import { Footer } from './Footer'
import { Header } from './Header'

type SiteLayoutProps = {
  children: ReactNode
  route: Route
  navigate: Navigate
}

export function SiteLayout({ children, route, navigate }: SiteLayoutProps) {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header route={route} navigate={navigate} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
