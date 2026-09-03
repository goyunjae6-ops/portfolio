import { useEffect, useRef, useState } from "react";

/**
 * Tracks how far an element has traveled through the viewport as it scrolls,
 * from 0 (bottom edge entering the viewport) to 1 (top edge leaving it).
 * 0.5 means the element is vertically centered in the viewport.
 */
export default function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      setProgress(Math.min(1, Math.max(0, traveled / total)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, progress];
}
