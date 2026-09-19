import { useState } from 'react';
import { Star, Eye, MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import { PastryItem } from '../types';

interface StarGalleryProps {
  pastries: PastryItem[];
  onSelectPastry: (pastry: PastryItem) => void;
}

export function StarGallery({ pastries, onSelectPastry }: StarGalleryProps) {
  const starItems = pastries.filter((p) => p.isStar);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#F4EFEA] border-y border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EADBCE] text-xs font-semibold text-[#B26A4D] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Colección Insignia</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2422] mb-4">
            Galería de Productos Estrella
          </h2>
          <p className="text-[#736561] text-base sm:text-lg max-w-2xl mx-auto">
            Nuestras creaciones más elogiadas por clientes y amantes de la buena mesa. Cada pastel es una obra maestra de texturas, contrastes y armonía aromática.
          </p>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="cuadricula-productos-estrella">
          {starItems.map((pastry) => (
            <div
              key={pastry.id}
              id={`estrella-${pastry.id}`}
              className="group bg-white rounded-2xl border border-[#EADBCE] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => onSelectPastry(pastry)}
            >
              {/* Image Container with Zoom and Badge */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#FAF7F2]">
                <img
                  src={pastry.imageUrl}
                  alt={pastry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Star Badge */}
                <div className="absolute top-3 left-3 bg-[#2D2422]/90 backdrop-blur-sm text-[#FAF7F2] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#B26A4D] text-[#B26A4D]" />
                  <span>Firma de la Casa</span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-[#2D2422]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 text-[#2D2422] text-xs font-semibold rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4 text-[#B26A4D]" />
                    <span>Ver Detalles & Ingredientes</span>
                  </span>
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-[#EADBCE] shadow-sm">
                  <span className="font-serif-title font-bold text-base text-[#B26A4D]">${pastry.price}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#736561] mb-2 font-medium">
                    <span>{pastry.portions}</span>
                    <span className="text-[#B26A4D]">{pastry.tags[1] || pastry.tags[0]}</span>
                  </div>

                  <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2D2422] group-hover:text-[#B26A4D] transition-colors mb-2.5">
                    {pastry.name}
                  </h3>

                  <p className="text-sm text-[#736561] line-clamp-2 leading-relaxed mb-4">
                    {pastry.description}
                  </p>

                  {/* Tasting Note Highlight */}
                  {pastry.tastingNotes && (
                    <div className="bg-[#FAF7F2] rounded-lg p-3 border border-[#EADBCE]/60 text-xs text-[#736561] italic mb-4">
                      <span className="font-semibold text-[#2D2422] not-italic block mb-0.5">Nota de cata:</span>
                      "{pastry.tastingNotes}"
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPastry(pastry);
                    }}
                    className="text-xs font-semibold text-[#2D2422] group-hover:text-[#B26A4D] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Ficha técnica</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/34600123456?text=Hola,%20me%20interesa%20encargar%20el%20pastel%20estrella:%20${encodeURIComponent(
                      pastry.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#B26A4D] bg-[#F4EFEA] hover:bg-[#EADBCE] rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Encargar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-14 bg-white rounded-2xl border border-[#EADBCE] p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="font-serif-title text-xl font-bold text-[#2D2422]">
              ¿Buscas un pastel de diseño para una ocasión inolvidable?
            </h4>
            <p className="text-sm text-[#736561] mt-1">
              Realizamos encargos a medida para cumpleaños, aniversarios, bodas y eventos corporativos con 48h de antelación.
            </p>
          </div>
          <a
            href="#contacto"
            id="btn-contacto-personalizado"
            className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-white bg-[#2D2422] hover:bg-[#B26A4D] rounded-lg transition-colors cursor-pointer"
          >
            Consultar Encargo Personalizado
          </a>
        </div>

      </div>
    </section>
  );
}
