import Button from "../common/Button";
import heroProfile from "../../assets/images/hero-profile.png";
import githubIcon from "../../assets/icons/github-hero.svg";

export default function Hero() {
  return (
    <div className="hero-outer">
    <div className="hero-canvas">
    <section id="hero" className="hero-section relative z-10 overflow-hidden bg-cream pt-24 sm:pt-28 md:pt-32">
      {/* Mobile/tablet (<1024px): fluid flow layout */}
      <div className="mx-auto grid w-full max-w-[1920px] gap-8 px-6 pb-10 sm:px-10 md:grid-cols-2 md:items-start md:gap-6 md:px-12 md:pb-0 lg:hidden">
        <div className="order-2 flex flex-col items-center pt-2 text-center md:order-1 md:items-start md:pt-[8%]">
          <h1 className="whitespace-nowrap font-semibold text-ink leading-[1.3] text-[clamp(1.75rem,4.5vw,5.625rem)]">
            <span className="hero-anim hero-anim-1 inline-block">
              NO STOP, JUST <span className="font-bold">GO!</span>
            </span>
          </h1>
          <p className="font-medium text-muted leading-[1.3] text-[clamp(1.5rem,4vw,5rem)]">
            <span className="hero-anim hero-anim-2 inline-block">결과로 증명하는</span>
          </p>
          <p className="leading-[1.3] text-[clamp(1.5rem,4vw,5rem)]">
            <span className="hero-anim hero-anim-3 inline-block">
              <span className="font-semibold text-ink underline decoration-[rgba(201,169,110,0.55)] decoration-[7px] underline-offset-8">고윤재</span>{" "}
              <span className="font-medium text-muted">입니다.</span>
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <Button as="a" href="resume.html" target="_blank" rel="noopener noreferrer" variant="dark" size="lg" className="no-cursor-dot btn-press">
              📄 이력서 보기
            </Button>
            <Button as="a" href="https://github.com/goyunjae6-ops" target="_blank" rel="noopener noreferrer" variant="outline" size="lg" icon={githubIcon} iconAlt="GitHub" className="no-cursor-dot btn-press">
              깃허브 보기
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
          <span className="hero-anim hero-anim-1 inline-block">
            <span className="semibold-90">NO STOP, JUST</span> <span className="bold-110">GO!</span>
          </span>
        </p>
        <p className="line2">
          <span className="hero-anim hero-anim-2 inline-block">결과로 증명하는</span>
        </p>
        <p className="line3">
          <span className="hero-anim hero-anim-3 inline-block">
            <span className="name">고윤재</span> <span className="suffix">입니다.</span>
          </span>
        </p>
      </div>

      <a href="resume.html" target="_blank" rel="noopener noreferrer" className="hero-btn btn-resume no-cursor-dot btn-press hidden lg:flex">
        📄 이력서 보기
      </a>
      <a href="https://github.com/goyunjae6-ops" target="_blank" rel="noopener noreferrer" className="hero-btn btn-github no-cursor-dot btn-press hidden lg:flex">
        <img src={githubIcon} alt="" className="size-5" />
        깃허브 보기
      </a>

      {/* 인물 이미지 — 자체적으로 잘림 처리 */}
      <div
        className="hidden lg:block"
        style={{ position: "absolute", left: 883, top: 136, width: 947, height: 814, overflow: "hidden" }}
      >
        <img
          src={heroProfile}
          alt="고윤재"
          style={{ width: "100%", height: 1140, objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
    </section>

    {/* 검정산 — 히어로 섹션 아래에 배치, 인물 이미지보다 앞으로 */}
    <div
      className="hidden lg:block"
      style={{ position: "relative", width: 1089, height: 170, marginLeft: 883, marginTop: -170, zIndex: 20 }}
    >
      <svg width="1089" height="170" viewBox="0 0 1000 150" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mountain-mask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="150">
          <g clipPath="url(#mountain-clip)">
            <path
              d="M246.871 63.9149C313.222 63.9149 330.564 103.46 412.189 103.113C491.814 102.775 557.487 15.2986 611.899 15.2986C722.091 15.2986 772.906 150.294 869.429 150.436C196.391 150.217 0 150.217 0 150.447C155.303 150.447 161.148 63.9149 246.871 63.9149Z"
              fill="#141017"
            />
          </g>
        </mask>
        <g mask="url(#mountain-mask)">
          <rect width="1000" height="150" fill="#2C2C2C" />
        </g>
        <defs>
          <clipPath id="mountain-clip">
            <rect width="869.816" height="134.701" fill="white" transform="translate(0 15.2986)" />
          </clipPath>
        </defs>
      </svg>
    </div>
    </div>
    </div>
  );
}
