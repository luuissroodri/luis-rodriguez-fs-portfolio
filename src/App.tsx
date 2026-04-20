import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Languages, Sun, Moon, Check } from 'lucide-react'
import { GiPenguin } from 'react-icons/gi'

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
                    <span className={`text-base font-semibold transition-colors ${isDark ? 'text-[#94A3B8] group-hover:text-white' : 'text-[#64748B] group-hover:text-black'}`}>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 -rotate-90 transition-all ${isDark ? 'text-[#94A3B8] group-hover:text-white' : 'text-[#64748B] group-hover:text-black'} group-hover:translate-x-1`} />
                  </li>
                ))}
                <li className="mt-2 pt-4 border-t border-white/5 px-2 pb-2">
                   <button className="w-full bg-[#582CFF] py-3.5 rounded-2xl font-bold shadow-lg shadow-[#582CFF]/20 active:scale-[0.98] transition-all text-sm">
                      Contactar ahora
                   </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto pt-48 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Analíticas sin Esfuerzo <br />
          e Información en <span className="italic text-[#582CFF] text-6xl md:text-8xl">Tiempo Real.</span>
        </h1>

        <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Upstart facilita la recopilación, el análisis y la comprensión de tus datos para que puedas centrarte en el crecimiento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <button className="flex items-center gap-2 bg-[#582CFF] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(88,44,255,0.4)] active:scale-95 text-white">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>
            Empezar
          </button>
          <button className="flex items-center gap-2 group relative p-[1px] rounded-full overflow-hidden hover:scale-105 transition-all active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-[#582CFF] to-[#8E54FF] opacity-50"></div>
            <div className="relative bg-[#050505] px-8 py-4 rounded-full flex items-center gap-2 group-hover:bg-[#050505]/80 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#582CFF]/20 text-[#582CFF] shadow-[0_0_10px_rgba(88,44,255,0.5)]">
                <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span className="font-bold">Ver Vídeo</span>
            </div>
          </button>
        </div>

        <div className="pt-12 border-t border-[#1E1E1E]/50 animate-in fade-in duration-1000 delay-700">
          <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            Con la confianza de miles de empresas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">Dropbox</span>
            <span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">zoom</span>
            <span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">coinbase</span>
            <span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">Spotify</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
