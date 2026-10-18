import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { document.removeEventListener('keydown', onKey); io.disconnect() }
  }, [])
  return (
    <header className="nav">
      <div className="container nav__bar">
        <a href="#home" className="wordmark" onClick={() => setOpen(false)}>Salaah<span>The Mentor Community</span></a>
        <nav id="menu" className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn--primary nav__cta" href="#contact" onClick={() => setOpen(false)}>Join Salaah</a>
        </nav>
        <button className="nav__toggle" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
