'use client';

import React, { useEffect, useRef, useState } from 'react';
import NextImage from 'next/image';
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

  // Apple-inspired smooth scroll interpolation & subtle parallax
  const canvasScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.03]);

  // Story step transitions
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -24]);
  const heroScale = useTransform(scrollYProgress, [0, 0.28], [1, 0.98]);

  const step1Opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.48, 0.56], [0, 1, 1, 0]);
  const step1Y = useTransform(scrollYProgress, [0.28, 0.36, 0.56], [24, 0, -24]);

  const step2Opacity = useTransform(scrollYProgress, [0.56, 0.64, 0.76, 0.84], [0, 1, 1, 0]);
  const step2Y = useTransform(scrollYProgress, [0.56, 0.64, 0.84], [24, 0, -24]);

  const step3Opacity = useTransform(scrollYProgress, [0.84, 0.92, 1], [0, 1, 1]);
  const step3Y = useTransform(scrollYProgress, [0.84, 0.92], [24, 0]);

  // Preload frames progressively with Frame 1 as exact Main Landing page - Hero section 1st Frame image
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    const padZero = (n: number) => n.toString().padStart(3, '0');

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        if (index === 0) {
          // Strictly Frame 1: Main Landing page - Hero section 1st Frame image
          img.src = '/assets/hero/Main%20Landing%20Page%20-%20Hero%20Section%201st%20frame%20image.png';
        } else {
          img.src = `/assets/scroll-sequence/ezgif-frame-${padZero(index + 1)}.png`;
        }
        img.onload = () => {
          images[index] = img;
          resolve();
        };
        img.onerror = () => {
          // Fallback to pre-rendered 1080p frame 1 if needed
          if (index === 0) {
            const fallback = new Image();
            fallback.src = '/assets/scroll-sequence/ezgif-frame-001.png';
            fallback.onload = () => {
              images[0] = fallback;
              resolve();
            };
            fallback.onerror = () => resolve();
          } else {
            resolve();
          }
        };
      });
    };

    const loadInitialBatch = async () => {
      // Prioritize frame 0 immediately
      await loadFrame(0);
      if (!isCancelled) {
        setIsReady(true);
        renderFrame(0);
      }

      // Next load early frames for smooth scroll responsiveness
      const initialPromises = [];
      for (let i = 1; i < 20; i++) {
        initialPromises.push(loadFrame(i));
      }
      await Promise.all(initialPromises);

      // Progressively load remaining frames
      for (let i = 20; i < TOTAL_FRAMES; i++) {
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

    // Support both 13500x4219 master hero image and standard 1920x1080 frames with exact alignment
    const isMaster13k = img.width > 5000;
    const srcX = isMaster13k ? 3000 : 0;
    const srcY = 0;
    const srcW = isMaster13k ? 7500 : img.width;
    const srcH = isMaster13k ? 4219 : img.height;

    const imgRatio = srcW / srcH;
    const canvasRatio = width / height;

    // Navbar clearance so people's heads never get covered by the fixed header
    const navClearance = width < 640 ? 76 : 88;
    const availableHeight = height - navClearance;

    let renderWidth = width;
    let renderHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = width;
      renderHeight = width / imgRatio;
      offsetY = navClearance + Math.max(0, (availableHeight - renderHeight) / 2);
    } else {
      renderHeight = height;
      renderWidth = height * imgRatio;
      offsetX = (width - renderWidth) / 2;
      offsetY = navClearance * 0.75;
    }

    ctx.clearRect(0, 0, width, height);
    if (isMaster13k) {
      ctx.drawImage(img, srcX, srcY, srcW, srcH, offsetX, offsetY, renderWidth, renderHeight);
    } else {
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    }

    // Subtle cinematic lighting: crystal clear over faces/heads, gentle darkening at bottom for button/text contrast
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, 'rgba(5, 9, 18, 0.40)');     // Subtle top tint
    grad.addColorStop(0.12, 'rgba(5, 9, 18, 0.04)');  // Head/face zone: 100% natural, sharp and bright
    grad.addColorStop(0.48, 'rgba(5, 9, 18, 0.12)');  // Upper torso: transparent
    grad.addColorStop(0.72, 'rgba(5, 9, 18, 0.65)');  // Lower body: gentle transition
    grad.addColorStop(1, 'rgba(5, 9, 18, 0.94)');     // Bottom base: high contrast for CTAs and copy
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
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end">
        {/* Instant Frame 1 Visual: Strictly Main Landing page - Hero section 1st Frame image */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 overflow-hidden"
          style={{ opacity: isReady ? 0 : 1 }}
        >
          <NextImage
            src="/assets/hero/Main Landing Page - Hero Section 1st frame image.png"
            alt="ILM-ON Digital Solutions - Career, Recruitment, Digital Growth"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
        </div>

        {/* Hardware-Accelerated Canvas with Apple-grade parallax scale */}
        <motion.div 
          style={{ scale: canvasScale }}
          className="absolute inset-0 w-full h-full"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isReady ? 1 : 0 }}
          />
        </motion.div>

        {/* Storytelling Overlays: Positioned with vertical breathing room so faces are 100% visible */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 pointer-events-none">
          {/* Main Hero: Scroll-linked subtle motion */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
            className="text-center max-w-3xl mx-auto pointer-events-auto"
          >
            {/* Small Eyebrow */}
            <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20 mb-4 backdrop-blur-sm shadow-sm">
              ILM-ON DIGITAL SOLUTIONS
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
              Career. Recruitment. <br />
              <span className="text-vivid-blue">Digital Growth.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed mb-6">
              Professional solutions for careers, talent and business growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#divisions"
                className="px-6 py-3 rounded-full text-xs font-bold bg-vivid-blue hover:bg-vivid-hover text-white shadow-md transition-all flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-[1.02]"
              >
                Talk to Us
              </Link>

              <a
                href="https://wa.me/919292940652?text=Hello%20ILM-ON%20Digital%20Solutions,%20I%20would%20like%20to%20consult%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-all flex items-center gap-2 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-slate-300">
              <span>Scroll to discover</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </motion.div>

          {/* Act 1: Career Services Reveal */}
          <motion.div
            style={{ opacity: step1Opacity, y: step1Y }}
            className="absolute inset-x-4 bottom-8 sm:bottom-12 max-w-xl mx-auto text-center pointer-events-none p-6 sm:p-7 rounded-3xl bg-dark-950/85 backdrop-blur-md border border-white/15 shadow-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-vivid-blue">
              DIVISION 01
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1.5 mb-2.5">
              Career Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Professional ATS-friendly CV writing, cover letters, and comprehensive profile optimization for LinkedIn, Indeed, and Naukri Gulf.
            </p>
          </motion.div>

          {/* Act 2: Recruitment Reveal */}
          <motion.div
            style={{ opacity: step2Opacity, y: step2Y }}
            className="absolute inset-x-4 bottom-8 sm:bottom-12 max-w-xl mx-auto text-center pointer-events-none p-6 sm:p-7 rounded-3xl bg-dark-950/85 backdrop-blur-md border border-white/15 shadow-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-teal-accent">
              DIVISION 02
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1.5 mb-2.5">
              Recruitment Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Supporting employers with candidate sourcing, screening, and interview coordination across India and the GCC.
            </p>
          </motion.div>

          {/* Act 3: Digital Marketing Reveal */}
          <motion.div
            style={{ opacity: step3Opacity, y: step3Y }}
            className="absolute inset-x-4 bottom-8 sm:bottom-12 max-w-xl mx-auto text-center pointer-events-auto p-6 sm:p-7 rounded-3xl bg-dark-950/85 backdrop-blur-md border border-white/15 shadow-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-vivid-blue">
              DIVISION 03
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1.5 mb-2.5">
              Ads & Digital Marketing
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
              Strategic Meta advertising, lead generation, branding, and digital presence setup to support business growth.
            </p>
            <a
              href="#divisions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white text-dark-950 hover:bg-slate-100 transition-all shadow-md"
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
