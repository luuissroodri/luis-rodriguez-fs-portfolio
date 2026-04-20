import React, { useState, useEffect } from 'react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-[200vh] bg-[#050505] text-white font-sans selection:bg-[#582CFF]/30">
      {/* Background radial gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-[#582CFF]/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#8E54FF]/10 blur-[120px] rounded-full"></div>
      </div>

      <header className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-8'}`}>
        <nav className={`
          flex items-center justify-between transition-all duration-500 ease-in-out 
          ${isScrolled 
            ? 'px-4 py-2.5 w-[90%] md:w-[850px] bg-[#0F0F10]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
            : 'px-6 py-4 w-[95%] md:w-[1100px] bg-[#0F0F10]/60 backdrop-blur-md border border-white/5'} 
          rounded-full
        `}>
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-9 h-9 bg-[#582CFF] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(88,44,255,0.5)] transition-transform group-hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" /></svg>
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight">Upstart</span>
          </div>

          {/* Links */}
          <ul className="hidden lg:flex items-center gap-1 text-[13px] font-semibold">
            <li className="px-5 py-2.5 rounded-full bg-white/10 text-white cursor-pointer transition-all hover:bg-white/20">Home</li>
            <li className="flex items-center gap-1 px-4 py-2.5 text-[#94A3B8] hover:text-white cursor-pointer transition-all group">
              Features
              <svg className="w-3.5 h-3.5 opacity-40 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </li>
            <li className="flex items-center gap-1 px-4 py-2.5 text-[#94A3B8] hover:text-white cursor-pointer transition-all group">
              Pages
              <svg className="w-3.5 h-3.5 opacity-40 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </li>
            <li className="flex items-center gap-2 px-4 py-2.5 text-[#94A3B8] hover:text-white cursor-pointer transition-all">
              Elements
              <span className="bg-[#582CFF] text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider shadow-sm">New</span>
            </li>
            <li className="relative flex items-center gap-1 px-4 py-2.5 text-[#94A3B8] hover:text-white cursor-pointer transition-all">
              Contact
              <div className="absolute top-2.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-full hover:bg-white/5 transition-all cursor-pointer">
              <svg className="w-4 h-4 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              <span>EN</span>
              <svg className="w-3 h-3 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
            <button className={`${isScrolled ? 'px-5 py-2' : 'px-6 py-2.5'} bg-[#582CFF] hover:bg-[#4a24d9] rounded-full text-[13px] font-bold shadow-lg shadow-[#582CFF]/20 transition-all active:scale-95`}>
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto pt-48 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Effortless Analytics <br />
          And Real-Time <span className="italic text-[#582CFF] text-6xl md:text-8xl">Insights.</span>
        </h1>

        <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Upstart makes it easy to collect, analyze, and understand your data — so you can focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <button className="flex items-center gap-2 bg-[#582CFF] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(88,44,255,0.4)] active:scale-95">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>
            Get Started
          </button>
          <button className="flex items-center gap-2 group relative p-[1px] rounded-full overflow-hidden hover:scale-105 transition-all active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-[#582CFF] to-[#8E54FF] opacity-50"></div>
            <div className="relative bg-[#050505] px-8 py-4 rounded-full flex items-center gap-2 group-hover:bg-[#050505]/80 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#582CFF]/20 text-[#582CFF] shadow-[0_0_10px_rgba(88,44,255,0.5)]">
                <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span className="font-bold">Watch Video</span>
            </div>
          </button>
        </div>

        <div className="pt-12 border-t border-[#1E1E1E]/50 animate-in fade-in duration-1000 delay-700">
          <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            Trusted By Thousands of Companies
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
