import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { contactData, pastriesList } from '../data/pastryData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    pastryPreference: 'general',
    guests: '8-10',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B26A4D] mb-2 block">
            Atención Personalizada
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2422] mb-4">
            Contacto & Encargos
          </h2>
          <p className="text-[#736561] text-base sm:text-lg">
            ¿Tienes una fecha especial en mente o deseas asesoramiento sobre cuál pastel elegir? Escríbenos directamente o visita nuestro obrador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Location (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl border border-[#EADBCE] p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif-title text-2xl font-bold text-[#2D2422] mb-6">
                Datos del Obrador
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B26A4D] border border-[#EADBCE] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2422]">Dirección</h4>
                    <p className="text-[#736561] mt-0.5">{contactData.address}</p>
                    <p className="text-[#736561]">{contactData.city} ({contactData.neighborhood})</p>
                    <span className="inline-block text-[11px] text-[#B26A4D] font-medium mt-1">Metro Alonso Martínez / Chueca</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B26A4D] border border-[#EADBCE] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2422]">Teléfono del Obrador</h4>
                    <p className="text-[#736561] mt-0.5">{contactData.phone}</p>
                    <p className="text-xs text-[#736561]">Atención telefónica de 09:00 a 19:30</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B26A4D] border border-[#EADBCE] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2422]">Correo Electrónico</h4>
                    <p className="text-[#736561] mt-0.5">{contactData.email}</p>
                    <p className="text-xs text-[#736561]">Respuesta promedio en menos de 2 horas</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="mt-8 pt-6 border-t border-[#EADBCE]">
                <a
                  href="https://wa.me/34600123456?text=Hola,%20quisiera%20consultar%20sobre%20sus%20pasteles%20y%20encargos"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-contacto-whatsapp-directo"
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-[#2D2422] hover:bg-[#B26A4D] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#FAF7F2]" />
                  <span>Chatear por WhatsApp Directo</span>
                </a>
              </div>
            </div>

            {/* Atelier Philosophy Note */}
            <div className="bg-[#F4EFEA] rounded-2xl border border-[#EADBCE] p-6">
              <h4 className="font-serif-title text-base font-bold text-[#2D2422] mb-1">
                Atención a Alergias e Intolerancias
              </h4>
              <p className="text-xs text-[#736561] leading-relaxed">
                Contamos con opciones certificadas sin gluten elaboradas en área independiente, así como opciones sin lactosa y veganas. Indícanos cualquier requerimiento al hacer tu consulta.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EADBCE] p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center" id="mensaje-exito-contacto">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2D2422] mb-2">
                  ¡Mensaje Recibido con Éxito!
                </h3>
                <p className="text-sm text-[#736561] max-w-md mx-auto mb-6">
                  Muchas gracias por contactarnos, <strong>{formData.name}</strong>. Nuestro equipo de maestros pasteleros revisará tu solicitud y te contactará en <strong>{formData.contact}</strong> para coordinar cada detalle de tu encargo.
                </p>
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EADBCE] max-w-sm mx-auto text-left text-xs text-[#736561] space-y-1 mb-6">
                  <p><strong>Pastel/Interés:</strong> {formData.pastryPreference}</p>
                  {formData.date && <p><strong>Fecha requerida:</strong> {formData.date}</p>}
                  <p><strong>Porciones estimadas:</strong> {formData.guests} personas</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      contact: '',
                      date: '',
                      pastryPreference: 'general',
                      guests: '8-10',
                      notes: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-[#2D2422] bg-[#FAF7F2] hover:bg-[#EADBCE] border border-[#EADBCE] rounded-lg transition-colors cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="formulario-contacto-principal" className="space-y-5">
                <div>
                  <h3 className="font-serif-title text-2xl font-bold text-[#2D2422]">
                    Formulario de Encargo y Consulta
                  </h3>
                  <p className="text-xs text-[#736561] mt-1">
                    Completa los datos y te responderemos a la brevedad con la disponibilidad y presupuesto.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-semibold text-[#2D2422] mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      placeholder="Ej. Sofía Morales"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EADBCE] rounded-lg text-[#2D2422] focus:bg-white focus:outline-none focus:border-[#B26A4D] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contacto-input" className="block text-xs font-semibold text-[#2D2422] mb-1.5">
                      Teléfono o Correo *
                    </label>
                    <input
                      type="text"
                      id="contacto-input"
                      required
                      placeholder="Ej. sofia@email.com o +34 600..."
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EADBCE] rounded-lg text-[#2D2422] focus:bg-white focus:outline-none focus:border-[#B26A4D] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferencia-pastel" className="block text-xs font-semibold text-[#2D2422] mb-1.5">
                      Pastel de interés
                    </label>
                    <select
                      id="preferencia-pastel"
                      value={formData.pastryPreference}
                      onChange={(e) => setFormData({ ...formData, pastryPreference: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EADBCE] rounded-lg text-[#2D2422] focus:bg-white focus:outline-none focus:border-[#B26A4D] transition-colors"
                    >
                      <option value="general">Consulta general / Asesoramiento</option>
                      {pastriesList.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ($ {p.price})
                        </option>
                      ))}
                      <option value="diseno-personalizado">Pastel personalizado para boda / evento</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="fecha-evento" className="block text-xs font-semibold text-[#2D2422] mb-1.5">
                      Fecha deseada de recogida
                    </label>
                    <input
                      type="date"
                      id="fecha-evento"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EADBCE] rounded-lg text-[#2D2422] focus:bg-white focus:outline-none focus:border-[#B26A4D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notas-adicionales" className="block text-xs font-semibold text-[#2D2422] mb-1.5">
                    Detalles, dedicatoria o alergias alimentarias
                  </label>
                  <textarea
                    id="notas-adicionales"
                    rows={3}
                    placeholder="Ej. Deseamos una placa que diga 'Feliz Cumpleaños Lucas' y tenemos un invitado celíaco."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF7F2] border border-[#EADBCE] rounded-lg text-[#2D2422] focus:bg-white focus:outline-none focus:border-[#B26A4D] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="btn-enviar-formulario-contacto"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B26A4D] hover:bg-[#985438] rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Encargo</span>
                  </button>
                  <p className="text-[11px] text-center text-[#736561] mt-2.5">
                    Recibirás una respuesta personalizada sin compromiso de compra.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
