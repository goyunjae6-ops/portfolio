import { useEffect, useRef, useState } from "react";

/**
 * A small circle that trails the mouse (eased, so it lags slightly behind)
 * and grows over any link/button. `mix-blend-mode: difference` on the dot
 * (see `.mouse-dot` in index.css) makes it render as the visual opposite of
 * whatever is underneath, so it works over any background color for free.
 *
 * Elements marked `.cursor-accent` (e.g. the Footer's "Let's Connect" link)
 * swap the dot to a solid black fill instead of the difference-blend white.
 *
 * The grown/shrunk state is driven by React state + inline style rather than
 * toggling a CSS class, because the class-toggle approach silently failed to
 * take effect here while a `transform` was being written to the same element
 * every animation frame from a separate effect.
 */
export default function CursorDot() {
  const dotRef = useRef(null);
  const [variant, setVariant] = useState("none");

  useEffect(() => {
    const skip = window.matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches;
    if (skip) return;

    const dot = dotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e) => {
      const target = e.target.closest("a, button");
      if (!target || target.closest(".no-cursor-dot")) {
        setVariant("none");
      } else if (target.closest(".cursor-accent")) {
        setVariant("accent");
      } else {
        setVariant("link");
      }
    };

    const tick = () => {
      dotX += (mouseX - dotX) / 6;
      dotY += (mouseY - dotY) / 6;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const grownStyle = { width: 60, height: 60, top: -30, left: -30, opacity: 1 };
  const style =
    variant === "accent"
      ? { ...grownStyle, backgroundColor: "var(--color-ink)", mixBlendMode: "normal" }
      : variant === "link"
      ? grownStyle
      : undefined;

  return <span ref={dotRef} className="mouse-dot" aria-hidden="true" style={style} />;
}
