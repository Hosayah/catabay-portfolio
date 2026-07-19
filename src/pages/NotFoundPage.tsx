import type { Navigate } from '../types/portfolio'

export function NotFoundPage({ navigate }: { navigate: Navigate }) {
  return (
    <section className="not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This route doesn’t<br />exist yet.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <a className="button button-dark" href="/" onClick={(event) => { event.preventDefault(); navigate('/') }}>Return home →</a>
    </section>
  )
}
