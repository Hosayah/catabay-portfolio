import type { Navigate, Project } from '../../types/portfolio'
import { Arrow } from './Arrow'

export function SupportingProject({ project, navigate }: { project: Project; navigate: Navigate }) {
  const openCaseStudy = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate(`/projects#${project.slug}`)
    window.setTimeout(() => document.getElementById(project.slug)?.scrollIntoView(), 0)
  }

  return (
    <article className="supporting-project">
      <a className="supporting-project-image" href={`/projects#${project.slug}`} onClick={openCaseStudy}>
        <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" />
      </a>
      <div className="supporting-project-copy">
        <div className="supporting-project-status"><span><span className="status-dot" /> Live on Firebase</span><span>{project.context} · {project.role}</span></div>
        <p className="eyebrow">Additional shipped work</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="supporting-project-actions">
          <a className="button button-dark" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site <Arrow /></a>
          <a className="text-link" href={`/projects#${project.slug}`} onClick={openCaseStudy}>Read case study →</a>
        </div>
      </div>
    </article>
  )
}
