import { useState, useMemo } from 'react';
import { X, Copy, Check, Download, Code, FileCode, Layers } from 'lucide-react';
import { generatePureHtmlAndCss } from '../utils/pureCodeGenerator';

interface PureCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PureCodeModal({ isOpen, onClose }: PureCodeModalProps) {
  const [activeTab, setActiveTab] = useState<'combined' | 'html' | 'css'>('combined');
  const [copied, setCopied] = useState(false);

  const { html, css, combined } = useMemo(() => generatePureHtmlAndCss(), []);

  if (!isOpen) return null;

  const currentCode = activeTab === 'combined' ? combined : activeTab === 'html' ? html : css;
  const currentFilename =
    activeTab === 'combined' ? 'index.html (Todo en uno)' : activeTab === 'html' ? 'index.html' : 'styles.css';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const filename = activeTab === 'combined' ? 'index.html' : activeTab === 'html' ? 'index.html' : 'styles.css';
    const mimeType = activeTab === 'css' ? 'text/css' : 'text/html';
    const blob = new Blob([currentCode], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative bg-[#201A19] text-[#EDE4DC] w-full max-w-4xl h-[90vh] rounded-2xl border border-[#423634] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#362C2A] flex items-center justify-between bg-[#1A1514]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#2D2422] text-[#B26A4D] border border-[#423634]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-title text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Código Fuente en HTML y CSS Puro</span>
                <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full bg-[#B26A4D]/20 text-[#C48B71] border border-[#B26A4D]/30">
                  Sin Dependencias
                </span>
              </h3>
              <p className="text-xs text-[#A99B95]">
                Diseño 100% puro, semántico, responsivo con navegación fija y paleta minimalista listo para guardar.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            id="btn-cerrar-modal-codigo"
            className="p-2 text-[#A99B95] hover:text-white hover:bg-[#2D2422] rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab & Action Bar */}
        <div className="px-4 py-3 bg-[#261F1D] border-b border-[#362C2A] flex flex-wrap items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('combined')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'combined'
                  ? 'bg-[#B26A4D] text-white shadow-xs'
                  : 'text-[#A99B95] hover:text-white hover:bg-[#362C2A]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>index.html (HTML + CSS embebido)</span>
            </button>

            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'html'
                  ? 'bg-[#B26A4D] text-white shadow-xs'
                  : 'text-[#A99B95] hover:text-white hover:bg-[#362C2A]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Solo HTML Semántico</span>
            </button>

            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'css'
                  ? 'bg-[#B26A4D] text-white shadow-xs'
                  : 'text-[#A99B95] hover:text-white hover:bg-[#362C2A]'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>styles.css Puro</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              id="btn-copiar-codigo-modal"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#EDE4DC] bg-[#362C2A] hover:bg-[#4A3D3A] rounded-md transition-colors cursor-pointer border border-[#4D3F3B]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar Código'}</span>
            </button>

            <button
              onClick={handleDownload}
              id="btn-descargar-codigo-modal"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#B26A4D] hover:bg-[#985438] rounded-md transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar {currentFilename.split(' ')[0]}</span>
            </button>
          </div>
        </div>

        {/* Code Viewer */}
        <div className="flex-grow p-4 overflow-auto bg-[#161211] font-mono text-xs text-[#D6CBC6] selection:bg-[#B26A4D]/40">
          <pre className="whitespace-pre">
            <code>{currentCode}</code>
          </pre>
        </div>

        {/* Modal Footer Notes */}
        <div className="p-3 bg-[#1A1514] border-t border-[#362C2A] text-center text-[11px] text-[#8C7E78]">
          Puedes guardar este código directamente en tu computadora y abrirlo en cualquier navegador (Chrome, Safari, Firefox, Edge) sin necesidad de Node.js ni compilación.
        </div>
      </div>
    </div>
  );
}
