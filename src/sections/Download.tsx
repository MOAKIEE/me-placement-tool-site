import {
  Download,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Package,
  Gamepad2
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

import curseforgeIcon from '@/assets/curseforge.jpg'

const DownloadSection = () => {
  const { t, language } = useLanguage()

  const downloadLinks = [
    {
      name: t.download.curseforge.name,
      description: t.download.curseforge.desc,
      icon: curseforgeIcon,
      url: 'https://www.curseforge.com/minecraft/mc-mods/me-placement-tool',
      bg_soft: 'bg-orange-50',
      text: 'text-orange-600',
      stats: t.download.curseforge.stats
    },
    {
      name: t.download.modrinth.name,
      description: t.download.modrinth.desc,
      icon: 'https://cdn.modrinth.com/modrinth-new.png',
      url: 'https://modrinth.com/mod/me-placement-tool',
      bg_soft: 'bg-emerald-50',
      text: 'text-emerald-600',
      stats: t.download.modrinth.stats
    },
    {
      name: t.download.github.name,
      description: t.download.github.desc,
      customIcon: Github,
      url: 'https://github.com/MOAKIEE/ME-Placement-Tool/releases',
      bg_soft: 'bg-slate-100',
      text: 'text-slate-900',
      stats: t.download.github.stats
    }
  ]

  const requirements = [
    { name: t.download.minecraft, version: language === 'zh' ? '1.20.1 / 1.21.1' : '1.20.1 / 1.21.1', icon: Gamepad2 },
    { name: t.download.modLoader, version: language === 'zh' ? 'Forge / NeoForge' : 'Forge / NeoForge', icon: Cpu },
    { name: t.download.requiredMod, version: 'Applied Energistics 2', icon: Package },
  ]

  const versions = [
    { mc: '1.21.1', loader: 'NeoForge', mod: '2.1.2', latest: true },
    { mc: '1.20.1', loader: 'Forge', mod: '2.1.2', latest: false },
  ]

  return (
    <section id="download" className="py-24 bg-white bg-grid border-t-2 border-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-10 w-24 h-24 border-4 border-slate-900 opacity-10 rotate-45 pointer-events-none" />
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none">
        <Download className="w-64 h-64 -rotate-12 text-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-slate-900 text-slate-900 mb-6 shadow-hard-sm">
            <Download className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">{t.download.badge}</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 uppercase">
            {t.download.title}
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            {t.download.subtitle}
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {downloadLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-card p-8 group h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 border-2 border-slate-900 bg-white flex items-center justify-center shadow-hard-sm">
                  {link.customIcon ? (
                    <link.customIcon className="w-8 h-8 text-slate-900" />
                  ) : (
                    <img src={link.icon} alt={link.name} className="w-8 h-8 object-contain" />
                  )}
                </div>
                <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">{link.name}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed font-medium flex-grow">{link.description}</p>
              <div className={`text-center py-2 px-4 rounded-sm border-2 border-slate-900 font-bold text-sm bg-white shadow-hard-sm group-hover:bg-slate-900 group-hover:text-white transition-colors`}>
                {link.stats}
              </div>
            </a>
          ))}
        </div>

        {/* Requirements & Versions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="neo-card p-10 bg-white">
            <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 uppercase">
              <AlertCircle className="w-6 h-6 text-slate-900" />
              {t.download.requirements}
            </h3>
            <div className="space-y-4">
              {requirements.map((req) => (
                <div
                  key={req.name}
                  className="flex items-center justify-between p-4 border-2 border-slate-200 bg-slate-50 hover:border-slate-900 hover:shadow-hard-sm transition-all rounded-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border-2 border-slate-900 bg-white flex items-center justify-center shadow-sm">
                      <req.icon className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="font-bold text-slate-900">{req.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-700 bg-white px-3 py-1 border border-slate-300 rounded-sm">{req.version}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 border-2 border-amber-400 bg-amber-50 rounded-sm shadow-hard-sm">
              <p className="text-sm text-slate-900 font-medium">
                <span className="font-bold uppercase text-amber-600 bg-amber-100 px-2 py-0.5 rounded-sm mr-2">{t.download.note}</span>
                {t.download.noteText}
              </p>
            </div>
          </div>

          {/* Versions */}
          <div className="neo-card p-10 bg-white">
            <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 uppercase">
              <CheckCircle2 className="w-6 h-6 text-slate-900" />
              {t.download.versions}
            </h3>
            <div className="space-y-4">
              {versions.map((ver) => (
                <div
                  key={ver.mc}
                  className="flex items-center justify-between p-4 border-2 border-slate-200 bg-white hover:border-slate-900 hover:shadow-hard-sm transition-all rounded-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border-2 border-slate-900 bg-slate-100 flex items-center justify-center shadow-sm">
                      <span className="text-slate-900 font-extrabold text-sm">{ver.mc}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 uppercase">{ver.loader}</p>
                      <p className="text-sm text-slate-500 font-mono font-bold">v{ver.mod}</p>
                    </div>
                  </div>
                  {ver.latest && (
                    <span className="px-3 py-1 bg-green-400 border-2 border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                      {t.download.latest}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/MOAKIEE/ME-Placement-Tool/blob/main/docs/README_CN.md"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn flex-1 text-center justify-center flex items-center"
              >
                {t.download.docs}
              </a>
              <a
                href="https://github.com/MOAKIEE/ME-Placement-Tool/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn flex-1 text-center justify-center flex items-center"
              >
                {t.download.issues}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
