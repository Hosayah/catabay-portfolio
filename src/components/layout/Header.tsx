import { useEffect, useRef, useState } from 'react'
import type { Navigate, Route } from '../../types/portfolio'
import { Arrow } from '../common/Arrow'

export function Header({ route, navigate }: { route: Route; navigate: Navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const links = [['/', 'Home', 'home'], ['/projects', 'Projects', 'projects'], ['/experience', 'Experience', 'experience'], ['/stack', 'Stack', 'stack']] as const

  useEffect(() => setMenuOpen(false), [route])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const openRoute = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault()
    setMenuOpen(false)
    navigate(path)
  }

  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setMenuOpen(false)
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
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <a className="wordmark" href="/" onClick={(event) => openRoute(event, '/')} aria-label="Josiah Catabay, home">JC<span>.</span></a>
      <button ref={menuButton} className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span className="hamburger" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation">
        {links.map(([path, label, key]) => (
          <a key={path} href={path} aria-current={route === key ? 'page' : undefined} onClick={(event) => openRoute(event, path)}>{label}</a>
        ))}
        <a className="mobile-contact-link" href="#contact" onClick={scrollToContact}>Let’s talk <Arrow /></a>
      </nav>
      <a className="header-cta" href="#contact" onClick={scrollToContact}>Let’s talk <Arrow /></a>
    </header>
  )
}
