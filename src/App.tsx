import './App.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Tools from './sections/Tools'
import Download from './sections/Download'
import Footer from './sections/Footer'
import Navigation from './sections/Navigation'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Features />
          <Tools />
          <Download />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
