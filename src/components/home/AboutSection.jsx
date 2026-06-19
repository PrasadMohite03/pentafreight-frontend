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
      className="relative w-full overflow-hidden bg-[#f6f2ee]"
      style={{ height: '100vh', minHeight: '520px' }}
    >
      {/* ── Layer 1: Airplane — fills entire section ───────────────────────── */}
      <img
        src={airplaneImg}
        alt="Penta Freight cargo airplane in flight"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
      />

      {/* ── Layer 2: Fade overlay (blank image) — top portion only ────────── */}
      {/*
        This image is a white/cream rectangle that fades to transparent at the
        bottom. Placed at the top of the section it creates the smooth white→
        airplane transition visible in the reference screenshot.
        Height ~45% so the fade covers the text area and blends into the plane.
      */}
      <img
        src={fadeImg}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full select-none pointer-events-none z-[2]"
        style={{ height: '55%', objectFit: 'fill', objectPosition: 'top' }}
      />

      {/* ── Layer 3: Text content ──────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-full z-10 px-8 md:px-16 lg:px-20 pt-7 md:pt-10"
        data-aos="fade-up"
      >
        {/*
          Desktop: Flex layout centered
            Left → ABOUT US labels
            Right → description paragraph
          Tablet/Mobile: stacked
        */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-center">

          {/* Left — Heading block */}
          <div className="w-full lg:w-auto flex flex-col items-center text-center pt-1">
            <span className="text-[#f06c30] text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase leading-none">
              ABOUT US
            </span>
            {/* Orange divider */}
            <div className="w-[80px] h-[1.5px] bg-[#f06c30] my-[7px]" />
            <span className="text-[#f06c30] text-[12px] md:text-[13px] lg:text-[14px] font-black tracking-[0.2em] uppercase whitespace-nowrap leading-none">
              PENTA FREIGHT
            </span>
          </div>

          {/* Right — Description */}
          <div className="w-full lg:w-[60%]">
            <p className="text-gray-800 text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed font-normal">
              Penta Freight provides reliable{' '}
              <strong className="font-bold text-gray-900">logistics solutions</strong>
              , specializing in temperature-sensitive shipments. We ensure safe,{' '}
              <strong className="font-bold text-gray-900">on-time delivery</strong>{' '}
              worldwide. Trust us for seamless supply chain management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
