import React, { useEffect, useState } from 'react';

/**
 * PageLoader Component
 * Shows a full-screen loader with a smooth rotating orange broken-circle spinner
 * and a pulsing description text, then fades out smoothly once loading completes.
 */
export default function PageLoader({ isLoading, onExited }) {
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Start fade out transition
      setVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        if (onExited) onExited();
      }, 700); // matches the transition duration
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
      setShouldRender(true);
    }
  }, [isLoading, onExited]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fbfcfd] transition-opacity duration-700 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Premium Rotating Orange Broken-Circle Spinner */}
      <div className="w-16 h-16 border-[5px] border-t-[#f06c30] border-b-[#f06c30] border-l-transparent border-r-transparent rounded-full animate-spin mb-8" />
      
      <p className="font-sans text-[16px] md:text-[18px] font-medium text-gray-700 tracking-wide text-center px-6 animate-pulse select-none">
        Crafting Your 3D Experience... Please Hold On!
      </p>
    </div>
  );
}
