import { about } from "../../data/content";
import aboutPhoto from "../../assets/images/about-photo.png";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 rounded-t-[60px] bg-charcoal px-6 pb-16 pt-24 sm:px-10 lg:px-[80px] lg:pt-[140px]">
      <div className="mx-auto flex max-w-[1350px] justify-center lg:justify-end">
        <span className="inline-flex h-[70px] items-center justify-center rounded-full border-2 border-white px-9 text-xl font-bold text-white sm:h-[100px] sm:text-[35px]">
          ABOUT ME
        </span>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1350px] grid-cols-1 gap-10 lg:grid-cols-[460px_1fr] lg:gap-10">
        <div className="mx-auto aspect-[460/575] w-full max-w-[460px] overflow-hidden rounded-[32px] bg-ink">
          <img src={aboutPhoto} alt="고윤재 소개 사진" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col gap-6 lg:px-10">
          <h2 className="text-[32px] font-bold leading-[1.2] text-white sm:text-[50px]">{about.name}</h2>
          <p className="text-[20px] font-semibold leading-[1.6] text-muted sm:text-[30px]">{about.tagline}</p>

          <div className="flex flex-col gap-5 rounded-2xl border border-white/20 px-7 py-6">
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
