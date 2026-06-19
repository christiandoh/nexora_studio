import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAMES = 240;

export default function HeroScroll() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = 1600;
    const h = 900;
    canvas.width = w;
    canvas.height = h;

    const imgs = [];
    for (let i = 1; i <= FRAMES; i++) {
      const img = new Image();
      img.src = `${import.meta.env.BASE_URL}frames/frame_${String(i).padStart(5, '0')}.jpg`;
      imgs.push(img);
    }
    imagesRef.current = imgs;

    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded === 1) {
        ctx.drawImage(imgs[0], 0, 0, w, h);
      }
    };
    imgs.forEach(img => {
      if (img.complete) onLoad();
      else img.addEventListener('load', onLoad);
    });

    const ctx2 = ctx;
    const updateFrame = (index) => {
      const i = Math.min(Math.floor(index), FRAMES - 1);
      if (imgs[i]?.complete) {
        ctx2.drawImage(imgs[i], 0, 0, w, h);
      }
    };

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${FRAMES * 2}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => updateFrame(self.progress * (FRAMES - 1)),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-scroll-section">
      <canvas ref={canvasRef} className="hero-scroll-canvas" />
    </section>
  );
}
