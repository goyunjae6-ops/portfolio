import { works } from "../../data/content";
import WorkCard from "./WorkCard";
import showcaseHalftone from "../../assets/images/showcase-halftone.png";

export default function Works() {
  return (
    <section id="works" className="relative scroll-mt-24 rounded-t-[60px] bg-cream px-4 pb-0 pt-10 sm:px-8 lg:px-0">
      <div className="mx-auto flex max-w-[1920px] justify-center pb-8 lg:justify-start lg:pl-[220px]">
        <span className="inline-flex items-center justify-center text-[40px] font-bold tracking-[0.2em] text-ink sm:text-[56px]">
          WORKS
        </span>
      </div>

      <div className="mx-auto flex max-w-[1920px] flex-col gap-6 px-2 sm:px-6 lg:px-10">
        {works.map((work) => (
          <WorkCard key={work.number} work={work} />
        ))}
      </div>

      {/* Awards Section — decorative transition band (empty in source design) */}
      <div className="mt-6 h-24 rounded-t-[60px] bg-mist sm:h-32" />

      {/* Showcase Section */}
      <div className="flex justify-center rounded-t-[60px] bg-white px-6 py-20">
        <div className="relative w-full max-w-[900px]">
          <img
            src={showcaseHalftone}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center text-white">
            <p className="text-[28px] sm:text-[48px] lg:text-[60px]">Pixels</p>
            <p className="text-[28px] sm:text-[48px] lg:text-[60px]">with Purpose</p>
            <p className="mt-2 text-[10px] text-[#5f6567]">Since 2016</p>
          </div>
        </div>
      </div>
    </section>
  );
}
