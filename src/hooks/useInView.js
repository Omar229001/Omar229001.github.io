/**
 * useInView — Intersection Observer hook for scroll animations
 * Returns [ref, isVisible]
 */
import { useEffect, useRef, useState } from 'react';

const useInView = (threshold = 0.12, rootMargin = '0px') => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};

export default useInView;
