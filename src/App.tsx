export default function App() {
  return (
    <div className="stage">
      {/* Decorative neon backdrop */}
      <div className="floor" aria-hidden="true" />
      <div className="glow glow--blue" aria-hidden="true" />
      <div className="glow glow--magenta" aria-hidden="true" />

      <main className="stage__body">
        <div className="frame">
          <span className="frame__node frame__node--tl" aria-hidden="true" />
          <span className="frame__node frame__node--tr" aria-hidden="true" />
          <span className="frame__node frame__node--bl" aria-hidden="true" />
          <span className="frame__node frame__node--br" aria-hidden="true" />
          <img
            className="logo"
            src="/sqft-ai-logo.png"
            alt="SQFT AI"
            width={2172}
            height={724}
          />
        </div>

        <h1 className="headline">
          Agentic AI is about to transform the{' '}
          <span className="accent">real estate world.</span>
        </h1>

        <p className="stay">
          <span className="stay__dot" aria-hidden="true" />
          Stay Tuned
        </p>
      </main>
    </div>
  )
}
