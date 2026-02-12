import { ArrowDown, Blocks, Zap, Network, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 neo-badge bg-white">
            <span className="w-2 h-2 bg-green-500 rounded-none animate-pulse" />
            <span className="text-sm font-bold tracking-wide uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight uppercase">
            ME <span className="bg-slate-900 text-white px-2 inline-block skew-x-[-10deg]">Placement</span> Tool
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-900 mb-10 max-w-2xl font-medium leading-relaxed border-l-4 border-slate-900 pl-6 text-left mx-auto bg-white/50 backdrop-blur-sm p-4">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a
              href="#download"
              className="neo-btn-primary flex items-center justify-center gap-2 text-lg uppercase tracking-wide group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              {t.hero.ctaDownload}
            </a>
            <a
              href="#features"
              className="neo-btn flex items-center justify-center gap-2 text-lg uppercase tracking-wide group"
            >
              {t.hero.ctaLearn}
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 w-full text-left">
            {[
              { icon: Blocks, text: t.hero.stat1, sub: "Placement / Multiblock" },
              { icon: Network, text: t.hero.stat2, sub: "Direct Integration" },
              { icon: Zap, text: t.hero.stat3, sub: "One-Click Operation" },
            ].map((stat, index) => (
              <div key={index} className="neo-card p-6 flex flex-col items-start gap-4 bg-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon className="w-24 h-24 text-slate-900 rotate-[-15deg]" />
                </div>
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center border-2 border-slate-900 shadow-hard-sm">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-extrabold text-lg text-slate-900 uppercase tracking-tight">{stat.text}</h3>
                  <p className="text-slate-600 text-sm font-bold mt-1">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-12 w-48 h-48 border-4 border-slate-900 opacity-10 rotate-12 bg-slate-200" />
      <div className="absolute bottom-1/4 -left-12 w-32 h-32 border-4 border-slate-900 opacity-10 -rotate-6 bg-slate-300" />
    </section>
  )
}

export default Hero
