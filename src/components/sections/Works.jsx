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
  const skillsBadgeRef = useRef(null);
  const skillsGridRef = useRef(null);

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

      // Skills & Tools section rises into view as it's scrolled to, matching
      // the same reveal-on-scroll language used across the other sections.
      gsap.from(skillsBadgeRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsBadgeRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(skillsGridRef.current.children, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsGridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, showcaseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" className="relative scroll-mt-24 rounded-t-[60px] bg-cream px-4 pb-0 sm:px-8 lg:px-0">
      <div className="mx-auto flex max-w-[1920px] justify-center pb-[55px] pt-[24px] sm:pt-[40px] lg:pt-[56px]">
        <span className="inline-flex h-[70px] items-center justify-center rounded-full border-2 border-ink px-9 text-xl font-bold text-ink sm:h-[100px] sm:text-[35px]">
          WORKS
        </span>
      </div>

      <div className="mx-auto flex max-w-[1350px] flex-col px-2 sm:px-6 lg:px-0">
        {works.map((work, i) => (
          <div key={work.number} className="sticky pb-24 sm:pb-32 lg:pb-40" style={{ top: STICKY_OFFSET, zIndex: i + 1 }}>
            <WorkCard work={work} />
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div id="skills" className="scroll-mt-24 bg-white px-6 pb-16 pt-[24px] sm:px-10 sm:pb-20 sm:pt-[40px] lg:px-16 lg:pt-[56px]">
        <div ref={skillsBadgeRef} className="mx-auto flex max-w-[1350px] flex-col items-center gap-3 pb-[55px] text-center">
          <span className="inline-flex h-[70px] items-center justify-center rounded-full border-2 border-ink px-9 text-xl font-bold text-ink sm:h-[100px] sm:text-[35px]">
            SKILLS & TOOLS
          </span>
        </div>
        <div ref={skillsGridRef} className="mx-auto grid max-w-[1350px] grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-16">
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
