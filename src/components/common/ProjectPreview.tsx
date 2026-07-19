import type { Navigate, Project } from '../../types/portfolio'

type ProjectPreviewProps = {
  project: Project
  index: number
  navigate: Navigate
}

export function ProjectPreview({ project, index, navigate }: ProjectPreviewProps) {
  const openProject = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate(`/projects#${project.slug}`)
    window.setTimeout(() => document.getElementById(project.slug)?.scrollIntoView(), 0)
  }

  return (
    <article className="project-preview">
      <a className="project-image" href={`/projects#${project.slug}`} onClick={openProject}>
        <img src={project.images[0].src} alt={project.images[0].alt} loading={index === 0 ? 'eager' : 'lazy'} />
      </a>
      <div className="project-meta"><span>0{index + 1}</span><span>{project.context} · {project.role}</span></div>
      <h3><a href={`/projects#${project.slug}`} onClick={openProject}>{project.name}</a></h3>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  )
}
