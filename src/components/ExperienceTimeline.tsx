import React from 'react';
import { GraduationCap, Building2, Anchor, Activity } from 'lucide-react';

const experiences = [
  {
    period: "2022 - 2026",
    title: "Ingeniero de Sistemas",
    institution: "Universidad de Margarita (UNIMAR)",
    description: "Defensa de tesis exitosa y formación académica integral enfocada en la resolución de problemas complejos mediante tecnología de vanguardia.",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    tags: ["Académico", "Ingeniería", "Investigación"]
  },
  {
    period: "2026",
    title: "Proyecto Autogobierno",
    institution: "Alcaldía de Mariño",
    description: "Desarrollador Full Stack liderando la optimización de flujos comunitarios y la transformación digital de la comunicación ciudadana.",
    icon: <Building2 className="w-5 h-5 text-white" />,
    tags: ["Laravel", "React", "PostgreSQL"]
  },
  {
    period: "2026",
    title: "Planificación Estratégica",
    institution: "Alcaldía de Mariño",
    description: "Arquitectura de sistemas robustos para el seguimiento departamental, integrando visualizaciones de datos y métricas de cumplimiento crítico.",
    icon: <Activity className="w-5 h-5 text-white" />,
    tags: ["Sistemas", "Gantt", "Data Viz"]
  },
  {
    period: "2026",
    title: "XINABIS",
    institution: "Embarcación Isidoro",
    description: "Desarrollo de un ecosistema de gestión integral marítima, con altos estándares de seguridad (RBAC/2FA) y trazabilidad financiera absoluta.",
    icon: <Anchor className="w-5 h-5 text-white" />,
    tags: ["RBAC", "2FA", "Finanzas"]
  }
];

const ExperienceTimeline: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <section id="trayectoria" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-24 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#582CFF]/10 border border-[#582CFF]/20 text-[#582CFF] mb-8">
            <span className="text-xs font-bold uppercase tracking-widest">Trayectoria</span>
          </div>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Rastro de <span className="italic bg-gradient-to-r from-[#582CFF] to-[#8E54FF] bg-clip-text text-transparent">Impacto.</span>
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-[#94A3B8]' : 'text-slate-600'}`}>
            Evolución profesional a través de hitos académicos y proyectos tecnológicos de alto impacto.
          </p>
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] ${isDark ? 'bg-white/10' : 'bg-[#582CFF]/20'} -translate-x-1/2`}></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Glowing Node */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#582CFF] rounded-full blur-md opacity-40 animate-pulse"></div>
                  <div className="relative w-10 h-10 bg-[#0F0F10] border-2 border-[#582CFF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(88,44,255,0.4)]">
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className={`
                    group relative p-8 rounded-[32px] border transition-all duration-700 ease-out backdrop-blur-xl
                    animate-in fade-in slide-in-from-bottom-12
                    ${isDark 
                      ? 'bg-[#0F0F10]/80 border-white/10 hover:border-[#582CFF]/50 hover:bg-[#0F0F10]' 
                      : 'bg-[#F8FAFC] border-[#582CFF]/20 shadow-xl shadow-[#582CFF]/5 hover:shadow-2xl'}
                  `} style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-px bg-gradient-to-br from-[#582CFF]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[32px] transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#582CFF] font-black text-xs tracking-[0.2em] uppercase">
                          {exp.period}
                        </span>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                           {React.cloneElement(exp.icon as React.ReactElement<any>, { className: "w-4 h-4 text-[#582CFF]" })}
                        </div>
                      </div>

                      <h3 className={`text-2xl md:text-3xl font-black tracking-tight mb-1 transition-colors duration-300 group-hover:text-[#582CFF] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {exp.title}
                      </h3>
                      <p className={`text-sm font-bold mb-6 tracking-wide ${isDark ? 'text-white/40' : 'text-slate-400'}`}>
                        {exp.institution}
                      </p>
                      
                      <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-[#94A3B8]' : 'text-slate-600'}`}>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tIndex) => (
                          <span 
                            key={tIndex} 
                            className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300
                              ${isDark 
                                ? 'bg-white/5 border-white/5 text-white/40 group-hover:border-[#582CFF]/30 group-hover:text-white/60' 
                                : 'bg-black/5 border-transparent text-black/40 group-hover:bg-[#582CFF]/5 group-hover:text-[#582CFF]'}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date on the other side (Desktop only) */}
                <div className={`hidden md:block w-[45%] text-sm font-black tracking-[0.3em] uppercase transition-all duration-700 ${index % 2 === 0 ? 'text-left pl-16' : 'text-right pr-16'} ${isDark ? 'text-white/10' : 'text-slate-300'}`}>
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
