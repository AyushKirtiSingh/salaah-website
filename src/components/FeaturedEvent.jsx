import { MEET } from '../data.js'

const DETAILS = [
  ['Event', 'Meet & Greet — Offline Podcast'],
  ['Speaker', 'Mr. Shivam Sharma'],
  ['Profile', 'ABES alumnus, Batch of 2017; Technical Lead at IBM, USA, according to the supplied poster'],
  ['Date', '15 April 2026'],
  ['Time', '4:30 PM'],
  ['Venue', 'Auditorium, Raman Block'],
]

export default function FeaturedEvent({ onPreview }) {
  return (
    <section id="events" className="section">
      <div className="container event">
        <button className="poster-btn" onClick={() => onPreview(MEET)} aria-label="Open larger preview of the Meet & Greet poster">
          <img src={MEET.src} alt={MEET.alt} loading="lazy" />
        </button>
        <div>
          <p className="eyebrow">From the Salaah Community</p>
          <h2>Real Experiences. Honest Conversations.</h2>
          <span className="badge">Past Event</span>
          <dl className="details">
            {DETAILS.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
        </div>
      </div>
    </section>
  )
}
