import React from 'react';
import fadeImg from '../../assets/images/homepage/Penta Freight Home/imgi_4_blank-CC781hyS.png';
import airplaneImg from '../../assets/images/homepage/Penta Freight Home/imgi_43_aeroplane.jpg';

/**
 * AboutSection — matches reference exactly
 *
 * Layer stack (bottom → top):
 *  1. imgi_43_aeroplane.jpg   → absolute inset-0, full section cover (base)
 *  2. imgi_4_blank-CC781hyS   → absolute top-0, full width, creates white→
 *                               transparent fade over the airplane's top area
 *  3. Text row (z-10)         → ABOUT US / divider / PENTA FREIGHT + paragraph
 */
export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative w-full overflow-hidden bg-[#f6f2ee] h-[75vh] md:h-screen min-h-[500px] md:min-h-[520px]"
    >
      {/* ── Layer 1: Airplane — fills entire section ───────────────────────── */}
      <img
        src={airplaneImg}
        alt="Penta Freight cargo airplane in flight"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
      />

      {/* ── Layer 2: Fade overlay — top portion only ────────── */}
      {/*
        White vignette overlay at the top to ensure text readability without the orange tone.
      */}
      <img
        src={fadeImg}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full select-none pointer-events-none z-[2] opacity-60"
        style={{ height: '45%', objectFit: 'fill', objectPosition: 'top' }}
      />
      <div 
        className="absolute top-0 left-0 w-full select-none pointer-events-none z-[3]"
        style={{ 
          height: '50%', 
          background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.95) 25%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0) 100%)' 
        }}
      />

      {/* ── Layer 3: Text content ──────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-full z-10 px-8 md:px-16 lg:px-20 pt-7 md:pt-10"
      >
        {/*
          Desktop: Flex layout centered
            Left → ABOUT US labels
            Right → description paragraph
          Tablet/Mobile: stacked
        */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-center">

          <div className="w-full lg:w-auto flex flex-col items-center text-center pt-1">
            <span className="font-sans font-bold text-[14px] leading-[21px] tracking-[1.5px] text-[#F06C30] uppercase whitespace-nowrap">
              ABOUT US
            </span>
            <div className="w-[130px] h-[2px] bg-[#F06C30] my-[6px]" />
            <span className="font-sans font-bold text-[14px] leading-[21px] tracking-[1.5px] text-[#F06C30] uppercase whitespace-nowrap">
              PENTA FREIGHT
            </span>
          </div>

          <div className="w-full lg:w-[60%]">
            <p className="font-sans font-light text-[20px] leading-[32px] tracking-[0px] text-[#425462]">
              Penta Freight provides reliable{' '}
              <strong className="font-bold text-[#1f2937]">logistics solutions</strong>
              , specializing in temperature-sensitive shipments. We ensure safe,{' '}
              <strong className="font-bold text-[#1f2937]">on-time delivery</strong>{' '}
              worldwide. Trust us for seamless supply chain management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
