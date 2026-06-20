import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StickyBranding from './components/layout/StickyBranding';
import SmoothScroll from './components/layout/SmoothScroll';

// Pages
import Home from './pages/Home';
import Industries from './pages/Industries';
import Pentakuhl from './pages/Pentakuhl';
import ParcelShippers from './pages/ParcelShippers';
import PalletShippers from './pages/PalletShippers';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
          <Navbar />
          <StickyBranding />
          
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pentakuhl" element={<Pentakuhl />} />
              <Route path="/pentakuhl/parcel-shippers" element={<ParcelShippers />} />
              <Route path="/pentakuhl/pallet-shippers" element={<PalletShippers />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
