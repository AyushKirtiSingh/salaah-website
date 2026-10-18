import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function ImageModal({ image, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbar}px`
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') { e.preventDefault(); closeRef.current?.focus() } // only one control: keep focus inside
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
      prev?.focus?.()
    }
  }, [onClose])
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" role="dialog" aria-modal="true" aria-label={image.title || 'Poster preview'} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close preview"><X /></button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  )
}
