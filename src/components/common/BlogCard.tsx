import type { BlogPost, Navigate } from '../../types/portfolio'
import { formatBlogDate } from '../../config/blogs'
import { Arrow } from './Arrow'

export function BlogCard({ post, navigate, featured = false, eager = false, showImage = true }: { post: BlogPost; navigate: Navigate; featured?: boolean; eager?: boolean; showImage?: boolean }) {
  const href = `/blogs/${post.slug}`
  const openPost = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate(href)
  }

  return (
    <article className={`blog-card ${featured ? 'blog-card-featured' : ''} ${showImage ? '' : 'blog-card-text'}`}>
      {showImage && <a className="blog-card-image" href={href} onClick={openPost}>
        <img src={post.cover.src} alt={post.cover.alt} width="1600" height="1067" loading={eager ? 'eager' : 'lazy'} />
      </a>}
      <div className="blog-card-copy">
        <p className="blog-meta"><span>{post.category}</span><span>{formatBlogDate(post.publishedAt)} · {post.readingTime} min read</span></p>
        <h2><a href={href} onClick={openPost}>{post.title}</a></h2>
        <p>{post.excerpt}</p>
        <a className="text-link" href={href} onClick={openPost}>Read article <Arrow /></a>
      </div>
    </article>
  )
}
