import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Wheat } from 'lucide-react';

interface HeroProps {
  onExploreStar: () => void;
}

export function Hero({ onExploreStar }: HeroProps) {
  return (
    <section id="inicio" className="pt-32 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFEA] border border-[#EADBCE] text-xs font-semibold text-[#736561] mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#B26A4D]" />
              <span>Obrador artesanal · Horneado fresco cada mañana</span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2D2422] leading-[1.12] mb-6">
              El arte del pastel <br className="hidden sm:inline" />
              en su forma más <span className="text-[#B26A4D] italic font-normal">pura y noble</span>.
            </h1>

            <p className="text-lg text-[#736561] max-w-xl font-normal leading-relaxed mb-8">
              ¿que planes tienes para este domingo? Quieres salir conmigo a caminar un rato y conocer algun lugar especial? Quieres ir a comer helado?
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#galeria"
                onClick={onExploreStar}
                id="btn-hero-galeria"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#B26A4D] hover:bg-[#985438] rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Si, acepto salir contigo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#menu"
                id="btn-hero-menu"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#2D2422] bg-white hover:bg-[#F4EFEA] border border-[#EADBCE] rounded-lg transition-all duration-200 cursor-pointer"
              >
                <span>EriPao dice a que hora</span>
              </a>
            </div>

            {/* Quality Seals */}
            <div className="pt-8 border-t border-[#EADBCE] grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col">
                <span className="font-serif-title text-2xl font-bold text-[#B26A4D]">100%</span>
                <span className="text-xs sm:text-sm font-medium text-[#2D2422]">Mantequilla Pura</span>
                <span className="text-[11px] text-[#736561]">Normandía AOP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-title text-2xl font-bold text-[#B26A4D]">0%</span>
                <span className="text-xs sm:text-sm font-medium text-[#2D2422]">Conservantes</span>
                <span className="text-[11px] text-[#736561]">Ingredientes limpios</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-title text-2xl font-bold text-[#B26A4D]">Diario</span>
                <span className="text-xs sm:text-sm font-medium text-[#2D2422]">Horneado 06:00 AM</span>
                <span className="text-[11px] text-[#736561]">Frescura absoluta</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#EADBCE] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80"
                  alt="Pastel Ópera y frutos rojos de la pastelería"
                  className="w-full h-96 sm:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Artisan Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#EADBCE] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-[#B26A4D]">Insignia de Temporada</p>
                      <h2 className="font-serif-title text-base sm:text-lg font-bold text-[#2D2422]">Pastel Ópera Imperial</h2>
                      <p className="text-xs text-[#736561]">Cacao 72% · Café de especialidad · Mantequilla francesa</p>
                    </div>
                    <span className="font-serif-title text-xl font-bold text-[#B26A4D] ml-2">$36</span>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-[#EADBCE]/50 rounded-2xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
