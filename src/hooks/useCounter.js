import { useEffect, useRef, useState, useCallback } from 'react';

export function useCounter(target, suffix = '', duration = 1800) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const start = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    }

    requestAnimationFrame(animate);
  }, [target, duration]);

  return { count: count + (suffix && count > 0 ? suffix : ''), start };
}

export function useCountersObserver() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, triggered };
}
