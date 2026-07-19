import type { Navigate, Route } from '../../types/portfolio'
import { Arrow } from '../common/Arrow'

export function Header({ route, navigate }: { route: Route; navigate: Navigate }) {
  const links = [['/', 'Home', 'home'], ['/projects', 'Projects', 'projects'], ['/experience', 'Experience', 'experience'], ['/stack', 'Stack', 'stack']] as const

  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState({}, '', `${window.location.pathname}#contact`)
      return
    }
    navigate('/#contact')
    window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="/" onClick={(event) => { event.preventDefault(); navigate('/') }} aria-label="Josiah Catabay, home">JC<span>.</span></a>
      <nav aria-label="Primary navigation">
        {links.map(([path, label, key]) => (
          <a key={path} href={path} aria-current={route === key ? 'page' : undefined} onClick={(event) => { event.preventDefault(); navigate(path) }}>{label}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contact" onClick={scrollToContact}>Let’s talk <Arrow /></a>
    </header>
  )
}
