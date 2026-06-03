import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav className="nav" data-scrolled={scrolled} aria-label="Primary">
        <div className="container nav__inner">
          <a className="nav__brand" href="#main" aria-label="SQFT AI home">
            <img
              className="nav__logo"
              src="/sqft-ai-logo.png"
              alt="SQFT AI"
              width={2172}
              height={724}
            />
          </a>
          <span className="nav__pill">Coming Soon</span>

          <span className="nav__spacer" />

          <ul className="nav__links">
            <li>
              <a className="nav__link" href="#vision">
                Vision
              </a>
            </li>
            <li>
              <a className="nav__link" href="#early-access">
                Early Access
              </a>
            </li>
          </ul>

          <a className="btn btn-primary btn-sm" href="#early-access">
            <span className="nav__cta-label-long">Join the&nbsp;</span>Waitlist
          </a>
        </div>
      </nav>
    </header>
  )
}
