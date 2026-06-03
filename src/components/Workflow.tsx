const STAGES = [
  {
    label: 'Property Data',
    desc: 'Signals from assets, markets, and workflows.',
  },
  {
    label: 'Agentic Reasoning',
    desc: 'Context connected to opportunity and intent.',
  },
  {
    label: 'Actionable Intelligence',
    desc: 'Clearer direction for what happens next.',
  },
]

function Connector() {
  return (
    <div className="flow__connector" aria-hidden="true">
      <svg width="34" height="20" viewBox="0 0 34 20" fill="none" stroke="currentColor">
        <line x1="0" y1="10" x2="28" y2="10" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 4l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function Workflow() {
  return (
    <section className="section workflow" aria-labelledby="workflow-title">
      <div className="container">
        <div className="section-head section-head--center">
          <h2 className="section-head__title" id="workflow-title">
            From property signals to decisive action.
          </h2>
          <p className="section-head__lead">
            SQFT AI is being built around a new idea: real estate intelligence should not
            simply display information — it should help connect context, evaluate
            opportunities, and support what happens next.
          </p>
        </div>

        <div className="flow">
          {STAGES.map((stage, i) => (
            <div className="flow__stage-wrap" key={stage.label} style={{ display: 'contents' }}>
              <div className="flow__stage">
                <span className="flow__index">{i + 1}</span>
                <h3 className="flow__label">{stage.label}</h3>
                <p className="flow__desc">{stage.desc}</p>
              </div>
              {i < STAGES.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
