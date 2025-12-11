import React from 'react';
import { Brain, Zap, Dna, Microscope } from 'lucide-react';

export const Method: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-white serif">
            Клиническое обольщение <br/>вашего мозга.
          </h2>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            Вы не чините сложный двигатель по инструкции из YouTube. 
            Мы работаем с нейрофизиологией, гормонами и бессознательным. 
            Это не магия. Это хирургия смыслов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Hypnosis (Large) */}
          <div className="md:col-span-2 bg-neutral-900/50 border border-white/5 p-10 relative overflow-hidden group hover:border-white/20 transition-all min-h-[320px]">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
              <Brain size={140} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-2xl text-white mb-4 font-serif">Научный Гипноз</h3>
              <p className="text-neutral-400 max-w-md">
                Перепрошивка нейронных связей. Мы минуем "критика" в префронтальной коре, чтобы устранить баги мышления, блокирующие ваш масштаб и оргазмичность.
              </p>
            </div>
          </div>

          {/* Card 2: Body */}
          <div className="bg-neutral-900/50 border border-white/5 p-10 relative overflow-hidden group hover:border-white/20 transition-all min-h-[320px]">
             <div className="absolute top-6 right-6 text-rose-900/40">
                <Dna size={40} />
             </div>
             <div className="h-full flex flex-col justify-end">
              <h3 className="text-xl text-white mb-4 font-serif">Оргазмология</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Восстановление связи "Мозг — Тело". Если нет оргазмов и вкуса к еде, значит, нет и энергии для удержания больших денег.
              </p>
             </div>
          </div>

          {/* Card 3: Psychosomatics */}
          <div className="bg-neutral-900/50 border border-white/5 p-10 relative overflow-hidden group hover:border-white/20 transition-all min-h-[320px]">
            <div className="absolute top-6 right-6 text-rose-900/40">
                <Zap size={40} />
             </div>
             <div className="h-full flex flex-col justify-end">
              <h3 className="text-xl text-white mb-4 font-serif">Телесная Терапия</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Снятие мышечного панциря. Аллергии и хроническая усталость — это не болезнь, это сигнал о сбое в системе безопасности тела.
              </p>
             </div>
          </div>

          {/* Card 4: No Magic (Large) */}
          <div className="md:col-span-2 bg-white text-black border border-white/5 p-10 relative overflow-hidden group transition-all flex items-center min-h-[320px]">
            <div className="absolute -right-12 -bottom-12 opacity-5 text-black">
                <Microscope size={240} />
            </div>
            <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-6">Никакой эзотерики.</h3>
                <p className="text-neutral-700 max-w-xl text-lg font-light">
                    Никаких чакр, дыхания маткой и карт желаний. Только доказательная психология и работающие протоколы. Я не даю надежду, я даю твердый результат, измеримый в деньгах и эндорфинах.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};