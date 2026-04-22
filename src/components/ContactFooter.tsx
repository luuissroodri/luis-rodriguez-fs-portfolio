import React from 'react';
import { Mail, ArrowUpRight, FileText, Shield, Scale, Download } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';

const ContactFooter: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <footer className={`relative overflow-hidden pt-24 pb-12 ${isDark ? 'bg-[#050505]' : 'bg-[#FFFDFE]'}`}>
      {/* Radial Gradient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#582CFF]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Upper Section: Impact CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <h2 className={`text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] ${isDark ? 'text-white' : 'text-[#1E293B]'}`}>
              Construyamos el futuro de la <span className="italic bg-gradient-to-r from-[#582CFF] to-[#8E54FF] bg-clip-text text-transparent">infraestructura.</span>
            </h2>
            <div className="mt-10">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=luuissroodri@gmail.com&su=Interesado%20en%20contactar%20contigo%20tras%20ver%20tu%20portafolio&body=Hola%20Luis%2C%0A%0AHe%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20un%20proyecto%20o%20colaboraci%C3%B3n.%0A%0AUn%20saludo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#582CFF] hover:bg-[#4a24d9] text-white px-8 py-5 rounded-2xl font-black text-sm tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(88,44,255,0.3)]"
              >
                ESTABLECER CONTACTO
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Section: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {/* SOCIAL */}
            <div className="flex flex-col gap-6">
              <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${isDark ? 'text-white/30' : 'text-black/30'}`}>Social</span>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/in/luis-enrique-rodr%C3%ADguez-cheng-72918a372/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 text-sm font-bold transition-all hover:text-[#0077B5] group ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'} group-hover:bg-[#0077B5]/10 transition-colors`}>
                      <FaLinkedin className="w-4 h-4" />
                    </div>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/luuissroodri" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 text-sm font-bold transition-all hover:text-[#582CFF] group ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'} group-hover:bg-white group-hover:text-black transition-colors`}>
                      <FaGithub className="w-4 h-4" />
                    </div>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/luuissroodri/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 text-sm font-bold transition-all hover:text-[#E4405F] group ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'} group-hover:bg-[#E4405F]/10 transition-colors`}>
                      <FaInstagram className="w-4 h-4" />
                    </div>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* RECURSOS */}
            <div className="flex flex-col gap-6">
              <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${isDark ? 'text-white/30' : 'text-black/30'}`}>Recursos</span>
              <ul className="space-y-4">
                <li>
                  <a href="#" className={`flex items-center gap-3 text-sm font-bold transition-all hover:text-[#FF4B4B] group ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'} group-hover:bg-[#FF4B4B]/10 transition-colors`}>
                      <BsFileEarmarkPdfFill className="w-4 h-4" />
                    </div>
                    Descargar CV
                    <Download className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center gap-3 text-sm font-bold transition-all hover:text-[#582CFF] group ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'} group-hover:bg-[#582CFF]/10 transition-colors`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    Portafolio PDF
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col gap-6">
              <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${isDark ? 'text-white/30' : 'text-black/30'}`}>Legal</span>
              <ul className="space-y-4">
                <li>
                  <a href="#" className={`flex items-center gap-3 text-sm font-bold transition-colors hover:text-[#582CFF] ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    <Shield className="w-4 h-4" /> Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center gap-3 text-sm font-bold transition-colors hover:text-[#582CFF] ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                    <Scale className="w-4 h-4" /> Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8 ${isDark ? 'border-white/10' : 'border-black/5'}`}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className={`text-[11px] font-black tracking-widest ${isDark ? 'text-white/40' : 'text-black/40'}`}>
              © 2026 LUIS RODRIGUEZ
            </span>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-500/5 border-green-500/10'}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] font-black text-green-500 tracking-widest uppercase">
                Estado del sistema: Óptimo
              </span>
            </div>
          </div>

          <div className={`text-[10px] font-bold tracking-widest uppercase ${isDark ? 'text-white/20' : 'text-black/20'}`}>
            Construido con <span className="text-[#582CFF]">React</span> & <span className="text-[#8E54FF]">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
