import { BlogCard } from '../components/common/BlogCard'
import { blogPosts } from '../config/blogs'
import type { Navigate } from '../types/portfolio'

export function BlogsPage({ navigate }: { navigate: Navigate }) {
  return (
    <div className="inner-page">
      <header className="page-intro blog-intro">
        <p className="eyebrow">04 / Writing</p>
        <h1>Ideas, decisions,<span className="heading-break"><br /></span>{' '}and lessons learned.</h1>
        <p>Reflections on cybersecurity, software engineering, applied AI, and the choices shaping how I build and learn.</p>
      </header>
      <section className="blog-list" aria-label="Blog posts">
        {blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} navigate={navigate} featured={index === 0} showImage={false} />)}
      </section>
    </div>
  )
}
