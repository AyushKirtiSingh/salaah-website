import { CAREERS } from '../data.js'

export default function CareerBlueprint({ onPreview }) {
  return (
    <section id="career-blueprint" className="section section--cream2">
      <div className="container">
        <p className="eyebrow">Explore Career Paths</p>
        <h2>Career Blueprint</h2>
        <p className="lead">Explore career roles, understand the skills they require, and discover possible directions for your professional journey.</p>
        <ul className="gallery">
          {CAREERS.map((c) => (
            <li key={c.title}>
              <button className="poster-btn" onClick={() => onPreview(c)} aria-label={`Open larger preview: ${c.title}`}>
                <img src={c.src} alt={c.alt} loading="lazy" />
              </button>
              <h3>{c.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
