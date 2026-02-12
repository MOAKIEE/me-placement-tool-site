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
  LineChart,
  Hammer
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'

const Tools = () => {
  const { t } = useLanguage()
  const activeToolState = useState(0)
  const activeTool = activeToolState[0]
  const setActiveTool = activeToolState[1]

  const tools = [
    {
      id: 'placement',
      name: t.tools.placement.name,
      icon: Blocks,
      bg: 'bg-white',
      text: 'text-slate-900',
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
      bg: 'bg-white',
      text: 'text-slate-900',
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
      bg: 'bg-white',
      text: 'text-slate-900',
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
    <section id="tools" className="py-24 bg-white bg-grid border-t-2 border-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-0 opacity-5 pointer-events-none">
        <Hammer className="w-96 h-96 rotate-45 text-slate-900" />
      </div>
      <div className="absolute bottom-20 -left-10 w-64 h-64 border-r-4 border-t-4 border-slate-900 opacity-5 rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-slate-900 text-slate-900 mb-6 shadow-hard-sm">
            <Hammer className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">{t.tools.badge}</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 uppercase">
            {t.tools.title}
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            {t.tools.subtitle}
          </p>
        </div>

        {/* Tool Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tools.map((tool, index) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(index)}
              className={`flex items-center gap-2 px-6 py-4 transition-all font-bold border-2 rounded-sm ${activeTool === index
                ? 'bg-slate-900 text-white border-slate-900 shadow-hard-sm translate-x-[2px] translate-y-[2px] shadow-none'
                : 'bg-white text-slate-900 border-slate-900 hover:-translate-y-1 hover:shadow-hard'
                }`}
            >
              <tool.icon className={`w-5 h-5 ${activeTool === index ? 'text-white' : 'text-slate-900'}`} />
              <span className="uppercase tracking-wide">{tool.name}</span>
            </button>
          ))}
        </div>

        {/* Tool Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Description & Features */}
          <div className="space-y-6">
            <div className="neo-card p-8 bg-white min-h-[400px]">
              <div className="w-16 h-16 border-2 border-slate-900 bg-white flex items-center justify-center mb-6 shadow-hard-sm">
                <activeToolData.icon className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">{activeToolData.name}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-slate-900 pl-4 bg-slate-50 p-4">{activeToolData.description}</p>

              <div className="space-y-4">
                {activeToolData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border-2 border-transparent hover:border-slate-900 hover:bg-slate-50 transition-all rounded-sm group">
                    <div className="w-10 h-10 border-2 border-slate-900 bg-white flex items-center justify-center flex-shrink-0 shadow-hard-sm group-hover:bg-slate-900 transition-colors">
                      <feature.icon className="w-5 h-5 text-slate-900 group-hover:text-white" />
                    </div>
                    <span className="text-slate-900 font-bold">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility */}
            <div className="neo-card p-8 bg-white">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wide border-b-2 border-slate-900 pb-2 inline-flex">
                <ChevronRight className="w-5 h-5 text-slate-900 bg-slate-200" />
                {t.tools.specialFeatures}
              </h4>
              <div className="flex flex-wrap gap-3">
                {activeToolData.compat.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border-2 border-slate-900 bg-white text-slate-900 text-sm font-bold shadow-hard-sm hover:translate-y-[-2px] hover:shadow-hard transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="neo-card p-8 bg-white h-fit">
            <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wide border-b-2 border-slate-900 pb-2 inline-flex">
              <Keyboard className="w-6 h-6 text-slate-900" />
              {t.tools.controls}
            </h4>

            <div className="space-y-4 mb-8">
              {activeToolData.controls.map((control, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-2 border-slate-200 bg-slate-50 hover:border-slate-900 hover:shadow-hard-sm transition-all rounded-sm"
                >
                  <div className="flex items-center gap-4">
                    <MousePointer2 className="w-5 h-5 text-slate-400" />
                    <span className="text-sm font-bold text-slate-900 font-mono bg-white px-3 py-1 border-2 border-slate-300 rounded-sm shadow-sm">{control.key}</span>
                  </div>
                  <span className="text-sm text-slate-600 font-bold text-right">{control.action}</span>
                </div>
              ))}
            </div>

            {/* Network Binding */}
            <div className="neo-card p-6 bg-white relative overflow-hidden">
              <div className="absolute right-[-20px] top-[-20px] opacity-5 pointer-events-none">
                <Network className="w-32 h-32 rotate-12 text-slate-900" />
              </div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 border-2 border-slate-900 bg-slate-900 flex items-center justify-center shadow-hard-sm flex-shrink-0">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-extrabold text-slate-900 mb-2 uppercase tracking-wider">{t.tools.networkBinding}</h5>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
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
