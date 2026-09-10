import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../common/Button";
import Modal from "../common/Modal";
import TechTag from "../common/TechTag";
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";
import githubIcon from "../../assets/icons/github-hero.svg";
import fileTextIcon from "../../assets/icons/file-text.svg";

gsap.registerPlugin(ScrollTrigger);

// The sticky wrapper's `top` offset in Works.jsx — the number badge fades out
// right as the card's bottom edge reaches that line, which is the exact
// moment the next card takes over the pinned spot and covers this one.
export const STICKY_OFFSET = 140;

export default function WorkCard({ work }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const numberRef = useRef(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.to(numberRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: `bottom ${STICKY_OFFSET + 60}`,
          end: `bottom ${STICKY_OFFSET}`,
          scrub: true,
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const linkButtons = (
    <div className="flex flex-wrap items-center gap-3.5">
      <Button
        as="a"
        href={work.siteUrl || "#"}
        target={work.siteUrl ? "_blank" : undefined}
        rel={work.siteUrl ? "noopener noreferrer" : undefined}
        variant="dark"
        icon={arrowUpRight}
        iconAlt=""
      >
        사이트
      </Button>
      <Button
        as="a"
        href={work.githubUrl || "#"}
        target={work.githubUrl ? "_blank" : undefined}
        rel={work.githubUrl ? "noopener noreferrer" : undefined}
        variant="outline"
        icon={githubIcon}
        iconAlt=""
      >
        깃허브
      </Button>
      <Button
        as="a"
        href={work.docUrl || "#"}
        target={work.docUrl ? "_blank" : undefined}
        rel={work.docUrl ? "noopener noreferrer" : undefined}
        variant="outline"
        icon={fileTextIcon}
        iconAlt=""
      >
        기획서
      </Button>
    </div>
  );

  return (
    <div ref={cardRef} className="relative flex flex-col gap-10 rounded-[60px] bg-gradient-to-r from-card-from via-card-via via-40% to-white p-8 sm:p-12 lg:flex-row lg:gap-12 lg:p-14">
      <p ref={numberRef} className="absolute -top-8 left-10 z-20 text-[64px] font-bold leading-none tracking-[-4px] text-gold/50 sm:-top-12 sm:left-14 sm:text-[96px]">
        {work.number}
      </p>

      <div className="flex flex-1 flex-col">
        <div className="overflow-hidden rounded-3xl border border-mist shadow-[0px_24px_48px_-8px_rgba(0,0,0,0.09)] lg:h-full">
          <img
            ref={imgRef}
            src={work.mockup}
            alt={`${work.title} 목업`}
            loading="lazy"
            decoding="async"
            className={`aspect-[880/758] w-full bg-mist lg:aspect-auto lg:h-full ${work.imageFit === "contain" ? "object-contain" : "object-cover"}`}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-8">
        <div className="flex flex-col gap-5">
          <h3 className="text-[32px] font-bold leading-[1.1] tracking-[-1px] text-ink sm:text-[52px]">{work.title}</h3>

          <div className="flex flex-col gap-3 rounded-2xl border border-divider bg-white/50 px-6 py-5 text-sm">
            <div className="flex items-center gap-4">
              <span className="w-16 shrink-0 text-[11px] font-bold uppercase tracking-[1.5px] text-gold">기간</span>
              <span className="font-medium text-ink">{work.period}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 shrink-0 text-[11px] font-bold uppercase tracking-[1.5px] text-gold">기여도</span>
              <span className="font-medium text-ink">{work.contribution}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-16 shrink-0 pt-0.5 text-[11px] font-bold uppercase tracking-[1.5px] text-gold">스택</span>
              <div className="flex flex-1 flex-wrap gap-1.5">
                {work.stack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-gold">개요</p>
            <p className="line-clamp-3 text-sm leading-[1.7] text-body-grey">{work.overview}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-gold">문제해결</p>
            <p className="line-clamp-3 text-sm leading-[1.7] text-body-grey">{work.problem}</p>
          </div>

          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="self-start text-xs font-bold text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-ink"
          >
            더보기
          </button>
        </div>

        {linkButtons}
      </div>

      <Modal open={detailsOpen} onClose={() => setDetailsOpen(false)}>
        <h3 className="pr-10 text-2xl font-bold leading-[1.2] text-ink sm:text-[32px]">{work.title}</h3>

        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-divider bg-mist/40 px-6 py-5 text-sm">
          <div className="flex items-center gap-4">
            <span className="w-16 shrink-0 text-[11px] font-bold uppercase tracking-[1.5px] text-gold">기간</span>
            <span className="font-medium text-ink">{work.period}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-16 shrink-0 text-[11px] font-bold uppercase tracking-[1.5px] text-gold">기여도</span>
            <span className="font-medium text-ink">{work.contribution}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-16 shrink-0 pt-0.5 text-[11px] font-bold uppercase tracking-[1.5px] text-gold">스택</span>
            <div className="flex flex-1 flex-wrap gap-1.5">
              {work.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-gold">개요</p>
          <p className="text-sm leading-[1.7] text-body-grey">{work.overview}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-gold">문제해결</p>
          <p className="text-sm leading-[1.7] text-body-grey">{work.problem}</p>
        </div>

        <div className="mt-8">{linkButtons}</div>
      </Modal>
    </div>
  );
}
