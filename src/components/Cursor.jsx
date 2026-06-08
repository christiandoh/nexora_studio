import { useEffect, useRef, useCallback } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    if (cursorRef.current) {
      cursorRef.current.style.left = mouse.current.x + 'px';
      cursorRef.current.style.top = mouse.current.y + 'px';
    }
  }, []);

  const handleHover = useCallback((e) => {
    if (e.type === 'mouseenter') {
      cursorRef.current?.classList.add('hovering');
      ringRef.current?.classList.add('hovering');
    } else {
      cursorRef.current?.classList.remove('hovering');
      ringRef.current?.classList.remove('hovering');
    }
  }, []);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('desktop');

    document.addEventListener('mousemove', handleMouseMove);

    const interactive = document.querySelectorAll('a, button, .service-card, .plan-card, .testimonial-card');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHover);
    });

    let animId;
    function animateRing() {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      animId = requestAnimationFrame(animateRing);
    }
    animateRing();

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, .service-card, .plan-card, .testimonial-card').forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHover);
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleHover);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('desktop');
      document.removeEventListener('mousemove', handleMouseMove);
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHover);
      });
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [handleMouseMove, handleHover]);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
