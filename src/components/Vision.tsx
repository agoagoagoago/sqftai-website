import type { ReactNode } from 'react'

type Concept = {
  step: string
  title: string
  text: string
  icon: ReactNode
}

const ICON_PROPS = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const CONCEPTS: Concept[] = [
  {
    step: 'Step 01',
    title: 'Understand',
    text: 'Surface relevant property, market, and workflow signals from complex real estate environments.',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="11" cy="11" r="7" />
        <line x1="16" y1="16" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    step: 'Step 02',
    title: 'Reason',
    text: 'Connect context, opportunity, and intent through agentic AI built for informed decision-making.',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M6.5 7.5 10.8 16M17.5 7.5 13.2 16M7 6h10" />
      </svg>
    ),
  },
  {
    step: 'Step 03',
    title: 'Act',
    text: 'Move from insight toward execution with faster, smarter, more coordinated workflows.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M5 12h12" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    ),
  },
]

export default function Vision() {
  return (
    <section className="section" id="vision" aria-labelledby="vision-title">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title" id="vision-title">
            Built for the next era of real estate intelligence.
          </h2>
          <p className="section-head__lead">
            SQFT AI is being developed to help real estate professionals navigate complexity
            with intelligent agents that understand context, connect information, and
            accelerate action.
          </p>
        </div>

        <ul className="cards">
          {CONCEPTS.map((c) => (
            <li className="card" key={c.title}>
              <span className="card__icon">{c.icon}</span>
              <span className="card__step">{c.step}</span>
              <h3 className="card__title">{c.title}</h3>
              <p className="card__text">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
