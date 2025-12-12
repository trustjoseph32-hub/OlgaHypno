import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

interface PricingProps {
  onSelect: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelect }) => {
  return (
    <section className="py-24 bg-neutral-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4 serif">Личная Терапия</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-xs">High Ticket Offer</p>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Мое время не масштабируется. Я беру в работу не более 5 новых клиентов в месяц. Это VIP-сервис для вашей психики.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Option 1: Online */}
          <div className="border border-white/10 bg-neutral-900/20 p-8 flex flex-col hover:border-white/30 transition-all duration-300 group">
            <h3 className="text-xl font-light tracking-wide text-white mb-2">Онлайн Сессия</h3>
            <div className="text-3xl font-serif text-neutral-200 mb-6">20 000 ₽ <span className="text-sm font-sans text-neutral-500 font-light">/ час</span></div>
            <p className="text-sm text-neutral-400 mb-8 border-l border-white/10 pl-4 h-16 flex items-center">
              Терапия словом и легкий транс. "Скорая помощь" для снятия острого состояния.
            </p>
            <ul className="text-sm text-neutral-400 space-y-4 mb-8 flex-grow">
              <li className="flex gap-3"><Check size={16} className="text-white mt-1"/> Глубинная диагностика</li>
              <li className="flex gap-3"><Check size={16} className="text-white mt-1"/> Снятие тревожности</li>
              <li className="flex gap-3"><Check size={16} className="text-white mt-1"/> Zoom / Telegram</li>
            </ul>
            <button onClick={onSelect} className="w-full py-4 border border-white/20 text-white text-xs hover:bg-white hover:text-black transition-all uppercase tracking-widest">
              Подать заявку
            </button>
          </div>

          {/* Option 2: Live (Featured) */}
          <div className="border border-rose-500/50 bg-neutral-900 p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-rose-900/20">
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Most Effective</div>
            <h3 className="text-xl font-light tracking-wide text-white mb-2">Живая Сессия (СПб)</h3>
            <div className="text-3xl font-serif text-white mb-6">35 000 ₽ <span className="text-sm font-sans text-neutral-500 font-light">/ встреча</span></div>
            <p className="text-sm text-neutral-300 mb-8 border-l border-rose-500 pl-4 h-16 flex items-center">
              Глубокая работа с психикой и телом. Телесная терапия + Гипноз. Пересборка.
            </p>
            <ul className="text-sm text-neutral-300 space-y-4 mb-8 flex-grow">
              <li className="flex gap-3"><Check size={16} className="text-rose-500 mt-1"/> Работа с блоками в теле</li>
              <li className="flex gap-3"><Check size={16} className="text-rose-500 mt-1"/> Регрессивный гипноз</li>
              <li className="flex gap-3"><Check size={16} className="text-rose-500 mt-1"/> Длительность 2-3 часа</li>
            </ul>
            <button onClick={onSelect} className="w-full py-4 bg-rose-600 text-white text-xs hover:bg-rose-700 transition-all uppercase tracking-widest font-bold">
              Хочу к телу
            </button>
          </div>

          {/* Option 3: Mentorship (VIP) - Updated Styling */}
          <div className="relative p-[1px] group">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-200/40 via-amber-500/10 to-transparent opacity-80 rounded-sm"></div>
            
            <div className="relative h-full bg-gradient-to-b from-neutral-900 to-black p-8 flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-30 text-amber-500">
                    <Crown size={24} />
                </div>
                
                <h3 className="text-xl font-medium tracking-wide text-amber-100 mb-2">VIP Менторство</h3>
                <div className="text-3xl font-serif text-amber-50 mb-6">500 000 ₽ <span className="text-sm font-sans text-neutral-500 font-light">/ год</span></div>
                
                <p className="text-sm text-neutral-300 mb-8 border-l border-amber-500/50 pl-4 h-16 flex items-center">
                Личный психолог вашего успеха. Полное сопровождение трансформации жизни.
                </p>
                
                <ul className="text-sm text-neutral-400 space-y-4 mb-8 flex-grow">
                <li className="flex gap-3"><Star size={16} className="text-amber-500 mt-1 fill-amber-500/20"/> Приоритетная связь 24/7</li>
                <li className="flex gap-3"><Star size={16} className="text-amber-500 mt-1 fill-amber-500/20"/> Стратегия жизни и бизнеса</li>
                <li className="flex gap-3"><Star size={16} className="text-amber-500 mt-1 fill-amber-500/20"/> Доступ к закрытым ивентам</li>
                </ul>
                
                <button onClick={onSelect} className="w-full py-4 border border-amber-500/30 bg-amber-900/10 text-amber-200 text-xs hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all uppercase tracking-widest font-bold">
                Личное собеседование
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};