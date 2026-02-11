import { ArrowDown, Blocks, Zap, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero grid-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Blocks className="w-5 h-5 text-cyan-500" />
              <span className="text-sm">{t.hero.stat1}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Network className="w-5 h-5 text-purple-500" />
              <span className="text-sm">{t.hero.stat2}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">{t.hero.stat3}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-8"
            >
              <a href="#download">
                {t.hero.ctaDownload}
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-border/50 hover:bg-secondary"
            >
              <a href="#features">{t.hero.ctaLearn}</a>
            </Button>
          </div>

          {/* Tool Preview Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="glass rounded-xl p-6 hover-lift border-glow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-4 mx-auto">
                <Blocks className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.hero.tool1Title}</h3>
              <p className="text-sm text-muted-foreground">{t.hero.tool1Desc}</p>
            </div>
            <div className="glass rounded-xl p-6 hover-lift border-glow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4 mx-auto">
                <Network className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.hero.tool2Title}</h3>
              <p className="text-sm text-muted-foreground">{t.hero.tool2Desc}</p>
            </div>
            <div className="glass rounded-xl p-6 hover-lift border-glow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.hero.tool3Title}</h3>
              <p className="text-sm text-muted-foreground">{t.hero.tool3Desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}

export default Hero
