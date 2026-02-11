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
    <footer className="bg-gradient-hero border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">ME</span>
              </div>
              <span className="font-semibold text-foreground text-lg">Placement Tool</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/MOAKIEE/ME-Placement-Tool"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      {item.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* License & Copyright */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p className="mb-2">
                {t.footer.license}{' '}
                <a
                  href="https://github.com/MOAKIEE/ME-Placement-Tool/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  LGPL-3.0
                </a>
              </p>
              <p>
                {t.footer.textures}{' '}
                <span className="text-foreground">_leng (麦淇淋)</span> CC BY-NC-SA 4.0
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t.footer.madeWith}</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{t.footer.by}</span>
              <a
                href="https://github.com/MOAKIEE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-cyan-400 transition-colors"
              >
                MOAKIEE
              </a>
              <span>&</span>
              <a
                href="https://github.com/cystrySU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-cyan-400 transition-colors"
              >
                cystrySU
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-muted-foreground/60">
            © {currentYear} {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
