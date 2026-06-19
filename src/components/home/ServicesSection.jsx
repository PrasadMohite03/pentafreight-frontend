import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import servicesData from '../../data/servicesData';
import ServiceCard, { ServiceCardMobile } from './ServiceCard';

/**
 * ServicesSection — Apple-style overlay card scrolling using GSAP + ScrollTrigger.
 */

// ── Section Header ────────────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="w-full max-w-[1180px] mx-auto px-6 md:px-8 pt-14 md:pt-16 pb-0">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        {/* Left — badge + heading */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <span className="text-[13px] font-medium text-gray-800 border border-gray-400 rounded-full px-4 py-1">
              Services
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-light text-gray-900 leading-[1.15]">
            Seamless Solutions for
            <br />
            Every Logistics Need
          </h2>
        </div>

        {/* Right — description */}
        <div className="lg:max-w-md lg:text-right pb-2" data-aos="fade-up" data-aos-delay="80">
          <p className="text-gray-600 text-[16px] md:text-[17.5px] leading-relaxed italic">
            Tailored logistics solutions for timely, cost-effective deliveries
            across air, sea, and multimodal transport.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      gsap.registerPlugin(ScrollTrigger);

      // Reset positions and apply incremental z-index so later cards stack on top of earlier ones
      cards.forEach((card, index) => {
        gsap.set(card, { y: 0, zIndex: index + 1 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * cards.length}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Build sequence of transitions
      for (let step = 0; step < cards.length - 1; step++) {
        const label = `step-${step}`;

        // spacingUnit = cardHeight (70vh) + gap (24px)
        const spacingUnit = window.innerHeight * 0.70 + 24; 
        const targetY = -(step + 1) * spacingUnit;

        // Animate all subsequent cards in the queue up by one card spacing unit.
        // The active card (cards[step]) and previously covered cards stay completely fixed (no y change).
        for (let i = step + 1; i < cards.length; i++) {
          tl.to(cards[i], {
            y: targetY,
            ease: 'none',
            duration: 1,
          }, label);
        }
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="services-section" className="bg-white">
      {/* ── Header ───────────────────────────────────────────────── */}
      <SectionHeader />

      {/* ── Desktop: Pinned stacked scroll-driven cards ──────────── */}
      <div
        ref={containerRef}
        className="hidden lg:block relative w-full h-screen overflow-hidden"
      >
        <div 
          ref={listRef}
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1180px] px-6 md:px-8 flex flex-col gap-6"
          style={{
            top: '50px',
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full h-[70vh] min-h-[500px] max-h-[660px] flex-shrink-0"
              style={{
                zIndex: index + 1,
              }}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile / Tablet: Simple stacked cards ────────────────── */}
      <div className="lg:hidden flex flex-col gap-8 px-4 sm:px-6 md:px-10 pb-12">
        {servicesData.map((service, index) => (
          <div key={service.id} data-aos="fade-up" data-aos-delay={index * 60}>
            <ServiceCardMobile service={service} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
