import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Languages, Sun, Moon, Check, Download } from 'lucide-react'
import { GiPenguin } from 'react-icons/gi'
import luisPhoto from './assets/Luis.jpeg'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [lang, setLang] = useState('ES')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Conocimientos', href: '#' },
    { name: 'Trabajos', href: '#' },
    { name: 'Trayectoria', href: '#' }
  ]

  return (
    <div className={`min-h-[200vh] transition-colors duration-700 ${isDark ? 'bg-[#050505] text-white' : 'bg-[#F9FAFB] text-[#050505]'} font-sans selection:bg-[#582CFF]/30`}>
      {/* Background radial gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] transition-opacity duration-1000 ${isDark ? 'bg-[#582CFF]/10' : 'bg-[#582CFF]/5'} blur-[120px] rounded-full`}></div>
        <div className={`absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] transition-opacity duration-1000 ${isDark ? 'bg-[#8E54FF]/10' : 'bg-[#8E54FF]/5'} blur-[120px] rounded-full`}></div>
      </div>

      <header className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-8'}`}>
        <div className="relative flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          <nav className={`
            flex items-center justify-between transition-all duration-500 ease-in-out
            ${isScrolled 
              ? `px-4 py-2.5 w-full max-w-5xl ${isDark ? 'bg-[#0F0F10]/95 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' : 'bg-white/95 border-2 border-[#582CFF]/20 shadow-[0_20px_40px_rgba(88,44,255,0.05)]'} backdrop-blur-xl border` 
              : `px-6 py-4 w-full max-w-6xl ${isDark ? 'bg-[#0F0F10]/60 border-white/5' : 'bg-white/60 border-2 border-[#582CFF]/10'} backdrop-blur-md border`} 
            rounded-full
          `}>
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 bg-[#582CFF] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                   <GiPenguin className="w-7 h-7 text-white" />
                </div>
              </div>
              <span className={`text-2xl font-bold tracking-tighter transition-all ${isDark ? 'group-hover:text-white/90' : 'group-hover:text-black/80'}`}>
                Luis Rodriguez<span className="text-[#582CFF]">.</span>
              </span>
            </div>

            {/* Desktop Links (Hidden on small/tablet/medium laptop) */}
            <ul className="hidden xl:flex items-center gap-2 text-[13px] font-semibold">
              {navLinks.map((link) => (
                <li key={link.name} className={`
                  relative flex items-center gap-1.5 px-4 py-2 cursor-pointer transition-all group
                  ${isDark ? 'text-[#94A3B8] hover:text-white' : 'text-[#64748B] hover:text-black'}
                  ${link.name === 'Inicio' ? (isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black') + ' rounded-full px-5' : ''}
                `}>
                  {link.name}
                  {link.name === 'Trabajos' && isScrolled && (
                    <span className="absolute top-1 right-1 flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Language Selector Dropdown */}
              <div className="relative" ref={langRef}>
                <div 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`hidden sm:flex items-center gap-2 px-3.5 py-2 transition-all cursor-pointer rounded-full border ${isDark ? 'bg-[#1E1E1E]/80 border-white/5 hover:bg-white/10' : 'bg-black/5 border-black/5 hover:bg-black/10'}`}
                >
                  <Languages className={`w-4 h-4 ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`} />
                  <span className={`text-[13px] font-bold ${isDark ? 'text-white' : 'text-black'}`}>{lang}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''} ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`} />
                </div>

                {/* Floating Dropdown Menu */}
                {isLangOpen && (
                  <div className={`absolute top-full right-0 mt-3 w-40 overflow-hidden rounded-2xl border shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-[60] ${isDark ? 'bg-[#151515]/95 border-white/10 backdrop-blur-xl' : 'bg-white/95 border-black/5 backdrop-blur-lg'}`}>
                    <div className="p-1.5 flex flex-col gap-1">
                      {[
                        { id: 'ES', label: 'Español' },
                        { id: 'EN', label: 'English' }
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setLang(option.id)
                            setIsLangOpen(false)
                          }}
                          className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${lang === option.id ? (isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black') : (isDark ? 'text-[#94A3B8] hover:bg-white/5 hover:text-white' : 'text-[#64748B] hover:bg-black/5 hover:text-black')}`}
                        >
                          {option.label}
                          {lang === option.id && <Check className="w-3.5 h-3.5 text-[#582CFF]" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${isDark ? 'bg-[#1E1E1E]/80 border-white/5 hover:bg-white/10 text-white' : 'bg-black/5 border-black/5 hover:bg-black/10 text-[#582CFF]'}`}
              >
                {isDark ? <Sun className="w-5 h-5 flex-shrink-0" /> : <Moon className="w-5 h-5 flex-shrink-0" />}
              </button>
              
              <button className={`${isScrolled ? 'hidden sm:block' : 'block'} bg-[#582CFF] hover:bg-[#4a24d9] rounded-full px-6 py-2.5 text-[13px] font-bold transition-all active:scale-95 text-white whitespace-nowrap`}>
                Contactar
              </button>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`xl:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all active:scale-90 ${isDark ? 'bg-white/5 hover:bg-white/10 text-[#94A3B8]' : 'bg-black/5 hover:bg-black/10 text-[#64748B]'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          <div className={`
            absolute top-full mt-4 w-[95%] max-w-5xl overflow-hidden transition-all duration-500 ease-in-out z-40
            ${isMenuOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}
          `}>
            <div className={`${isDark ? 'bg-[#0F0F10]/95 border-white/10' : 'bg-white/95 border-black/10'} backdrop-blur-2xl border rounded-3xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.3)]`}>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.name} className={`flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer group ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`text-base font-semibold transition-colors ${isDark ? 'text-[#94A3B8] group-hover:text-white' : 'text-[#64748B] group-hover:text-black'}`}>{link.name}</span>
                      {link.name === 'Trabajos' && isScrolled && (
                        <span className="flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-500 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 -rotate-90 transition-all ${isDark ? 'text-[#94A3B8] group-hover:text-white' : 'text-[#64748B] group-hover:text-black'} group-hover:translate-x-1`} />
                  </li>
                ))}
                <li className="mt-2 pt-4 border-t border-white/5 px-2 pb-2">
                  <button className="w-full bg-[#582CFF] py-3.5 rounded-2xl font-bold shadow-lg shadow-[#582CFF]/20 active:scale-[0.98] transition-all text-sm text-white">
                    Contactar ahora
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto pt-32 pb-16 px-6 lg:px-8">
        <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Column: Content */}
            <div className="flex-1 text-left order-2 lg:order-1">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ${isDark ? 'bg-[#582CFF]/10 border-[#582CFF]/20 text-[#582CFF]' : 'bg-[#582CFF]/5 border-[#582CFF]/10 text-[#582CFF]'}`}>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]">Desarrollador Full Stack</span>
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Sistemas Robustos.<br />
                <span className={`italic bg-gradient-to-r from-[#582CFF] to-[#8E54FF] bg-clip-text text-transparent`}>Arquitectura de Vanguardia.</span>
              </h1>

              <p className={`text-base md:text-lg max-w-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                Ingeniero de Sistemas enfocado en desarrollo web. Transformo problemas complejos de UX en soluciones UI escalables, mediante código limpio y arquitecturas robustas.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#582CFF] px-8 py-3.5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_15px_30px_rgba(88,44,255,0.25)] active:scale-95 text-white">
                  Ver Proyectos
                </button>
                <button className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold border transition-all active:scale-95 ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5 text-inherit font-bold'}`}>
                  Descargar CV
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Availability Indicator */}
              <div className="flex items-center gap-3 animate-in fade-in duration-700 delay-500">
                <div className="relative flex h-2.5 w-2.5">
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></div>
                  <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></div>
                </div>
                <span className={`text-[11px] font-bold tracking-widest uppercase ${isDark ? 'text-green-500/80' : 'text-green-600'}`}>
                  Disponible para proyectos
                </span>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="flex-1 flex justify-end relative order-1 lg:order-2 animate-in fade-in zoom-in duration-1000">
              <div className="relative group w-full flex justify-end">
                {/* Photo Container */}
                <div className={`relative z-10 w-full max-w-[460px] aspect-[4/5] rounded-[40px] overflow-hidden border-2 transition-all duration-500 group-hover:scale-[1.02] ${isDark ? 'border-white/10' : 'border-black/[0.03] shadow-2xl shadow-indigo-500/5'}`}>
                  <img 
                    src={luisPhoto} 
                    alt="Luis Rodriguez"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity duration-500 ${isDark ? 'opacity-60' : 'opacity-20'}`}></div>
                </div>

                {/* Floating Terminal Overlay */}
                <div className={`absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 z-20 w-56 lg:w-64 p-4 rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 ${
                  isDark ? 'bg-[#0F0F10]/90 border-white/10 text-white' : 'bg-[#F1F5F9]/80 border-black/[0.03] text-[#1E293B] shadow-xl shadow-indigo-500/10'
                }`}>
                  {/* Traffic Lights */}
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
                  </div>
                  {/* Terminal Content */}
                  <div className="space-y-1.5 font-mono text-[10px] lg:text-[11px]">
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>status:</span>
                      <span className="text-[#27C93F] font-bold uppercase">Optimized</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>uptime:</span>
                      <span className={`${isDark ? 'text-white' : 'text-[#1E293B]'}`}>99.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>stack:</span>
                      <span className="text-[#A88BFF] font-black">React / Laravel</span>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#582CFF]/10 blur-[80px] rounded-full pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Metrics Section */}
        <div className={`mt-24 pt-12 border-t transition-all duration-500 ${isDark ? 'border-white/5' : 'border-black/[0.05]'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { title: '6+', subtitle: 'MESES DE EXPERIENCIA', status: 'system_status: active' },
              { title: '100%', subtitle: 'ENFOQUE PIXEL-PERFECT', status: 'ux_latency: <100ms' },
              { title: 'Robusta', subtitle: 'APIS & ARQUITECTURA', status: 'uptime: 99.9%' },
              { title: '10+', subtitle: 'SISTEMAS DESPLEGADOS', status: 'deployments: success' }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                <span className={`text-4xl md:text-5xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-[#1E293B]'}`}>
                  {metric.title}
                </span>
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                  {metric.subtitle}
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#582CFF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#582CFF]"></span>
                  </span>
                  <span className={`text-[10px] font-mono lowercase ${isDark ? 'text-[#582CFF]/80' : 'text-[#582CFF]'}`}>
                    {metric.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Separator */}
        <div className={`mt-24 border-b transition-all duration-500 ${isDark ? 'border-white/5' : 'border-black/[0.05]'}`}></div>

        {/* Clients section (moved down out of immediate view) */}
        <div className="mt-64 pb-24 animate-in fade-in duration-1000 delay-1000">
          <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-center ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
            Colaborando con Tech Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-lg font-black tracking-tighter">METAVR</span>
            <span className="text-lg font-black tracking-tighter">DATACORE</span>
            <span className="text-lg font-black tracking-tighter">CLOUDSTRAT</span>
            <span className="text-lg font-black tracking-tighter">NEXUS AI</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
