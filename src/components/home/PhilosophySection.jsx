import React from 'react';
import bgPattern from '../../assets/images/homepage/Penta Freight Home/imgi_44_lineas-CSz1CbRe.png';

export default function PhilosophySection() {
  return (
    <section 
      className="relative w-full py-12 md:py-16 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#41515c' }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgPattern})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-[#f06c30] text-[28px] md:text-[34px] font-bold mb-5 tracking-wide">
          Our Philosophy
        </h2>
        
        <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed mb-8 font-light">
          Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and
          professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and
          excellence.
        </p>
        
        <button className="bg-[#f06c30] hover:bg-[#d95e26] text-white font-medium text-[14px] md:text-[15px] py-2.5 px-8 rounded-md transition-colors duration-300">
          Read more
        </button>
      </div>
    </section>
  );
}
