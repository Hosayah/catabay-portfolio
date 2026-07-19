import { ContactSection } from '../components/layout/ContactSection'
import { stackGroups } from '../config/portfolio'

export function StackPage() {
  return (
    <div className="inner-page">
      <header className="page-intro"><p className="eyebrow">03 / Technical stack</p><h1>Tools chosen<span className="heading-break"><br /></span>{' '}for the problem.</h1><p>A practical toolkit for building responsive products, secure APIs, data pipelines, and AI-powered experiences.</p></header>
      <section className="stack-groups" aria-label="Technical skills">
        {stackGroups.map((group, index) => <article key={group.category}><span>0{index + 1}</span><div><h2>{group.category}</h2><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div><p>{group.evidence}</p></article>)}
      </section>
      <section className="working-style"><p className="eyebrow">How I work</p><h2>From model output<span className="heading-break"><br /></span>{' '}to usable product.</h2><p>I approach engineering as a connected system: understand the data, design a clear interface, build reliable APIs, and make the result useful to the people it serves.</p></section>
      <ContactSection />
    </div>
  )
}
