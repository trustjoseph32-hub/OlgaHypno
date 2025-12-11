import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Video Background Placeholder - abstract representation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"></div>
      </div>

      <div className="max-w-5xl relative z-10">
        <div className="flex items-center space-x-4 mb-8">
          <span className="h-[1px] w-12 bg-white/30"></span>
          <span className="text-xs md:text-sm tracking-[0.2em] text-neutral-400 uppercase">
            Neuro-Psychology & Premium Wellness
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8 text-white serif">
          Вы научились зарабатывать,<br />
          <span className="italic text-neutral-500">но разучились чувствовать.</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-300 max-w-xl font-light leading-relaxed mb-12">
          Ваше тело стало просто такси для мозга.
          <br/>
          Личная терапия для тех, кто достиг финансового потолка, но пробил эмоциональное дно.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <button 
            onClick={onCtaClick}
            className="group relative px-8 py-4 bg-white text-black rounded-none overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10 font-medium tracking-wide">ПОДАТЬ ЗАЯВКУ НА ОТБОР</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </button>
          
          <p className="text-xs text-neutral-500 max-w-[200px] border-l border-white/10 pl-4">
            Я не ищу клиентов. <br />
            Я отбираю людей в терапию.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden md:block">
         <div className="text-right">
            <p className="text-sm text-white font-medium">Ольга Шарафуллина</p>
            <p className="text-xs text-neutral-500 mt-1">Психолог. Гипнолог. Оргазмолог.</p>
         </div>
      </div>
    </section>
  );
};