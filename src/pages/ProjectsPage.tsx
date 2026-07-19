import { Arrow } from '../components/common/Arrow'
import { Gallery } from '../components/common/Gallery'
import { ContactSection } from '../components/layout/ContactSection'
import { contact, projects } from '../config/portfolio'

export function ProjectsPage() {
  return (
    <div className="inner-page">
      <header className="page-intro"><p className="eyebrow">01 / Selected work</p><h1>Projects built<span className="heading-break"><br /></span>{' '}to solve real problems.</h1><p>Full-stack platforms, machine learning pipelines, and accessible interfaces—designed and engineered from data to delivery.</p></header>
      <div className="case-studies">
        {projects.map((project, index) => (
          <article className={`case-study ${project.supporting ? 'case-study-supporting' : ''}`} id={project.slug} key={project.slug}>
            <div className="case-title"><p>0{index + 1} / {project.context} · {project.role}</p><h2>{project.name}</h2><span>{project.descriptor}</span></div>
            <p className="case-summary">{project.summary}</p>
            <Gallery project={project} />
            <div className="case-details">
              {project.supporting && project.sections ? <div className="supporting-breakdown">{project.sections.map((section) => <section key={section.label}><h3>{section.label}</h3><p>{section.text}</p></section>)}</div> : <div><h3>Engineering highlights</h3><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>}
              <aside><h3>Outcome</h3><p>{project.outcome}</p><h3>Stack</h3><ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>{project.liveUrl ? <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site <Arrow /></a> : <a className="text-link" href={contact.github} target="_blank" rel="noreferrer">View GitHub profile <Arrow /></a>}</aside>
            </div>
          </article>
        ))}
      </div>
      <ContactSection />
    </div>
  )
}
