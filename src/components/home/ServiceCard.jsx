import React from 'react';

/**
 * ServiceCard — Desktop card with full-screen image background and absolute text overlay.
 *
 * The image itself contains the built-in white fade. We position the content
 * absolutely over this white area (alternating left/right).
 */
export default function ServiceCard({ service, index }) {
  const isContentRight = index % 2 === 0;

  return (
    <div className="relative w-full rounded-[20px] overflow-hidden bg-[#f5f1ef] shadow-md h-full">
      {/* Darkening overlay for stacked card depth */}
      <div 
        className="absolute inset-0 bg-black pointer-events-none z-30 card-dark-overlay" 
        style={{ opacity: 0 }}
      />
      
      {/* Full-width image background */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Content overlay */}
      <div 
        className="absolute z-20 flex flex-col justify-center px-4 xl:px-6 w-[42%] max-h-[90%]"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          right: isContentRight ? '8%' : 'auto',
          left: isContentRight ? 'auto' : '8%',
        }}
      >
        <h3 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-gray-900 mb-5 leading-tight">
          {service.title}
        </h3>

        <div className="space-y-3.5 mb-6">
          {service.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-gray-700 text-[13.5px] lg:text-[14.5px] xl:text-[16px] leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-4.5 py-2 text-[12px] lg:text-[13px] xl:text-[13.5px] font-medium text-gray-700 border border-gray-300 rounded-full bg-white/50 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <div>
          <button className="bg-[#f06c30] hover:bg-[#d95e26] text-white font-semibold text-[14px] py-2.5 px-8 rounded-lg transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * ServiceCardMobile — Stacked layout for tablet/mobile.
 */
export function ServiceCardMobile({ service }) {
  return (
    <div className="w-full rounded-[16px] overflow-hidden bg-[#f5f1ef] shadow-md">
      <div className="w-full h-[240px] sm:h-[300px] relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="px-6 sm:px-8 py-6">
        <h3 className="text-[22px] sm:text-[26px] font-semibold text-gray-900 mb-3">
          {service.title}
        </h3>
        <div className="space-y-2.5 mb-4">
          {service.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-700 text-[13px] sm:text-[14px] leading-relaxed">{p}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-[12px] font-medium text-gray-700 border border-gray-300 rounded-full bg-white/50">{tag}</span>
          ))}
        </div>
        <button className="bg-[#f06c30] hover:bg-[#d95e26] text-white font-semibold text-[13px] py-2.5 px-7 rounded-lg transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}
