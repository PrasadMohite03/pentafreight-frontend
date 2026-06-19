import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PhilosophySection from '../components/home/PhilosophySection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import AchievementsSection from '../components/home/AchievementsSection';
import ReviewsSection from '../components/home/ReviewsSection';
import CertificationsSection from '../components/home/CertificationsSection';
import AwardsSection from '../components/home/AwardsSection';
import GlobalFootprintSection from '../components/home/GlobalFootprintSection';
import OfficeLocationsSection from '../components/home/OfficeLocationsSection';

export default function Home() {
  return (
    <div className="flex-grow">
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      {/*
        Drop your video at: src/assets/videos/hero.mp4
        Vite serves files from /public, so also place a copy at:
        vk/videos/hero.mp4
        Then the videoSrc prop below will work out of the box.
        
        For a quick demo without a video file, the dark overlay
        will render over a black background — still pixel-correct layout.
      */}
      <HeroSection
        videoSrc="/videos/hero.mp4"
        posterSrc=""
      />

      {/* ── About Section ────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Philosophy Section ───────────────────────────────────────── */}
      <PhilosophySection />

      {/* ── Services Section ─────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── Why Choose Section ───────────────────────────────────────── */}
      <WhyChooseSection />

      {/* ── Achievements Section ─────────────────────────────────────── */}
      <AchievementsSection />

      {/* ── Reviews / Testimonials Section ───────────────────────────── */}
      <ReviewsSection />

      {/* ── Certifications Section ───────────────────────────────────── */}
      <CertificationsSection />

      {/* ── Awards & Accolades Section ────────────────────────────────── */}
      <AwardsSection />

      {/* ── Global Footprint Section ──────────────────────────────────── */}
      <GlobalFootprintSection />

      {/* ── Office Locations Section ──────────────────────────────────── */}
      <OfficeLocationsSection />
    </div>
  );
}

