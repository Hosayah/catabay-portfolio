import type { Navigate } from '../../types/portfolio'
import { Arrow } from './Arrow'

type SectionHeadingProps = {
  number: string
  title: string
  link?: string
  navigate?: Navigate
}

export function SectionHeading({ number, title, link, navigate }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p>{number}</p>
      <h2>{title}</h2>
      {link && <a href={link} onClick={(event) => { if (navigate) { event.preventDefault(); navigate(link) } }}>View all <Arrow /></a>}
    </div>
  )
}
