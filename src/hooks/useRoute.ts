import { useEffect, useState } from 'react'
import { blogPosts, getBlogPost } from '../config/blogs'
import type { BlogPost, Route } from '../types/portfolio'

const routeMap: Record<string, Route> = {
  '/': 'home',
  '/index.html': 'home',
  '/projects': 'projects',
  '/projects/': 'projects',
  '/experience': 'experience',
  '/experience/': 'experience',
  '/stack': 'stack',
  '/stack/': 'stack',
  '/blogs': 'blogs',
  '/blogs/': 'blogs',
}

const metadata: Record<Route, { title: string; description: string }> = {
  home: { title: 'Josiah Catabay — Full-Stack + AI Engineer', description: 'Josiah Daniel D. Catabay builds full-stack systems, REST APIs, machine learning tools, and AI-powered products.' },
  projects: { title: 'Projects — Josiah Catabay', description: 'Explore CropForecast, DagupanGovLedger, PyVidNote, and Greenovation—full-stack, blockchain, applied AI, and live frontend work by Josiah Catabay.' },
  experience: { title: 'Experience — Josiah Catabay', description: 'Full-stack development, backend architecture, applied machine learning, blockchain, and product delivery experience.' },
  stack: { title: 'Technical Stack — Josiah Catabay', description: 'Python, React, REST APIs, PyTorch, Transformers, MySQL, Firebase, Supabase, Solidity, Ethereum, and more.' },
  blogs: { title: 'Writing — Josiah Catabay', description: 'Writing by Josiah Catabay about cybersecurity, software engineering, applied AI, and lessons learned while building complete systems.' },
  'blog-post': { title: 'Article — Josiah Catabay', description: 'Technical and career writing by Josiah Daniel D. Catabay.' },
  'not-found': { title: 'Page Not Found — Josiah Catabay', description: 'The requested page could not be found.' },
}

type RouteState = { route: Route; post?: BlogPost }

function getRouteState(): RouteState {
  const directRoute = routeMap[window.location.pathname]
  if (directRoute) return { route: directRoute }

  const match = window.location.pathname.match(/^\/blogs\/([^/]+)\/?$/)
  if (match) {
    const post = getBlogPost(decodeURIComponent(match[1]))
    if (post) return { route: 'blog-post', post }
  }

  return { route: 'not-found' }
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, value?: string) {
  const existing = document.querySelector<HTMLMetaElement>(selector)
  if (!value) {
    existing?.remove()
    return
  }
  const element = existing ?? document.head.appendChild(document.createElement('meta'))
  element.setAttribute(attribute, key)
  element.setAttribute('content', value)
}

export function useRoute() {
  const [routeState, setRouteState] = useState<RouteState>(getRouteState)

  useEffect(() => {
    const onPopState = () => setRouteState(getRouteState())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const { route, post } = routeState
    const routeMetadata = post ? { title: `${post.title} — Josiah Catabay`, description: post.excerpt } : metadata[route]
    const canonical = `${window.location.origin}${window.location.pathname}`

    document.title = routeMetadata.title
    const image = post ? `${window.location.origin}${post.cover.src}` : undefined
    setMeta('meta[name="description"]', 'name', 'description', routeMetadata.description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', post ? 'article' : 'website')
    setMeta('meta[property="og:title"]', 'property', 'og:title', routeMetadata.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', routeMetadata.description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setMeta('meta[property="og:image"]', 'property', 'og:image', image)
    setMeta('meta[property="article:published_time"]', 'property', 'article:published_time', post?.publishedAt)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', post ? 'summary_large_image' : 'summary')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', routeMetadata.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', routeMetadata.description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonical)

    const existingStructuredData = document.getElementById('route-structured-data')
    if (route !== 'blogs' && !post) {
      existingStructuredData?.remove()
      return
    }
    const structuredData = post ? {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: canonical,
      author: { '@type': 'Person', name: 'Josiah Daniel D. Catabay', url: window.location.origin },
    } : {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Writing by Josiah Catabay',
      url: canonical,
      description: routeMetadata.description,
      author: { '@type': 'Person', name: 'Josiah Daniel D. Catabay', url: window.location.origin },
      blogPost: blogPosts.map((entry) => ({ '@type': 'BlogPosting', headline: entry.title, url: `${window.location.origin}/blogs/${entry.slug}`, datePublished: entry.publishedAt })),
    }
    const script = existingStructuredData ?? document.head.appendChild(document.createElement('script'))
    script.id = 'route-structured-data'
    script.setAttribute('type', 'application/ld+json')
    script.textContent = JSON.stringify(structuredData)
  }, [routeState])

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setRouteState(getRouteState())
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return { ...routeState, navigate }
}
