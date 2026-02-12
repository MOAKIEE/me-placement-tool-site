import {
  Layers,
  RotateCcw,
  Palette,
  Wand2,
  Settings2,
  Cpu,
  CheckCircle2
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Features = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Layers,
      title: t.features.feat1Title,
      description: t.features.feat1Desc,
    },
    {
      icon: RotateCcw,
      title: t.features.feat2Title,
      description: t.features.feat2Desc,
    },
    {
      icon: Palette,
      title: t.features.feat3Title,
      description: t.features.feat3Desc,
    },
    {
      icon: Wand2,
      title: t.features.feat4Title,
      description: t.features.feat4Desc,
    },
    {
      icon: Settings2,
      title: t.features.feat5Title,
      description: t.features.feat5Desc,
    },
    {
      icon: Cpu,
      title: t.features.feat6Title,
      description: t.features.feat6Desc,
    },
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
    <section id="features" className="py-24 bg-white bg-grid border-t-2 border-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 -left-12 w-48 h-48 border-4 border-slate-900 opacity-5 rotate-12 pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-slate-100 border-4 border-slate-900 opacity-20 -rotate-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Features Grid */}
          <div className="lg:w-2/3">
            <div className="mb-12">
              <div className="inline-block px-3 py-1 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider mb-4 shadow-hard-sm">
                {t.features.badge}
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 uppercase">
                {t.features.title}
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-slate-200 pl-4">
                {t.features.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="neo-card p-6 flex flex-col h-full bg-white hover:bg-slate-50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 border-2 border-slate-900 bg-white flex items-center justify-center shadow-hard-sm">
                      <feature.icon className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Specs / Highlights */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white border-2 border-slate-900 shadow-hard p-8 sticky top-24">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6 uppercase flex items-center gap-2">
                <Settings2 className="w-6 h-6" />
                {t.features.builtFor}
              </h3>

              <div className="space-y-6">
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {t.features.builtDesc}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {['Forge', 'NeoForge', '1.20.1', '1.21.1'].map((tag) => (
                    <div key={tag} className="bg-slate-100 border-2 border-slate-900 px-3 py-2 text-center font-bold text-slate-900 text-sm uppercase shadow-hard-sm">
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-slate-900 pt-6 space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 group cursor-default">
                      <div className="w-5 h-5 border-2 border-slate-900 bg-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-slate-900 group-hover:text-white" />
                      </div>
                      <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
