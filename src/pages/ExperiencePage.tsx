import { ContactSection } from '../components/layout/ContactSection'
import { experiences } from '../config/portfolio'

export function ExperiencePage() {
  return (
    <div className="inner-page">
      <header className="page-intro"><p className="eyebrow">02 / Experience</p><h1>Learning by building<span className="heading-break"><br /></span>{' '}complete systems.</h1><p>Hands-on experience across web development, backend architecture, applied machine learning, and product delivery.</p></header>
      <section className="timeline" aria-label="Experience timeline">
        {experiences.map((role, index) => <article key={role.title + role.org}><span className="timeline-index">0{index + 1}</span><div><p className="date">{role.date}</p><h2>{role.title}</h2><h3>{role.org}</h3></div><p>{role.text}</p></article>)}
      </section>
      <section className="education"><p className="eyebrow">Education</p><div><h2>B.S. in Information Technology</h2><p>PHINMA University of Pangasinan</p><span>2024 — Present</span></div></section>
      <ContactSection />
    </div>
  )
}
