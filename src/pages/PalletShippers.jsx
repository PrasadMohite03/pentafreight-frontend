import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoader } from '../context/LoaderContext';

import img3 from '../assets/images/Penta Freight shipping/imgi_3_.png';
import img4 from '../assets/images/Penta Freight shipping/imgi_4_.png';
import img5 from '../assets/images/Penta Freight shipping/imgi_5_.png';
import img6 from '../assets/images/Penta Freight shipping/imgi_6_.png';

import OfficeLocationsSection from '../components/home/OfficeLocationsSection';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = ({ title, image, specs, align = 'left', id }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const specsRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title and first spec are visible by default. Animate the remaining specs.
      const itemsToAnimate = specsRefs.current.slice(1);
      gsap.set(itemsToAnimate, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1400',
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      itemsToAnimate.forEach((el, index) => {
        if (el) {
          // Stagger slightly so they appear sequentially but overlapping
          tl.to(el, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35");
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const contentOrder = align === 'left' ? 'order-1' : 'order-2';
  const imageOrder = align === 'left' ? 'order-2' : 'order-1';

  return (
    <section ref={sectionRef} id={id} className="relative w-full h-screen bg-[#fbfcfd] overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 xl:px-20 flex flex-col md:flex-row h-full items-center -mt-[6vh]">
        
        <div className={`w-full md:w-[40%] flex flex-col justify-center h-full z-10 ${contentOrder} ${align === 'left' ? 'md:pr-10' : 'md:pl-10'}`}>
          <div ref={titleRef} className="mb-8">
            <h1 className="text-[36px] md:text-[44px] font-bold text-gray-900 leading-tight mb-2 tracking-tight uppercase">
              {title}
            </h1>
          </div>

          <div className="flex flex-col gap-6 max-w-[500px]">
            {specs.map((spec, i) => (
              <div key={i} ref={el => specsRefs.current[i] = el}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">{spec.label}</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`w-full md:w-[60%] h-[60vh] md:h-full flex items-center justify-center relative pointer-events-none ${imageOrder}`}>
          <img src={image} alt={title} className="max-w-[100%] max-h-[85%] object-contain drop-shadow-sm mix-blend-multiply" />
        </div>
        
      </div>
    </section>
  );
};

const KeyFeatures = ({ heading, description, leftBullets, rightBullets, id }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const leftBulletsRef = useRef([]);
  const rightBulletsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingRef.current, descRef.current, ...leftBulletsRef.current, ...rightBulletsRef.current], { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      });

      tl.to(headingRef.current, { opacity: 1, y: 0, duration: 1 })
        .to(descRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
      
      leftBulletsRef.current.forEach(el => {
        if(el) tl.to(el, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");
      });
      rightBulletsRef.current.forEach(el => {
        if(el) tl.to(el, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className="w-full py-28 bg-white border-b border-gray-100 flex justify-center">
      <div className="w-full max-w-[1200px] px-8">
        <h2 ref={headingRef} className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-4">
          {heading}
        </h2>
        {description && (
          <p ref={descRef} className="text-[14.5px] text-gray-700 leading-relaxed mb-12 max-w-[900px]">
            {description}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16">
          <div className="flex flex-col gap-6">
            {leftBullets.map((bullet, i) => (
              <div key={i} ref={el => leftBulletsRef.current[i] = el} className="flex items-start gap-3">
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span className="text-gray-700 text-[16px] md:text-[18px]">{bullet}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {rightBullets.map((bullet, i) => (
              <div key={i} ref={el => rightBulletsRef.current[i] = el} className="flex items-start gap-3">
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span className="text-gray-700 text-[16px] md:text-[18px]">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function PalletShippers() {
  const { isLoading: loading, setLoading } = useLoader();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500); // 1.5s minimum load display
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      ScrollTrigger.refresh();
    }
  }, [loading]);

  const vertosSpecs = [
    { label: 'Cooling Technology', value: 'ISOPAD' },
    { label: 'Insulation', value: '1/4 PMC/PAG½, PMC/PAG' },
    { label: 'Temperature Range', value: '2°C – 8°C, 15°C – 25°C' },
    { label: 'Duration', value: 'Upto 120 hours *Controlled Lane' },
  ];

  const vertosAdvanceSpecs = [
    { label: 'Cooling Technology', value: 'ISOPAD' },
    { label: 'Insulation', value: '1/4 PMC/PAG, 1/2 PMC/PAG' },
    { label: 'Temperature Range', value: '2°C – 8°C, 15°C – 25°C' },
    { label: 'Duration', value: 'Up to 120 hours' },
  ];

  const xtremeSpecs = [
    { label: 'Insulation', value: 'HALF PALLET, FULL PALLET' },
    { label: 'Temperature Range', value: '2°C – 8°C, 15°C – 25°C, Sub -20°C, Sub -40°C' },
    { label: 'Duration', value: 'Upto 120 hours' },
  ];

  const cargoSpecs = [
    { label: 'Insulation', value: 'HALF PALLET, FULL PALLET' },
    { label: 'Temperature Range', value: '2°C – 8°C, 15°C – 25°C, Sub -20°C, Sub -40°C' },
    { label: 'Duration', value: 'Upto 120 hours' },
  ];

  const vertosFeaturesLeft = [
    'Strict temperature control for global distribution',
    'Decreased transportation costs',
    'Ergonomic design for interlocking components ensure quick and easy assembly',
    'Reduced flat-packed height saves storage space and minimizes in-bound distribution cost'
  ];

  const vertosFeaturesRight = [
    'High density molded materials provide lightweight thermal and mechanical integrity',
    'Accepts full pallets for operational speed and efficiency',
    'Modular components used across entire product range'
  ];

  const credoFeaturesLeft = [
    'High performance VIP and PCM technology for extended duration',
    'Robust modular design minimizes need for repairs',
    'Highly durable materials withstand extreme global supply chain environments',
    'Simple, streamlined conditioning and pack-out procedures'
  ];

  const credoFeaturesRight = [
    'Fully reusable design delivers highest return on investment',
    'Eliminates single-use packaging waste',
    'Consistent temperature stability even during severe excursions',
    'Available across global rental networks for maximum convenience'
  ];

  return (
    <>
            <div className={`w-full bg-white min-h-screen font-sans transition-opacity duration-700 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* ── Section 1: COOLPALL™ VERTOS ── */}
      <ProductShowcase 
        id="section-vertos"
        title="COOLPALL™ VERTOS"
        image={img3}
        specs={vertosSpecs}
        align="left"
      />

      {/* ── Section 2: COOLPALL™ VERTOS ADVANCE ── */}
      <ProductShowcase 
        id="section-vertos-advance"
        title="COOLPALL™ VERTOS ADVANCE"
        image={img4}
        specs={vertosAdvanceSpecs}
        align="right"
      />

      {/* ── Section 3: Key Features (VERTOS) ── */}
      <KeyFeatures 
        id="section-features-vertos"
        heading="Key features for COOLPALL™ VERTOS | COOLPALL™ VERTOS ADVANCE"
        description="Our single use pallets utilise advanced insulation that provides an efficient temperature controlled environment where in your product remains guarded from excursions. Our products are designed to be flat-packed, modular and easy to assemble for your convenience."
        leftBullets={vertosFeaturesLeft}
        rightBullets={vertosFeaturesRight}
      />

      {/* ── Section 4: CRĒDO™ XTREME ── */}
      <ProductShowcase 
        id="section-xtreme"
        title="CRĒDO™ XTREME"
        image={img5}
        specs={xtremeSpecs}
        align="left"
      />

      {/* ── Section 5: CRĒDO™ CARGO ── */}
      <ProductShowcase 
        id="section-cargo"
        title="CRĒDO™ CARGO"
        image={img6}
        specs={cargoSpecs}
        align="right"
      />

      {/* ── Section 6: Key Features (CRĒDO) ── */}
      <KeyFeatures 
        id="section-features-credo"
        heading="Key features for CRĒDO™ XTREME | CRĒDO™ CARGO"
        description="These high-performance reusable bulk shippers provide superior temperature stability and are designed for global logistics, ensuring critical payloads remain within specification regardless of external conditions."
        leftBullets={credoFeaturesLeft}
        rightBullets={credoFeaturesRight}
      />

      {/* ── Footer ── */}
      <OfficeLocationsSection />

      </div>
    </>
  );
}
