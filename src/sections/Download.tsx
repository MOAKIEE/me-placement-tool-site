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
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'

const DownloadSection = () => {
  const { t, language } = useLanguage()

  const downloadLinks = [
    {
      name: t.download.curseforge.name,
      description: t.download.curseforge.desc,
      icon: 'https://static-cdn.jtvnw.net/jtv_user_pictures/cef31105-6a6e-4211-a356-8e39545fab9a-profile_image-300x300.png',
      url: 'https://www.curseforge.com/minecraft/mc-mods/me-placement-tool',
      color: 'from-orange-500 to-orange-600',
      stats: t.download.curseforge.stats
    },
    {
      name: t.download.modrinth.name,
      description: t.download.modrinth.desc,
      icon: 'https://cdn.modrinth.com/modrinth-new.png',
      url: 'https://modrinth.com/mod/me-placement-tool',
      color: 'from-green-500 to-green-600',
      stats: t.download.modrinth.stats
    },
    {
      name: t.download.github.name,
      description: t.download.github.desc,
      icon: null,
      customIcon: Github,
      url: 'https://github.com/MOAKIEE/ME-Placement-Tool/releases',
      color: 'from-gray-600 to-gray-700',
      stats: t.download.github.stats
    }
  ]

  const requirements = [
    { name: t.download.minecraft, version: language === 'zh' ? '1.20.1 或 1.21.1' : '1.20.1 or 1.21.1', icon: Gamepad2 },
    { name: t.download.modLoader, version: language === 'zh' ? 'Forge 47.4.10+ 或 NeoForge' : 'Forge 47.4.10+ or NeoForge', icon: Cpu },
    { name: t.download.requiredMod, version: 'Applied Energistics 2', icon: Package },
  ]

  const versions = [
    { mc: '1.21.1', loader: 'NeoForge', mod: '2.1.2', latest: true },
    { mc: '1.20.1', loader: 'Forge', mod: '2.1.2', latest: false },
  ]

  return (
    <section id="download" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
            <Download className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-400">{t.download.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">{t.download.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.download.subtitle}
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {downloadLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 border-glow hover-lift h-full">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      {link.customIcon ? (
                        <link.customIcon className="w-6 h-6 text-foreground" />
                      ) : (
                        <img src={link.icon} alt={link.name} className="w-6 h-6 object-contain" />
                      )}
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{link.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${link.color} bg-opacity-10`}>
                    <span className="text-xs text-white font-medium">{link.stats}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Requirements & Versions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <div className="glass rounded-2xl p-8 border-glow">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              {t.download.requirements}
            </h3>
            <div className="space-y-4">
              {requirements.map((req) => (
                <div
                  key={req.name}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <req.icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <span className="font-medium text-foreground">{req.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{req.version}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-yellow-500 font-medium">{t.download.note}</span> {t.download.noteText}
              </p>
            </div>
          </div>

          {/* Versions */}
          <div className="glass rounded-2xl p-8 border-glow">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              {t.download.versions}
            </h3>
            <div className="space-y-4">
              {versions.map((ver) => (
                <div
                  key={ver.mc}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <span className="text-cyan-400 font-bold text-sm">{ver.mc}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{ver.loader}</p>
                      <p className="text-sm text-muted-foreground">Mod v{ver.mod}</p>
                    </div>
                  </div>
                  {ver.latest && (
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                      {t.download.latest}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 border-border/50 hover:bg-secondary"
              >
                <a
                  href="https://github.com/MOAKIEE/ME-Placement-Tool/blob/main/docs/README_CN.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.download.docs}
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 border-border/50 hover:bg-secondary"
              >
                <a
                  href="https://github.com/MOAKIEE/ME-Placement-Tool/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.download.issues}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
