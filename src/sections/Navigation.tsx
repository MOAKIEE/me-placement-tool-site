import { useState, useEffect } from 'react'
import { Menu, X, Github, Languages } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, toggleLanguage, language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#tools', label: t.nav.tools },
    { href: '#download', label: t.nav.download },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b-2 ${isScrolled
        ? 'bg-white border-slate-900 shadow-hard-sm'
        : 'bg-white/90 border-transparent backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center border-2 border-slate-900 shadow-hard-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              <span className="text-white font-black text-lg tracking-tighter">ME</span>
            </div>
            <span className="font-extrabold text-slate-900 text-lg tracking-tight uppercase group-hover:text-slate-700 transition-colors">
              Placement Tool
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-bold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="neo-btn px-3 py-2 text-sm flex items-center gap-2 h-10"
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'en' ? 'CN' : 'EN'}</span>
            </button>
            <a
              href="https://github.com/MOAKIEE/ME-Placement-Tool"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn px-3 py-2 text-sm flex items-center gap-2 h-10"
            >
              <Github className="w-4 h-4" />
              {t.nav.github}
            </a>
            <a
              href="#download"
              className="neo-btn-primary px-5 py-2 text-sm h-10 flex items-center"
            >
              {t.nav.download}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 border-2 border-slate-900 rounded-md shadow-hard-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-white border-b-2 border-slate-900 shadow-hard">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full text-left px-4 py-3 font-bold text-slate-900 border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all rounded-md flex items-center gap-3"
              >
                <Languages className="w-5 h-5" />
                {language === 'en' ? '切换到中文' : 'Switch to English'}
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 font-bold text-slate-900 border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all rounded-md uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex gap-4 pt-4 mt-2 border-t-2 border-slate-100">
                <a
                  href="https://github.com/MOAKIEE/ME-Placement-Tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn flex-1 text-center justify-center flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="#download"
                  className="neo-btn-primary flex-1 text-center justify-center"
                >
                  {t.nav.download}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
