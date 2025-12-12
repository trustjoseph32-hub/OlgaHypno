import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

export const Identification: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <section className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">Диагноз</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Ваш успех — это фасад. Потяните ползунок, чтобы увидеть МРТ вашей души.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[600px] w-full max-w-5xl mx-auto overflow-hidden cursor-ew-resize rounded-sm select-none shadow-2xl shadow-black/50 border border-white/5"
          onMouseDown={() => setIsDragging(true)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
        >
          {/* Layer 2: The Void (Right side, revealed) */}
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=1200&auto=format&fit=crop" 
               alt="Inner Void" 
               className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-color-dodge"
             />
             <div className="relative z-10 text-center p-8 max-w-md">
                <h3 className="text-2xl text-rose-500/80 font-serif italic mb-6">Симптомы распада</h3>
                <ul className="space-y-6 text-left text-neutral-300 font-light">
                  <li className="flex items-start">
                    <span className="mr-3 text-rose-500 text-xl leading-none">×</span> 
                    <span>Тело как "такси для мозга". Вы его не чувствуете, пока оно не сломается.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-rose-500 text-xl leading-none">×</span> 
                    <span>Психосоматика: аллергии, дерматиты, ком в горле, которые не лечат врачи.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-rose-500 text-xl leading-none">×</span> 
                    <span>Секс стал механикой сброса напряжения. Либидо на нуле.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-rose-500 text-xl leading-none">×</span> 
                    <span>Вы богаты, но живете в режиме "энергосбережения".</span>
                  </li>
                </ul>
             </div>
          </div>

          {/* Layer 1: The Facade (Left side, clipped) */}
          <div 
            className="absolute inset-0 bg-white flex items-center justify-center border-r border-rose-500/50"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
               src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop" 
               alt="Success Facade" 
               className="absolute inset-0 w-full h-full object-cover opacity-20 filter contrast-125"
             />
             <div className="relative z-10 text-center p-8 max-w-md">
                <h3 className="text-2xl text-black font-serif mb-6">Социальная маска</h3>
                <ul className="space-y-6 text-left text-neutral-800 font-medium">
                  <li className="flex items-start">
                    <span className="mr-3 text-black text-xl leading-none">+</span> 
                    <span>Безупречная репутация и статус.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black text-xl leading-none">+</span> 
                    <span>Бизнес растет, KPI выполняются.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black text-xl leading-none">+</span> 
                    <span>"У меня всё под контролем".</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-black text-xl leading-none">+</span> 
                    <span>Лучшие врачи, курорты и витамины.</span>
                  </li>
                </ul>
             </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[1px] bg-rose-500 cursor-ew-resize z-20 flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-black border border-rose-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.5)]">
              <MoveHorizontal className="text-rose-500 w-4 h-4" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-neutral-400 text-sm tracking-wide uppercase">
                Я вижу то, что вы прячете даже от себя.
            </p>
        </div>
      </div>
    </section>
  );
};