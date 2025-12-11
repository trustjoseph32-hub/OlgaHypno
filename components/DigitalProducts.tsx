import React from 'react';
import { PlayCircle, FileText, Zap, Moon } from 'lucide-react';

export const DigitalProducts: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
       {/* Decorative subtle background */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/50 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-light text-white mb-4 serif">Аптечка первой помощи</h2>
                <p className="text-neutral-500">
                    Получите облегчение уже сегодня вечером, пока ждете своей очереди на личную терапию. 
                    Протоколы для самостоятельной работы.
                </p>
            </div>
            <div className="text-right hidden md:block">
                <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-neutral-400">
                    Digital Access
                </span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Product 1 */}
            <div className="group bg-neutral-900 border border-white/5 p-6 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-800 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <PlayCircle size={20} />
                    </div>
                    <span className="text-rose-500 font-serif text-lg">2 990 ₽</span>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Head Off / Body On</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                    Аудио-сет. Как отключить "мыслемешалку" во время секса и вернуть чувствительность телу.
                </p>
                <div className="w-full py-2 text-center text-[10px] uppercase tracking-widest border border-white/10 text-neutral-400 group-hover:border-white group-hover:text-white transition-all">
                    Купить доступ
                </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-neutral-900 border border-white/5 p-6 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-800 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <FileText size={20} />
                    </div>
                    <span className="text-rose-500 font-serif text-lg">1 990 ₽</span>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Код Оргазмичности</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                    Интенсив-диагностика. Найди свои блоки, которые мешают получать удовольствие от жизни.
                </p>
                <div className="w-full py-2 text-center text-[10px] uppercase tracking-widest border border-white/10 text-neutral-400 group-hover:border-white group-hover:text-white transition-all">
                    Купить доступ
                </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-neutral-900 border border-white/5 p-6 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-800 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <Moon size={20} />
                    </div>
                    <span className="text-rose-500 font-serif text-lg">1 290 ₽</span>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Нейро-Сон</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                    Гипно-сессия для бизнесменов. Выключаем кортизол, включаем мелатонин за 20 минут.
                </p>
                <div className="w-full py-2 text-center text-[10px] uppercase tracking-widest border border-white/10 text-neutral-400 group-hover:border-white group-hover:text-white transition-all">
                    Купить доступ
                </div>
            </div>

            {/* Product 4 */}
            <div className="group bg-neutral-900 border border-white/5 p-6 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-800 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <Zap size={20} />
                    </div>
                    <span className="text-rose-500 font-serif text-lg">1 500 ₽</span>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">SOS-Аллергия</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                    Протокол работы с психосоматическим зудом и высыпаниями на фоне стресса.
                </p>
                <div className="w-full py-2 text-center text-[10px] uppercase tracking-widest border border-white/10 text-neutral-400 group-hover:border-white group-hover:text-white transition-all">
                    Купить доступ
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};