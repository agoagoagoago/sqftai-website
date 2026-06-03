export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src="/sqft-ai-logo.png"
            alt="SQFT AI"
            width={2172}
            height={724}
          />
          <p className="footer__tagline">
            Agentic intelligence for the future of real estate.
          </p>
        </div>
        <p className="footer__copy">© 2026 SQFT AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
