import React from 'react';
import logo1 from '../../assets/images/homepage/Penta Freight Home/imgi_8_.png';
import logo2 from '../../assets/images/homepage/Penta Freight Home/imgi_9_.png';
import logo3 from '../../assets/images/homepage/Penta Freight Home/imgi_10_.png';

const testimonials = [
  {
    logo: logo1,
    quote: '“Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”',
    author: 'Frank Naeve',
    role: 'Vice President Asia Pacific',
  },
  {
    logo: logo2,
    quote: '“We highly regard Penta Freight\'s professionalism and knowledge in the freight field. Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making thing possible. They have continued to innovate and change with the freight industry....”',
    author: 'Makarand Sane',
    role: 'General Manager Head - Export Logistics',
  },
  {
    logo: logo3,
    quote: '“Penta Freight has been one of our export LSP\'s for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success.”',
    author: 'Ryan Veigas',
    role: 'Vice President - Supply Chain & Procurement',
  },
  {
    logo: logo1, // repeated Lufthansa
    quote: '“Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.... ”',
    author: 'Frank Naeve',
    role: 'Vice President Asia Pacific',
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-5 sm:p-6 lg:p-7 flex flex-col items-center transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1">
      {/* Client Logo */}
      <div className="h-9 sm:h-10 flex items-center justify-center mb-4">
        <img 
          src={item.logo} 
          alt="Client Logo" 
          className="h-full max-w-[180px] object-contain"
        />
      </div>
      {/* Testimonial Quote */}
      <p className="text-gray-800 text-center text-[14px] sm:text-[14.5px] lg:text-[15px] leading-relaxed font-normal mb-5">
        {item.quote}
      </p>
      {/* Author Info */}
      <div className="mt-auto flex flex-col items-center">
        <span className="font-semibold text-gray-950 text-[15px] sm:text-[16px] mb-1">
          {item.author}
        </span>
        <span className="text-gray-600 text-[12px] sm:text-[13px] text-center font-normal">
          {item.role}
        </span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews-section" className="w-full bg-[#f8f9fa] border-t border-b border-gray-200 mt-12 lg:mt-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 xl:px-14 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          
          {/* ── Left Column (Sticky Heading) ────────────────────────── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[25vh] mb-12 lg:mb-0 w-full max-w-[380px] lg:ml-0">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-gray-950 font-bold select-none text-sm leading-none">•</span>
                <span className="text-[13px] font-medium text-gray-800 border border-gray-300 rounded-full px-4 py-1 bg-white/50">
                  Reviews
                </span>
              </div>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-light text-gray-900 leading-[1.2] mb-6">
                <span className="block lg:whitespace-nowrap">Hear From Our Satisfied</span>
                <span className="text-gray-400 block lg:whitespace-nowrap">Clients Worldwide.</span>
              </h2>
              <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed font-light">
                Explore what industry leaders and long-term partners say about our commitment to excellence and innovation.
              </p>
            </div>
          </div>

          {/* ── Right Column (Testimonial Cards) ────────────────────── */}
          <div className="lg:col-span-7 lg:col-start-6">
            {/* Mobile Layout (Sequential 1, 2, 3, 4) */}
            <div className="flex flex-col gap-8 md:hidden">
              {testimonials.map((item, index) => (
                <TestimonialCard key={index} item={item} />
              ))}
            </div>

            {/* Desktop/Tablet Layout (Staggered Zig-Zag 2 Columns) */}
            <div className="hidden md:grid grid-cols-2 gap-8 items-start">
              {/* Left Column of Cards */}
              <div className="flex flex-col gap-16">
                <TestimonialCard item={testimonials[0]} />
                <TestimonialCard item={testimonials[2]} />
              </div>
              {/* Right Column of Cards (shifted downward) */}
              <div className="flex flex-col gap-16 md:pt-32 lg:pt-48">
                <TestimonialCard item={testimonials[1]} />
                <TestimonialCard item={testimonials[3]} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
