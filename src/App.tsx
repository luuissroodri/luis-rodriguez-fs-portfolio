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
  const [activeTab, setActiveTab] = useState('react')
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

        {/* Conocimientos Section */}
        <section id="conocimientos" className="mt-32 max-w-7xl mx-auto px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Info & Selector */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                Stack Tecnológico
              </h2>
              <p className={`text-base mb-10 max-w-md ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                Soluciones modernas construidas con tecnologías de vanguardia para arquitecturas escalables.
              </p>

              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-4">
                {[
                  { id: 'react', name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
                  { id: 'html', name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26' },
                  { id: 'css', name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6' },
                  { id: 'tailwind', name: 'Tailwind', icon: 'devicon-tailwindcss-plain', color: '#06B6D4' },
                  { id: 'js', name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
                  { id: 'laravel', name: 'Laravel', icon: 'devicon-laravel-plain', color: '#FF2D20' },
                  { id: 'php', name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4' },
                  { id: 'sql', name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
                  { id: 'postgresql', name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' }
                ].map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setActiveTab(tech.id)}
                    className={`
                      group relative flex flex-col items-center justify-center p-4 rounded-3xl border transition-all duration-300
                      ${activeTab === tech.id 
                        ? (isDark ? 'bg-[#582CFF]/10 border-[#582CFF]/30 ring-1 ring-[#582CFF]/20' : 'bg-[#582CFF]/5 border-[#582CFF]/20') 
                        : (isDark ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-black/5 border-black/5 hover:border-black/10')}
                    `}
                  >
                    <i className={`${tech.icon} text-3xl transition-transform duration-300 group-hover:scale-110 ${activeTab === tech.id ? '' : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100'}`}></i>
                    <span className={`text-[10px] font-bold mt-2 uppercase tracking-tight ${activeTab === tech.id ? (isDark ? 'text-white' : 'text-black') : 'text-gray-500'}`}>
                      {tech.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Code Window & Preview */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              {/* Terminal Window */}
              <div className={`
                relative rounded-3xl border overflow-hidden transition-all duration-500
                ${isDark ? 'bg-[#0B0E14] border-white/10 shadow-2xl shadow-black' : 'bg-[#0B0E14] border-black/10 shadow-xl shadow-[#582CFF]/5'}
              `}>
                {/* Header Dots */}
                <div className="flex items-center gap-1.5 px-6 py-4 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  <div className={`ml-4 text-[10px] font-mono ${isDark ? 'text-white/40' : 'text-white/20'}`}>
                    {activeTab}.{activeTab === 'laravel' || activeTab === 'php' ? 'php' : activeTab === 'css' ? 'css' : activeTab === 'sql' || activeTab === 'postgresql' ? 'sql' : 'tsx'}
                  </div>
                </div>
                
                {/* Code Area */}
                <div className="p-8 font-mono text-[13px] md:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
                  {activeTab === 'react' && (
                    <div className="animate-in fade-in duration-500">
                      <p><span className="text-purple-400">const</span> [isLive, setIsLive] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">true</span>);</p>
                      <br />
                      <p><span className="text-blue-400">useEffect</span>(() ={'>'} {'{'}</p>
                      <p className="pl-4"><span className="text-green-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-yellow-200">"System optimized"</span>);</p>
                      <p>{'}'}, []);</p>
                      <br />
                      <p><span className="text-purple-400">return</span> {'<'}<span className="text-red-400">InteractivePanel</span> <span className="text-blue-300">status</span>={'{'}isLive{'}'} {'/>'};</p>
                    </div>
                  )}
                  {activeTab === 'html' && (
                    <div className="animate-in fade-in duration-500">
                      <p>{'<'}<span className="text-red-400">section</span> <span className="text-blue-300">class</span>=<span className="text-yellow-200">"hero-container"</span>{'>'}</p>
                      <p className="pl-4">{'<'}<span className="text-red-400">div</span> <span className="text-blue-300">class</span>=<span className="text-yellow-200">"glass-morphism"</span>{'>'}</p>
                      <p className="pl-8">{'<'}<span className="text-red-400">h1</span>{'>'}Sistemas Robustos{'<'}/<span className="text-red-400">h1</span>{'>'}</p>
                      <p className="pl-8">{'<'}<span className="text-red-400">p</span>{'>'}Desarrollo Full Stack{'<'}/<span className="text-red-400">p</span>{'>'}</p>
                      <p className="pl-4">{'<'}/<span className="text-red-400">div</span>{'>'}</p>
                      <p>{'<'}/<span className="text-red-400">section</span>{'>'}</p>
                    </div>
                  )}
                  {activeTab === 'css' && (
                    <div className="animate-in fade-in duration-500">
                      <p><span className="text-yellow-400">.glass-card</span> {'{'}</p>
                      <p className="pl-4"><span className="text-blue-300">backdrop-filter</span>: <span className="text-orange-400">blur</span>(12px);</p>
                      <p className="pl-4"><span className="text-blue-300">background</span>: <span className="text-orange-400">rgba</span>(255, 255, 255, 0.1);</p>
                      <p className="pl-4"><span className="text-blue-300">border</span>: 1px <span className="text-orange-400">solid</span> <span className="text-orange-400">rgba</span>(255, 255, 255, 0.2);</p>
                      <p className="pl-4"><span className="text-blue-300">box-shadow</span>: 0 4px 30px <span className="text-orange-400">rgba</span>(0, 0, 0, 0.1);</p>
                      <p>{'}'}</p>
                    </div>
                  )}
                  {activeTab === 'tailwind' && (
                    <div className="animate-in fade-in duration-500">
                      <p>{'<'}<span className="text-red-400">div</span> <span className="text-blue-300">className</span>=<span className="text-yellow-200">"flex flex-col lg:flex-row items-center gap-8 p-12 bg-[#582CFF] rounded-3xl shadow-2xl hover:scale-105 transition-all"</span>{'>'}</p>
                      <p className="pl-4">{'<'}<span className="text-red-400">Logo</span> <span className="text-blue-300">className</span>=<span className="text-yellow-200">"w-12 h-12"</span> {'/>'}</p>
                      <p className="pl-4">{'<'}<span className="text-red-400">Content</span> {'/>'}</p>
                      <p>{'<'}/<span className="text-red-400">div</span>{'>'}</p>
                    </div>
                  )}
                  {activeTab === 'js' && (
                    <div className="animate-in fade-in duration-500">
                      <p><span className="text-purple-400">async function</span> <span className="text-blue-400">fetchData</span>() {'{'}</p>
                      <p className="pl-4"><span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> <span className="text-blue-400">fetch</span>(<span className="text-yellow-200">'/api/v1/projects'</span>);</p>
                      <p className="pl-4"><span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> res.<span className="text-blue-400">json</span>();</p>
                      <br />
                      <p className="pl-4"><span className="text-purple-400">if</span> (data.status === <span className="text-yellow-200">'success'</span>) {'{'}</p>
                      <p className="pl-8"><span className="text-purple-400">return</span> data.projects.<span className="text-blue-400">filter</span>(p ={'>'} p.active);</p>
                      <p className="pl-4">{'}'}</p>
                      <p>{'}'}</p>
                    </div>
                  )}
                  {activeTab === 'laravel' && (
                    <div className="animate-in fade-in duration-500">
                      <p><span className="text-purple-400">public function</span> <span className="text-blue-400">index</span>()</p>
                      <p>{'{'}</p>
                      <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-red-400">Project</span>::<span className="text-blue-400">query</span>()</p>
                      <p className="pl-8">-{'>'}<span className="text-blue-400">where</span>(<span className="text-yellow-200">'is_published'</span>, <span className="text-orange-400">true</span>)</p>
                      <p className="pl-8">-{'>'}<span className="text-blue-400">latest</span>()</p>
                      <p className="pl-8">-{'>'}<span className="text-blue-400">paginate</span>(12);</p>
                      <p>{'}'}</p>
                    </div>
                  )}
                  {activeTab === 'php' && (
                    <div className="animate-in fade-in duration-500">
                      <p><span className="text-purple-400">namespace</span> App\Core;</p>
                      <br />
                      <p><span className="text-purple-400">class</span> <span className="text-red-400">SystemEngine</span></p>
                      <p>{'{'}</p>
                      <p className="pl-4"><span className="text-purple-400">private</span> <span className="text-blue-400">$status</span> = <span className="text-yellow-200">'optimized'</span>;</p>
                      <br />
                      <p className="pl-4"><span className="text-purple-400">public function</span> <span className="text-blue-400">run</span>()</p>
                      <p className="pl-4">{'{'}</p>
                      <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-blue-400">$this</span>-{'>'}status;</p>
                      <p className="pl-4">{'}'}</p>
                      <p>{'}'}</p>
                    </div>
                  )}
                  {activeTab === 'sql' && (
                    <div className="animate-in fade-in duration-500">
                      <p><span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> users</p>
                      <p><span className="text-purple-400">WHERE</span> active = <span className="text-orange-400">1</span></p>
                      <p><span className="text-purple-400">AND</span> role = <span className="text-yellow-200">'admin'</span></p>
                      <p><span className="text-purple-400">ORDER BY</span> created_at <span className="text-purple-400">DESC</span></p>
                      <p><span className="text-purple-400">LIMIT</span> <span className="text-orange-400">10</span>;</p>
                    </div>
                  )}
                  {activeTab === 'postgresql' && (
                    <div className="animate-in fade-in duration-500">
                      <p><span className="text-purple-400">CREATE TABLE</span> analytics (</p>
                      <p className="pl-4">id <span className="text-purple-400">SERIAL PRIMARY KEY</span>,</p>
                      <p className="pl-4">event_data <span className="text-purple-400">JSONB</span>,</p>
                      <p className="pl-4">created_at <span className="text-purple-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span></p>
                      <p>);</p>
                      <br />
                      <p><span className="text-purple-400">CREATE INDEX</span> idx_data <span className="text-purple-400">ON</span> analytics <span className="text-purple-400">USING GIN</span>(event_data);</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Preview Card */}
              <div className={`
                p-8 rounded-3xl border transition-all duration-500 flex items-center justify-between gap-6
                ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}
              `}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>Visual Preview</span>
                  </div>
                  <p className={`text-sm font-medium leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                    {activeTab === 'react' && 'Gestión de estado reactivo y ciclo de vida de componentes para interfaces dinámicas.'}
                    {activeTab === 'html' && 'Arquitectura semántica y SEO-friendly, garantizando accesibilidad y estructura robusta.'}
                    {activeTab === 'css' && 'Diseños de alta fidelidad con efectos de cristal (glassmorphism) y animaciones fluidas.'}
                    {activeTab === 'tailwind' && 'Maquetado eficiente basado en utilidades, permitiendo iteraciones de diseño ultra-rápidas.'}
                    {activeTab === 'js' && 'Lógica de cliente asíncrona, optimización de algoritmos y manipulación avanzada del DOM.'}
                    {activeTab === 'laravel' && 'Estructuras de backend escalables con Eloquent ORM y diseño de APIs RESTful.'}
                    {activeTab === 'php' && 'Desarrollo de lógica robusta en el servidor con arquitecturas limpias y patrones de diseño.'}
                    {activeTab === 'sql' && 'Consultas optimizadas para bases de datos relacionales y gestión eficiente de la información.'}
                    {activeTab === 'postgresql' && 'Modelado de datos avanzado, soporte JSONB e indexación para alto rendimiento.'}
                  </p>
                </div>
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#582CFF]/10 border border-[#582CFF]/20">
                  <i className={`
                    ${activeTab === 'react' ? 'devicon-react-original' : 
                      activeTab === 'html' ? 'devicon-html5-plain' : 
                      activeTab === 'css' ? 'devicon-css3-plain' : 
                      activeTab === 'tailwind' ? 'devicon-tailwindcss-plain' : 
                      activeTab === 'js' ? 'devicon-javascript-plain' : 
                      activeTab === 'laravel' ? 'devicon-laravel-plain' : 
                      activeTab === 'php' ? 'devicon-php-plain' : 
                      activeTab === 'sql' ? 'devicon-mysql-plain' : 
                      'devicon-postgresql-plain'} 
                    text-5xl text-[#582CFF] animate-pulse
                  `}></i>
                </div>
              </div>
            </div>
          </div>
        </section>

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
