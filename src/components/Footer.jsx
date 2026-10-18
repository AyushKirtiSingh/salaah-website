import { NAV, LINKS } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#home" className="wordmark wordmark--light">Salaah<span>The Mentor Community</span></a>
          <p>Connecting ABES Engineering College students with alumni and career guidance.</p>
        </div>
        <nav aria-label="Footer">{NAV.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        <div className="footer__social">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={LINKS.email}>Email</a>
        </div>
      </div>
      <p className="container copy">© {new Date().getFullYear()} Salaah — The Mentor Community, ABES Engineering College.</p>
    </footer>
  )
}
