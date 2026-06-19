import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgPattern from '../../assets/images/homepage/Penta Freight Home/imgi_44_lineas-CSz1CbRe.png';

export default function AchievementsSection() {
  const achievementsRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const counters = counterRefs.current.filter(Boolean);
    if (counters.length === 0) return;

    const ctx = gsap.context(() => {
      // Fade-up animation for metric items
      gsap.fromTo('.metric-item', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Count-up animation for numeric values
      counters.forEach((el) => {
        const targetVal = parseInt(el.getAttribute('data-target'), 10);
        const countObj = { val: 0 };

        gsap.to(countObj, {
          val: targetVal,
          duration: 2,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onUpdate: () => {
            el.textContent = countObj.val;
          }
        });
      });
    }, achievementsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={achievementsRef}
      id="achievements-section" 
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#41515c' }}
    >
      {/* Background Line Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgPattern})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ── Left Column (Title & Description) ───────────────────── */}
        <div>
          <h2 className="text-[#f06c30] text-[32px] md:text-[38px] font-semibold mb-5 tracking-wide">
            Our Achievements
          </h2>
          <p className="text-gray-300 text-[14.5px] md:text-[16px] leading-relaxed font-light max-w-md">
            Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.
          </p>
        </div>

        {/* ── Right Column (2x2 Metrics Grid) ─────────────────────── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12">
          
          {/* Strategic Domestic Offices */}
          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              <span ref={(el) => (counterRefs.current[0] = el)} data-target="7">0</span>+
            </span>
            <span className="text-[13.5px] md:text-[15px] text-gray-300 font-medium">
              Strategic Domestic Offices
            </span>
          </div>

          {/* USA Global Presence */}
          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              USA
            </span>
            <span className="text-[13.5px] md:text-[15px] text-gray-300 font-medium">
              Global presence
            </span>
          </div>

          {/* Logistics Experts */}
          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              <span ref={(el) => (counterRefs.current[1] = el)} data-target="200">0</span>+
            </span>
            <span className="text-[13.5px] md:text-[15px] text-gray-300 font-medium">
              Logistics Experts
            </span>
          </div>

          {/* Awards & Accolades */}
          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              <span ref={(el) => (counterRefs.current[2] = el)} data-target="50">0</span>+
            </span>
            <span className="text-[13.5px] md:text-[15px] text-gray-300 font-medium">
              Awards & Accolades
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
