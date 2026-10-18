import { LINKS } from '../data.js'

export default function FinalCta() {
  return (
    <section className="final">
      <div className="container">
        <h2>Your Future Deserves the Right Guidance.</h2>
        <p className="lead">Keep learning, explore new possibilities, and make the most of the connections that help you grow.</p>
        <a className="btn btn--light" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">Connect With Salaah</a>
      </div>
    </section>
  )
}
