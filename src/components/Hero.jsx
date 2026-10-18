import { CAREERS } from '../data.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Salaah — The Mentor Community</p>
          <h1>Your Journey. <em>Their Experience.</em> Your Future.</h1>
          <p className="lead">The right guidance can change the way you see your future. Salaah connects students with alumni, career insights, and opportunities to grow beyond the classroom.</p>
          <div className="actions">
            <a className="btn btn--primary" href="#about">Explore Salaah</a>
            <a className="btn btn--ghost" href="#initiatives">Discover Our Initiatives</a>
          </div>
          <p className="label">ABES Engineering College · Ghaziabad</p>
        </div>
        <div className="hero__art" aria-hidden="false">
          <img className="hero__poster hero__poster--a" src={CAREERS[0].src} alt={CAREERS[0].alt} />
          <img className="hero__poster hero__poster--b" src={CAREERS[3].src} alt={CAREERS[3].alt} />
        </div>
      </div>
    </section>
  )
}
