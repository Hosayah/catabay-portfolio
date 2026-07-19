import { ExperiencePage } from '../pages/ExperiencePage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { StackPage } from '../pages/StackPage'
import type { Navigate, Route } from '../types/portfolio'

export function AppRoutes({ route, navigate }: { route: Route; navigate: Navigate }) {
  switch (route) {
    case 'home': return <HomePage navigate={navigate} />
    case 'projects': return <ProjectsPage />
    case 'experience': return <ExperiencePage />
    case 'stack': return <StackPage />
    case 'not-found': return <NotFoundPage navigate={navigate} />
  }
}
