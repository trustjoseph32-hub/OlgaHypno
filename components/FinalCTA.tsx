import React, { useState } from 'react';

interface FinalCTAProps {
  id: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ id }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  return (
    <section id={id} className="py-24 bg-black relative overflow-hidden">
      {/* Abstract light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        
        {!submitted ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Вы готовы к правде?
              </h2>
              <p className="text-lg text-neutral-300 mb-8 font-light">
                Вы либо инвестируете в себя сейчас, либо платите своим здоровьем и отношениями потом. Выбор за вами.
              </p>
              <div className="p-4 bg-rose-950/20 border border-rose-900/30 text-rose-200/80 text-sm inline-block rounded-sm">
                Бесплатная диагностика (20 мин) только для тех, кто готов к переменам. <br/>
                Количество слотов в этом месяце: <strong>2</strong>.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <input 
                    type="text" 
                    required 
                    placeholder="Ваше Имя"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-lg"
                  />
                </div>
                <div className="group">
                  <input 
                    type="tel" 
                    required 
                    placeholder="Телефон / Telegram"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-lg"
                  />
                </div>
                <div className="group">
                  <select 
                    required 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors text-lg appearance-none [&>option]:bg-black"
                  >
                     <option value="" disabled selected className="text-neutral-600">Ваш текущий уровень дохода</option>
                     <option value="100-300">100.000 - 300.000 ₽</option>
                     <option value="300-1m">300.000 - 1.000.000 ₽</option>
                     <option value="1m+">Более 1.000.000 ₽</option>
                  </select>
                </div>
                <div className="group">
                  <textarea 
                    placeholder="Коротко о запросе (например: стеклянный потолок, нет энергии, проблемы в сексе)"
                    rows={2}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-white text-black font-medium tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              >
                Отправить заявку на отбор
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-3xl font-serif text-white mb-4">Анкета получена.</h3>
            <p className="text-neutral-400">
              Если мы подходим друг другу, я свяжусь с вами в течение 24 часов в Telegram.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};