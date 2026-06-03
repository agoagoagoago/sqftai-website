import HeroIllustration from './HeroIllustration'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Agentic AI for Real Estate</p>

          <h1 className="hero__title" id="hero-title">
            Agentic AI is about to transform the{' '}
            <span className="accent">real estate world.</span>
          </h1>

          <p className="hero__lead">
            SQFT AI is building an intelligent agent designed to turn complex property
            signals, market context, and real estate workflows into clear, decisive action.
          </p>

          <div className="hero__actions">
            <a className="btn btn-primary" href="#early-access">
              Get Early Access
            </a>
            <a className="btn btn-secondary" href="#vision">
              Explore the Vision
            </a>
          </div>

          <p className="hero__note">
            Launching soon. Join the waitlist for early access updates.
          </p>
        </div>

        <HeroIllustration />
      </div>
    </section>
  )
}
