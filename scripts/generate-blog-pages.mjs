import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import { parse } from 'yaml'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const contentDirectory = join(projectRoot, 'src', 'content', 'blogs')
const outputDirectory = join(projectRoot, 'blogs')
const siteUrl = 'https://catabay-portfolio.vercel.app'

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const jsonLd = (value) => JSON.stringify(value).replaceAll('<', '\\u003c')

function readPost(filename) {
  const source = readFileSync(join(contentDirectory, filename), 'utf8')
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) throw new Error(`Invalid blog frontmatter: ${filename}`)

  const metadata = parse(match[1])
  const body = match[2].trim()
  const slug = basename(filename, '.md')
  const words = body.replace(/[^\p{L}\p{N}'’-]+/gu, ' ').trim().split(/\s+/).filter(Boolean).length
  return { ...metadata, slug, body, readingTime: Math.max(1, Math.ceil(words / 200)) }
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}

function documentTemplate({ title, description, canonical, type = 'website', image, publishedAt, structuredData, body }) {
  const imageMeta = image ? `<meta property="og:image" content="${escapeHtml(image)}" /><meta name="twitter:image" content="${escapeHtml(image)}" />` : ''
  const articleMeta = publishedAt ? `<meta property="article:published_time" content="${escapeHtml(publishedAt)}" />` : ''
  return `<!doctype html>
<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="theme-color" content="#f7f7f5" /><meta name="description" content="${escapeHtml(description)}" /><meta property="og:type" content="${type}" /><meta property="og:title" content="${escapeHtml(title)}" /><meta property="og:description" content="${escapeHtml(description)}" /><meta property="og:url" content="${canonical}" />${imageMeta}${articleMeta}<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" /><meta name="twitter:title" content="${escapeHtml(title)}" /><meta name="twitter:description" content="${escapeHtml(description)}" /><link rel="canonical" href="${canonical}" /><link rel="icon" href="/favicon.svg" /><link rel="manifest" href="/site.webmanifest" /><title>${escapeHtml(title)}</title><script id="route-structured-data" type="application/ld+json">${jsonLd(structuredData)}</script></head>
<body><div id="root">${body}</div><script type="module" src="/src/main.tsx"></script></body></html>`
}

const posts = readdirSync(contentDirectory)
  .filter((filename) => filename.endsWith('.md'))
  .map(readPost)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

rmSync(outputDirectory, { recursive: true, force: true })
mkdirSync(outputDirectory, { recursive: true })

const blogDescription = 'Writing by Josiah Catabay about cybersecurity, software engineering, applied AI, and lessons learned while building complete systems.'
const listMarkup = posts.map((post) => `<article><p>${escapeHtml(post.category)} · ${escapeHtml(formatDate(post.publishedAt))} · ${post.readingTime} min read</p><h2><a href="/blogs/${post.slug}">${escapeHtml(post.title)}</a></h2><p>${escapeHtml(post.excerpt)}</p></article>`).join('')
const blogStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Writing by Josiah Catabay',
  url: `${siteUrl}/blogs`,
  description: blogDescription,
  author: { '@type': 'Person', name: 'Josiah Daniel D. Catabay', url: siteUrl },
  blogPost: posts.map((post) => ({ '@type': 'BlogPosting', headline: post.title, url: `${siteUrl}/blogs/${post.slug}`, datePublished: post.publishedAt })),
}
writeFileSync(join(outputDirectory, 'index.html'), documentTemplate({ title: 'Writing — Josiah Catabay', description: blogDescription, canonical: `${siteUrl}/blogs`, structuredData: blogStructuredData, body: `<main><header><p>Writing</p><h1>Ideas, decisions, and lessons learned.</h1><p>${escapeHtml(blogDescription)}</p></header><section aria-label="Blog posts">${listMarkup}</section></main>` }))

const renderer = new marked.Renderer()
renderer.html = () => ''

for (const post of posts) {
  const articleDirectory = join(outputDirectory, post.slug)
  mkdirSync(articleDirectory, { recursive: true })
  const canonical = `${siteUrl}/blogs/${post.slug}`
  const image = `${siteUrl}${post.cover.src}`
  const articleHtml = marked.parse(post.body, { renderer })
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: canonical,
    author: { '@type': 'Person', name: 'Josiah Daniel D. Catabay', url: siteUrl },
  }
  const body = `<main><article><p><a href="/blogs">All writing</a></p><header><p>${escapeHtml(post.category)}</p><h1>${escapeHtml(post.title)}</h1><p>${escapeHtml(post.excerpt)}</p><p>By Josiah Daniel D. Catabay · <time datetime="${post.publishedAt}">${escapeHtml(formatDate(post.publishedAt))}</time> · ${post.readingTime} min read</p></header><figure><img src="${escapeHtml(post.cover.src)}" alt="${escapeHtml(post.cover.alt)}" width="1600" height="1067" /><figcaption>Photo by <a href="${escapeHtml(post.cover.photographerUrl)}">${escapeHtml(post.cover.photographer)}</a> on <a href="${escapeHtml(post.cover.sourceUrl)}">Unsplash</a>.</figcaption></figure><div>${articleHtml}</div></article></main>`
  writeFileSync(join(articleDirectory, 'index.html'), documentTemplate({ title: `${post.title} — Josiah Catabay`, description: post.excerpt, canonical, type: 'article', image, publishedAt: post.publishedAt, structuredData, body }))
}

console.log(`Generated ${posts.length} blog article page${posts.length === 1 ? '' : 's'}.`)
