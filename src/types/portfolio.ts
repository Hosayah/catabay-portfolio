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

export type Route = 'home' | 'projects' | 'experience' | 'stack' | 'not-found'

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
