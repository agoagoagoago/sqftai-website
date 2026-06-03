import { useState, type FormEvent } from 'react'

// Simple, robust client-side email check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Tone = 'info' | 'error' | null

export default function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [tone, setTone] = useState<Tone>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = email.trim()

    if (!EMAIL_RE.test(value)) {
      setTone('error')
      setMessage('Please enter a valid email address.')
      return
    }

    // -----------------------------------------------------------------------
    // BACKEND NOT YET CONNECTED.
    // There is currently no waitlist API, server action, or form provider in this
    // project, so we intentionally do NOT send a network request and do NOT claim the
    // email was stored. When a real integration exists (e.g. a /api/waitlist route,
    // Formspree/Resend endpoint, or Supabase insert), perform the submission HERE and
    // replace the pre-launch message below with a genuine success/confirmation state.
    // -----------------------------------------------------------------------
    setTone('info')
    setMessage('Early access registration is opening soon. Please check back shortly.')
  }

  return (
    <section className="section early" id="early-access" aria-labelledby="early-title">
      <div className="container">
        <div className="early__panel">
          <h2 className="early__title" id="early-title">
            Be among the first to experience SQFT AI.
          </h2>
          <p className="early__lead">
            Join the early access list and receive launch updates as we build the future of
            agentic real estate intelligence.
          </p>

          <form className="early__form" onSubmit={handleSubmit} noValidate>
            <div className="early__field">
              <label className="visually-hidden" htmlFor="email">
                Email address
              </label>
              <input
                className="early__input"
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                aria-invalid={tone === 'error'}
                aria-describedby="early-message"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Join the Waitlist
            </button>
          </form>

          <p
            className="early__message"
            id="early-message"
            data-tone={tone ?? undefined}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>

          <p className="early__reassure">
            No spam. Only meaningful product and launch updates.
          </p>
        </div>
      </div>
    </section>
  )
}
