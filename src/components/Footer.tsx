import { Heart, Instagram, MessageCircle, Phone, MapPin, Code } from 'lucide-react';
import { contactData } from '../data/pastryData';

interface FooterProps {
  onOpenCodeModal: () => void;
}

export function Footer({ onOpenCodeModal }: FooterProps) {
  return (
    <footer id="pie-pagina" className="bg-[#241D1B] text-[#EDE4DC] pt-16 pb-12 border-t border-[#3A2F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3A2F2C]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif-title text-2xl font-bold tracking-wide text-white">
              BUNNY BAKES
            </h3>
            <p className="text-xs text-[#A99B95] leading-relaxed">
              Obrador y repostería fina con devoción por las materias primas nobles. Cada creación celebra el equilibrio entre la técnica clásica y la sensibilidad contemporánea.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#332927] hover:bg-[#B26A4D] text-[#EDE4DC] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                className="p-2 rounded-lg bg-[#332927] hover:bg-[#B26A4D] text-[#EDE4DC] transition-colors"
                aria-label="Llamar"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C48B71]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#A99B95]">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Productos Estrella</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menú Completo de Pasteles</a></li>
              <li><a href="#horarios" className="hover:text-white transition-colors">Horarios de Atención</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto & Encargos</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C48B71]">
              Visítanos
            </h4>
            <div className="text-xs text-[#A99B95] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C48B71] shrink-0 mt-0.5" />
                <span>{contactData.address}, {contactData.city}</span>
              </p>
              <p className="pl-6 text-[11px] text-[#8C7E78]">
                {contactData.neighborhood}
              </p>
              <p className="pt-2 text-[11px] text-[#A99B95]">
                <strong>L - S:</strong> 08:30 - 20:30<br />
                <strong>D:</strong> 09:30 - 15:30
              </p>
            </div>
          </div>

          {/* Standalone Pure Code Download Box
          <div className="space-y-3 bg-[#1C1715] p-4 rounded-xl border border-[#3A2F2C]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C48B71] flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              <span>HTML & CSS Puro</span>
            </h4>
            <p className="text-[11px] text-[#A99B95] leading-relaxed">
              ¿Deseas el archivo HTML y CSS puro listo para subir a tu servidor sin React?
            </p>
            <button
              onClick={onOpenCodeModal}
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#B26A4D] hover:bg-[#985438] rounded-lg transition-colors cursor-pointer"
            >
              Exportar / Copiar Código
            </button>
          </div>
 */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7E78]">
          <p>© 2026 Pastelería Artesanal. Hecho con esmero, ingredientes limpios y diseño web puro.</p>
          {/* <div className="flex items-center gap-4 text-[11px]" >
            <span>100% Responsivo</span>
            <span>·</span>
            <span>Navegación Fija</span>
            <span>·</span>
            <span>Paleta Minimalista</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
