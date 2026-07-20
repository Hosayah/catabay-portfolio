import { ExperiencePage } from '../pages/ExperiencePage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { StackPage } from '../pages/StackPage'
import type { BlogPost, Navigate, Route } from '../types/portfolio'

export function AppRoutes({ route, post, navigate }: { route: Route; post?: BlogPost; navigate: Navigate }) {
  switch (route) {
    case 'home': return <HomePage navigate={navigate} />
    case 'projects': return <ProjectsPage />
    case 'experience': return <ExperiencePage />
    case 'stack': return <StackPage />
    case 'blogs': return <BlogsPage navigate={navigate} />
    case 'blog-post': return post ? <BlogPostPage post={post} navigate={navigate} /> : <NotFoundPage navigate={navigate} />
    case 'not-found': return <NotFoundPage navigate={navigate} />
  }
}
import { BlogPostPage } from '../pages/BlogPostPage'
import { BlogsPage } from '../pages/BlogsPage'
