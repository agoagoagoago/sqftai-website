import Nav from './components/Nav'
import Hero from './components/Hero'
import PositioningStrip from './components/PositioningStrip'
import Vision from './components/Vision'
import Workflow from './components/Workflow'
import EarlyAccess from './components/EarlyAccess'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <PositioningStrip />
        <Vision />
        <Workflow />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  )
}
