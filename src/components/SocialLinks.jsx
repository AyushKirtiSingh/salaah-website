import { Instagram, Linkedin, Mail } from 'lucide-react'
import { LINKS } from '../data.js'

const ITEMS = [
  { icon: Instagram, label: 'Instagram', value: '@salaah_abesec', href: LINKS.instagram, ext: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'Salaah — The Mentor Community', href: LINKS.linkedin, ext: true },
  { icon: Mail, label: 'Email', value: 'salaah@abes.ac.in', href: LINKS.email },
]

export default function SocialLinks() {
  return (
    <section id="contact" className="section section--peach">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2>Stay Connected. Keep Growing.</h2>
        <p className="lead">Follow Salaah for career insights, community initiatives, event announcements, and opportunities to keep learning.</p>
        <ul className="grid grid--3 cards">
          {ITEMS.map(({ icon: Icon, label, value, href, ext }) => (
            <li key={label}>
              <a className="card card--lift social" href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={`${label}: ${value}${ext ? ' (opens in a new tab)' : ''}`}>
                <span className="icon"><Icon aria-hidden="true" /></span>
                <span><strong>{label}</strong><br />{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
