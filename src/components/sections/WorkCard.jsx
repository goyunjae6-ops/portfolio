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

export default function WorkCard({ work, getAnchorTop }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const numberRef = useRef(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const [videosOpen, setVideosOpen] = useState(false);
  const hasVideoChoices = Boolean(work.videoOptions?.length);
  const opensDocuments = !work.directDocument && (!work.videoProject || Boolean(work.documentOptions?.length));
  const primaryUrl = work.videoProject ? work.videoUrl : work.siteUrl;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // getBoundingClientRect() (which ScrollTrigger's string-based "top bottom"
    // / "bottom top" positions rely on) reports a `position: sticky` element's
    // current *stuck* offset rather than its normal-flow position — and so
    // does offsetTop, once it's actually stuck (verified empirically; sticky
    // shifts the whole box, offset chain included). So if ScrollTrigger ever
    // recalculates while this card happens to be stuck — on window resize, or
    // on mount when the page loads already scrolled into Works — the measured
    // trigger points come out wrong, and the number badge can fail to fade
    // out before the next card covers it. `getAnchorTop`, passed down from
    // Works.jsx, reads a plain (non-sticky, non-descendant-of-sticky) sibling
    // marker instead, whose document position is always stable regardless of
    // scroll position, so we compute absolute scroll thresholds from that.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: work.imageScale ?? 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: () => getAnchorTop() - window.innerHeight,
            end: () => getAnchorTop() + cardRef.current.offsetHeight,
            scrub: true,
          },
        }
      );

      gsap.to(numberRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: () => getAnchorTop() + cardRef.current.offsetHeight - (STICKY_OFFSET + 60),
          end: () => getAnchorTop() + cardRef.current.offsetHeight - STICKY_OFFSET,
          scrub: true,
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [getAnchorTop, work.imageScale]);

  const linkButtons = (
    <div className="flex flex-wrap items-center gap-3.5">
      <Button
        as={hasVideoChoices || work.placeholder || !primaryUrl ? "button" : "a"}
        href={hasVideoChoices || work.placeholder ? undefined : primaryUrl || undefined}
        type={hasVideoChoices || (work.videoProject && !primaryUrl) ? "button" : undefined}
        onClick={hasVideoChoices ? () => setVideosOpen(true) : undefined}
        disabled={work.placeholder || (!hasVideoChoices && !primaryUrl)}
        title={work.videoProject && !primaryUrl ? "영상 링크 준비 중" : undefined}
        target={!hasVideoChoices && primaryUrl ? "_blank" : undefined}
        rel={!hasVideoChoices && primaryUrl ? "noopener noreferrer" : undefined}
        variant="dark"
        className="btn-press disabled:cursor-not-allowed"
        icon={arrowUpRight}
        iconAlt=""
      >
        {work.primaryLabel || (work.videoProject ? "영상 보기" : "사이트")}
      </Button>
      {!work.videoProject && <Button
        as={work.placeholder ? "button" : "a"}
        href={work.placeholder ? undefined : work.githubUrl || "#"}
        disabled={work.placeholder}
        target={work.githubUrl ? "_blank" : undefined}
        rel={work.githubUrl ? "noopener noreferrer" : undefined}
        variant="outline"
        className="btn-press"
        icon={githubIcon}
        iconAlt=""
      >
        깃허브
      </Button>}
      <Button
        as={opensDocuments ? "button" : "a"}
        href={opensDocuments ? undefined : work.docUrl}
        target={opensDocuments ? undefined : "_blank"}
        rel={opensDocuments ? undefined : "noopener noreferrer"}
        type={opensDocuments ? "button" : undefined}
        onClick={opensDocuments ? () => setDocumentsOpen(true) : undefined}
        disabled={work.placeholder || work.documentsPending}
        variant="outline"
        className="btn-press"
        icon={fileTextIcon}
        iconAlt=""
      >
        {work.docLabel || "기획서"}
      </Button>
      {work.figjamUrl && <Button
        as="a"
        href={work.figjamUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        className="btn-press"
        icon={arrowUpRight}
        iconAlt=""
      >
        {work.figjamLabel || "피그잼"}
      </Button>}
    </div>
  );

  return (
    <div ref={cardRef} className={`relative flex flex-col gap-10 rounded-[60px] bg-gradient-to-r from-card-from via-card-via via-40% to-white p-8 sm:p-12 lg:flex-row lg:gap-12 lg:p-14 ${work.matchCardHeight ? "lg:h-[var(--first-work-card-height)]" : work.mockupCanvas || work.placeholder || work.imagePending ? "lg:min-h-[var(--first-work-card-height)]" : ""}`}>
      <p ref={numberRef} className="absolute -top-8 left-10 z-20 text-[64px] font-bold leading-none tracking-[-4px] text-gold/50 will-change-[opacity] sm:-top-12 sm:left-14 sm:text-[96px]">
        {work.number}
      </p>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className={`overflow-hidden rounded-3xl shadow-[0px_24px_48px_-8px_rgba(0,0,0,0.09)] lg:h-full ${work.mockupCanvas ? "" : "border border-mist"}`}>
          {work.placeholder || work.imagePending ? (
            <div ref={imgRef} className="flex aspect-[880/758] w-full flex-col items-center justify-center gap-3 bg-mist text-label lg:aspect-auto lg:h-full">
              <span className="text-2xl font-bold tracking-[2px]">{work.imagePending ? "AI CHATBOT" : "COMING SOON"}</span>
              <span className="text-base">{work.imagePending ? "챗봇 화면 목업 준비 중" : "프로젝트 이미지 추가 예정"}</span>
            </div>
          ) : work.screen || work.mockupCanvas ? (
            <svg
              ref={imgRef}
              viewBox="0 0 2206 1900"
              preserveAspectRatio={work.mockupCanvas && work.imageFit !== "contain" ? "xMidYMid slice" : "xMidYMid meet"}
              role="img"
              aria-label={work.imageAlt || `${work.title} 목업`}
              className="aspect-[880/758] w-full bg-mist lg:aspect-auto lg:h-full"
            >
              <image href={work.mockup} width="2206" height="1900" preserveAspectRatio={work.mockupCanvas && work.imageFit !== "contain" ? "xMidYMid slice" : "xMidYMid meet"} />
              {work.screen && <image href={work.screen} x="178" y="181" width="1850" height="1062" preserveAspectRatio="none" />}
            </svg>
          ) : (
          <img
            ref={imgRef}
            src={work.mockup}
            alt={work.imageAlt || `${work.title} 목업`}
            loading="lazy"
            decoding="async"
            className={`aspect-[880/758] w-full bg-mist lg:aspect-auto lg:h-full ${work.imageFit === "contain" ? "object-contain" : "object-cover"}`}
          />
          )}
        </div>
      </div>

      <div className={`flex min-w-0 flex-1 flex-col justify-between ${work.matchCardHeight ? "gap-6 lg:gap-4" : "gap-8"}`}>
        <div className={`flex flex-col ${work.matchCardHeight ? "gap-5 lg:gap-4" : "gap-5"}`}>
          <h3 className={`text-[32px] font-bold leading-[1.1] tracking-[-1px] text-ink sm:text-[52px] ${work.matchCardHeight ? "lg:text-[44px]" : ""}`}>{work.title}</h3>

          <div className="flex flex-col gap-3 rounded-2xl border border-divider bg-white/50 px-6 py-5 text-base">
            <div className="flex items-center gap-4">
              <span className="w-20 shrink-0 text-base font-bold uppercase tracking-[1.5px] text-gold">기간</span>
              <span className="font-medium text-ink">{work.period}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-20 shrink-0 text-base font-bold uppercase tracking-[1.5px] text-gold">{work.contributionLabel || "기여도"}</span>
              <span className="font-medium text-ink">{work.contribution}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-20 shrink-0 pt-0.5 text-base font-bold uppercase tracking-[1.5px] text-gold">스택</span>
              <div className="flex flex-1 flex-wrap gap-1.5">
                {work.stack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base font-bold uppercase tracking-[2px] text-gold">개요</p>
            <p className={`${work.compactDescription ? "text-ink" : "line-clamp-3 text-body-grey"} text-base leading-[1.7]`}>{work.overview}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base font-bold uppercase tracking-[2px] text-gold">{work.workLabel || (work.compactDescription ? "작업 내용" : "문제해결")}</p>
            <p className={`${work.compactDescription ? "text-ink" : "line-clamp-3 text-body-grey"} text-base leading-[1.7]`}>{work.problem}</p>
          </div>

          {!work.compactDescription && <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="self-start text-base font-bold text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-ink"
          >
            더보기
          </button>}
        </div>

        {linkButtons}
      </div>

      {hasVideoChoices && <Modal open={videosOpen} onClose={() => setVideosOpen(false)} className="max-w-[480px]" ariaLabel="프로젝트 영상">
        <p className="text-base font-bold tracking-[2px] text-gold">PROJECT VIDEOS</p>
        <h3 className="mt-2 pr-8 text-2xl font-bold text-ink">프로젝트 영상</h3>
        <div className="mt-7 flex flex-col gap-3">
          {work.videoOptions.map(({ label, description, url }) => (
            <Button
              key={label}
              as={url ? "a" : "button"}
              href={url || undefined}
              type={url ? undefined : "button"}
              target={url ? "_blank" : undefined}
              rel={url ? "noopener noreferrer" : undefined}
              disabled={!url}
              variant="outline"
              className="btn-press h-auto min-h-[64px] w-full justify-between gap-4 py-3 text-left disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{label}</span>
              <span className="text-sm font-normal">{url ? description : "영상 준비 중"}</span>
            </Button>
          ))}
        </div>
      </Modal>}

      <Modal open={documentsOpen} onClose={() => setDocumentsOpen(false)} className="max-w-[480px]" ariaLabel="프로젝트 자료">
        <p className="text-base font-bold tracking-[2px] text-gold">PROJECT DOCUMENTS</p>
        <h3 className="mt-2 pr-8 text-2xl font-bold text-ink">프로젝트 자료</h3>
        <div className="mt-7 flex flex-col gap-3">
          {(work.documentOptions || [
            { label: "Figma", description: "디자인 시안", url: work.figmaUrl },
            { label: "PPT", description: "프로젝트 발표 자료", url: work.docUrl },
          ]).map(({ label, description, url }) => (
            <Button
              key={label}
              as={url ? "a" : "button"}
              href={url || undefined}
              type={url ? undefined : "button"}
              target={url ? "_blank" : undefined}
              rel={url ? "noopener noreferrer" : undefined}
              disabled={!url}
              variant="outline"
              className="btn-press h-auto min-h-[64px] w-full justify-between gap-4 py-3 text-left disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{label}</span>
              <span className="text-sm font-normal">{!url && work.documentOptions ? "자료 준비 중" : description}</span>
            </Button>
          ))}
        </div>
      </Modal>

      {!work.compactDescription && <Modal open={detailsOpen} onClose={() => setDetailsOpen(false)}>
        <h3 className="pr-10 text-2xl font-bold leading-[1.2] text-ink sm:text-[32px]">{work.title}</h3>

        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-divider bg-mist/40 px-6 py-5 text-base">
          <div className="flex items-center gap-4">
            <span className="w-20 shrink-0 text-base font-bold uppercase tracking-[1.5px] text-gold">기간</span>
            <span className="font-medium text-ink">{work.period}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 shrink-0 text-base font-bold uppercase tracking-[1.5px] text-gold">{work.contributionLabel || "기여도"}</span>
            <span className="font-medium text-ink">{work.contribution}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-20 shrink-0 pt-0.5 text-base font-bold uppercase tracking-[1.5px] text-gold">스택</span>
            <div className="flex flex-1 flex-wrap gap-1.5">
              {work.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <p className="text-base font-bold uppercase tracking-[2px] text-gold">개요</p>
          <p className="text-base leading-[1.7] text-body-grey">{work.overview}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <p className="text-base font-bold uppercase tracking-[2px] text-gold">문제해결</p>
          <p className="text-base leading-[1.7] text-body-grey">{work.problem}</p>
        </div>

        <div className="mt-8">{linkButtons}</div>
      </Modal>}
    </div>
  );
}
