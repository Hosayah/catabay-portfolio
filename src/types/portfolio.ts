export type ProjectImage = {
  src: string
  alt: string
  type: 'desktop' | 'mobile'
  featured?: boolean
  caption?: string
}

export type Project = {
  slug: string
  name: string
  descriptor: string
  role: string
  context: 'Academic Project' | 'Academic Team Project'
  summary: string
  outcome: string
  highlights: string[]
  stack: string[]
  images: ProjectImage[]
  liveUrl?: string
  supporting?: boolean
  sections?: { label: string; text: string }[]
}

export type BlogImage = {
  src: string
  alt: string
  photographer: string
  photographerUrl: string
  sourceUrl: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  category: string
  cover: BlogImage
  body: string
  readingTime: number
}

export type Route = 'home' | 'projects' | 'experience' | 'stack' | 'blogs' | 'blog-post' | 'not-found'

export type Navigate = (path: string) => void

export type Experience = {
  date: string
  title: string
  org: string
  text: string
}

export type StackGroup = {
  category: string
  items: string[]
  evidence: string
}
