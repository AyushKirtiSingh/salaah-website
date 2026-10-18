import { INITIATIVES } from '../data.js'

export default function Initiatives() {
  return (
    <section id="initiatives" className="section section--peach">
      <div className="container">
        <p className="eyebrow">What We Do</p>
        <h2>Turning Guidance Into Growth.</h2>
        <p className="lead">From building practical skills to learning directly from industry experiences, Salaah creates opportunities to prepare for the next step.</p>
        <ul className="grid grid--4 cards">
          {INITIATIVES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card card--lift"><span className="icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
