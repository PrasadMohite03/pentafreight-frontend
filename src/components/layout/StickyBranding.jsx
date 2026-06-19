import React from 'react';
import brandingImg from '../../assets/images/homepage/Penta Freight Home/imgi_2_vertical-branding.png';

export default function StickyBranding() {
  return (
    <a 
      href="/" 
      className="fixed left-0 top-[40%] z-[999] block focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
      aria-label="Penta Freight Home"
    >
      <img 
        src={brandingImg} 
        alt="Penta Freight" 
        className="w-[42px] h-[280px] object-contain"
      />
    </a>
  );
}
