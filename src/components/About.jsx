import { VALUES } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="split">
          <div>
            <p className="eyebrow">About Salaah</p>
            <h2>Guidance That Connects. Experience That Inspires.</h2>
          </div>
          <p className="lead">Salaah — The Mentor Community at ABES Engineering College aims to bridge the gap between students and alumni. Through mentorship, career guidance, practical learning, and shared experiences, the community helps students explore career opportunities and prepare for the professional world.</p>
        </div>
        <ul className="grid grid--3 cards">
          {VALUES.map(([t, d], i) => (
            <li key={t} className="card"><span className="card__num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
