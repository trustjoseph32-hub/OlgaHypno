import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

export const CostOfInaction: React.FC = () => {
  const [selectedLosses, setSelectedLosses] = useState<number[]>([]);

  const options = [
    { id: 1, label: "Упущенная прибыль из-за апатии (в месяц)", value: 500000 },
    { id: 2, label: "Цена потенциального развода (активы + нервы)", value: 5000000 },
    { id: 3, label: "Лечение хронических болезней от стресса (в год)", value: 300000 },
    { id: 4, label: "Слитые проекты из-за выгорания", value: 1500000 },
  ];

  const toggleOption = (id: number) => {
    if (selectedLosses.includes(id)) {
      setSelectedLosses(selectedLosses.filter(item => item !== id));
    } else {
      setSelectedLosses([...selectedLosses, id]);
    }
  };

  const totalLoss = selectedLosses.reduce((acc, currentId) => {
    const option = options.find(opt => opt.id === currentId);
    return acc + (option ? option.value : 0);
  }, 0);

  return (
    <section className="py-24 bg-neutral-950 border-t border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl font-light mb-12 text-white">Математика ваших потерь</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-neutral-400 mb-6 font-light">
              Отметьте пункты, которые актуальны для вас сейчас. Посмотрите, сколько стоит ваше бездействие.
            </p>
            {options.map((option) => (
              <div 
                key={option.id}
                onClick={() => toggleOption(option.id)}
                className={`cursor-pointer p-4 border rounded-sm transition-all duration-300 flex justify-between items-center ${
                  selectedLosses.includes(option.id) 
                    ? 'bg-neutral-800 border-white/30 text-white' 
                    : 'bg-transparent border-white/10 text-neutral-500 hover:border-white/20'
                }`}
              >
                <span className="text-sm">{option.label}</span>
                <div className={`w-4 h-4 rounded-full border ${selectedLosses.includes(option.id) ? 'bg-white border-white' : 'border-neutral-600'}`}></div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-900 p-8 rounded-sm text-center border border-white/5 shadow-2xl shadow-black">
            <h3 className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Цена бездействия</h3>
            <div className="text-4xl md:text-5xl font-serif text-rose-500 mb-2">
              {totalLoss.toLocaleString('ru-RU')} ₽
            </div>
            <p className="text-xs text-neutral-600 mb-8">Возможные потери в ближайший год</p>
            
            <div className="bg-neutral-950 p-4 border border-white/10 text-left">
              <div className="flex gap-3">
                 <AlertCircle className="text-white w-5 h-5 flex-shrink-0" />
                 <p className="text-sm text-neutral-300">
                   Инвестиция в годовое менторство (500 000 ₽) окупается мгновенно, если вы предотвратите хотя бы одну из этих проблем.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};