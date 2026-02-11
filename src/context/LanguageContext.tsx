import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Language, type Translations } from '@/i18n/translations'

interface LanguageContextType {
  language: Language
  t: Translations
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get saved language from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('me-placement-tool-lang') as Language
      if (saved && (saved === 'en' || saved === 'zh')) {
        return saved
      }
    }
    return 'zh'
  })

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('me-placement-tool-lang', lang)
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'zh' : 'en'
    setLanguage(newLang)
  }, [language, setLanguage])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
