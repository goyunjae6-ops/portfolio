import Button from "../common/Button";
import heroProfile from "../../assets/images/hero-profile.png";
import githubIcon from "../../assets/icons/github-hero.svg";
import mountainMask from "../../assets/images/hero-mountain-mask.svg";

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 bg-cream pt-24 sm:pt-28 md:pt-32 lg:min-h-[920px] lg:pt-[190px]">
      <div className="mx-auto grid w-full max-w-[1920px] gap-8 px-6 pb-10 sm:px-10 md:grid-cols-2 md:items-start md:gap-6 md:px-12 md:pb-0 xl:px-24 2xl:px-[293px]">
        <div className="order-2 flex flex-col items-center pt-2 text-center md:order-1 md:items-start md:pt-[8%] md:text-left lg:pt-0">
          <h1 className="whitespace-nowrap font-semibold text-ink leading-[1.3] text-[clamp(1.75rem,4.5vw,5.625rem)] lg:text-[90px]">
            NO STOP, JUST <span className="font-bold">GO!</span>
          </h1>
          <p className="font-medium text-muted leading-[1.3] text-[clamp(1.5rem,4vw,5rem)] lg:text-[80px]">
            결과로 증명하는
          </p>
          <p className="leading-[1.3] text-[clamp(1.5rem,4vw,5rem)] lg:text-[80px]">
            <span className="font-semibold text-ink">고윤재</span> <span className="font-medium text-muted">입니다.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <Button as="a" href="#" variant="dark" size="lg">
              📄 이력서 보기
            </Button>
            <Button as="a" href="https://github.com" variant="outline" size="lg" icon={githubIcon} iconAlt="GitHub">
              깃허브
            </Button>
          </div>
        </div>

        {/* Mobile/tablet: image contained inside the section, no bleed */}
        <div className="order-1 w-full max-w-[420px] justify-self-center sm:max-w-[520px] md:hidden">
          <div className="aspect-[947/799] w-full overflow-hidden">
            <img src={heroProfile} alt="고윤재 프로필 사진" className="h-full w-full object-cover object-top" />
          </div>
        </div>

        {/* Desktop: spacer reserving the grid column, real image is positioned absolutely so it can bleed past the section */}
        <div className="hidden md:order-2 md:block" aria-hidden="true" />
      </div>

      {/* Desktop: profile photo + "검정산" mountain shape bleeding down into the About section */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <div
          className="absolute bg-charcoal"
          style={{
            left: "46.25%",
            top: "77.9%",
            width: "52.08%",
            aspectRatio: "1000 / 150",
            WebkitMaskImage: `url(${mountainMask})`,
            maskImage: `url(${mountainMask})`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        <img
          src={heroProfile}
          alt="고윤재 프로필 사진"
          className="absolute z-10 h-auto"
          style={{ left: "46%", top: "15.9%", width: "49.3%" }}
        />
      </div>
    </section>
  );
}
