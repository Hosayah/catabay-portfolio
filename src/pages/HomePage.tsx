import profilePhoto from '../assets/images/profile/profile-picture.jpg'
import { ProjectPreview } from '../components/common/ProjectPreview'
import { SectionHeading } from '../components/common/SectionHeading'
import { SupportingProject } from '../components/common/SupportingProject'
import { ContactSection } from '../components/layout/ContactSection'
import { contact, projects } from '../config/portfolio'
import type { Navigate } from '../types/portfolio'
import { Arrow } from '../components/common/Arrow'

export function HomePage({ navigate }: { navigate: Navigate }) {
  const primaryProjects = projects.filter((project) => !project.supporting)
  const supportingProject = projects.find((project) => project.supporting)

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> BSIT Computer Security Student (3rd) · Applied AI</p>
          <h1>Josiah Daniel<br />D. Catabay</h1>
          <p className="hero-lead">I engineer end-to-end web and AI products—from data pipelines and model inference APIs to accessible React interfaces.</p>
          <dl className="hero-proof" aria-label="Selected engineering highlights">
            <div><dt>91</dt><dd>REST endpoints<br />in one shared backend</dd></div>
            <div><dt>165K+</dt><dd>Agricultural<br />records engineered</dd></div>
            <div><dt>3</dt><dd>End-to-end<br />systems delivered</dd></div>
          </dl>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Get in touch <Arrow /></a>
            <a className="text-link" href="/CATABAY_JOSIAH_CV.pdf" download="Josiah-Daniel-Catabay-CV.pdf">Download CV ↓</a>
          </div>
          <div className="hero-footnote">
            <p className="location">Based in {contact.location}</p>
            <div className="hero-socials"><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-frame">
            <img src={profilePhoto} alt="Portrait of Josiah Daniel D. Catabay" />
            <span className="portrait-badge"><span className="status-dot" /> Open to opportunities</span>
          </div>
          <figcaption><span>Full-stack engineering</span><span>AI · ML · Data</span></figcaption>
        </figure>
      </section>

      <section className="section-block" aria-labelledby="featured-projects">
        <SectionHeading number="01" title="Selected projects" link="/projects" navigate={navigate} />
        <div className="project-grid" id="featured-projects">{primaryProjects.map((project, index) => <ProjectPreview key={project.slug} project={project} index={index} navigate={navigate} />)}</div>
        {supportingProject && <SupportingProject project={supportingProject} navigate={navigate} />}
      </section>

      <section className="section-block" aria-labelledby="experience-preview">
        <SectionHeading number="02" title="Experience" link="/experience" navigate={navigate} />
        <div className="experience-preview" id="experience-preview">
          <div><p className="date">2023 — 2024</p><h3>Web Developer (OJT)</h3><p>PHINMA University of Pangasinan</p></div>
          <p className="experience-outcome">Delivered a production-ready web system recognized with the <strong>Best in Business Venture</strong> award.</p>
        </div>
      </section>

      <section className="section-block" aria-labelledby="stack-preview">
        <SectionHeading number="03" title="Core stack" link="/stack" navigate={navigate} />
        <div className="stack-marquee" id="stack-preview">{['Python', 'React', 'REST APIs', 'PyTorch', 'MySQL', 'Solidity', 'LLM Integration'].map((item) => <span key={item}>{item}</span>)}</div>
      </section>
      <ContactSection />
    </>
  )
}
