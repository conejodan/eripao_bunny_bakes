import { useState, useEffect } from 'react';
import { Clock, CheckCircle2, AlertCircle, ShoppingBag, Truck, Calendar } from 'lucide-react';
import { scheduleData } from '../data/pastryData';

export function ScheduleSection() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);
  const [isOpenRightNow, setIsOpenRightNow] = useState<boolean>(true);
  const [closingTimeMsg, setClosingTimeMsg] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    // In JS, getDay() returns 0 for Sunday, 1 for Monday, etc.
    // Our scheduleData starts with Monday (index 0) to Sunday (index 6).
    const dayIdx = (now.getDay() + 6) % 7;
    setCurrentDayIndex(dayIdx);

    const currentDecimalHour = now.getHours() + now.getMinutes() / 60;
    const today = scheduleData[dayIdx];

    if (today) {
      if (currentDecimalHour >= today.openHour && currentDecimalHour < today.closeHour) {
        setIsOpenRightNow(true);
        const remainingHours = Math.floor(today.closeHour - currentDecimalHour);
        const remainingMinutes = Math.floor(((today.closeHour - currentDecimalHour) % 1) * 60);
        setClosingTimeMsg(`Abierto hoy hasta las ${today.hours.split('-')[1]?.trim() || 'cierre'} (restan aprox. ${remainingHours}h ${remainingMinutes}m)`);
      } else {
        setIsOpenRightNow(false);
        const nextDayIdx = (dayIdx + 1) % 7;
        const nextDay = scheduleData[nextDayIdx];
        setClosingTimeMsg(`Cerrado ahora · Abrimos ${nextDay.day} a las ${nextDay.hours.split('-')[0]?.trim()}`);
      }
    }
  }, []);

  return (
    <section id="horarios" className="py-20 sm:py-28 bg-[#F4EFEA] border-y border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B26A4D] mb-2 block">
            Disponibilidad
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2422] mb-4">
            Horario de Atención
          </h2>
          <p className="text-[#736561] text-base sm:text-lg">
            Te recibimos con el aroma a café recién molido y postres salidos del horno. Consulta nuestros horarios de apertura y políticas de recogida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Schedule Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EADBCE] p-6 sm:p-8 shadow-sm">
            {/* Live Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EADBCE]">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${isOpenRightNow ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-title text-lg font-bold text-[#2D2422]">
                    Estado de la Pastelería
                  </h3>
                  <p className="text-xs font-medium text-[#736561]">
                    {closingTimeMsg}
                  </p>
                </div>
              </div>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isOpenRightNow
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-amber-100 text-amber-800'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isOpenRightNow ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'}`} />
                {isOpenRightNow ? 'Abierto en este momento' : 'Cerrado temporalmente'}
              </span>
            </div>

            {/* Schedule Table */}
            <div className="divide-y divide-[#EADBCE]/70 pt-2">
              {scheduleData.map((item, index) => {
                const isToday = index === currentDayIndex;
                return (
                  <div
                    key={item.day}
                    className={`py-3.5 px-3 flex items-center justify-between rounded-lg transition-colors ${
                      isToday ? 'bg-[#FAF7F2] font-semibold text-[#2D2422] border-l-4 border-l-[#B26A4D]' : 'text-[#736561]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.day}</span>
                      {isToday && (
                        <span className="text-[10px] font-bold text-[#B26A4D] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#EADBCE]">
                          Hoy
                        </span>
                      )}
                    </div>
                    <span className={`text-sm ${isToday ? 'text-[#B26A4D] font-bold' : 'text-[#2D2422]'}`}>
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-xs text-[#736561] flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-[#B26A4D] shrink-0 mt-0.5" />
              <span>
                <strong>Días festivos:</strong> Abrimos en horario especial de mañana (09:30 a 14:30) para recogida de encargos festivos.
              </span>
            </div>
          </div>

          {/* Service Policies & Pickup Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Custom Orders */}
            <div className="bg-white rounded-2xl border border-[#EADBCE] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B26A4D] border border-[#EADBCE]">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#2D2422]">
                  Encargos de Celebración
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#736561] leading-relaxed mb-4">
                Para garantizar la máxima frescura de nuestras texturas y flores comestibles, solicitamos <strong>48 horas de antelación</strong> en pedidos de tartas de cumpleaños y eventos.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B26A4D]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Personalización de placa de chocolate sin costo</span>
              </div>
            </div>

            {/* Card 2: Pickup in Store */}
            <div className="bg-white rounded-2xl border border-[#EADBCE] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B26A4D] border border-[#EADBCE]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#2D2422]">
                  Recogida en Obrador
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#736561] leading-relaxed">
                Sin colas ni esperas. Tu pastel te esperará refrigerado en empaque isotérmico con lazo artesanal, listo para tu celebración.
              </p>
            </div>

            {/* Card 3: Controlled Delivery */}
            <div className="bg-white rounded-2xl border border-[#EADBCE] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B26A4D] border border-[#EADBCE]">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#2D2422]">
                  Envíos Climatizados
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#736561] leading-relaxed">
                Reparto especial con temperatura controlada para que las tartas, merengues y capas de chocolate lleguen intactos a tu mesa.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
