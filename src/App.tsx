import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Languages, Sun, Moon, Check, Download, Copy, ChevronLeft, ChevronRight, Lock, Sparkles } from 'lucide-react'
import { GiPenguin } from 'react-icons/gi'
import luisPhoto from './assets/Luis.jpeg'
import ExperienceTimeline from './components/ExperienceTimeline'
import ContactFooter from './components/ContactFooter'


interface Project {
  title: string;
  company: string;
  desc: string;
  tags: string[];
  icons: string[];
  images?: string[];
  achievements?: string[];
  year: string;
  role: string;
}

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
  index: number;
  onOpenGallery: (project: Project) => void;
  t: any;
}

const ProjectCard = ({ project, isDark, index, onOpenGallery, t }: ProjectCardProps) => {
  const hasImages = project.images && project.images.length > 0;
  const mainImage = hasImages ? project.images![0] : luisPhoto;

  return (
    <div 
      onClick={() => onOpenGallery(project)}
      className={`
        group relative w-full flex flex-col lg:flex-row gap-12 py-12 transition-all duration-700 cursor-pointer
        ${index !== 0 ? (isDark ? 'border-t border-white/10' : 'border-t border-slate-200') : ''}
        hover:opacity-90
      `}
    >
      {/* Left Column: Image & Technologies */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6">
        {/* The Capture - Full visibility */}
        <div className={`aspect-video rounded-[24px] overflow-hidden border shadow-sm transition-all duration-700 group-hover:shadow-2xl ${isDark ? 'bg-zinc-900/10 border-white/5' : 'bg-[#F8FAFC] border-[#582CFF]/20 shadow-xl shadow-[#582CFF]/5'}`}>
          <img 
            src={mainImage} 
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Technologies - Now dynamically from project data */}
        <div className="flex items-center gap-5 px-1">
          {project.icons.map((icon, i) => (
            <i 
              key={i} 
              className={`${icon} text-xl transition-all duration-500 hover:scale-110 ${isDark ? 'opacity-40 group-hover:opacity-100' : 'opacity-60 group-hover:opacity-100 text-slate-600 group-hover:text-[#582CFF]'}`}
              style={{ transitionDelay: `${i * 75}ms` }}
            ></i>
          ))}
        </div>
      </div>

      {/* Right Column: Content Section */}
      <div className="w-full lg:w-[50%] flex flex-col pt-1">
        {/* Company Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[9px] font-black uppercase tracking-[0.3em] text-[#582CFF]`}>
            {project.company}
          </span>
          <div className={`h-[1px] w-6 ${isDark ? 'bg-white/20' : 'bg-slate-200'}`}></div>
        </div>

        <h3 className={`text-3xl lg:text-4xl font-black mb-4 tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {project.title}
        </h3>
        
        <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-[#94A3B8]' : 'text-slate-600'}`}>
          {project.desc}
        </p>

        {/* PROJECT INFO Table - Minimalist */}
        <div className={`mt-auto border-t pt-6 ${isDark ? 'border-white/10' : 'border-[#582CFF]/20'}`}>
          <div className="space-y-3">
            <div className={`flex justify-between items-center py-1.5 border-b ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <span className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-slate-400'}`}>{t.projects.year}</span>
              <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.year}</span>
            </div>
            <div className="flex justify-between items-center py-1.5">
              <span className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-slate-400'}`}>{t.projects.role}</span>
              <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.role}</span>
            </div>
          </div>
        </div>

        {/* Action Links - Differentiated Styles */}
        <div className="flex items-center gap-6 mt-10">
          <button 
            onClick={() => onOpenGallery(project)}
            className="group/btn flex items-center gap-2 px-8 py-3 rounded-xl bg-[#582CFF] text-white text-[11px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#582CFF]/25"
          >
            {t.projects.explore}
            <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
          
          <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] cursor-not-allowed ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
            <Lock className="w-3 h-3" />
            {t.projects.private}
          </div>
        </div>
      </div>
    </div>
  );
};

const translations = {
  ES: {
    nav: { home: 'Inicio', skills: 'Conocimientos', works: 'Trabajos', timeline: 'Trayectoria', contact: 'Contactar', contactNow: 'Contactar ahora' },
    hero: { role: 'Desarrollador Full Stack', title1: 'Sistemas Robustos.', title2: 'Arquitectura de Vanguardia.', desc: 'Ingeniero de Sistemas enfocado en desarrollo web. Transformo problemas complejos de UX en soluciones UI escalables, mediante código limpio y arquitecturas robustas.', view: 'Ver Proyectos', cv: 'Descargar CV', cvPath: '/CV Luis Rodriguez Es.pdf', availability: 'Disponible para proyectos' },
    metrics: [
      { title: '6+', subtitle: 'MESES DE EXPERIENCIA', status: 'system_status: active' },
      { title: '100%', subtitle: 'ENFOQUE PIXEL-PERFECT', status: 'ux_latency: <100ms' },
      { title: 'Robusta', subtitle: 'APIS & ARQUITECTURA', status: 'uptime: 99.9%' },
      { title: '10+', subtitle: 'SISTEMAS DESPLEGADOS', status: 'deployments: success' }
    ],
    stack: { badge: 'Conocimientos', title: 'Stack Tecnológico', desc: 'Uso estas herramientas como diseñador IoT para crear infraestructura robusta y continua con herramientas líderes de la industria.', copy: 'Copy to clipboard', copied: '¡Copiado!', status: 'Status: Production Ready' },
    projects: { badge: 'Trabajos', title: 'Arquitectura de', titleAccent: 'Sistemas Reales.', desc: 'Debido a la naturaleza interna de estos sistemas gubernamentales y empresariales, el acceso público está restringido, pero aquí detallo la arquitectura e impacto de las soluciones desarrolladas.', explore: 'Explorar Proyecto', private: 'Repo Privado', year: 'Año', role: 'Rol', highlights: 'Logros del Proyecto', back: 'Regresar a Galería', close: 'CERRAR VISTA' },
    common: { confidential: 'Confidencial' },
    tech: {
      react: 'Gestión de estado reactivo y ciclo de vida de componentes para interfaces dinámicas.',
      html: 'Arquitectura semántica y SEO-friendly, garantizando accesibilidad y estructura robusta.',
      css: 'Diseños de alta fidelidad con efectos de cristal (glassmorphism) y animaciones fluidas.',
      js: 'Lógica de cliente asíncrona, optimización de algoritmos y manipulación avanzada del DOM.',
      typescript: 'Tipado estático para JavaScript, mejorando la mantenibilidad del código y previniendo errores en desarrollo.',
      tailwind: 'Maquetado eficiente basado en utilidades, permitiendo iteraciones de diseño ultra-rápidas.',
      figma: 'Diseño de interfaces (UI/UX), prototipado de alta fidelidad y colaboración en el flujo creativo.',
      laravel: 'Estructuras de backend escalables con Eloquent ORM y diseño de APIs RESTful.',
      php: 'Desarrollo de lógica robusta en el servidor con arquitecturas limpias y patrones de diseño.',
      postgresql: 'Modelado de datos avanzado, soporte JSONB e indexación para alto rendimiento.',
      sqlite: 'Base de datos ligera y autónoma, ideal para aplicaciones locales, desarrollo rápido y almacenamiento integrado.',
      ubuntu: 'Administración de servidores Linux, automatización de tareas y gestión de entornos de desarrollo.',
      docker: 'Containerización de aplicaciones, orquestación y despliegue consistente en diferentes entornos.',
      git: 'Control de versiones distribuido, colaboración en equipo y gestión de ramas.'
    }
  },
  EN: {
    nav: { home: 'Home', skills: 'Skills', works: 'Works', timeline: 'Trajectory', contact: 'Contact', contactNow: 'Contact Now' },
    hero: { role: 'Full Stack Developer', title1: 'Robust Systems.', title2: 'Cutting-Edge Architecture.', desc: 'Systems Engineer focused on web development. I transform complex UX problems into scalable UI solutions, using clean code and robust architectures.', view: 'View Projects', cv: 'Download CV', cvPath: '/CV Luis Rodriguez En.pdf', availability: 'Available for projects' },
    metrics: [
      { title: '6+', subtitle: 'MONTHS OF EXPERIENCE', status: 'system_status: active' },
      { title: '100%', subtitle: 'PIXEL-PERFECT FOCUS', status: 'ux_latency: <100ms' },
      { title: 'Robust', subtitle: 'APIS & ARCHITECTURE', status: 'uptime: 99.9%' },
      { title: '10+', subtitle: 'DEPLOYED SYSTEMS', status: 'deployments: success' }
    ],
    stack: { badge: 'Expertise', title: 'Tech Stack', desc: 'I leverage these tools as an IoT designer to build robust, continuous infrastructure using industry-leading technologies.', copy: 'Copy to clipboard', copied: 'Copied!', status: 'Status: Production Ready' },
    projects: { badge: 'Works', title: 'Real-World', titleAccent: 'Systems Architecture.', desc: 'Due to the internal nature of these governmental and corporate systems, public access is restricted, but here I detail the architecture and impact of the solutions developed.', explore: 'Explore Project', private: 'Private Repo', year: 'Year', role: 'Role', highlights: 'Project Highlights', back: 'Back to Gallery', close: 'CLOSE VIEW' },
    common: { confidential: 'Confidential' },
    tech: {
      react: 'Reactive state management and component lifecycle for dynamic interfaces.',
      html: 'Semantic and SEO-friendly architecture, ensuring accessibility and robust structure.',
      css: 'High-fidelity designs with glassmorphism effects and fluid animations.',
      js: 'Asynchronous client logic, algorithm optimization, and advanced DOM manipulation.',
      typescript: 'Static typing for JavaScript, improving code maintainability and preventing development errors.',
      tailwind: 'Efficient utility-based layout, allowing ultra-fast design iterations.',
      figma: 'Interface design (UI/UX), high-fidelity prototyping, and creative workflow collaboration.',
      laravel: 'Scalable backend structures with Eloquent ORM and RESTful API design.',
      php: 'Robust server-side logic development with clean architectures and design patterns.',
      postgresql: 'Advanced data modeling, JSONB support, and indexing for high performance.',
      sqlite: 'Lightweight and autonomous database, ideal for local apps, rapid development, and embedded storage.',
      ubuntu: 'Linux server administration, task automation, and development environment management.',
      docker: 'Application containerization, orchestration, and consistent deployment across different environments.',
      git: 'Distributed version control, team collaboration, and branch management.'
    }
  }
};

const getProjectData = (lang: string) => [
  {
    title: lang === 'ES' ? "Plataforma Autogobierno" : "Self-Government Platform",
    company: "Alcaldía de Mariño",
    desc: lang === 'ES' 
      ? "Plataforma centralizada para la gestión comunitaria, optimizando flujos de trabajo dinámicos y la comunicación directa con los ciudadanos."
      : "Centralized community management platform, optimizing dynamic workflows and direct citizen communication.",
    tags: ["Laravel", "React", "TypeScript", "Tailwind", "PostgreSQL"],
    icons: ["devicon-laravel-plain", "devicon-react-original", "devicon-typescript-plain", "devicon-tailwindcss-original", "devicon-postgresql-plain"],
    images: ["/foto.webp", "/foto 1.webp"],
    year: "2026",
    role: lang === 'ES' ? "Desarrollador Full Stack" : "Full Stack Developer",
    achievements: lang === 'ES' ? [
      "Primer municipio del país en implementar un sistema integral de ayudas automatizadas para la comunidad.",
      "Implementación de flujos de aprobación en tiempo real y gestión transparente de recursos.",
      "Optimización del 60% en tiempos de respuesta administrativa mediante la automatización de procesos."
    ] : [
      "First municipality in the country to implement an automated comprehensive community aid system.",
      "Implementation of real-time approval flows and transparent resource management.",
      "60% optimization in administrative response times through process automation."
    ]
  },
  {
    title: "XINABIS",
    company: lang === 'ES' ? "Embarcación Isidoro" : "Isidoro Vessel",
    desc: lang === 'ES'
      ? "Gestión integral para la embarcación Isidoro: finanzas, incidencias y seguridad avanzada con RBAC."
      : "Comprehensive management for the Isidoro vessel: finance, incidents, and advanced security with RBAC.",
    tags: ["Laravel", "React", "TypeScript", "Tailwind", "PostgreSQL"],
    icons: ["devicon-laravel-plain", "devicon-react-original", "devicon-typescript-plain", "devicon-tailwindcss-original", "devicon-postgresql-plain"],
    images: ["/x1.webp", "/x2.webp", "/x3.webp", "/x4.webp"],
    year: "2026",
    role: lang === 'ES' ? "Desarrollador Full Stack" : "Full Stack Developer",
    achievements: lang === 'ES' ? [
      "Pionero nacional en gestión web marítima, logrando trazabilidad y transparencia absoluta.",
      "Seguridad de alto nivel mediante arquitectura RBAC y autenticación de dos factores (2FA).",
      "Control total de ingresos, egresos e incidencias con respaldo fotográfico, eliminando procesos manuales."
    ] : [
      "National pioneer in maritime web management, achieving absolute traceability and transparency.",
      "High-level security via RBAC architecture and two-factor authentication (2FA).",
      "Total control of income, expenses, and incidents with photographic backup, eliminating manual processes."
    ]
  },
  {
    title: lang === 'ES' ? "Planificación Estratégica" : "Strategic Planning",
    company: "Alcaldía de Mariño",
    desc: lang === 'ES'
      ? "Arquitectura de un sistema de seguimiento departamental con visualización de datos mediante Diagramas de Gantt y métricas de cumplimiento de alto nivel."
      : "Architecture of a departmental tracking system with data visualization via Gantt charts and high-level compliance metrics.",
    tags: ["Laravel", "React", "TypeScript", "Tailwind", "SQLite"],
    icons: ["devicon-laravel-plain", "devicon-react-original", "devicon-typescript-plain", "devicon-tailwindcss-original", "devicon-sqlite-plain"],
    images: ["/foto 2.webp", "/foto 3.webp"],
    year: "2026",
    role: lang === 'ES' ? "Desarrollador Full Stack" : "Full Stack Developer",
    achievements: lang === 'ES' ? [
      "Desarrollo de una herramienta de visualización de datos mediante Diagramas de Gantt para la planificación estratégica municipal.",
      "Arquitectura de seguimiento con métricas de cumplimiento y regulación de porcentajes de avance departamental.",
      "Mejora en un 40% en el seguimiento de actividades de todos los departamentos del ente gubernamental."
    ] : [
      "Development of a data visualization tool using Gantt charts for municipal strategic planning.",
      "Tracking architecture with compliance metrics and departmental progress percentage regulation.",
      "40% improvement in activity tracking for all government departments."
    ]
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [lang, setLang] = useState('ES')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('react')
  const [copiedTab, setCopiedTab] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('Inicio')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentModalImage, setCurrentModalImage] = useState<number>(0)
  const [showDetails, setShowDetails] = useState(false)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<number | null>(null)
  const [isFlash, setIsFlash] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const t = translations[lang as 'ES' | 'EN'];
  const projects = getProjectData(lang);

  // Trigger flash animation on theme change
  useEffect(() => {
    setIsFlash(true)
    const timer = setTimeout(() => setIsFlash(false), 800)
    return () => clearTimeout(timer)
  }, [isDark])

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  // Configuration object for Technology Stack
  const technologies: Record<string, { name: string; icon: string; color: string; ext: string; desc: string; code: React.ReactNode; raw: string }> = {
    react: {
      name: 'React',
      icon: 'devicon-react-original',
      color: '#61DAFB',
      ext: 'tsx',
      desc: t.tech.react,
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
      desc: t.tech.html,
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
      desc: t.tech.css,
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
    js: {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain',
      color: '#F7DF1E',
      ext: 'js',
      desc: t.tech.js,
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
    typescript: {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain',
      color: '#3178C6',
      ext: 'ts',
      desc: t.tech.typescript,
      raw: `interface User {
  id: number;
  role: 'admin' | 'dev';
}

const systemStatus = (u: User): string => {
  return \`Active: \${u.role}\`;
};`,
      code: (
        <>
          <p><span className="text-purple-400">interface</span> <span className="text-red-400">User</span> {'{'}</p>
          <p className="pl-4">id: <span className="text-blue-300">number</span>;</p>
          <p className="pl-4">role: <span className="text-yellow-200">'admin'</span> | <span className="text-yellow-200">'dev'</span>;</p>
          <p>{'}'}</p>
          <br />
          <p><span className="text-purple-400">const</span> <span className="text-blue-400">systemStatus</span> = (u: <span className="text-red-400">User</span>): <span className="text-blue-300">string</span> ={'>'} {'{'}</p>
          <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-200">`Active: ${'{'}u.role{'}'}`</span>;</p>
          <p>{'}'};</p>
        </>
      )
    },
    tailwind: {
      name: 'Tailwind',
      icon: 'devicon-tailwindcss-plain',
      color: '#06B6D4',
      ext: 'html',
      desc: t.tech.tailwind,
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
    figma: {
      name: 'Figma',
      icon: 'devicon-figma-plain',
      color: '#F24E1E',
      ext: 'fig',
      desc: t.tech.figma,
      raw: `/* Figma Design Tokens */
:root {
  --primary-glow: #582CFF;
  --glass-blur: 12px;
  --card-radius: 24px;
  --transition: 0.5s ease;
}`,
      code: (
        <>
          <p><span className="text-white/30">/* Figma Design Tokens */</span></p>
          <p><span className="text-yellow-400">:root</span> {'{'}</p>
          <p className="pl-4"><span className="text-blue-300">--primary-glow</span>: <span className="text-orange-400">#582CFF</span>;</p>
          <p className="pl-4"><span className="text-blue-300">--glass-blur</span>: 12px;</p>
          <p className="pl-4"><span className="text-blue-300">--card-radius</span>: 24px;</p>
          <p className="pl-4"><span className="text-blue-300">--transition</span>: 0.5s ease;</p>
          <p>{'}'}</p>
        </>
      )
    },
    laravel: {
      name: 'Laravel',
      icon: 'devicon-laravel-plain',
      color: '#FF2D20',
      ext: 'php',
      desc: t.tech.laravel,
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
      desc: t.tech.php,
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
    postgresql: {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain',
      color: '#336791',
      ext: 'sql',
      desc: t.tech.postgresql,
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
    },
    sqlite: {
      name: 'SQLite',
      icon: 'devicon-sqlite-plain',
      color: '#003B57',
      ext: 'sqlite',
      desc: t.tech.sqlite,
      raw: `CREATE TABLE local_storage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT UNIQUE,
  value BLOB
);

PRAGMA foreign_keys = ON;`,
      code: (
        <>
          <p><span className="text-purple-400">CREATE TABLE</span> local_storage (</p>
          <p className="pl-4">id <span className="text-purple-400">INTEGER PRIMARY KEY AUTOINCREMENT</span>,</p>
          <p className="pl-4">key <span className="text-purple-400">TEXT UNIQUE</span>,</p>
          <p className="pl-4">value <span className="text-purple-400">BLOB</span></p>
          <p>);</p>
          <br />
          <p><span className="text-purple-400">PRAGMA</span> foreign_keys = <span className="text-orange-400">ON</span>;</p>
        </>
      )
    },
    ubuntu: {
      name: 'Ubuntu',
      icon: 'devicon-ubuntu-plain',
      color: '#E95420',
      ext: 'sh',
      desc: t.tech.ubuntu,
      raw: `sudo apt update && sudo apt upgrade -y
ls -la /var/www/html
systemctl status nginx`,
      code: (
        <>
          <p><span className="text-purple-400">sudo</span> apt update {'&&'} <span className="text-purple-400">sudo</span> apt upgrade <span className="text-blue-300">-y</span></p>
          <p><span className="text-purple-400">ls</span> <span className="text-blue-300">-la</span> /var/www/html</p>
          <p><span className="text-purple-400">systemctl</span> status nginx</p>
        </>
      )
    },
    docker: {
      name: 'Docker',
      icon: 'devicon-docker-plain',
      color: '#2496ED',
      ext: 'dockerfile',
      desc: t.tech.docker,
      raw: `FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`,
      code: (
        <>
          <p><span className="text-purple-400">FROM</span> node:18-alpine</p>
          <p><span className="text-purple-400">WORKDIR</span> /app</p>
          <p><span className="text-purple-400">COPY</span> . .</p>
          <p><span className="text-purple-400">RUN</span> npm install</p>
          <p><span className="text-purple-400">CMD</span> [<span className="text-yellow-200">"npm"</span>, <span className="text-yellow-200">"start"</span>]</p>
        </>
      )
    },
    git: {
      name: 'Git',
      icon: 'devicon-git-plain',
      color: '#F05032',
      ext: 'git',
      desc: t.tech.git,
      raw: `git checkout -b feature/optimization
git add .
git commit -m "feat: enhance system performance"
git push origin feature/optimization`,
      code: (
        <>
          <p><span className="text-purple-400">git</span> checkout <span className="text-blue-300">-b</span> feature/optimization</p>
          <p><span className="text-purple-400">git</span> add .</p>
          <p><span className="text-purple-400">git</span> commit <span className="text-blue-300">-m</span> <span className="text-yellow-200">"feat: enhance system performance"</span></p>
          <p><span className="text-purple-400">git</span> push origin feature/optimization</p>
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
        { id: 'trabajos', name: 'Trabajos' },
        { id: 'trayectoria', name: 'Trayectoria' }
      ]
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.name);
            break;
          }
        }
      }

      // Priority overrides
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isBottom) {
        setActiveSection('Contacto');
      } else if (window.scrollY < 100) {
        setActiveSection('Inicio');
      }
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
    { name: 'Inicio', label: t.nav.home, href: '#inicio' },
    { name: 'Conocimientos', label: t.nav.skills, href: '#conocimientos' },
    { name: 'Trabajos', label: t.nav.works, href: '#trabajos' },
    { name: 'Trayectoria', label: t.nav.timeline, href: '#trayectoria' }
  ]

  return (
    <>
      <style>{`
        .light-syntax .text-purple-400 { color: #9333ea; }
        .light-syntax .text-blue-400 { color: #2563eb; }
        .light-syntax .text-blue-300 { color: #0284c7; }
        .light-syntax .text-orange-400 { color: #ea580c; }
        .light-syntax .text-yellow-200 { color: #84cc16; }
        .light-syntax .text-green-400 { color: #16a34a; }
        .light-syntax .text-red-400 { color: #dc2626; }
        
        @keyframes quick-flash {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-quick-flash {
          animation: quick-flash 0.4s ease-in-out 2;
        }
      `}</style>
      <div id="inicio" className={`min-h-[200vh] overflow-x-hidden transition-colors duration-700 ${isDark ? 'bg-[#050505] text-white' : 'bg-white text-black'} font-sans selection:bg-[#582CFF]/30 scroll-smooth`}>
      {/* Background radial gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] transition-opacity duration-1000 ${isDark ? 'bg-[#582CFF]/10' : 'bg-[#582CFF]/5'} blur-[120px] rounded-full`}></div>
        <div className={`absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] transition-opacity duration-1000 ${isDark ? 'bg-[#8E54FF]/10' : 'bg-[#8E54FF]/5'} blur-[120px] rounded-full`}></div>
      </div>

      <header className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-4 md:pt-8'}`}>
        <div className="relative flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          <nav className={`
            flex items-center justify-between transition-all duration-500 ease-in-out
            ${isScrolled 
              ? `px-4 py-2.5 w-full max-w-5xl ${isDark ? 'bg-[#0F0F10]/95 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' : 'bg-white/90 border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.05)]'} backdrop-blur-2xl border` 
              : `px-4 py-2.5 md:px-6 md:py-4 w-full max-w-6xl ${isDark ? 'bg-[#0F0F10]/60 border-white/5' : 'bg-white/70 border-slate-100'} backdrop-blur-md border`} 
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
                        {link.label}
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
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 active:scale-90 border cursor-pointer group/theme ${isDark ? 'bg-[#1E1E1E]/80 border-white/5 hover:bg-white/10 hover:border-white/20 text-yellow-400' : 'bg-white border-black/5 hover:bg-black/10 hover:border-black/10 text-orange-600 shadow-sm'}`}
              >
                {isDark ? <Sun className="w-5 h-5 transition-transform group-hover/theme:rotate-90" /> : <Moon className="w-5 h-5 transition-transform group-hover/theme:-rotate-12" />}
              </button>
              
              <button 
                onClick={() => {
                  const target = document.getElementById('contacto');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hidden xl:block group flex items-center gap-2 bg-[#582CFF] hover:bg-[#4a24d9] rounded-full px-6 py-2.5 text-[13px] font-bold transition-all active:scale-95 text-white whitespace-nowrap shadow-lg shadow-[#582CFF]/20"
              >
                {t.nav.contact}
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
                    <li 
                      key={link.name} 
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          const targetId = link.href.substring(1);
                          const target = document.getElementById(targetId);
                          if (target) {
                            // Close menu
                            setIsMenuOpen(false);

                            // Block Scroll Spy immediately
                            isScrollingRef.current = true;
                            
                            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                            
                            setActiveSection(link.name);
                            
                            const offset = targetId === 'inicio' ? 0 : 100;
                            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                            
                            scrollTimeoutRef.current = setTimeout(() => {
                              isScrollingRef.current = false;
                            }, 1000);
                          }
                        }
                      }}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer group ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
                    >
                    <div className="flex items-center gap-3">
                      <span className={`text-base font-semibold transition-colors ${isDark ? 'text-[#94A3B8] group-hover:text-white' : 'text-[#64748B] group-hover:text-black'}`}>{link.label}</span>
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
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      const target = document.getElementById('contacto');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#582CFF] py-3.5 rounded-2xl font-bold shadow-lg shadow-[#582CFF]/20 active:scale-[0.98] transition-all text-sm text-white"
                  >
                    {t.nav.contactNow}
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
                <span className="text-[11px] font-bold uppercase tracking-[0.15em]">{t.hero.role}</span>
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-entrance" style={{ animationDelay: '150ms' }}>
                {t.hero.title1}<br />
                <span className={`italic bg-gradient-to-r from-[#582CFF] to-[#8E54FF] bg-clip-text text-transparent`}>{t.hero.title2}</span>
              </h1>

              <p className={`text-base md:text-lg max-w-xl mb-4 leading-relaxed animate-entrance ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`} style={{ animationDelay: '300ms' }}>
                {t.hero.desc}
              </p>


              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-entrance" style={{ animationDelay: '450ms' }}>
                <button 
                  onClick={() => {
                    const target = document.getElementById('trabajos');
                    if (target) {
                      const offset = 100;
                      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#582CFF] px-8 py-3.5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_15px_30_rgba(88,44,255,0.25)] active:scale-95 text-white"
                >
                  {t.hero.view}
                </button>
                <a 
                  href={t.hero.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold border transition-all active:scale-95 ${isDark ? 'border-white/10 hover:bg-white/5 text-white' : 'border-black/20 bg-transparent hover:bg-black/5 text-black'} ${isFlash ? 'animate-quick-flash border-[#582CFF]/50 text-[#582CFF]' : ''}`}
                >
                  {t.hero.cv}
                  <Download className="w-4 h-4" />
                </a>
              </div>

              {/* Availability Indicator */}
              <div className="flex items-center gap-3 animate-entrance" style={{ animationDelay: '600ms' }}>
                <div className="relative flex h-2.5 w-2.5">
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></div>
                  <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></div>
                </div>
                <span className={`text-[11px] font-bold tracking-widest uppercase ${isDark ? 'text-green-500/80' : 'text-green-700'}`}>
                  {t.hero.availability}
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
            {t.metrics.map((metric: any, i: number) => (
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
        <div className={`mt-16 border-b transition-all duration-500 ${isDark ? 'border-white/5' : 'border-[#582CFF]/20'}`}></div>

        {/* Conocimientos Section (Self-Contained Refactor) */}
        <section id="conocimientos" className={`mt-16 max-w-7xl mx-auto px-6 lg:px-12 py-10 rounded-[2.5rem] border transition-all duration-500 relative group overflow-hidden ${isDark ? 'border-white/5 shadow-2xl' : 'bg-[#F8FAFC] border-[#582CFF]/20 shadow-xl shadow-[#582CFF]/5'} animate-in fade-in slide-in-from-bottom-12 duration-1000`}>
          {/* Snake Border Animation Layers */}
          <div className="absolute inset-[-100%] aspect-square animate-border-spin opacity-50 z-0 pointer-events-none flex items-center justify-center" 
               style={{ 
                 background: `conic-gradient(from 0deg, transparent 0 348deg, ${isDark ? '#582CFF' : '#582CFF'} 360deg)` 
               }}
          />
          <div className={`absolute inset-[2px] rounded-[2.4rem] z-[1] transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-white'}`} />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            {/* Left Column: Tech Configuration & Selector */}
            <div className="w-full lg:w-[35%] flex flex-col lg:justify-between">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#582CFF]/10 border border-[#582CFF]/20 text-[#582CFF] mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t.stack.badge}</span>
                </div>
                <h2 className={`text-4xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.stack.title}
                </h2>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-[#94A3B8]' : 'text-slate-600'}`}>
                  {t.stack.desc}
                </p>
              </div>

              {/* Responsive Grid for Icons */}
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 gap-2 lg:mb-2">
                {Object.keys(technologies).map((key) => {
                  const tech = technologies[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`
                        group relative aspect-square flex flex-col items-center justify-center rounded-2xl border transition-all duration-500 active:scale-90 cursor-pointer
                        ${activeTab === key 
                          ? (isDark ? 'bg-[#582CFF]/20 border-[#582CFF]/40 ring-2 ring-[#582CFF]/30' : 'bg-white border-[#582CFF] shadow-xl shadow-[#582CFF]/10 ring-2 ring-[#582CFF]/20') 
                          : (isDark ? 'bg-[#151515] border-white/5 hover:border-[#582CFF]/40 hover:bg-[#582CFF]/5 hover:ring-2 hover:ring-[#582CFF]/20' : 'bg-slate-50 border-slate-200 hover:border-[#582CFF]/30 hover:bg-white hover:shadow-lg hover:ring-2 hover:ring-[#582CFF]/10')}
                      `}
                    >
                      <i className={`${tech.icon} text-xl transition-all duration-500 
                        ${activeTab === key 
                          ? 'colored scale-150' 
                          : 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110'}`}></i>
                      <span className={`
                        text-[8px] font-black uppercase tracking-tight transition-all duration-300 overflow-hidden
                        ${activeTab === key ? 'h-0 opacity-0 mt-0' : 'h-auto opacity-100 mt-1.5 text-gray-500/60'}
                      `}>
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
                ${isDark ? 'bg-[#0B0E14] border-white/10 shadow-2xl' : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-200/50'}
              `}>
                {/* Terminal Header */}
                <div className={`flex items-center justify-between px-5 py-3 border-b transition-colors duration-500 ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
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
                            : isDark 
                              ? 'bg-white/10 border-white/20 text-white/70 hover:bg-[#582CFF] hover:border-[#582CFF] hover:text-white shadow-lg'
                              : 'bg-white border-[#582CFF]/20 text-[#582CFF] hover:bg-[#582CFF] hover:text-white shadow-md shadow-[#582CFF]/10'
                        }`}
                      >
                        {copiedTab === activeTab ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      {/* Tooltip - Positioned below to avoid overflow-hidden clipping from top */}
                      <div className="absolute top-full right-0 mt-3 opacity-0 group-hover/copy:opacity-100 pointer-events-none transition-all duration-300 translate-y-1 group-hover/copy:translate-y-0 z-50">
                        <div className="bg-[#0F172A] text-[10px] font-black text-white px-3 py-2 rounded-lg border border-white/10 shadow-2xl backdrop-blur-xl whitespace-nowrap uppercase tracking-[0.2em]">
                          {copiedTab === activeTab ? t.stack.copied : t.stack.copy}
                        </div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-slate-400'}`}>
                      src/core/{activeTab}.{technologies[activeTab].ext}
                    </span>
                  </div>
                </div>

                {/* Code Body with Auto-Scroll and Fixed Height - Increased to 340px to avoid scroll */}
                <div className={`relative p-5 md:p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto overflow-y-auto custom-scrollbar h-[340px] transition-colors duration-500 ${!isDark ? 'light-syntax' : ''}`}>
                  <div className={`flex animate-in fade-in zoom-in-95 duration-500 ${isDark ? 'text-white/90' : 'text-slate-800'}`}>
                    <div className={`flex flex-col select-none mr-6 text-right w-4 ${isDark ? 'text-white/20' : 'text-slate-300'}`}>
                      {Array.from({length: Math.max(10, (technologies[activeTab]?.raw?.split('\n')?.length || 10))}).map((_, i) => (
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
                ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200 shadow-sm'}
              `}>
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#582CFF]/5 border border-[#582CFF]/10 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[#582CFF]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <i className={`${technologies[activeTab].icon} text-5xl colored transition-transform duration-700 group-hover:rotate-12`}></i>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                      {t.stack.status}
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


        {/* Trabajos Section */}
        <section id="trabajos" className="mt-16 max-w-7xl mx-auto px-6 lg:px-12 relative">
          
          {/* Section Entrance Separator */}
          <hr className={`opacity-10 ${isDark ? 'border-white' : 'border-black'}`} />

          {/* Unified Content Area - Balanced between Section HRs */}
          <div className="py-20">
            <div className="mb-20 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#582CFF]/10 border border-[#582CFF]/20 text-[#582CFF] mb-8">
                <span className="text-xs font-bold uppercase tracking-widest">{t.projects.badge}</span>
              </div>
              <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-[#1E293B]'}`}>
                {t.projects.title} <span className="italic bg-gradient-to-r from-[#582CFF] to-[#8E54FF] bg-clip-text text-transparent">{t.projects.titleAccent}</span>
              </h2>
              <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                {t.projects.desc}
              </p>
            </div>

            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                isDark={isDark} 
                index={index}
                t={t}
                onOpenGallery={(p) => {
                  setSelectedProject(p)
                  setCurrentModalImage(0)
                  setShowDetails(false)
                }}
              />
            ))}
          </div>

          {/* Section Bottom Boundary */}
          <hr className={`opacity-10 ${isDark ? 'border-white' : 'border-[#582CFF] !opacity-20'}`} />
        </section>

        <ExperienceTimeline isDark={isDark} lang={lang} />
      </main>

      <ContactFooter isDark={isDark} lang={lang} />

      {/* Modal Gallery - Presentation to Detail Transition */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
          {/* Backdrop Blur */}
          <div 
            className={`absolute inset-0 backdrop-blur-xl ${isDark ? 'bg-black/95' : 'bg-slate-900/80'}`}
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Container */}
          <div className={`relative w-full max-w-6xl aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden border transition-all duration-700 ease-in-out z-[70] animate-in fade-in zoom-in-95 duration-500 slide-in-from-bottom-8 flex flex-col sm:flex-row
            ${isDark 
              ? 'bg-[#050505] border-white/10 shadow-[0_0_80px_rgba(88,44,255,0.15)]' 
              : 'bg-white border-slate-200 shadow-[0_40px_100px_rgba(0,0,0,0.1)]'}`}>
            
            {/* Close Button - Minimalist and Integrated */}
            <button 
              onClick={() => setSelectedProject(null)}
              className={`absolute top-4 right-4 p-2 rounded-full border transition-all z-[100] active:scale-90
                ${isDark 
                  ? 'bg-white/5 border-white/10 text-white/50 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50' 
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-red-500/10 hover:text-red-600 hover:border-red-500/30'}`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Image Carousel (Shrinks when details show) */}
            <div className={`relative h-full transition-all duration-700 ease-in-out flex-shrink-0 ${showDetails ? 'w-full sm:w-[60%]' : 'w-full'}`}>
              <div 
                className="flex h-full transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${(currentModalImage as number) * 100}%)` }}
              >
                {selectedProject.images?.map((img, idx) => (
                  <div key={idx} className="min-w-full h-full flex items-center justify-center p-6 sm:p-12">
                    <img 
                      src={img} 
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="max-w-full max-h-full object-contain shadow-2xl rounded-xl"
                    />
                  </div>
                ))}
                {!selectedProject.images && (
                   <div className="min-w-full h-full flex items-center justify-center">
                      <span className={`font-black uppercase tracking-widest text-4xl ${isDark ? 'text-white/10' : 'text-black/5'}`}>{t.common.confidential}</span>
                   </div>
                )}
              </div>

              {/* Navigation Controls */}
              {!showDetails && selectedProject.images && selectedProject.images.length > 0 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const len = selectedProject.images!.length;
                      setCurrentModalImage((prev: number) => (prev - 1 + len) % len);
                    }}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border transition-all z-[80]
                    ${isDark ? 'bg-black/40 text-white border-white/10 hover:bg-[#582CFF]' : 'bg-white border-slate-200 text-slate-900 shadow-xl shadow-slate-200/50 hover:bg-slate-50'}`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const len = selectedProject.images!.length;
                      if (currentModalImage === len - 1) {
                        setShowDetails(true);
                      } else {
                        setCurrentModalImage((prev: number) => (prev + 1) % len);
                      }
                    }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full border transition-all z-[80] shadow-[0_0_30px_rgba(88,44,255,0.3)] animate-pulse
                      ${isDark ? 'bg-[#582CFF] text-white border-white/20' : 'bg-[#582CFF] text-white border-transparent shadow-[0_15px_30px_rgba(88,44,255,0.3)]'}`}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Dots indicator */}
              {!showDetails && selectedProject.images && selectedProject.images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[80]">
                  {selectedProject.images.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${i === currentModalImage ? 'bg-[#582CFF] w-6' : (isDark ? 'bg-white/20 w-2' : 'bg-black/10 w-2')}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Side: Achievements Chat (Slides in) */}
            {showDetails && (
              <div className={`flex-1 h-full p-6 sm:p-10 flex flex-col animate-in slide-in-from-right duration-700 overflow-hidden border-l
                ${isDark ? 'bg-white/[0.02] border-white/10' : 'bg-[#F8FAFC] border-[#582CFF]/20'}`}>
                <div className="mb-8">
                  <h3 className={`text-xl sm:text-2xl font-black tracking-tighter mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {t.projects.highlights}
                  </h3>
                  <p className="text-[#582CFF] font-bold text-[10px] uppercase tracking-[0.3em]">
                    {selectedProject.company}
                  </p>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2">
                  {selectedProject.achievements?.map((ach, idx) => (
                    <div 
                      key={idx} 
                      className={`group/ach p-4 rounded-[16px] border transition-all duration-500 animate-in fade-in slide-in-from-right-8
                        ${isDark 
                          ? 'bg-white/[0.02] border-white/10 hover:border-[#582CFF]/50 hover:bg-[#582CFF]/5' 
                          : 'bg-white border-[#582CFF]/20 shadow-xl shadow-[#582CFF]/5 hover:shadow-2xl'}`}
                      style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                    >
                      <div className="flex gap-3">
                        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-500 group-hover/ach:scale-110
                          ${isDark ? 'bg-[#582CFF]/20 text-[#582CFF]' : 'bg-[#582CFF]/10 text-[#582CFF]'}`}>
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-0.5">
                          <p className={`text-[8px] font-black uppercase tracking-[0.2em] mb-0.5 ${isDark ? 'text-[#582CFF]' : 'text-[#582CFF]'}`}>
                            Hito {idx + 1}
                          </p>
                          <p className={`text-xs sm:text-sm leading-relaxed tracking-tight ${isDark ? 'text-white/80' : 'text-slate-700'}`}>
                            {ach}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                   <div className="flex gap-4">
                      {selectedProject.icons.map((icon, i) => (
                        <i key={i} className={`${icon} text-xl ${isDark ? 'text-white/20' : 'text-black/20'}`}></i>
                      ))}
                   </div>
                   <button 
                      onClick={() => setShowDetails(false)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all active:scale-95 text-[10px] font-black uppercase tracking-widest
                        ${isDark 
                          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#582CFF]/50 shadow-lg shadow-black/20' 
                          : 'bg-black/5 border-black/10 text-black hover:bg-black/10 hover:border-[#582CFF]/50'}`}
                   >
                      <ChevronLeft className="w-4 h-4" />
                      {t.projects.back}
                   </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default App
