import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Icons Import
import icon3 from '../assets/images/industries/Penta Freight Industry/imgi_3_default.png';
import icon4 from '../assets/images/industries/Penta Freight Industry/imgi_4_default.png';
import icon5 from '../assets/images/industries/Penta Freight Industry/imgi_5_default.png';
import icon6 from '../assets/images/industries/Penta Freight Industry/imgi_6_default.png';
import icon7 from '../assets/images/industries/Penta Freight Industry/imgi_7_default.png';
import icon8 from '../assets/images/industries/Penta Freight Industry/imgi_8_default.png';
import icon9 from '../assets/images/industries/Penta Freight Industry/imgi_9_default.png';
import icon10 from '../assets/images/industries/Penta Freight Industry/imgi_10_default.png';
import icon11 from '../assets/images/industries/Penta Freight Industry/imgi_11_default.png';
import ctaBg from '../assets/images/industries/Penta Freight Industry/imgi_15_ctabg-B8yapHMO.jpg';
import OfficeLocationsSection from '../components/home/OfficeLocationsSection';

const industriesData = [
  {
    icon: icon3,
    title: 'Pharmaceuticals',
    description: 'The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.',
  },
  {
    icon: icon4,
    title: 'Chemicals',
    description: 'We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.',
  },
  {
    icon: icon5,
    title: 'Textiles',
    description: 'We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.',
  },
  {
    icon: icon6,
    title: 'Energy',
    description: 'As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.',
  },
  {
    icon: icon7,
    title: 'Automobile',
    description: 'Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.',
  },
  {
    icon: icon8,
    title: 'Packaging',
    description: 'The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.',
  },
  {
    icon: icon9,
    title: 'Time Critical Cargo',
    description: 'We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.',
  },
  {
    icon: icon10,
    title: 'Glassware',
    description: 'Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.',
  },
  {
    icon: icon11,
    title: 'Electronics',
    description: 'We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.',
  },
];

const layoutPositions = [
  { top: '8%', left: '12%' },
  { top: '18%', right: '12%' },
  { top: '28%', left: '16%' },
  { top: '38%', right: '15%' },
  { top: '48%', left: '10%' },
  { top: '58%', right: '18%' },
  { top: '68%', left: '14%' },
  { top: '78%', right: '12%' },
  { top: '88%', left: '18%' },
];

const faqData = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each.',
  },
  {
    question: 'How do you handle temperature-sensitive shipments?',
    answer: 'We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry.',
  },
  {
    question: 'What sets your logistics apart?',
    answer: 'We offer customized, transparent solutions with competitive rates and a deep understanding of industry-specific needs.',
  },
  {
    question: 'How do you ensure compliance with regulations?',
    answer: 'We comply with international guidelines, working closely with authorities to ensure smooth and legal shipments.',
  },
];

export default function Industries() {
  const cardsRef = useRef([]);
  const faqRefs = useRef([]);
  const ctaBgRef = useRef(null);
  const ctaTextRef = useRef(null);
  const [openIndices, setOpenIndices] = useState([0, 1, 2, 3]);

  const toggleIndex = (index) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const mm = gsap.matchMedia();

    // ── Desktop Absolute Scattered Canvas Parallax ────────────────
    mm.add("(min-width: 1024px)", () => {
      cards.forEach((card, index) => {
        // Vary parallax intensity based on index for 3D depth effect
        const speed = 1 + (index % 3) * 0.4; 
        
        // Hide card initially so scrub brings it in cleanly
        gsap.set(card, { opacity: 0, y: 150 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 95%", // triggers when card top enters bottom of screen
            end: "bottom 5%",  // ends when card bottom leaves top of screen
            scrub: true,
          }
        });

        // Step 1: Fade in and move up to native position
        tl.to(card, { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" })
          // Step 2: Continue floating upward at varied speeds
          .to(card, { y: -250 * speed, duration: 0.6, ease: "none" })
          // Step 3: Gently move downward relative to its momentum and fade out as it exits
          .to(card, { opacity: 0, y: (-250 * speed) + 80, duration: 0.2, ease: "power1.in" });
      });
    });

    // ── Mobile Responsive Standard Flow ───────────────────────────
    mm.add("(max-width: 1023px)", () => {
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#industries-grid-mobile',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // ── CTA Banner Cinematic Parallax ───────────────────────────────────────
    if (ctaBgRef.current && ctaTextRef.current) {
      // 1. Background image slow scrub parallax (0 to -120px)
      gsap.fromTo(ctaBgRef.current, 
        { y: 0 },
        {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: "#cta-banner",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 2. Continuous floating for the content wrapper (+80px to -80px)
      gsap.fromTo(ctaTextRef.current,
        { y: 80 },
        {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: "#cta-banner",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 3. Staggered scale and fade-in for the heading, paragraph, and button
      gsap.fromTo(ctaTextRef.current.children,
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#cta-banner",
            start: "top 85%",
            end: "top 35%", // Completes fade in relatively quickly during scroll
            scrub: 1 // smooth scrubbing
          }
        }
      );
    }

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="flex-grow bg-white">
      
      {/* ── Industries Floating Parallax Canvas Section ─────────────── */}
      <section className="bg-[#f5f5f5] py-20 lg:py-0 relative lg:h-[4500px] overflow-hidden">
        
        {/* Section Heading (Static at top) */}
        <div className="lg:absolute lg:top-40 lg:left-0 w-full text-center z-10 px-6 mb-16 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400/80 mb-6 uppercase tracking-widest">
            Industries
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[16px] md:text-lg leading-relaxed">
            Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
          </p>
        </div>

        {/* Scattered Cards Canvas */}
        <div className="w-full lg:max-w-[1440px] mx-auto lg:absolute lg:inset-0">
          <div id="industries-grid-mobile" className="flex flex-col gap-10 px-6 sm:px-10 relative w-full h-full lg:px-0 lg:block lg:pt-0">
            {industriesData.map((item, index) => (
              <div 
                key={item.title}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  "--desk-top": layoutPositions[index].top,
                  "--desk-left": layoutPositions[index].left,
                  "--desk-right": layoutPositions[index].right,
                }}
                // On mobile: standard block margin with full width. On desktop: absolute position with strict dimensions.
                className="w-full relative lg:absolute lg:w-[400px] lg:[top:var(--desk-top)] lg:[left:var(--desk-left)] lg:[right:var(--desk-right)] z-20"
              >
                {/* Fixed size premium card */}
                <div 
                  className="group relative h-full min-h-[440px] bg-gradient-to-br from-[#F59B6A] to-[#F26D2D] rounded-[24px] p-8 lg:p-10 flex flex-col justify-start text-white shadow-lg border border-white/10 hover:-translate-y-[10px] hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(242,109,45,0.3)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 group-hover:scale-105 group-hover:bg-white/20 transition-all duration-300 flex-shrink-0">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-8 h-8 object-contain filter brightness-0 invert" 
                      />
                    </div>
                    <h3 className="text-[24px] md:text-[26px] font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-[15px] leading-relaxed text-white/95 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions Section ─────────────────────── */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-200 overflow-hidden relative z-30">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">
            
            {/* Left Column — Heading (40%) */}
            <div className="w-full lg:w-[45%] lg:pr-8">
              <h2 className="text-[28px] lg:text-[40px] font-medium text-gray-900 leading-[1.2] tracking-tight mb-4 whitespace-nowrap">
                Frequently Asked <span className="text-gray-400 font-light">Questions</span>
              </h2>
              <p className="text-gray-500 text-[15px] lg:text-[16px] leading-relaxed font-normal max-w-[450px]">
                Find answers to common industry questions, ensuring clarity on our services, processes, and solutions.
              </p>
            </div>

            {/* Right Column — Accordion List (55%) */}
            <div className="w-full lg:w-[55%]">
              <div className="border-t border-gray-200">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                    
                    <button
                      onClick={() => toggleIndex(index)}
                      className={`w-full flex items-center justify-between text-left select-none focus:outline-none group cursor-pointer transition-colors duration-300 min-h-[60px] hover:bg-gray-50/50 ${
                        openIndices.includes(index) ? 'pt-5 pb-1' : 'py-5'
                      }`}
                      aria-expanded={openIndices.includes(index)}
                    >
                      <span className="text-[15px] sm:text-[16px] font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#f26d2d]">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 ml-4">
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ease-in-out ${
                            openIndices.includes(index) ? 'rotate-180 text-gray-600' : 'group-hover:text-gray-600'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <div
                      ref={(el) => (faqRefs.current[index] = el)}
                      className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      style={{
                        maxHeight: openIndices.includes(index)
                          ? (faqRefs.current[index] ? `${faqRefs.current[index]?.scrollHeight + 24}px` : '500px')
                          : '0px',
                      }}
                    >
                      <div 
                        className={`transition-all duration-300 ease-in-out pb-5 ${
                          openIndices.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}
                      >
                        <p className="text-gray-500 font-normal text-[14px] leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Banner Cinematic Parallax Section ──────────────────────── */}
      <section id="cta-banner" className="relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center bg-[#111] border-t border-gray-200">
        
        {/* Parallax Background Image */}
        <div 
          ref={ctaBgRef}
          className="absolute inset-0 w-full h-[140%] -top-[10%] pointer-events-none will-change-transform"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        >
          <img 
            src={ctaBg} 
            alt="Penta Freight Industry CTA" 
            className="w-full h-full object-cover object-center brightness-90"
          />
          {/* Dark Overlay for premium readability */}
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* Floating Text Content Wrapper */}
        <div 
          ref={ctaTextRef} 
          className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center will-change-transform -mt-8"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-2 leading-tight drop-shadow-lg font-sans">
            Tailored Logistics for Every Industry
          </h2>
          <p className="text-white text-[16px] md:text-[20px] font-normal leading-relaxed mb-8 drop-shadow-md font-sans">
            Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
          </p>
          <button 
            className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-medium text-[16px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[190px] h-[48px]"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Contact Us Today
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Let's go!
            </span>
          </button>
        </div>
      </section>

      {/* ── Office Locations Section ─────────────────────────────────── */}
      <OfficeLocationsSection />

    </div>
  );
}
