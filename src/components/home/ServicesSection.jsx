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

    // ── Desktop Layout (min-width: 1024px) ────────────────────────
    mm.add('(min-width: 1024px)', () => {
      gsap.registerPlugin(ScrollTrigger);

      // Desktop H: 70vh clamped between 500px and 660px
      const H = Math.min(Math.max(window.innerHeight * 0.70, 500), 660);
      const gap = 24;

      // Position listRef centered vertically
      if (listRef.current) {
        listRef.current.style.top = `${(window.innerHeight - H) / 2}px`;
      }

      cards.forEach((card, index) => {
        gsap.set(card, { height: H, y: 0, zIndex: index + 1 });
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

      for (let step = 0; step < cards.length - 1; step++) {
        const label = `step-${step}`;
        const spacingUnit = H + gap;
        const targetY = -(step + 1) * spacingUnit;

        for (let i = step + 1; i < cards.length; i++) {
          tl.to(cards[i], {
            y: targetY,
            ease: 'none',
            duration: 1,
          }, label);
        }
      }
    });

    // ── Mobile Layout (max-width: 1023px) ────────────────────────
    mm.add('(max-width: 1023px)', () => {
      gsap.registerPlugin(ScrollTrigger);

      // Mobile H: 62vh clamped between 400px and 660px
      const H = Math.min(Math.max(window.innerHeight * 0.62, 400), 660);
      const gap = 16;
      const peekPx = 12; // stack preview gap

      // Position listRef centered vertically
      if (listRef.current) {
        listRef.current.style.top = `${(window.innerHeight - H) / 2}px`;
      }

      // Initial positions for mobile stacked layout
      cards.forEach((card, i) => {
        let initY;
        if (i === 0) {
          initY = 0;
        } else {
          initY = H + peekPx * i - i * (H + gap);
        }
        gsap.set(card, { height: H, y: initY, zIndex: i + 1 });
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

      for (let step = 0; step < cards.length - 1; step++) {
        const label = `step-${step}`;

        cards.forEach((card, i) => {
          let targetY;
          if (i <= step + 1) {
            targetY = -(step + 1) * (H + gap);
          } else {
            targetY = H + peekPx * (i - (step + 1)) - i * (H + gap);
          }
          tl.to(card, {
            y: targetY,
            ease: 'none',
            duration: 1,
          }, label);
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="services-section" className="bg-white">
      {/* ── Header ───────────────────────────────────────────────── */}
      <SectionHeader />

      {/* ── Desktop & Mobile Stacked scroll-driven cards ──────────── */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div
          ref={listRef}
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 flex flex-col gap-4 lg:gap-6"
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full flex-shrink-0 rounded-[20px] overflow-hidden"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="hidden lg:block h-full w-full">
                <ServiceCard service={service} index={index} />
              </div>
              <div className="block lg:hidden h-full w-full">
                <ServiceCardMobile service={service} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
