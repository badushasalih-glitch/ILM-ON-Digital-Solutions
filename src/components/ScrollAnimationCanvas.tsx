'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import Link from 'next/link';

const TOTAL_FRAMES = 240;

export default function ScrollAnimationCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Story step transitions
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -20]);

  const step1Opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.48, 0.56], [0, 1, 1, 0]);
  const step1Y = useTransform(scrollYProgress, [0.28, 0.36, 0.56], [20, 0, -20]);

  const step2Opacity = useTransform(scrollYProgress, [0.56, 0.64, 0.76, 0.84], [0, 1, 1, 0]);
  const step2Y = useTransform(scrollYProgress, [0.56, 0.64, 0.84], [20, 0, -20]);

  const step3Opacity = useTransform(scrollYProgress, [0.84, 0.92, 1], [0, 1, 1]);
  const step3Y = useTransform(scrollYProgress, [0.84, 0.92], [20, 0]);

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    const padZero = (n: number) => n.toString().padStart(3, '0');

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `/assets/scroll-sequence/ezgif-frame-${padZero(index + 1)}.png`;
        img.onload = () => {
          images[index] = img;
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
      });
    };

    const loadInitialBatch = async () => {
      const initialPromises = [];
      for (let i = 0; i < 15; i++) {
        initialPromises.push(loadFrame(i));
      }
      await Promise.all(initialPromises);
      if (!isCancelled) {
        setIsReady(true);
        renderFrame(0);
      }

      // Progressively load remaining frames
      for (let i = 15; i < TOTAL_FRAMES; i++) {
        if (isCancelled) break;
        await loadFrame(i);
      }
    };

    loadInitialBatch();

    return () => {
      isCancelled = true;
    };
  }, []);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    if (!img) {
      for (let offset = 1; offset < 25; offset++) {
        if (imagesRef.current[frameIndex - offset]) {
          img = imagesRef.current[frameIndex - offset];
          break;
        } else if (imagesRef.current[frameIndex + offset]) {
          img = imagesRef.current[frameIndex + offset];
          break;
        }
      }
    }

    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let renderWidth = width;
    let renderHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = width;
      renderHeight = width / imgRatio;
      offsetY = (height - renderHeight) / 2;
    } else {
      renderHeight = height;
      renderWidth = height * imgRatio;
      offsetX = (width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);

    // Subtle cinematic gradient scrim: darker at top/bottom for text clarity, transparent in middle where team stands
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, 'rgba(5, 9, 18, 0.78)');
    grad.addColorStop(0.38, 'rgba(5, 9, 18, 0.48)');
    grad.addColorStop(0.70, 'rgba(5, 9, 18, 0.45)');
    grad.addColorStop(1, 'rgba(5, 9, 18, 0.85)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();
  };

  useEffect(() => {
    let animId: number;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const targetIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(latest * (TOTAL_FRAMES - 1))));
      if (targetIndex !== currentFrameRef.current) {
        currentFrameRef.current = targetIndex;
        animId = requestAnimationFrame(() => {
          renderFrame(targetIndex);
        });
      }
    });

    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-dark-950">
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Hardware-Accelerated Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isReady ? 1 : 0 }}
        />

        {/* Initial Loading State */}
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-950 z-20">
            <div className="w-8 h-8 rounded-full border-2 border-neutral-700 border-t-vivid-blue animate-spin mb-3" />
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Loading Presentation...
            </span>
          </div>
        )}

        {/* Storytelling Overlays */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          {/* Main Hero: Exactly as Instructed */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="text-center max-w-3xl mx-auto pointer-events-auto"
          >
            {/* Small Eyebrow */}
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
              ILM-ON DIGITAL SOLUTIONS
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5">
              Career. Recruitment. <br />
              <span className="text-vivid-blue">Digital Growth.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
              Professional solutions for careers, talent and business growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#divisions"
                className="px-6 py-3.5 rounded-full text-xs font-bold bg-vivid-blue hover:bg-vivid-hover text-white shadow-md transition-all flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all"
              >
                Talk to Us
              </Link>

              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20would%20like%20to%20consult%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-slate-300">
              <span>Scroll to discover</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </motion.div>

          {/* Act 1: Career Services Reveal */}
          <motion.div
            style={{ opacity: step1Opacity, y: step1Y }}
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 max-w-xl mx-auto text-center pointer-events-none p-7 sm:p-9 rounded-3xl bg-dark-950/80 backdrop-blur-md border border-white/15 shadow-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-vivid-blue">
              DIVISION 01
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              Career Services
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Professional ATS-friendly CV writing, cover letters, and comprehensive profile optimization for LinkedIn, Indeed, and Naukri Gulf.
            </p>
          </motion.div>

          {/* Act 2: Recruitment Reveal */}
          <motion.div
            style={{ opacity: step2Opacity, y: step2Y }}
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 max-w-xl mx-auto text-center pointer-events-none p-7 sm:p-9 rounded-3xl bg-dark-950/80 backdrop-blur-md border border-white/15 shadow-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-accent">
              DIVISION 02
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              Recruitment Support
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Supporting employers with candidate sourcing, screening, and interview coordination across India and the GCC.
            </p>
          </motion.div>

          {/* Act 3: Digital Marketing Reveal */}
          <motion.div
            style={{ opacity: step3Opacity, y: step3Y }}
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 max-w-xl mx-auto text-center pointer-events-auto p-7 sm:p-9 rounded-3xl bg-dark-950/80 backdrop-blur-md border border-white/15 shadow-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-vivid-blue">
              DIVISION 03
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              Ads & Digital Marketing
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Strategic Meta advertising, lead generation, branding, and digital presence setup to support business growth.
            </p>
            <a
              href="#divisions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-dark-950 hover:bg-slate-100 transition-all shadow-md"
            >
              <span>View All Divisions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
