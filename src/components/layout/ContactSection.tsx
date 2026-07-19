import { useState } from 'react'
import { contact } from '../../config/portfolio'
import { defaultMailUrl, gmailComposeUrl } from '../../services/email'
import { Arrow } from '../common/Arrow'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">Available for opportunities</p>
      <h2 id="contact-title">Let’s build something<br />that matters.</h2>
      <p className="contact-intro">For full-stack engineering, applied AI, or collaborative projects, send me a message.</p>
      <div className="contact-actions">
        <a className="button button-dark" href={gmailComposeUrl} target="_blank" rel="noreferrer">Send with Gmail <Arrow /></a>
        <button className="button button-light" type="button" onClick={copyEmail} aria-live="polite">{copied ? 'Email copied' : 'Copy email'}</button>
      </div>
      <div className="contact-details">
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        <a href="/CATABAY_JOSIAH_CV.pdf" download="Josiah-Daniel-Catabay-CV.pdf">Download CV ↓</a>
        <span>{contact.phone}</span>
      </div>
    </section>
  )
}
