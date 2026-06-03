export default function App() {
  return (
    <div className="stage">
      <div className="eclipse">
        <div className="corona" aria-hidden="true" />
        <div className="disk">
          <img
            className="logo"
            src="/sqft-ai-logo-alpha.png"
            alt="SQFT AI"
            width={2172}
            height={724}
          />
          <p className="coming">Coming Soon</p>
          <div className="bar" aria-hidden="true">
            <span className="bar__fill" />
          </div>
        </div>
      </div>

      <h1 className="headline">
        Agentic AI is about to transform the{' '}
        <span className="accent">real estate world</span>
      </h1>
    </div>
  )
}
