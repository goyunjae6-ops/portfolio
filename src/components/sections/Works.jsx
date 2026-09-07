import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works, skillGroups } from "../../data/content";
import WorkCard, { STICKY_OFFSET } from "./WorkCard";
import SkillGroup from "./SkillGroup";
import showcaseHalftone from "../../assets/images/showcase-halftone.png";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const showcaseRef = useRef(null);
  const showcaseImgRef = useRef(null);
  const showcaseTextRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Scroll-linked zoom: the section holds scroll in place (pinned)
      // while the halftone dot pattern scales up and its caption brightens
      // in, mirroring the "Pixels with Purpose" reveal on the original
      // PixelPierNYC theme this site is based on.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(showcaseImgRef.current, { scale: 0.4 }, { scale: 1.8, ease: "none" }, 0);
      tl.fromTo(showcaseTextRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: "none" }, 0);
    }, showcaseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" className="relative scroll-mt-24 rounded-t-[60px] bg-cream px-4 pb-0 pt-10 sm:px-8 lg:px-0">
      <div className="mx-auto flex max-w-[1920px] justify-center pb-8">
        <span className="inline-flex h-[70px] items-center justify-center rounded-full border-2 border-ink px-9 text-xl font-bold text-ink sm:h-[100px] sm:text-[35px]">
          WORKS
        </span>
      </div>

      <div className="mx-auto flex max-w-[1350px] flex-col px-2 pt-6 sm:px-6 lg:px-0">
        {works.map((work, i) => (
          <div key={work.number} className="sticky pb-24 sm:pb-32 lg:pb-40" style={{ top: STICKY_OFFSET, zIndex: i + 1 }}>
            <WorkCard work={work} />
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-6 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto flex max-w-[1350px] flex-col gap-3 pb-12 text-center sm:pb-16">
          <h2 className="text-3xl font-bold text-ink sm:text-[44px]">Skills & Tools</h2>
          <p className="text-sm text-muted sm:text-base">직접 사용하며 익힌 만큼, 숙련도 그대로 보여드립니다</p>
        </div>
        <div className="mx-auto grid max-w-[1350px] grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-16">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>

      {/* Showcase Section */}
      <div ref={showcaseRef} className="flex items-center justify-center overflow-hidden rounded-t-[60px] bg-white px-6 py-20">
        <div className="relative w-full max-w-[900px] overflow-hidden">
          <img
            ref={showcaseImgRef}
            src={showcaseHalftone}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none aspect-square w-full will-change-transform"
          />
          <div ref={showcaseTextRef} className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center text-white">
            <p className="text-[28px] sm:text-[48px] lg:text-[60px]">Pixels</p>
            <p className="text-[28px] sm:text-[48px] lg:text-[60px]">with Purpose</p>
            <p className="mt-2 text-[10px] text-[#5f6567]">Since 2016</p>
          </div>
        </div>
      </div>
    </section>
  );
}
