import { useEffect, useRef, useState } from "react";

/**
 * A small circle that trails the mouse (eased, so it lags slightly behind)
 * and grows over any link/button. `mix-blend-mode: difference` on the dot
 * (see `.mouse-dot` in index.css) makes it render as the visual opposite of
 * whatever is underneath, so it works over any background color for free.
 *
 * Elements marked `.cursor-accent` (e.g. the Footer's "Let's Connect" link)
 * swap the dot to a solid ink fill instead of the difference-blend white.
 * Elements with a `data-cursor-color="#hex"` attribute swap it to that exact
 * solid color instead, so the dot matches that element's own background
 * rather than always reading as black. The header nav pills intentionally
 * skip this and use the plain difference-blend dot, same as the header's
 * "Let's Connect" button, so hovering them shows the same punched-hole look.
 *
 * The grown/shrunk state is driven by React state + inline style rather than
 * toggling a CSS class, because the class-toggle approach silently failed to
 * take effect here while a `transform` was being written to the same element
 * every animation frame from a separate effect.
 */
export default function CursorDot() {
  const dotRef = useRef(null);
  const [variant, setVariant] = useState("none");
  const [customColor, setCustomColor] = useState(null);

  useEffect(() => {
    const skip = window.matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches;
    if (skip) return;

    const dot = dotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let rafId;
    let needsSnap = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (needsSnap) {
        dotX = mouseX;
        dotY = mouseY;
        needsSnap = false;
      }
    };

    // When the tab loses focus mid-hover (e.g. a target="_blank" link opens a
    // new tab), no mouseout ever fires on this document, so the grown "link"
    // state and the dot's trailing position would otherwise stay stuck until
    // the tab is focused again — then it visibly flings across the screen to
    // the cursor before shrinking back. Reset the visual state on blur and
    // snap the trail (skip the ease) on the next move after regaining focus.
    const resetDot = () => {
      setVariant("none");
      setCustomColor(null);
      needsSnap = true;
    };

    const onVisibilityChange = () => {
      if (document.hidden) resetDot();
    };

    const onMouseOver = (e) => {
      const target = e.target.closest("a, button");
      const colorTarget = target && target.closest("[data-cursor-color]");
      if (!target || target.closest(".no-cursor-dot")) {
        setVariant("none");
        setCustomColor(null);
      } else if (colorTarget) {
        setVariant("custom");
        setCustomColor(colorTarget.dataset.cursorColor);
      } else if (target.closest(".cursor-accent")) {
        setVariant("accent");
        setCustomColor(null);
      } else {
        setVariant("link");
        setCustomColor(null);
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
    document.addEventListener("mouseleave", resetDot);
    window.addEventListener("blur", resetDot);
    window.addEventListener("pageshow", resetDot);
    document.addEventListener("visibilitychange", onVisibilityChange);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", resetDot);
      window.removeEventListener("blur", resetDot);
      window.removeEventListener("pageshow", resetDot);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const grownStyle = { width: 60, height: 60, top: -30, left: -30, opacity: 1 };
  const style =
    variant === "custom"
      ? { ...grownStyle, backgroundColor: customColor, mixBlendMode: "normal" }
      : variant === "accent"
      ? { ...grownStyle, backgroundColor: "var(--color-ink)", mixBlendMode: "normal" }
      : variant === "link"
      ? grownStyle
      : undefined;

  return <span ref={dotRef} className="mouse-dot" aria-hidden="true" style={style} />;
}
