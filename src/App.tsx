import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStats from './components/TrustStats'
import LogoMarquee from './components/LogoMarquee'
import AboutSection from './components/AboutSection'

function App() {
  return (
    <div className="bg-white text-[#5d6b82] flex flex-col selection:bg-blue-100 selection:text-[#1a6ef4]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStats />
        <LogoMarquee />
        <AboutSection />
      </main>
    </div>
  )
}

export default App
