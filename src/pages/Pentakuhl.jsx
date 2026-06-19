import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
import pentaVideo from '../assets/videos/pentakulvid-Cg-CExBI.mp4';
import pelicanLogo from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_3_peli_logo_vertical_full_color-BSk9BalL.png';
import coolguardPcm from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_4_coolguardpcmlogo-CtHYIIUo.png';
import coolguardAdvance from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_5_coolguardadvancelogo-DCu16CWg.png';
import credoCube from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_6_credocubelogo-BE0dilDj.png';
import coolpall from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_7_coolpalllogo-B5O0ArqJ.png';
import coolpallAdvance from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_8_coolpalladvancelogo-CpFgiTwD.png';
import credoXtreme from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_9_credoextremelogo-BuGsJTKg.png';
import credoCargo from '../assets/images/pentakuhl/Penta Freight PentaKuhl/imgi_10_credocargologo-D9antN4U.png';

gsap.registerPlugin(ScrollTrigger);

export default function Pentakuhl() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // GSAP ScrollTrigger for Product Solutions
    const ctx = gsap.context(() => {
      
      // Set initial states explicitly via GSAP to prevent flash of content
      gsap.set(headingRef.current, { opacity: 1, scale: 1 });
      gsap.set(".left-card-item", { opacity: 0, y: 40 });
      gsap.set(".right-card-item", { opacity: 0, y: 40 });

      // Create a timeline that scrubs with scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500', // Extended pin duration for storytelling feel
          pin: true,
          scrub: 1, // Smooth scrubbing
          anticipatePin: 1
        }
      });

      // Stage 1: Fade out the "Product Solutions" heading
      tl.to(headingRef.current, { opacity: 0, scale: 0.95, duration: 1 })
        
        // Stage 2: Sequentially stagger in Left Card Content
        .to(".left-card-item", { opacity: 1, y: 0, duration: 1.5, stagger: 0.4, ease: 'power2.out' }, "-=0.2")
        
        // Stage 3: Sequentially stagger in Right Card Content
        .to(".right-card-item", { opacity: 1, y: 0, duration: 1.5, stagger: 0.4, ease: 'power2.out' });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP
  }, []);

  return (
    <div className="w-full bg-white flex flex-col min-h-screen font-sans">
      
      {/* ── 1. Hero Video Banner ─────────────────────────────────────── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 border-b border-gray-800">
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={pentaVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay for readability (0.45 opacity) */}
        <div className="absolute inset-0 bg-black/45 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">
          
          <h1 
            className="text-[34px] sm:text-[42px] md:text-[52px] font-medium text-white leading-[1.2] mb-10 max-w-5xl tracking-wide drop-shadow-md"
            data-aos="fade-up"
          >
            Ensuring Safe Transport for <br className="hidden md:block"/> Temperature-Sensitive Products
          </h1>

          {/* Divider Line */}
          <div 
            className="w-full max-w-[900px] h-[1px] bg-white/40 mb-8"
            data-aos="fade-up"
            data-aos-delay="150"
          ></div>

          {/* Sub Row */}
          <div 
            className="flex flex-col md:flex-row items-center justify-between w-full max-w-[900px] gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-white text-[16px] md:text-[18px] font-normal leading-relaxed text-left max-w-[500px]">
              Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
            </p>
            
            <button className="flex items-center gap-2 bg-[#f26d2d] text-white px-7 py-3.5 rounded-[4px] font-medium text-[15px] transition-colors duration-300 hover:bg-[#d95c22] shadow-[0_4px_14px_rgba(242,109,45,0.3)] whitespace-nowrap">
              Explore
              <svg className="w-4 h-4 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* ── 2. About Penta Kuhl ──────────────────────────────────────── */}
      <section className="py-20 bg-white relative z-30">
        <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-center">
            
            {/* Left Column (Title) */}
            <div className="w-full md:w-[30%] flex flex-col items-center md:items-end pr-0 md:pr-10 pt-2">
              <div className="flex flex-col items-center text-center">
                <span className="text-[#f26d2d] font-bold text-[22px] tracking-wider inline-block border-b-[2.5px] border-[#f26d2d] pb-3 mb-3 px-8">
                  ABOUT
                </span>
                <h2 className="text-[#f26d2d] font-bold text-[22px] tracking-wider mt-1">
                  PENTA KUHL
                </h2>
              </div>
            </div>

            {/* Right Column (Paragraph) */}
            <div className="w-full md:w-[65%]">
              <p className="text-gray-500 text-[18px] md:text-[20px] leading-[1.85] font-light">
                At <strong className="font-bold text-gray-700">Pentakuhl</strong> , we specialize in providing durable, effective packaging solutions that maintain temperature <strong className="font-bold text-gray-700">stability</strong> during transit, <strong className="font-bold text-gray-700">protecting</strong> your valuable products. Our innovative designs cater to various industries, including pharmaceuticals, food, and biotechnology.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Pelican BioThermal Showcase ────────────────────────────── */}
      <section className="relative py-16 bg-[#425463] overflow-hidden">
        
        {/* Topographic Background Image/Pattern */}
        {/* We use a subtle CSS radial/repeating gradient or a base64 SVG to mimic the topographic lines if the actual asset isn't present. */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.414 1.414-14.14 14.14-1.414-1.414 14.14-14.14zm44.318 0l1.414 1.414-14.14 14.14-1.414-1.414 14.14-14.14zM111 0h2v20h-2V0zM0 9h20v2H0V9zm0 102h20v2H0v-2zm100 0h20v2h-20v-2zM9 100h2v20H9v-20zm25.134 19.16l1.414-1.414 14.14 14.14-1.414 1.414-14.14-14.14zm44.318 0l1.414-1.414 14.14 14.14-1.414 1.414-14.14-14.14zM0 50h20v2H0v-2zm100 0h20v2h-20v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}
        ></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Logo Card */}
          <div 
            className="bg-white rounded-xl py-6 px-10 mb-8 shadow-2xl border border-gray-100"
          >
            <img 
              src={pelicanLogo} 
              alt="Pelican BioThermal" 
              className="w-[140px] md:w-[160px] object-contain"
            />
          </div>

          {/* Heading */}
          <h2 
            className="text-[24px] md:text-[32px] font-normal text-white mb-10 tracking-wide"
          >
            Authorized Distributors for Pelican BioThermal™ Products
          </h2>

          {/* Button */}
          <button 
            className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-medium text-[16px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[160px] h-[48px]"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Read more
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Let's go!
            </span>
          </button>
          
        </div>
      </section>

      {/* ── 4. Product Solutions (Pinned GSAP Animation) ────────────── */}
      <section ref={sectionRef} className="relative w-full bg-[#fbfbfb] overflow-hidden border-t border-gray-100">
        <div className="relative w-full h-screen min-h-[750px] flex flex-col items-center justify-center">
          
          {/* Fading Heading */}
          <h2 ref={headingRef} className="absolute z-10 text-[38px] md:text-[48px] text-gray-900 font-medium tracking-wide">
            Product Solutions
          </h2>

          <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-14 z-20 h-[600px] mt-10 pointer-events-none">
            
            {/* Left Card: Parcel Shippers */}
            <div className="w-full md:w-1/2 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-10 lg:p-14 flex flex-col items-center pointer-events-auto">
               <div ref={leftContentRef} className="flex flex-col w-full h-full">
                  <h3 className="left-card-item text-[32px] md:text-[38px] font-normal text-gray-900 text-center mb-5 tracking-wide">Parcel Shippers</h3>
                  <p className="left-card-item text-gray-900 text-center text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-sm mx-auto">
                    We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.
                  </p>
                  
                  {/* Rows */}
                  <div className="left-card-item flex flex-col gap-0 w-full mb-10">
                    <div className="flex items-center border-b border-gray-100 py-5">
                      <span className="w-[30%] text-[20px] font-semibold text-gray-900">Single Use</span>
                      <div className="w-[70%] flex items-center justify-end gap-10">
                        <img src={coolguardPcm} alt="Coolguard PCM" className="h-[28px] object-contain"/>
                        <img src={coolguardAdvance} alt="Coolguard Advance" className="h-[28px] object-contain"/>
                      </div>
                    </div>
                    <div className="flex items-center py-5">
                      <span className="w-[30%] text-[20px] font-semibold text-gray-900">Reusable</span>
                      <div className="w-[70%] flex items-center justify-end gap-10">
                        <img src={credoCube} alt="Credo Cube" className="h-[30px] object-contain"/>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="left-card-item flex justify-center mt-auto pb-4">
                    <button className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-medium text-[15px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[180px] h-[48px] shadow-[0_4px_14px_rgba(242,109,45,0.3)]">
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Parcel Shippers</span>
                      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">Let's go!</span>
                    </button>
                  </div>
               </div>
            </div>

            {/* Right Card: Pallet Shippers */}
            <div className="w-full md:w-1/2 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-10 lg:p-14 flex flex-col items-center pointer-events-auto">
               <div ref={rightContentRef} className="flex flex-col w-full h-full">
                  <h3 className="right-card-item text-[32px] md:text-[38px] font-normal text-gray-900 text-center mb-5 tracking-wide">Pallet Shippers</h3>
                  <p className="right-card-item text-gray-900 text-center text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-sm mx-auto">
                    We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently.
                  </p>
                  
                  {/* Rows */}
                  <div className="right-card-item flex flex-col gap-0 w-full mb-10">
                    <div className="flex items-center border-b border-gray-100 py-5">
                      <span className="w-[30%] text-[20px] font-semibold text-gray-900">Single Use</span>
                      <div className="w-[70%] flex items-center justify-end gap-10">
                        <img src={coolpall} alt="Coolpall Vertos" className="h-[28px] object-contain"/>
                        <img src={coolpallAdvance} alt="Coolpall Advance" className="h-[28px] object-contain"/>
                      </div>
                    </div>
                    <div className="flex items-center py-5">
                      <span className="w-[30%] text-[20px] font-semibold text-gray-900">Reusable</span>
                      <div className="w-[70%] flex items-center justify-end gap-10">
                        <img src={credoXtreme} alt="Credo Xtreme" className="h-[28px] object-contain"/>
                        <img src={credoCargo} alt="Credo Cargo" className="h-[28px] object-contain"/>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="right-card-item flex justify-center mt-auto pb-4">
                    <button className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-medium text-[15px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[180px] h-[48px] shadow-[0_4px_14px_rgba(242,109,45,0.3)]">
                      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Pallet Shippers</span>
                      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">Let's go!</span>
                    </button>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
