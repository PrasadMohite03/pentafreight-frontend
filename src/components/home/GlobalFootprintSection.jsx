import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mapImg from '../../assets/images/homepage/Penta Freight Home/imgi_38_.webp';
import bgPattern from '../../assets/images/homepage/Penta Freight Home/imgi_44_lineas-CSz1CbRe.png';

const pins = [
  { name: 'India (Hub)', left: '74.8%', top: '53.5%', isHub: true },
  { name: 'USA', left: '18.5%', top: '41.5%' },
  { name: 'South America', left: '30.4%', top: '73.5%' },
  { name: 'Greenland', left: '41.0%', top: '11.5%' },
  { name: 'Europe North', left: '56.5%', top: '28.0%' },
  { name: 'Europe Central', left: '53.5%', top: '37.0%' },
  { name: 'Africa', left: '56.8%', top: '57.0%' },
  { name: 'Siberia', left: '79.2%', top: '28.5%' },
  { name: 'East Asia', left: '83.2%', top: '45.5%' },
  { name: 'Australia', left: '93.2%', top: '79.0%' },
];

const pulseStyle = `
  @keyframes pin-pulse {
    0% {
      transform: translate3d(-50%, -50%, 0) scale(0.5);
      opacity: 1;
    }
    100% {
      transform: translate3d(-50%, -50%, 0) scale(2.4);
      opacity: 0;
    }
  }
  .pin-pulsing-ring {
    position: absolute;
    border: 2px solid #f06c30;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: pin-pulse 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    pointer-events: none;
  }
`;

export default function GlobalFootprintSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo('.global-footprint-content',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#global-footprint-section',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <section 
      id="global-footprint-section"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#425462] border-t border-b border-gray-700"
    >
      <style dangerouslySetInnerHTML={{ __html: pulseStyle }} />

      {/* ── Background Line Pattern Overlay ───────────────────────── */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgPattern})` }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 xl:px-28 flex flex-col items-center">
        <h2 className="text-[#FF7A3D] text-[32px] md:text-[38px] font-semibold mb-12 tracking-wide text-center">
          Our Global Footprint
        </h2>

        {/* ── World Map Visual with Pulsing Pins Overlay ───────────── */}
        <div className="global-footprint-content relative w-full max-w-5xl mx-auto flex justify-center">
          <div className="relative inline-block w-full">
            <img 
              src={mapImg} 
              alt="Penta Freight World Map" 
              className="w-full h-auto select-none pointer-events-none"
            />
            
            {/* Dynamic Pins Overlay */}
            {pins.map((pin, i) => (
              <div 
                key={i}
                className="absolute"
                style={{ left: pin.left, top: pin.top }}
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-[#f06c30] absolute -translate-x-1/2 -translate-y-1/2 z-30 ${pin.isHub ? 'scale-125 bg-orange-600' : ''}`} />
                
                <div className={`pin-pulsing-ring ${pin.isHub ? 'w-8 h-8 border-[3px] border-orange-600' : 'w-6 h-6'}`} />
                
                {/* Pulsing ring 2 (delayed) */}
                <div 
                  className={`pin-pulsing-ring ${pin.isHub ? 'w-8 h-8 border-[3px] border-orange-600' : 'w-6 h-6'}`}
                  style={{ animationDelay: '0.8s' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
