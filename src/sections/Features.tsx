import { 
  Layers, 
  RotateCcw, 
  Palette, 
  Wand2, 
  Settings2, 
  Cpu,
  CheckCircle2,
  MousePointerClick
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Features = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Layers,
      title: t.features.feat1Title,
      description: t.features.feat1Desc,
      color: 'cyan'
    },
    {
      icon: RotateCcw,
      title: t.features.feat2Title,
      description: t.features.feat2Desc,
      color: 'purple'
    },
    {
      icon: Palette,
      title: t.features.feat3Title,
      description: t.features.feat3Desc,
      color: 'green'
    },
    {
      icon: Wand2,
      title: t.features.feat4Title,
      description: t.features.feat4Desc,
      color: 'cyan'
    },
    {
      icon: Settings2,
      title: t.features.feat5Title,
      description: t.features.feat5Desc,
      color: 'purple'
    },
    {
      icon: Cpu,
      title: t.features.feat6Title,
      description: t.features.feat6Desc,
      color: 'green'
    }
  ]

  const highlights = [
    t.features.highlight1,
    t.features.highlight2,
    t.features.highlight3,
    t.features.highlight4,
    t.features.highlight5,
    t.features.highlight6,
  ]

  return (
    <section id="features" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <MousePointerClick className="w-4 h-4 text-cyan-500" />
            <span className="text-sm text-cyan-400">{t.features.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">{t.features.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gradient-card rounded-xl p-6 border border-border/50 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="glass rounded-2xl p-8 border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <span className="text-gradient-gold">{t.features.builtFor}</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.features.builtDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">Forge</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">NeoForge</span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">1.20.1</span>
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm">1.21.1</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
