import { parse } from 'yaml'
import type { BlogPost } from '../types/portfolio'

type BlogFrontmatter = Omit<BlogPost, 'slug' | 'body' | 'readingTime'>

const markdownFiles = import.meta.glob<string>('../content/blogs/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

function readingTime(body: string) {
  const words = body.replace(/[^\p{L}\p{N}'’-]+/gu, ' ').trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function parsePost(path: string, source: string): BlogPost {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) throw new Error(`Invalid blog frontmatter: ${path}`)

  const metadata = parse(match[1]) as BlogFrontmatter
  const body = match[2].trim()
  const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? ''

  return { ...metadata, slug, body, readingTime: readingTime(body) }
}

export const blogPosts = Object.entries(markdownFiles)
  .map(([path, source]) => parsePost(path, source))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}
