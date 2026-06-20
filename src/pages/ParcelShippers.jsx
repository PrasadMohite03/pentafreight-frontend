import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center, useProgress } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import OfficeLocationsSection from '../components/home/OfficeLocationsSection';

gsap.registerPlugin(ScrollTrigger);

// Preload models for better performance
useGLTF.preload('/models/credocube.glb');
useGLTF.preload('/models/coolguardadvancebox.glb');

// 3D Model Component 1
function CredoCubeModel({ animState }) {
  const { scene } = useGLTF('/models/credocube.glb');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && animState.current) {
      groupRef.current.rotation.y = animState.current.rotY;
      groupRef.current.rotation.x = animState.current.rotX;
      groupRef.current.scale.setScalar(animState.current.scale);
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// 3D Model Component 2
function CoolGuardAdvanceModel({ animState }) {
  const { scene } = useGLTF('/models/coolguardadvancebox.glb');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && animState.current) {
      groupRef.current.rotation.y = animState.current.rotY;
      groupRef.current.rotation.x = animState.current.rotX;
      groupRef.current.scale.setScalar(animState.current.scale);
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// Auto-Rotating 3D Model Component for Key Features Section
function AutoRotatingCredoCube() {
  const { scene } = useGLTF('/models/credocube.glb');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Smooth slow auto-rotation
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={1.8} />
      </Center>
    </group>
  );
}

import { useLoader } from '../context/LoaderContext';

export default function ParcelShippers() {
  const { active } = useProgress();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const { isLoading: loading, setLoading } = useLoader();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minTimeElapsed && !active) {
      setLoading(false);
    }
  }, [minTimeElapsed, active, setLoading]);

  useEffect(() => {
    if (!loading) {
      ScrollTrigger.refresh();
    }
  }, [loading]);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  // Proxy objects for GSAP to animate. Fixed scales to prevent massive model sizes.
  const model1AnimState = useRef({ rotY: -Math.PI / 8, rotX: 0, scale: 1.6 });
  const model2AnimState = useRef({ rotY: Math.PI / 8, rotX: 0, scale: 1.6 }); // Flipped initial rotation for left-side display
  const model3AnimState = useRef({ rotY: -Math.PI / 8, rotX: 0, scale: 1.6 });

  // Refs for product info blocks (Section 1)
  const insulation1Ref = useRef(null);
  const temp1Ref = useRef(null);
  const duration1Ref = useRef(null);
  const volume1Ref = useRef(null);

  // Refs for product info blocks (Section 2)
  const insulation2Ref = useRef(null);
  const temp2Ref = useRef(null);
  const duration2Ref = useRef(null);
  const volume2Ref = useRef(null);

  // Refs for product info blocks (Section 3)
  const insulation3Ref = useRef(null);
  const temp3Ref = useRef(null);
  const duration3Ref = useRef(null);
  const volume3Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // ---------------- SECTION 1 ----------------
      gsap.set([insulation1Ref.current, temp1Ref.current, duration1Ref.current, volume1Ref.current], {
        opacity: 0,
        y: 30
      });

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      tl1.to(insulation1Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model1AnimState.current, { rotY: Math.PI / 4, rotX: 0.1, scale: 1.7, duration: 1 }, "<")
      tl1.to(temp1Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model1AnimState.current, { rotY: Math.PI * 0.5, rotX: 0.15, scale: 1.8, duration: 1 }, "<")
      tl1.to(duration1Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model1AnimState.current, { rotY: Math.PI * 0.75, rotX: 0.1, scale: 1.9, duration: 1 }, "<")
      tl1.to(volume1Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model1AnimState.current, { rotY: Math.PI * 1.0, rotX: 0.05, scale: 2.0, duration: 1 }, "<");


      // ---------------- SECTION 2 ----------------
      gsap.set([insulation2Ref.current, temp2Ref.current, duration2Ref.current, volume2Ref.current], {
        opacity: 0,
        y: 30
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      tl2.to(insulation2Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model2AnimState.current, { rotY: -Math.PI / 4, rotX: 0.1, scale: 1.7, duration: 1 }, "<")
      tl2.to(temp2Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model2AnimState.current, { rotY: -Math.PI * 0.5, rotX: 0.15, scale: 1.8, duration: 1 }, "<")
      tl2.to(duration2Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model2AnimState.current, { rotY: -Math.PI * 0.75, rotX: 0.1, scale: 1.9, duration: 1 }, "<")
      tl2.to(volume2Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model2AnimState.current, { rotY: -Math.PI * 1.0, rotX: 0.05, scale: 2.0, duration: 1 }, "<");

      // ---------------- SECTION 3 ----------------
      gsap.set([insulation3Ref.current, temp3Ref.current, duration3Ref.current, volume3Ref.current], {
        opacity: 0,
        y: 30
      });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section3",
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      tl3.to(insulation3Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model3AnimState.current, { rotY: Math.PI / 4, rotX: 0.1, scale: 1.7, duration: 1 }, "<")
      tl3.to(temp3Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model3AnimState.current, { rotY: Math.PI * 0.5, rotX: 0.15, scale: 1.8, duration: 1 }, "<")
      tl3.to(duration3Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model3AnimState.current, { rotY: Math.PI * 0.75, rotX: 0.1, scale: 1.9, duration: 1 }, "<")
      tl3.to(volume3Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(model3AnimState.current, { rotY: Math.PI * 1.0, rotX: 0.05, scale: 2.0, duration: 1 }, "<");

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
            <div className={`w-full bg-white min-h-screen font-sans pt-24 transition-opacity duration-700 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}>

      {/* ── 1. CoolGuard PCM Section ── */}
      <section ref={section1Ref} className="relative w-full h-screen bg-[#fbfcfd] overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row h-full items-center">

          <div className="w-full md:w-[45%] flex flex-col justify-center h-full pr-10 z-10">
            <div className="mb-6">
              <h1 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-tight mb-5 tracking-tight">
                CoolGuard™ PCM
              </h1>
              <div className="mb-5">
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Cooling Technology</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">VIP (Vacuum Insulation Panels) and PCM Bricks</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 max-w-[500px]">
              <div ref={insulation1Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Insulation</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">VIPs</p>
              </div>
              <div ref={temp1Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Temperature Range</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">2°C – 8°C, 15°C – 25°C, Sub -20°C</p>
              </div>
              <div ref={duration1Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Duration</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">48 - 72 hours</p>
              </div>
              <div ref={volume1Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Volume</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">6 - 96L</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[55%] h-[60vh] md:h-full flex items-center justify-center relative pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} className="w-full h-full">
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 10]} intensity={1.4} />
              <directionalLight position={[-10, 10, -10]} intensity={0.5} />
              <Environment preset="city" />
              <React.Suspense fallback={null}>
                <CredoCubeModel animState={model1AnimState} />
              </React.Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      {/* ── 2. Key Features Intermediate Section ── */}
      <section className="w-full py-28 bg-white border-b border-gray-100 flex justify-center">
        <div className="w-full max-w-[1200px] px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="w-full h-[300px] md:h-[400px] relative pointer-events-none">
              <Canvas camera={{ position: [0, 0, 6], fov: 40 }} className="w-full h-full">
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 10]} intensity={1.4} />
                <directionalLight position={[-10, 10, -10]} intensity={0.5} />
                <Environment preset="city" />
                <React.Suspense fallback={null}>
                  <AutoRotatingCredoCube />
                </React.Suspense>
              </Canvas>
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-8">
              Key features for CoolGuard™ PCM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div className="flex items-start gap-3">
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span className="text-gray-700 text-[16px] md:text-[18px]">Temperature Stability</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span className="text-gray-700 text-[16px] md:text-[18px]">Simple packout configuration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span className="text-gray-700 text-[16px] md:text-[18px]">Excursion reduction</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span className="text-gray-700 text-[16px] md:text-[18px]">Volumetric Efficiency</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                <span className="text-gray-700 text-[16px] md:text-[18px]">Hibernation Flexibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CoolGuard Advance Section ── */}
      <section ref={section2Ref} className="relative w-full h-screen bg-[#fbfcfd] overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row h-full items-center">

          <div className="w-full md:w-[55%] h-[60vh] md:h-full flex items-center justify-center relative pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} className="w-full h-full">
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 10]} intensity={1.4} />
              <directionalLight position={[-10, 10, -10]} intensity={0.5} />
              <Environment preset="city" />
              <React.Suspense fallback={null}>
                <CoolGuardAdvanceModel animState={model2AnimState} />
              </React.Suspense>
            </Canvas>
          </div>

          <div className="w-full md:w-[45%] flex flex-col justify-center h-full pl-10 z-10">
            <div className="mb-6">
              <h1 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-tight mb-5 tracking-tight">
                CoolGuard™ Advance
              </h1>
              <div className="mb-5">
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Cooling Technology</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">Hybrid PCM (Phase Change Material) Brics</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 max-w-[500px]">
              <div ref={insulation2Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Insulation</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">VIPs</p>
              </div>
              <div ref={temp2Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Temperature Range</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">2°C – 8°C, 15°C – 25°C, Sub -20°C</p>
              </div>
              <div ref={duration2Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Duration</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">48–72 hours</p>
              </div>
              <div ref={volume2Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Volume</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">4 – 96L</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. Crēdo Cube Section ── */}
      <section id="section3" className="relative w-full h-screen bg-[#fbfcfd] overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row h-full items-center">

          <div className="w-full md:w-[45%] flex flex-col justify-center h-full pr-10 z-10">
            <div className="mb-6">
              <h1 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-tight mb-5 tracking-tight">
                Crēdo™ Cube
              </h1>
              <div className="mb-5">
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Cooling Technology</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal leading-relaxed">VIP (Vacuum Insulation Panels), PCM (Phase Change Material), TICS (Thermal Insulation Chamber System)</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 max-w-[500px]">
              <div ref={insulation3Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Insulation</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">VIPs</p>
              </div>
              <div ref={temp3Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Temperature Range</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">2°C – 8°C, 15°C – 25°C, Sub -20°C, Sub -40°C</p>
              </div>
              <div ref={duration3Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Duration</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">48–72 hours</p>
              </div>
              <div ref={volume3Ref}>
                <h3 className="text-[18px] md:text-[20px] text-gray-900 font-semibold mb-[2px]">Volume</h3>
                <p className="text-[14px] md:text-[15px] text-gray-700 font-normal">2–96L</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[55%] h-[60vh] md:h-full flex items-center justify-center relative pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} className="w-full h-full">
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 10]} intensity={1.4} />
              <directionalLight position={[-10, 10, -10]} intensity={0.5} />
              <Environment preset="city" />
              <React.Suspense fallback={null}>
                <CredoCubeModel animState={model3AnimState} />
              </React.Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      {/* ── 5. Office Locations Section (Footer) ── */}
      <OfficeLocationsSection />

      </div>
    </>
  );
}
