import Button from "../common/Button";
import heroProfile from "../../assets/images/hero-profile.png";
import githubIcon from "../../assets/icons/github-hero.svg";
import mountainMask from "../../assets/images/hero-mountain-mask.svg";

export default function Hero() {
  return (
    <section id="hero" className="hero-section relative z-10 overflow-hidden bg-cream pt-24 sm:pt-28 md:pt-32">
      {/* Mobile/tablet (<1024px): fluid flow layout */}
      <div className="mx-auto grid w-full max-w-[1920px] gap-8 px-6 pb-10 sm:px-10 md:grid-cols-2 md:items-start md:gap-6 md:px-12 md:pb-0 lg:hidden">
        <div className="order-2 flex flex-col items-center pt-2 text-center md:order-1 md:items-start md:pt-[8%]">
          <h1 className="whitespace-nowrap font-semibold text-ink leading-[1.3] text-[clamp(1.75rem,4.5vw,5.625rem)]">
            NO STOP, JUST <span className="font-bold">GO!</span>
          </h1>
          <p className="font-medium text-muted leading-[1.3] text-[clamp(1.5rem,4vw,5rem)]">결과로 증명하는</p>
          <p className="leading-[1.3] text-[clamp(1.5rem,4vw,5rem)]">
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

        <div className="order-1 w-full max-w-[420px] justify-self-center sm:max-w-[520px] md:order-2">
          <div className="aspect-[947/799] w-full overflow-hidden">
            <img src={heroProfile} alt="고윤재 프로필 사진" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>

      {/* Desktop (>=1024px): fixed 1920x950 canvas, exact Figma pixel positions */}
      <div className="hero-text hidden lg:block">
        <p className="line1">
          <span className="semibold-90">NO STOP, JUST</span> <span className="bold-110">GO!</span>
        </p>
        <p className="line2">결과로 증명하는</p>
        <p className="line3">
          <span className="name">고윤재</span> <span className="suffix">입니다.</span>
        </p>
      </div>

      <a
        href="#"
        className="absolute hidden items-center justify-center gap-2 rounded-full border-2 border-white bg-ink text-[22px] font-semibold text-white lg:flex"
        style={{ left: 461, top: 651, width: 220, height: 70 }}
      >
        📄 이력서 보기
      </a>
      <a
        href="https://github.com"
        className="absolute hidden items-center justify-center gap-3 rounded-full border-2 border-black text-[22px] font-semibold text-ink lg:flex"
        style={{ left: 731, top: 651, width: 220, height: 70 }}
      >
        <img src={githubIcon} alt="" className="size-9" />
        깃허브
      </a>

      <div
        aria-hidden="true"
        className="absolute hidden bg-charcoal lg:block"
        style={{
          left: 888,
          top: 740,
          width: 1000,
          height: 150,
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
        className="absolute hidden object-cover lg:block"
        style={{ left: 883, top: 151, width: 947, height: 1140 }}
      />
    </section>
  );
}
