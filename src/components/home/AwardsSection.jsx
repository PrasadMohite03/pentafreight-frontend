import React from 'react';
import logo1 from '../../assets/images/homepage/Penta Freight Home/imgi_25_.png';
import logo2 from '../../assets/images/homepage/Penta Freight Home/imgi_26_.png';
import logo3 from '../../assets/images/homepage/Penta Freight Home/imgi_27_.png';
import logo4 from '../../assets/images/homepage/Penta Freight Home/imgi_28_.png';
import logo5 from '../../assets/images/homepage/Penta Freight Home/imgi_29_.png';
import logo6 from '../../assets/images/homepage/Penta Freight Home/imgi_30_.png';
import logo7 from '../../assets/images/homepage/Penta Freight Home/imgi_31_.png';
import logo8 from '../../assets/images/homepage/Penta Freight Home/imgi_32_.png';
import logo9 from '../../assets/images/homepage/Penta Freight Home/imgi_33_.png';
import logo10 from '../../assets/images/homepage/Penta Freight Home/imgi_34_.png';
import logo11 from '../../assets/images/homepage/Penta Freight Home/imgi_35_.png';
import logo12 from '../../assets/images/homepage/Penta Freight Home/imgi_36_ (2).png';
import logo13 from '../../assets/images/homepage/Penta Freight Home/imgi_37_.png';

const awardsData = [
  {
    logo: logo1,
    text: 'Top Cargo Agents, 2016/17\nTop Cargo Agents, 2005/06',
  },
  {
    logo: logo2,
    text: 'Top Revenue Performance,\n2002',
  },
  {
    logo: logo3,
    text: 'Mega Tonners, 2006/07',
  },
  {
    logo: logo4,
    text: 'CONCOR Exim Star, 2003/04',
  },
  {
    logo: logo5,
    text: 'Meritorious Performance,\n1999/2000',
  },
  {
    logo: logo6,
    text: 'Top Performance, 2008\nTop Performance, 2007',
  },
  {
    logo: logo7,
    text: 'Significant Support and\nContribution, 2007',
  },
  {
    logo: logo8,
    text: 'International Award for\nExcellence in Air Cargo,\nRegion India - Winner, 2018',
  },
  {
    logo: logo9,
    text: 'Best Performance, 2017\nExcellence Revenue\nPerformance, 2016\nBest Performance, 2014\nCargo Agency, 2013\nCargo Agency, 2011',
  },
  {
    logo: logo10,
    text: 'Top Cargo Agent, 2003/04\nTop Cargo Agent, 2002/03\nTop Cargo Agent, 2001/02\nTop Cargo Agent, 1999/2000',
  },
  {
    logo: logo11,
    text: 'Outstanding Performance,\n2007\nOutstanding Quality, 2007\nOutstanding Performance -\nQuality, 2007\nOutstanding performance,\n2006\nPremium Partner, 2017\nAsia Partner, 2014',
  },
  {
    logo: logo12,
    text: 'Best Business Mix, 2006/07\nSignificant Contribution,\n2000/01\nSignificant Contribution,\n1999/2000',
  },
  {
    logo: logo13,
    text: 'Significant Support and\nContribution, 2006/07',
  },
];

export default function AwardsSection() {
  return (
    <section id="awards-section" className="w-full bg-[#f8f9fa] border-t border-gray-200 py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 xl:px-14">
        
        {/* ── Section Header ───────────────────────────────────────── */}
        <div className="mb-12 flex flex-col items-start">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-gray-950 font-bold select-none text-base leading-none">•</span>
            <span className="text-[14px] sm:text-[15px] font-semibold text-gray-850 border border-gray-300 rounded-full px-6 py-2 bg-white shadow-sm">
              Awards
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-light text-gray-900 leading-[1.15] mb-2">
            Proudly Recognized with Prestigious
            <br />
            <span className="text-gray-400">Awards and Accolades.</span>
          </h2>
        </div>

        {/* ── Cards Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {awardsData.map((award, index) => (
            <div 
              key={index}
              className="relative group bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-between text-center transition-all duration-[350ms] ease-out hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-10 hover:z-20 cursor-pointer"
            >
              {/* Layout-Safe Hover Border Frame Overlay */}
              <div className="absolute inset-0 border-[6px] border-[#41515c] rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-out pointer-events-none" />

              {/* Logo Area */}
              <div className="h-16 w-full flex items-center justify-center mb-6">
                <img 
                  src={award.logo} 
                  alt={`Award Logo ${index + 1}`} 
                  className="max-h-full max-w-[85%] object-contain select-none pointer-events-none"
                />
              </div>

              {/* Award Lines */}
              <div className="w-full flex flex-col items-center mt-auto">
                {award.text.split('\n').map((line, i) => (
                  <span 
                    key={i} 
                    className="block text-[12px] sm:text-[13px] text-gray-600 font-light leading-relaxed"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
