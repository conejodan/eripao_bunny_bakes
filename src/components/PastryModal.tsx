import { X, Sparkles, MessageCircle, Heart, Check } from 'lucide-react';
import { PastryItem } from '../types';

interface PastryModalProps {
  pastry: PastryItem | null;
  onClose: () => void;
}

export function PastryModal({ pastry, onClose }: PastryModalProps) {
  if (!pastry) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-all"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl border border-[#EADBCE] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="btn-cerrar-modal-pastel"
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-[#2D2422] rounded-full shadow-md transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-16/9 w-full bg-[#FAF7F2] overflow-hidden">
          <img
            src={pastry.imageUrl}
            alt={pastry.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {pastry.isStar && (
            <div className="absolute top-4 left-4 bg-[#2D2422]/90 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B26A4D]" />
              <span>Creación Insignia</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B26A4D]">
                {pastry.portions}
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2D2422]">
                {pastry.name}
              </h3>
            </div>
            <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#B26A4D]">
              ${pastry.price}
            </span>
          </div>

          <p className="text-sm text-[#736561] leading-relaxed mb-6">
            {pastry.description}
          </p>

          {/* Tasting Notes */}
          {pastry.tastingNotes && (
            <div className="mb-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBCE]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2422] mb-1">
                Perfil de Sabor & Crianza
              </h4>
              <p className="text-xs text-[#736561] italic leading-relaxed">
                "{pastry.tastingNotes}"
              </p>
            </div>
          )}

          {/* Ingredients list */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2422] mb-2.5">
              Ingredientes Nobles Principales
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {pastry.ingredients.map((ing, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#736561]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B26A4D]" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {pastry.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-[#F4EFEA] text-[#736561] border border-[#EADBCE]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#EADBCE]">
            <a
              href={`https://wa.me/34600123456?text=Hola,%20quisiera%20encargar%20el%20pastel:%20${encodeURIComponent(
                pastry.name
              )}%20(${pastry.price})`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#B26A4D] hover:bg-[#985438] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Encargar por WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-3 text-sm font-semibold text-[#2D2422] bg-[#FAF7F2] hover:bg-[#EADBCE] border border-[#EADBCE] rounded-xl transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
