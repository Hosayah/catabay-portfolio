import { useEffect, useState } from 'react'
import type { Route } from '../types/portfolio'

const routeMap: Record<string, Route> = {
  '/': 'home',
  '/index.html': 'home',
  '/projects': 'projects',
  '/projects/': 'projects',
  '/experience': 'experience',
  '/experience/': 'experience',
  '/stack': 'stack',
  '/stack/': 'stack',
}

const metadata: Record<Route, { title: string; description: string }> = {
  home: { title: 'Josiah Catabay — Full-Stack + AI Engineer', description: 'Josiah Daniel D. Catabay builds full-stack systems, REST APIs, machine learning tools, and AI-powered products.' },
  projects: { title: 'Projects — Josiah Catabay', description: 'Explore CropForecast, DagupanGovLedger, PyVidNote, and Greenovation—full-stack, blockchain, applied AI, and live frontend work by Josiah Catabay.' },
  experience: { title: 'Experience — Josiah Catabay', description: 'Full-stack development, backend architecture, applied machine learning, blockchain, and product delivery experience.' },
  stack: { title: 'Technical Stack — Josiah Catabay', description: 'Python, React, REST APIs, PyTorch, Transformers, MySQL, Firebase, Supabase, Solidity, Ethereum, and more.' },
  'not-found': { title: 'Page Not Found — Josiah Catabay', description: 'The requested page could not be found.' },
}

export function useRoute() {
  const getRoute = () => routeMap[window.location.pathname] ?? 'not-found'
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.title = metadata[route].title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', metadata[route].description)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', `${window.location.origin}${window.location.pathname}`)
  }, [route])

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setRoute(getRoute())
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return { route, navigate }
}
