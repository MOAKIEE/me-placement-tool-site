import { useState } from 'react'
import { 
  Blocks, 
  Network, 
  Zap, 
  ChevronRight,
  MousePointer2,
  Keyboard,
  Eye,
  RotateCcw,
  Palette,
  GitBranch,
  Grid3X3,
  LineChart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'

const Tools = () => {
  const { t } = useLanguage()
  const [activeTool, setActiveTool] = useState(0)

  const tools = [
    {
      id: 'placement',
      name: t.tools.placement.name,
      icon: Blocks,
      color: 'cyan',
      description: t.tools.placement.desc,
      features: [
        { icon: Blocks, text: t.tools.placement.feat1 },
        { icon: Network, text: t.tools.placement.feat2 },
        { icon: Zap, text: t.tools.placement.feat3 },
        { icon: Eye, text: t.tools.placement.feat4 },
      ],
      controls: [
        { key: t.tools.control1key, action: t.tools.control1action },
        { key: t.tools.control2key, action: t.tools.control2action },
        { key: t.tools.control3key, action: t.tools.control3action },
      ],
      compat: [t.tools.placement.compat1, t.tools.placement.compat2, t.tools.placement.compat3]
    },
    {
      id: 'multiblock',
      name: t.tools.multiblock.name,
      icon: Grid3X3,
      color: 'purple',
      description: t.tools.multiblock.desc,
      features: [
        { icon: Grid3X3, text: t.tools.multiblock.feat1 },
        { icon: Network, text: t.tools.multiblock.feat2 },
        { icon: Eye, text: t.tools.multiblock.feat3 },
        { icon: RotateCcw, text: t.tools.multiblock.feat4 },
      ],
      controls: [
        { key: t.tools.control1key, action: t.tools.control1action },
        { key: t.tools.control2key, action: t.tools.control2action },
        { key: t.tools.control3key, action: t.tools.control3action },
        { key: t.tools.control4key, action: t.tools.control4action },
      ],
      compat: [t.tools.multiblock.compat1, t.tools.multiblock.compat2]
    },
    {
      id: 'cable',
      name: t.tools.cable.name,
      icon: GitBranch,
      color: 'green',
      description: t.tools.cable.desc,
      features: [
        { icon: LineChart, text: t.tools.cable.feat1 },
        { icon: Grid3X3, text: t.tools.cable.feat2 },
        { icon: GitBranch, text: t.tools.cable.feat3 },
        { icon: Palette, text: t.tools.cable.feat4 },
      ],
      controls: [
        { key: t.tools.control1key, action: t.tools.control1action },
        { key: t.tools.control2key, action: t.tools.control2action },
        { key: t.tools.control3key, action: t.tools.control3action },
      ],
      compat: [t.tools.cable.compat1, t.tools.cable.compat2, t.tools.cable.compat3]
    }
  ]

  const activeToolData = tools[activeTool]

  return (
    <section id="tools" className="py-24 bg-gradient-hero relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-purple-400">{t.tools.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">{t.tools.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.tools.subtitle}
          </p>
        </div>

        {/* Tool Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tools.map((tool, index) => (
            <Button
              key={tool.id}
              variant={activeTool === index ? 'default' : 'outline'}
              onClick={() => setActiveTool(index)}
              className={`flex items-center gap-2 px-6 py-3 h-auto ${
                activeTool === index
                  ? `bg-${tool.color}-500/20 border-${tool.color}-500/50 text-${tool.color}-400 hover:bg-${tool.color}-500/30`
                  : 'border-border/50 hover:bg-secondary'
              }`}
            >
              <tool.icon className={`w-5 h-5 ${activeTool === index ? `text-${tool.color}-400` : 'text-muted-foreground'}`} />
              <span className="hidden sm:inline">{tool.name}</span>
            </Button>
          ))}
        </div>

        {/* Tool Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Description & Features */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 border-glow">
              <div className={`w-16 h-16 rounded-xl bg-${activeToolData.color}-500/20 flex items-center justify-center mb-6`}>
                <activeToolData.icon className={`w-8 h-8 text-${activeToolData.color}-400`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{activeToolData.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{activeToolData.description}</p>
              
              <div className="space-y-3">
                {activeToolData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-${activeToolData.color}-500/10 flex items-center justify-center`}>
                      <feature.icon className={`w-4 h-4 text-${activeToolData.color}-400`} />
                    </div>
                    <span className="text-sm text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility */}
            <div className="glass rounded-xl p-6 border-glow">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-cyan-500" />
                {t.tools.specialFeatures}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeToolData.compat.map((item, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full bg-${activeToolData.color}-500/10 text-${activeToolData.color}-400 text-sm`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="glass rounded-2xl p-8 border-glow">
            <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <Keyboard className="w-5 h-5 text-purple-500" />
              {t.tools.controls}
            </h4>
            
            <div className="space-y-4">
              {activeToolData.controls.map((control, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/30"
                >
                  <div className="flex items-center gap-3">
                    <MousePointer2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{control.key}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{control.action}</span>
                </div>
              ))}
            </div>

            {/* Network Binding */}
            <div className="mt-6 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <Network className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-foreground mb-1">{t.tools.networkBinding}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t.tools.networkDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
