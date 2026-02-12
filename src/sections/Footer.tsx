import { Github, Heart, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Footer = () => {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  const links = [
    {
      title: t.footer.downloads,
      items: [
        { label: 'CurseForge', href: 'https://www.curseforge.com/minecraft/mc-mods/me-placement-tool' },
        { label: 'Modrinth', href: 'https://modrinth.com/mod/me-placement-tool' },
        { label: 'GitHub Releases', href: 'https://github.com/MOAKIEE/ME-Placement-Tool/releases' },
      ]
    },
    {
      title: t.footer.resources,
      items: [
        { label: language === 'zh' ? '文档' : 'Documentation', href: 'https://github.com/MOAKIEE/ME-Placement-Tool/blob/main/README.md' },
        { label: language === 'zh' ? '中文文档' : '中文文档', href: 'https://github.com/MOAKIEE/ME-Placement-Tool/blob/main/docs/README_CN.md' },
        { label: language === 'zh' ? '问题追踪' : 'Issue Tracker', href: 'https://github.com/MOAKIEE/ME-Placement-Tool/issues' },
      ]
    },
    {
      title: t.footer.credits,
      items: [
        { label: 'Applied Energistics 2', href: 'https://github.com/AppliedEnergistics/Applied-Energistics-2' },
        { label: 'Construction Wand', href: 'https://github.com/Theta-Dev/ConstructionWand' },
        { label: 'Ars Nouveau', href: 'https://github.com/baileyholl/Ars-Nouveau' },
      ]
    }
  ]

  return (
    <footer className="bg-white bg-grid border-t-2 border-slate-900 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center border-2 border-slate-900 shadow-hard-sm">
                <span className="text-white font-black text-lg">ME</span>
              </div>
              <span className="font-extrabold text-slate-900 text-lg uppercase tracking-tight">Placement Tool</span>
            </div>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/MOAKIEE/ME-Placement-Tool"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-slate-900 bg-white flex items-center justify-center shadow-hard-sm hover:translate-y-[-2px] hover:shadow-hard transition-all group"
              >
                <Github className="w-5 h-5 text-slate-900 group-hover:text-slate-900" />
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((section) => (
            <div key={section.title}>
              <h4 className="font-extrabold text-slate-900 mb-6 uppercase tracking-wide border-b-2 border-slate-900 pb-2 inline-block">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 group w-fit"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-slate-900 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item.label}
                      <ExternalLink className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* License & Copyright */}
        <div className="pt-8 border-t-2 border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm font-medium text-slate-500 text-center md:text-left space-y-2">
              <p>
                {t.footer.license}{' '}
                <a
                  href="https://github.com/MOAKIEE/ME-Placement-Tool/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-bold hover:underline decoration-2 underline-offset-2"
                >
                  LGPL-3.0
                </a>
              </p>
              <p>
                {t.footer.textures}{' '}
                <span className="text-slate-900 font-bold bg-slate-100 px-1">_leng (麦淇淋)</span> CC BY-NC-SA 4.0
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 bg-slate-100 px-4 py-2 border-2 border-slate-900 shadow-hard-sm">
              <span>{t.footer.madeWith}</span>
              <Heart className="w-4 h-4 text-slate-900 fill-slate-900 animate-pulse" />
              <span>{t.footer.by}</span>
              <a
                href="https://github.com/MOAKIEE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors underline decoration-2 underline-offset-2"
              >
                MOAKIEE
              </a>
              <span>&</span>
              <a
                href="https://github.com/cystrySU"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors underline decoration-2 underline-offset-2"
              >
                cystrySU
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
