import Markdown from 'react-markdown'
import { formatBlogDate } from '../config/blogs'
import type { BlogPost, Navigate } from '../types/portfolio'
import { ContactSection } from '../components/layout/ContactSection'

export function BlogPostPage({ post, navigate }: { post: BlogPost; navigate: Navigate }) {
  return (
    <>
      <article className="article-page">
        <a className="article-back" href="/blogs" onClick={(event) => { event.preventDefault(); navigate('/blogs') }}>← All writing</a>
        <header className="article-header">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <div className="article-byline">
            <span>By Josiah Daniel D. Catabay</span>
            <span><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time> · {post.readingTime} min read</span>
          </div>
        </header>
        <figure className="article-cover">
          <img src={post.cover.src} alt={post.cover.alt} width="1600" height="1067" fetchPriority="high" />
          <figcaption>Photo by <a href={post.cover.photographerUrl} target="_blank" rel="noreferrer">{post.cover.photographer}</a> on <a href={post.cover.sourceUrl} target="_blank" rel="noreferrer">Unsplash</a>.</figcaption>
        </figure>
        <div className="article-body"><Markdown>{post.body}</Markdown></div>
        <div className="article-footer">
          <p className="eyebrow">Continue exploring</p>
          <a className="text-link" href="/blogs" onClick={(event) => { event.preventDefault(); navigate('/blogs') }}>View all writing →</a>
        </div>
      </article>
      <ContactSection />
    </>
  )
}
