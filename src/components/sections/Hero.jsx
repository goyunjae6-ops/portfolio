import Button from "../common/Button";
import heroProfile from "../../assets/images/hero-profile.png";
import githubIcon from "../../assets/icons/github-hero.svg";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[600px] items-end overflow-hidden bg-cream pt-32 sm:min-h-[800px] lg:min-h-[950px]">
      <div className="mx-auto grid w-full max-w-[1920px] gap-10 px-6 pb-16 sm:px-10 md:grid-cols-[1fr_auto] md:items-end md:px-12 md:pb-0 xl:px-24 2xl:px-[293px]">
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <h1 className="whitespace-nowrap font-semibold text-ink leading-[1.3] text-[clamp(1.75rem,4.5vw,5.625rem)]">
            NO STOP, JUST <span className="font-bold">GO!</span>
          </h1>
          <p className="font-medium text-muted leading-[1.3] text-[clamp(1.5rem,4vw,5rem)]">
            결과로 증명하는
          </p>
          <p className="leading-[1.3] text-[clamp(1.5rem,4vw,5rem)]">
            <span className="font-semibold text-ink">고윤재</span> <span className="font-medium text-muted">입니다.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button as="a" href="#" variant="dark" size="lg">
              📄 이력서 보기
            </Button>
            <Button as="a" href="https://github.com" variant="outline" size="lg" icon={githubIcon} iconAlt="GitHub">
              깃허브
            </Button>
          </div>
        </div>

        <div className="order-1 w-full max-w-[300px] justify-self-center sm:max-w-[420px] md:order-2 md:w-[32vw] md:max-w-[947px] md:justify-self-end">
          <img src={heroProfile} alt="고윤재 프로필 사진" className="h-auto w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
