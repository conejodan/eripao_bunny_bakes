import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles, MessageCircle, Info } from 'lucide-react';
import { PastryItem } from '../types';

interface MenuSectionProps {
  pastries: PastryItem[];
  onSelectPastry: (pastry: PastryItem) => void;
}

export function MenuSection({ pastries, onSelectPastry }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos los Pasteles' },
    { id: 'autor', label: 'Pasteles de Autor' },
    { id: 'tartas', label: 'Tartas & Pies' },
    { id: 'especiales', label: 'Opciones Especiales' },
    { id: 'bocados', label: 'Petits Fours & Bocados' },
  ];

  const filteredPastries = useMemo(() => {
    return pastries.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query)) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [pastries, selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B26A4D] mb-2 block">
            Carta del Obrador
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2422] mb-4">
            Menú de Pasteles & Tartas
          </h2>
          <p className="text-[#736561] text-base sm:text-lg">
            Nuestra carta completa disponible para compra en mostrador o encargo previo. Pasteles enteros y porciones individuales elaboradas con maestría artesana.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    active
                      ? 'bg-[#2D2422] text-[#FAF7F2] shadow-sm'
                      : 'bg-white text-[#736561] hover:text-[#2D2422] border border-[#EADBCE] hover:border-[#2D2422]/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#736561] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="input-buscar-pastel"
              placeholder="Buscar por sabor, ingrediente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#EADBCE] rounded-lg text-[#2D2422] placeholder-[#736561]/60 focus:outline-none focus:border-[#B26A4D] focus:ring-1 focus:ring-[#B26A4D] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#736561] hover:text-[#2D2422]"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Pastries Grid */}
        {filteredPastries.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#EADBCE] p-12 text-center max-w-md mx-auto">
            <Info className="w-8 h-8 text-[#B26A4D] mx-auto mb-3" />
            <p className="font-serif-title text-xl font-bold text-[#2D2422]">No se encontraron pasteles</p>
            <p className="text-xs text-[#736561] mt-1 mb-4">Intenta con otro término o selecciona otra categoría.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#B26A4D] rounded-lg"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="lista-menu-completo">
            {filteredPastries.map((pastry) => (
              <div
                key={pastry.id}
                id={`menu-card-${pastry.id}`}
                onClick={() => onSelectPastry(pastry)}
                className="group bg-white rounded-xl border border-[#EADBCE] p-5 hover:border-[#B26A4D] transition-all duration-200 flex flex-col sm:flex-row gap-5 cursor-pointer shadow-xs hover:shadow-md"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full sm:w-36 h-40 sm:h-36 shrink-0 rounded-lg overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={pastry.imageUrl}
                    alt={pastry.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {pastry.isStar && (
                    <span className="absolute top-2 left-2 bg-[#2D2422]/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#B26A4D]" />
                      <span>Estrella</span>
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2D2422] group-hover:text-[#B26A4D] transition-colors leading-snug">
                        {pastry.name}
                      </h3>
                      <span className="font-serif-title text-lg font-bold text-[#B26A4D] shrink-0">
                        $ {pastry.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#736561] leading-relaxed mb-3 line-clamp-2">
                      {pastry.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags & Portions */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      <span className="text-[11px] font-medium bg-[#F4EFEA] text-[#736561] px-2 py-0.5 rounded-md border border-[#EADBCE]">
                        {pastry.portions}
                      </span>
                      {pastry.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-[#FAF7F2] text-[#B26A4D] px-2 py-0.5 rounded-md border border-[#EADBCE]/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#EADBCE]/60 text-xs">
                      <span className="text-[#736561] group-hover:text-[#2D2422] transition-colors">
                        Ver ingredientes y alérgenos →
                      </span>
                      <a
                        href={`https://wa.me/34600123456?text=Hola,%20deseo%20encargar:%20${encodeURIComponent(
                          pastry.name
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-semibold text-[#B26A4D] hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Encargar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
