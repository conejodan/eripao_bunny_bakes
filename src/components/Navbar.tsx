import { useState, useEffect } from 'react';
import { Menu, X, Code, Phone, Clock, Sparkles } from 'lucide-react';
import { scheduleData } from '../data/pastryData';

interface NavbarProps {
  onOpenCodeModal: () => void;
}

export function Navbar({ onOpenCodeModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if open currently based on local time
    const now = new Date();
    const currentDayIdx = (now.getDay() + 6) % 7; // Monday = 0
    const currentDecimalHour = now.getHours() + now.getMinutes() / 60;
    const todaySchedule = scheduleData[currentDayIdx];
    if (todaySchedule) {
      setIsOpenNow(currentDecimalHour >= todaySchedule.openHour && currentDecimalHour < todaySchedule.closeHour);
    }
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos Estrella', href: '#galeria' },
    { name: 'Menú de Pasteles', href: '#menu' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="encabezado-fijo"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EADBCE]'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#EADBCE]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" id="enlace-logo-navbar" className="flex flex-col group">
          <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-[#2D2422] group-hover:text-[#B26A4D] transition-colors">
            BUNNY BAKES
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-[#B26A4D] flex items-center gap-1.5">
            <span>Atelier & Repostería Fina</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#B26A4D]" />
            <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-medium ${
              isOpenNow ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-600' : 'bg-amber-600'}`} />
              {isOpenNow ? 'Abierto hoy' : 'Cerrado ahora'}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="navegacion-principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-[#2D2422] hover:text-[#B26A4D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B26A4D] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Pure HTML/CSS Code Modal Trigger 
          <button
            onClick={onOpenCodeModal}
            id="btn-ver-codigo-puro"
            title="Ver y descargar código en HTML y CSS puro"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#736561] bg-[#F4EFEA] hover:bg-[#EADBCE] border border-[#EADBCE] rounded-lg transition-colors cursor-pointer"
          >
            <Code className="w-3.5 h-3.5 text-[#B26A4D]" />
            <span>Código HTML/CSS Puro</span>
          </button>
*/}
          <a
            href="https://wa.me/34600123456?text=Hola,%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20encargo%20de%20pasteler%C3%ADa"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-pedido-whatsapp"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#B26A4D] hover:bg-[#985438] rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
          >
            <span>Hacer Encargo</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCodeModal}
            id="btn-ver-codigo-movil"
            title="Ver código puro"
            className="sm:hidden p-2 text-[#736561] bg-[#F4EFEA] border border-[#EADBCE] rounded-lg"
          >
            <Code className="w-4 h-4 text-[#B26A4D]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="btn-menu-hamburguesa"
            aria-label="Abrir menú de navegación"
            className="p-2 text-[#2D2422] hover:bg-[#F4EFEA] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="menu-movil-desplegable"
          className="lg:hidden bg-[#FAF7F2] border-b border-[#EADBCE] px-6 py-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2D2422] hover:text-[#B26A4D] py-2 border-b border-[#EADBCE]/50"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCodeModal();
                }}
                id="btn-codigo-movil-drawer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#2D2422] bg-[#F4EFEA] border border-[#EADBCE] rounded-lg"
              >
                <Code className="w-4 h-4 text-[#B26A4D]" />
                <span>Ver & Descargar Código HTML y CSS Puro</span>
              </button>

              <a
                href="https://wa.me/34600123456?text=Hola,%20quisiera%20pedir%20informaci%C3%B3n%20sobre%20sus%20pasteles"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#B26A4D] rounded-lg shadow-sm"
              >
                <span>Hacer Encargo por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
