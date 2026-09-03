import { about } from "../../data/content";
import aboutPhoto from "../../assets/images/about-photo.png";
import useScrollProgress from "../../hooks/useScrollProgress";

const roleWords = [
  { text: "Web", side: "left" },
  { text: "Designer", side: "right" },
  { text: "+", side: "left" },
  { text: "Creative", side: "right" },
  { text: "Frontend", side: "left" },
  { text: "Developer", side: "right" },
];

export default function About() {
  const [wordsRef, progress] = useScrollProgress();

  return (
    <section id="about" className="relative scroll-mt-24 bg-charcoal px-6 pb-16 pt-24 sm:px-10 lg:-mt-[2px] lg:min-h-[1080px] lg:px-[80px] lg:pb-24 lg:pt-[140px]">
      <div className="relative -top-[55px] mx-auto flex max-w-[1350px] justify-center">
        <span className="inline-flex h-[70px] items-center justify-center rounded-full border-2 border-white px-9 text-xl font-bold text-white sm:h-[100px] sm:text-[35px]">
          ABOUT ME
        </span>
      </div>

      <div ref={wordsRef} className="relative -top-[30px] mx-auto mt-8 w-full max-w-[1350px] overflow-hidden">
        <div className="flex flex-col items-center gap-3">
          {roleWords.map(({ text, side }, i) => {
            const start = 0.15 + i * 0.08;
            const duration = 0.28;
            const enter = Math.min(1, Math.max(0, (progress - start) / duration));

            const fadeOutStart = 0.85;
            const fadeOutEnd = 1;
            const fadeOut = 1 - Math.min(1, Math.max(0, (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart)));

            const distance = side === "left" ? -240 : 240;
            return (
              <span
                key={text}
                className="text-[28px] font-bold text-gold sm:text-[40px] lg:text-[56px]"
                style={{
                  opacity: enter * fadeOut,
                  filter: `blur(${(1 - fadeOut) * 10}px)`,
                  transform: `translateX(${(1 - enter) * distance}px)`,
                }}
              >
                {text}
              </span>
            );
          })}
        </div>
      </div>

      <div className="relative top-[160px] mx-auto mb-[200px] mt-10 grid max-w-[1350px] grid-cols-1 gap-10 lg:grid-cols-[460px_1fr] lg:gap-10">
        <div className="mx-auto aspect-[460/575] w-full max-w-[460px] overflow-hidden rounded-[32px] bg-ink">
          <img src={aboutPhoto} alt="고윤재 소개 사진" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-[32px] font-bold leading-[1.2] text-white sm:text-[50px]">{about.name}</h2>
          <p className="text-[20px] font-semibold leading-[1.6] text-muted sm:text-[30px]">
            {about.tagline.split(/(GO)/).map((part, i) =>
              part === "GO" ? (
                <span key={i} className="text-[25px] sm:text-[35px]">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </p>

          <div className="flex flex-1 flex-col justify-between gap-5 rounded-2xl border border-white/20 px-7 py-6">
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] font-bold tracking-[2px] text-gold">BIRTH</p>
              <div className="text-sm leading-6 text-ivory">
                {about.birth.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] font-bold tracking-[2px] text-gold">CERTIFICATE</p>
              <p className="text-sm leading-6 text-ivory">{about.certificate}</p>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex flex-col gap-1.5">
              <p className="text-[11px] font-bold tracking-[2px] text-gold">EDUCATION</p>
              <p className="text-sm leading-6 text-ivory">{about.education}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
