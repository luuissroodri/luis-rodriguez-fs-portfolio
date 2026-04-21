import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Languages, Sun, Moon, Check, Download, Copy } from 'lucide-react'
import { GiPenguin } from 'react-icons/gi'
import luisPhoto from './assets/Luis.jpeg'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [lang, setLang] = useState('ES')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('react')
  const [copiedTab, setCopiedTab] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('Inicio')
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<number | null>(null)
  const langRef = useRef<HTMLDivElement>(null)

  // Configuration object for Technology Stack
  const technologies: Record<string, { name: string; icon: string; color: string; ext: string; desc: string; code: React.ReactNode; raw: string }> = {
    react: {
      name: 'React',
      icon: 'devicon-react-original',
      color: '#61DAFB',
      ext: 'tsx',
      desc: 'Gestión de estado reactivo y ciclo de vida de componentes para interfaces dinámicas.',
      raw: `const [isLive, setIsLive] = useState(true);

useEffect(() => {
  console.log("System optimized");
}, []);

return <InteractivePanel status={isLive} />;`,
      code: (
        <>
          <p><span className="text-purple-400">const</span> [isLive, setIsLive] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">true</span>);</p>
          <br />
          <p><span className="text-blue-400">useEffect</span>(() ={'>'} {'{'}</p>
          <p className="pl-4"><span className="text-green-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-yellow-200">"System optimized"</span>);</p>
          <p>{'}'}, []);</p>
          <br />
          <p><span className="text-purple-400">return</span> {'<'}<span className="text-red-400">InteractivePanel</span> <span className="text-blue-300">status</span>={'{'}isLive{'}'} {'/>'};</p>
        </>
      )
    },
    html: {
      name: 'HTML5',
      icon: 'devicon-html5-plain',
      color: '#E34F26',
      ext: 'html',
      desc: 'Arquitectura semántica y SEO-friendly, garantizando accesibilidad y estructura robusta.',
      raw: `<section class="hero-container">
  <div class="glass-morphism">
    <h1>Sistemas Robustos</h1>
    <p>Desarrollo Full Stack</p>
  </div>
</section>`,
      code: (
        <>
          <p>{'<'}<span className="text-red-400">section</span> <span className="text-blue-300">class</span>=<span className="text-yellow-200">"hero-container"</span>{'>'}</p>
          <p className="pl-4">{'<'}<span className="text-red-400">div</span> <span className="text-blue-300">class</span>=<span className="text-yellow-200">"glass-morphism"</span>{'>'}</p>
          <p className="pl-8">{'<'}<span className="text-red-400">h1</span>{'>'}Sistemas Robustos{'<'}/<span className="text-red-400">h1</span>{'>'}</p>
          <p className="pl-8">{'<'}<span className="text-red-400">p</span>{'>'}Desarrollo Full Stack{'<'}/<span className="text-red-400">p</span>{'>'}</p>
          <p className="pl-4">{'<'}/<span className="text-red-400">div</span>{'>'}</p>
          <p>{'<'}/<span className="text-red-400">section</span>{'>'}</p>
        </>
      )
    },
    css: {
      name: 'CSS3',
      icon: 'devicon-css3-plain',
      color: '#1572B6',
      ext: 'css',
      desc: 'Diseños de alta fidelidad con efectos de cristal (glassmorphism) y animaciones fluidas.',
      raw: `.glass-card {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}`,
      code: (
        <>
          <p><span className="text-yellow-400">.glass-card</span> {'{'}</p>
          <p className="pl-4"><span className="text-blue-300">backdrop-filter</span>: <span className="text-orange-400">blur</span>(12px);</p>
          <p className="pl-4"><span className="text-blue-300">background</span>: <span className="text-orange-400">rgba</span>(255, 255, 255, 0.1);</p>
          <p className="pl-4"><span className="text-blue-300">border</span>: 1px <span className="text-orange-400">solid</span> <span className="text-orange-400">rgba</span>(255, 255, 255, 0.2);</p>
          <p className="pl-4"><span className="text-blue-300">box-shadow</span>: 0 4px 30px <span className="text-orange-400">rgba</span>(0, 0, 0, 0.1);</p>
          <p>{'}'}</p>
        </>
      )
    },
    tailwind: {
      name: 'Tailwind',
      icon: 'devicon-tailwindcss-plain',
      color: '#06B6D4',
      ext: 'html',
      desc: 'Maquetado eficiente basado en utilidades, permitiendo iteraciones de diseño ultra-rápidas.',
      raw: `<div className="flex flex-col lg:flex-row items-center
  gap-8 p-12 bg-[#582CFF] rounded-3xl
  shadow-2xl hover:scale-105 transition-all">
  <Logo className="w-12 h-12" />
  <Content />
</div>`,
      code: (
        <>
          <p>{'<'}<span className="text-red-400">div</span> <span className="text-blue-300">className</span>=<span className="text-yellow-200">"flex flex-col lg:flex-row</span></p>
          <p className="pl-8 text-yellow-200">items-center gap-8 p-12 bg-[#582CFF]</p>
          <p className="pl-8 text-yellow-200">rounded-3xl shadow-2xl hover:scale-105</p>
          <p className="pl-8 text-yellow-200">transition-all"{'>'}</p>
          <p className="pl-4">{'<'}<span className="text-red-400">Logo</span> <span className="text-blue-300">className</span>=<span className="text-yellow-200">"w-12 h-12"</span> {'/>'}</p>
          <p className="pl-4">{'<'}<span className="text-red-400">Content</span> {'/>'}</p>
          <p>{'<'}/<span className="text-red-400">div</span>{'>'}</p>
        </>
      )
    },
    js: {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain',
      color: '#F7DF1E',
      ext: 'js',
      desc: 'Lógica de cliente asíncrona, optimización de algoritmos y manipulación avanzada del DOM.',
      raw: `async function fetchData() {
  const res = await fetch('/api/v1/projects');
  const data = await res.json();

  if (data.status === 'success') {
    return data.projects.filter(p => p.active);
  }
}`,
      code: (
        <>
          <p><span className="text-purple-400">async function</span> <span className="text-blue-400">fetchData</span>() {'{'}</p>
          <p className="pl-4"><span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> <span className="text-blue-400">fetch</span>(<span className="text-yellow-200">'/api/v1/projects'</span>);</p>
          <p className="pl-4"><span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> res.<span className="text-blue-400">json</span>();</p>
          <br />
          <p className="pl-4"><span className="text-purple-400">if</span> (data.status === <span className="text-yellow-200">'success'</span>) {'{'}</p>
          <p className="pl-8"><span className="text-purple-400">return</span> data.projects.<span className="text-blue-400">filter</span>(p ={'>'} p.active);</p>
          <p className="pl-4">{'}'}</p>
          <p>{'}'}</p>
        </>
      )
    },
    laravel: {
      name: 'Laravel',
      icon: 'devicon-laravel-plain',
      color: '#FF2D20',
      ext: 'php',
      desc: 'Estructuras de backend escalables con Eloquent ORM y diseño de APIs RESTful.',
      raw: `public function index()
{
  return Project::query()
    ->where('is_published', true)
    ->latest()
    ->paginate(12);
}`,
      code: (
        <>
          <p><span className="text-purple-400">public function</span> <span className="text-blue-400">index</span>()</p>
          <p>{'{'}</p>
          <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-red-400">Project</span>::<span className="text-blue-400">query</span>()</p>
          <p className="pl-8">-{'>'}<span className="text-blue-400">where</span>(<span className="text-yellow-200">'is_published'</span>, <span className="text-orange-400">true</span>)</p>
          <p className="pl-8">-{'>'}<span className="text-blue-400">latest</span>()</p>
          <p className="pl-8">-{'>'}<span className="text-blue-400">paginate</span>(12);</p>
          <p>{'}'}</p>
        </>
      )
    },
    php: {
      name: 'PHP',
      icon: 'devicon-php-plain',
      color: '#777BB4',
      ext: 'php',
      desc: 'Desarrollo de lógica robusta en el servidor con arquitecturas limpias y patrones de diseño.',
      raw: `namespace App\Core;

class SystemEngine {
  private $status = 'optimized';

  public function run() {
    return $this->status;
  }
}`,
      code: (
        <>
          <p><span className="text-purple-400">namespace</span> App\Core;</p>
          <br />
          <p><span className="text-purple-400">class</span> <span className="text-red-400">SystemEngine</span> {'{'}</p>
          <p className="pl-4"><span className="text-purple-400">private</span> <span className="text-blue-400">$status</span> = <span className="text-yellow-200">'optimized'</span>;</p>
          <br />
          <p className="pl-4"><span className="text-purple-400">public function</span> <span className="text-blue-400">run</span>() {'{'}</p>
          <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-blue-400">$this</span>-{'>'}status;</p>
          <p className="pl-4">{'}'}</p>
          <p>{'}'}</p>
        </>
      )
    },
    sql: {
      name: 'MySQL',
      icon: 'devicon-mysql-plain',
      color: '#4479A1',
      ext: 'sql',
      desc: 'Consultas optimizadas para bases de datos relacionales y gestión eficiente de la información.',
      raw: `SELECT * FROM users
WHERE active = 1
AND role = 'admin'
ORDER BY created_at DESC
LIMIT 10;`,
      code: (
        <>
          <p><span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> users</p>
          <p><span className="text-purple-400">WHERE</span> active = <span className="text-orange-400">1</span></p>
          <p><span className="text-purple-400">AND</span> role = <span className="text-yellow-200">'admin'</span></p>
          <p><span className="text-purple-400">ORDER BY</span> created_at <span className="text-purple-400">DESC</span></p>
          <p><span className="text-purple-400">LIMIT</span> <span className="text-orange-400">10</span>;</p>
        </>
      )
    },
    postgresql: {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain',
      color: '#336791',
      ext: 'sql',
      desc: 'Modelado de datos avanzado, soporte JSONB e indexación para alto rendimiento.',
      raw: `CREATE TABLE analytics (
  id SERIAL PRIMARY KEY,
  event_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_data ON analytics USING GIN(event_data);`,
      code: (
        <>
          <p><span className="text-purple-400">CREATE TABLE</span> analytics (</p>
          <p className="pl-4">id <span className="text-purple-400">SERIAL PRIMARY KEY</span>,</p>
          <p className="pl-4">event_data <span className="text-purple-400">JSONB</span>,</p>
          <p className="pl-4">created_at <span className="text-purple-400">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span></p>
          <p>);</p>
          <br />
          <p><span className="text-purple-400">CREATE INDEX</span> idx_data <span className="text-purple-400">ON</span> analytics <span className="text-purple-400">USING GIN</span>(event_data);</p>
        </>
      )
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      if (isScrollingRef.current) return;

      // Precise Scroll Spy
      const sections = [
        { id: 'inicio', name: 'Inicio' },
        { id: 'conocimientos', name: 'Conocimientos' },
        { id: 'trabajos', name: 'Trabajos' }
      ]
      
      const scrollPosition = window.scrollY + 300 // Higher threshold for earlier detection

      // Check if we are at the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
      if (isBottom) {
        setActiveSection('Trabajos')
        return
      }

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.name)
            break
          }
        }
      }
      if (window.scrollY < 100) setActiveSection('Inicio')
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
    { name: 'Inicio', href: '#inicio' },
    { name: 'Conocimientos', href: '#conocimientos' },
    { name: 'Trabajos', href: '#trabajos' },
    { name: 'Trayectoria', href: '#' }
  ]

  return (
    <div id="inicio" className={`min-h-[200vh] transition-colors duration-700 ${isDark ? 'bg-[#050505] text-white' : 'bg-[#F8FAFC] text-[#1E293B]'} font-sans selection:bg-[#582CFF]/30 scroll-smooth`}>
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
              ? `px-4 py-2.5 w-full max-w-5xl ${isDark ? 'bg-[#0F0F10]/95 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' : 'bg-white/70 border-black/[0.03] shadow-[0_20px_40px_rgba(88,44,255,0.05)]'} backdrop-blur-xl border` 
              : `px-6 py-4 w-full max-w-6xl ${isDark ? 'bg-[#0F0F10]/60 border-white/5' : 'bg-white/60 border-black/[0.01]'} backdrop-blur-md border`} 
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

            {/* Desktop Links */}
            <div className="hidden xl:block">
              <ul className="flex items-center gap-2 text-[13px] font-semibold">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.name;
                  return (
                    <li 
                      key={link.name} 
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          const targetId = link.href.substring(1);
                          const target = document.getElementById(targetId);
                          if (target) {
                            // 1. Block Scroll Spy immediately
                            isScrollingRef.current = true;
                            
                            // 2. Clear any pending scroll-lock resets
                            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                            
                            // 3. Set priority state
                            setActiveSection(link.name);
                            
                            // 4. Perform smooth scroll
                            const offset = targetId === 'inicio' ? 0 : 100;
                            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                            
                            // 5. Unlock Scroll Spy after animation (approx 1000ms for safety)
                            scrollTimeoutRef.current = setTimeout(() => {
                              isScrollingRef.current = false;
                            }, 1000);
                          }
                        }
                      }}
                      className={`
                        relative px-4 py-2 cursor-pointer transition-all duration-300
                        ${isActive 
                          ? 'text-[#8E54FF] font-bold' 
                          : (isDark ? 'text-[#94A3B8] hover:text-white' : 'text-[#64748B] hover:text-black')}
                      `}
                    >
                      <a href={link.href} className="pointer-events-none relative">
                        {link.name}
                        {/* Smooth Underline Transition */}
                        <div className={`absolute -bottom-1 left-0 h-[2.5px] bg-[#8E54FF] transition-all duration-500 ease-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                        
                        {/* Pulsing Notification Dot */}
                        {link.name === 'Trabajos' && isScrolled && (
                          <span className="absolute -top-1.5 -right-1.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

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
                        <div 
                          key={option.id}
                          onClick={() => {
                            setLang(option.id)
                            setIsLangOpen(false)
                          }}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${lang === option.id ? (isDark ? 'bg-[#582CFF] text-white' : 'bg-[#582CFF] text-white') : (isDark ? 'hover:bg-white/5 text-[#94A3B8]' : 'hover:bg-black/5 text-[#64748B]')}`}
                        >
                          <span className="text-[13px] font-bold">{option.label}</span>
                          {lang === option.id && <Check className="w-3 h-3" />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle Button */}
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 active:scale-90 border ${isDark ? 'bg-[#1E1E1E]/80 border-white/5 hover:bg-white/10 text-yellow-400' : 'bg-black/5 border-black/5 hover:bg-black/10 text-orange-600'}`}
              >
                {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
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
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 animate-entrance ${isDark ? 'bg-[#582CFF]/10 border-[#582CFF]/20 text-[#582CFF]' : 'bg-[#582CFF]/5 border-[#582CFF]/10 text-[#582CFF]'}`}>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]">Desarrollador Full Stack</span>
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-entrance" style={{ animationDelay: '150ms' }}>
                Sistemas Robustos.<br />
                <span className={`italic bg-gradient-to-r from-[#582CFF] to-[#8E54FF] bg-clip-text text-transparent`}>Arquitectura de Vanguardia.</span>
              </h1>

              <p className={`text-base md:text-lg max-w-xl mb-8 leading-relaxed animate-entrance ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`} style={{ animationDelay: '300ms' }}>
                Ingeniero de Sistemas enfocado en desarrollo web. Transformo problemas complejos de UX en soluciones UI escalables, mediante código limpio y arquitecturas robustas.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-entrance" style={{ animationDelay: '450ms' }}>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#582CFF] px-8 py-3.5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_15px_30px_rgba(88,44,255,0.25)] active:scale-95 text-white">
                  Ver Proyectos
                </button>
                <button className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold border transition-all active:scale-95 ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5 text-inherit font-bold'}`}>
                  Descargar CV
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Availability Indicator */}
              <div className="flex items-center gap-3 animate-entrance" style={{ animationDelay: '600ms' }}>
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
        <div className={`mt-16 border-b transition-all duration-500 ${isDark ? 'border-white/5' : 'border-black/[0.05]'}`}></div>

        {/* Conocimientos Section (Self-Contained Refactor) */}
        <section id="conocimientos" className={`mt-16 max-w-7xl mx-auto px-6 lg:px-12 py-10 rounded-[2.5rem] border transition-all duration-500 relative group overflow-hidden ${isDark ? 'border-white/5 shadow-2xl' : 'border-black/[0.03] shadow-sm'} animate-in fade-in slide-in-from-bottom-12 duration-1000`}>
          {/* Snake Border Animation Layers */}
          <div className="absolute inset-[-100%] aspect-square animate-border-spin opacity-50 z-0 pointer-events-none flex items-center justify-center" 
               style={{ 
                 background: `conic-gradient(from 0deg, transparent 0 348deg, ${isDark ? '#582CFF' : '#8E54FF'} 360deg)` 
               }}
          />
          <div className={`absolute inset-[2px] rounded-[2.4rem] z-[1] transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-[#F8FAFC]'}`} />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            {/* Left Column: Tech Configuration & Selector */}
            <div className="w-full lg:w-[35%] flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#582CFF]/10 border border-[#582CFF]/20 text-[#582CFF] mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Conocimientos</span>
                </div>
                <h2 className={`text-4xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-[#1E293B]'}`}>
                  Stack Tecnológico
                </h2>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                  Uso estas herramientas como diseñador IoT para crear infraestructura robusta y continua con herramientas líderes de la industria.
                </p>
              </div>

              {/* Responsive Grid for Icons */}
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-3 gap-3">
                {Object.keys(technologies).map((key) => {
                  const tech = technologies[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`
                        group relative aspect-square flex flex-col items-center justify-center rounded-2xl border transition-all duration-500 active:scale-95
                        ${activeTab === key 
                          ? (isDark ? 'bg-[#582CFF]/20 border-[#582CFF]/40 ring-1 ring-[#582CFF]/30' : 'bg-white border-[#582CFF]/30 shadow-lg shadow-[#582CFF]/5') 
                          : (isDark ? 'bg-[#151515] border-white/5 hover:border-white/10' : 'bg-white border-black/[0.05] hover:border-black/[0.1] shadow-sm')}
                      `}
                    >
                      <i className={`${tech.icon} text-2xl transition-all duration-500 ${activeTab === key ? 'colored scale-110' : 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100'}`}></i>
                      <span className={`text-[9px] font-black mt-2 uppercase tracking-tight transition-colors ${activeTab === key ? (isDark ? 'text-white' : 'text-black') : 'text-gray-500/60'}`}>
                        {tech.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Terminal & Preview Area */}
            <div className="w-full lg:w-[65%] flex flex-col gap-6">
              {/* Terminal Window with Anti-Breakage Constraints */}
              <div className={`
                w-full rounded-2xl border overflow-hidden transition-all duration-500
                ${isDark ? 'bg-[#0B0E14] border-white/10 shadow-2xl' : 'bg-[#0D0D0E] border-black/20 shadow-xl'}
              `}>
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative group/copy">
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(technologies[activeTab].raw);
                          setCopiedTab(activeTab);
                          setTimeout(() => setCopiedTab(null), 2000);
                        }}
                        className={`p-2.5 rounded-xl border transition-all duration-300 active:scale-90 ${
                          copiedTab === activeTab 
                            ? 'bg-green-500/20 border-green-500/40 text-green-400' 
                            : 'bg-white/10 border-white/20 text-white/70 hover:bg-[#582CFF] hover:border-[#582CFF] hover:text-white shadow-lg'
                        }`}
                      >
                        {copiedTab === activeTab ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      {/* Tooltip - Positioned below to avoid overflow-hidden clipping from top */}
                      <div className="absolute top-full right-0 mt-3 opacity-0 group-hover/copy:opacity-100 pointer-events-none transition-all duration-300 translate-y-1 group-hover/copy:translate-y-0 z-50">
                        <div className="bg-[#0F172A] text-[10px] font-black text-white px-3 py-2 rounded-lg border border-white/10 shadow-2xl backdrop-blur-xl whitespace-nowrap uppercase tracking-[0.2em]">
                          {copiedTab === activeTab ? '¡Copiado!' : 'Copy to clipboard'}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      src/core/{activeTab}.{technologies[activeTab].ext}
                    </span>
                  </div>
                </div>

                {/* Code Body with Auto-Scroll and Fixed Height - Increased to 340px to avoid scroll */}
                <div className="relative p-5 md:p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto overflow-y-auto custom-scrollbar h-[340px]">
                  <div className="flex animate-in fade-in zoom-in-95 duration-500 text-white/90">
                    <div className="flex flex-col text-white/20 select-none mr-6 text-right w-4">
                      {Array.from({length: Math.max(10, technologies[activeTab].raw.split('\n').length)}).map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>
                    <div className="flex-1 whitespace-pre">
                      {technologies[activeTab].code}
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated Visual Preview Card - Tightened gap and padding to align with left column bottom */}
              <div className={`
                w-full p-5 rounded-2xl border transition-all duration-700 flex flex-col md:flex-row items-center gap-5
                ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-black/[0.05] shadow-sm'}
              `}>
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#582CFF]/5 border border-[#582CFF]/10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[#582CFF]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <i className={`${technologies[activeTab].icon} text-5xl colored transition-transform duration-700 group-hover:rotate-12`}></i>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                      Status: Production Ready
                    </span>
                  </div>
                  <p className={`text-sm font-medium leading-relaxed max-w-xl ${isDark ? 'text-white/70' : 'text-[#1E293B]/80'}`}>
                    {technologies[activeTab].desc}
                  </p>
                </div>
              </div>


            </div>
          </div>


        </section>

        {/* Bottom Separator */}
        <div className={`mt-16 border-b transition-all duration-500 ${isDark ? 'border-white/5' : 'border-black/[0.05]'}`}></div>

        {/* Trabajos Section */}
        <section id="trabajos" className="mt-16 max-w-7xl mx-auto px-6 lg:px-12 py-20 relative">
          <div className="mb-20 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#582CFF]/10 border border-[#582CFF]/20 text-[#582CFF] mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest">Trabajos</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-black tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-[#1E293B]'}`}>
              Arquitectura de <span className="italic bg-gradient-to-r from-[#582CFF] to-[#8E54FF] bg-clip-text text-transparent">Sistemas Reales.</span>
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
              Debido a la naturaleza interna de estos sistemas gubernamentales y empresariales, el acceso público está restringido, pero aquí detallo la arquitectura y el impacto de las soluciones desarrolladas.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Plataforma Autogobierno",
                company: "Alcaldía de Mariño",
                desc: "Plataforma centralizada para la gestión comunitaria, optimizando flujos de trabajo dinámicos y la comunicación directa con los ciudadanos.",
                tags: ["Laravel", "React", "Tailwind", "PostgreSQL"],
                icons: ["devicon-laravel-plain", "devicon-react-original", "devicon-tailwindcss-original", "devicon-postgresql-plain"]
              },
              {
                title: "Planificación Estratégica",
                company: "Alcaldía de Mariño",
                desc: "Sistema de gestión de proyectos con visualización avanzada mediante Diagramas de Gantt, permitiendo el seguimiento en tiempo real de metas institucionales.",
                tags: ["Laravel", "React", "Tailwind", "PostgreSQL"],
                icons: ["devicon-laravel-plain", "devicon-react-original", "devicon-tailwindcss-original", "devicon-postgresql-plain"]
              },
              {
                title: "Reporte de Incidencias",
                company: "Alcaldía de Mariño",
                desc: "Herramienta de reporte ciudadano con geolocalización avanzada y sistema de control de acceso basado en roles (RBAC) para una respuesta eficiente.",
                tags: ["Laravel", "React", "Tailwind", "PostgreSQL"],
                icons: ["devicon-laravel-plain", "devicon-react-original", "devicon-tailwindcss-original", "devicon-postgresql-plain"]
              }
            ].map((project, index) => (
              <div 
                key={index}
                className={`
                  group relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden
                  ${isDark 
                    ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20' 
                    : 'bg-white border-black/[0.05] hover:shadow-2xl hover:shadow-[#582CFF]/10'}
                  backdrop-blur-xl hover:-translate-y-2
                `}
              >
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#582CFF]/10 blur-[80px] rounded-full group-hover:bg-[#582CFF]/20 transition-all duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Sistema Interno / Producción</span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-black mb-1 tracking-tight ${isDark ? 'text-white' : 'text-[#1E293B]'}`}>
                    {project.title}
                  </h3>
                  <p className="text-[#582CFF] font-bold text-xs uppercase tracking-widest mb-4">
                    {project.company}
                  </p>
                  
                  <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    {project.icons.map((icon, i) => (
                      <i key={i} className={`${icon} text-xl ${isDark ? 'text-white/40 group-hover:text-[#582CFF]' : 'text-black/40 group-hover:text-[#582CFF]'} transition-colors duration-300`}></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


      </main>
    </div>
  )
}

export default App
