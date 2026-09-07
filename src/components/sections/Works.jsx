import { works, techStackGroups } from "../../data/content";
import WorkCard, { STICKY_OFFSET } from "./WorkCard";
import showcaseHalftone from "../../assets/images/showcase-halftone.png";

export default function Works() {
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

      {/* Tech Stack Section */}
      <div className="mt-6 rounded-t-[60px] bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1350px] grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-20">
          {techStackGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-ink sm:text-[32px]">{group.title}</h2>
              <div className="flex flex-col border-t border-divider">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-divider py-4 text-lg font-medium text-ink transition-colors hover:text-gold sm:text-xl"
                  >
                    {item.name}
                    <span className="text-base text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

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
