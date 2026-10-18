import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Initiatives from './components/Initiatives.jsx'
import FeaturedEvent from './components/FeaturedEvent.jsx'
import CareerBlueprint from './components/CareerBlueprint.jsx'
import Departments from './components/Departments.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import ImageModal from './components/ImageModal.jsx'

export default function App() {
  const [preview, setPreview] = useState(null)
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Initiatives />
        <FeaturedEvent onPreview={setPreview} />
        <CareerBlueprint onPreview={setPreview} />
        <Departments />
        <SocialLinks />
        <FinalCta />
      </main>
      <Footer />
      {preview && <ImageModal image={preview} onClose={() => setPreview(null)} />}
    </>
  )
}
