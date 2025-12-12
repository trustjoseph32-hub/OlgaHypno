import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-900/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="max-w-2xl pt-10 lg:pt-0">
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-[1px] w-12 bg-white/30"></span>
            <span className="text-xs md:text-sm tracking-[0.2em] text-neutral-400 uppercase">
              Neuro-Psychology & Premium Wellness
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 text-white serif">
            Вы научились зарабатывать,<br />
            <span className="italic text-neutral-500">но разучились чувствовать.</span>
          </h1>

          <p className="text-lg text-neutral-300 max-w-lg font-light leading-relaxed mb-12">
            Ваше тело стало просто такси для мозга.
            <br/>
            Личная терапия для тех, кто достиг финансового потолка, но пробил эмоциональное дно.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
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

        {/* Right Column: Expert Photo (Human Factor) */}
        <div className="relative hidden lg:block h-[800px] w-full">
           {/* Decorative frame */}
           <div className="absolute top-10 right-10 w-full h-full border border-white/10 opacity-50 translate-x-4 translate-y-4"></div>
           
           {/* Image Mask/Container */}
           <div className="absolute inset-0 overflow-hidden bg-neutral-900/50">
             <img 
               src="https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/Olga_front.jpg" 
               alt="Olga Sharafullina" 
               className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-1000 grayscale hover:grayscale-0 mix-blend-luminosity"
             />
             
             {/* Gradient overlay to blend bottom */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-950 to-transparent"></div>
           </div>

           <div className="absolute bottom-20 left-0 bg-neutral-950/80 backdrop-blur-md p-6 border border-white/10 max-w-xs">
              <p className="text-lg text-white font-serif italic">"Я вижу то, что вы прячете даже от себя."</p>
              <p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">— Ольга Шарафуллина</p>
           </div>
        </div>
      </div>
    </section>
  );
};