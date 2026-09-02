import Button from "../common/Button";
import TechTag from "../common/TechTag";
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";
import githubIcon from "../../assets/icons/github.svg";
import fileTextIcon from "../../assets/icons/file-text.svg";

export default function WorkCard({ work }) {
  return (
    <div className="flex flex-col gap-10 rounded-[60px] bg-gradient-to-r from-card-from via-card-via via-40% to-white p-8 sm:p-12 lg:flex-row lg:gap-12 lg:p-14">
      <div className="flex flex-1 flex-col gap-4">
        <p className="text-[64px] font-bold leading-none tracking-[-4px] text-ink/20 sm:text-[96px]">{work.number}</p>
        <div className="overflow-hidden rounded-3xl border border-mist shadow-[0px_24px_48px_-8px_rgba(0,0,0,0.09)]">
          <img
            src={work.mockup}
            alt={`${work.title} 목업`}
            loading="lazy"
            decoding="async"
            className="aspect-[880/758] w-full bg-mist object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-8">
        <div className="flex flex-col gap-5">
          <h3 className="text-[32px] font-bold leading-[1.1] tracking-[-1px] text-ink sm:text-[52px]">{work.title}</h3>

          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex items-center gap-4">
              <span className="w-16 shrink-0 font-semibold text-label">제작기간</span>
              <span className="font-medium text-ink">{work.period}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 shrink-0 font-semibold text-label">기여도</span>
              <span className="font-medium text-ink">{work.contribution}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-16 shrink-0 font-semibold text-label">기술스택</span>
              <div className="flex flex-1 flex-wrap gap-1.5">
                {work.stack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-divider" />

          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.5px] text-ink">개요</p>
            <p className="text-sm leading-[1.7] text-body-grey">{work.overview}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-bold uppercase tracking-[0.5px] text-ink">문제해결</p>
            <p className="text-sm leading-[1.7] text-body-grey">{work.problem}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3.5">
          <Button as="a" href="#" variant="dark" icon={arrowUpRight} iconAlt="">
            사이트
          </Button>
          <Button as="a" href="#" variant="dark" icon={githubIcon} iconAlt="">
            깃허브
          </Button>
          <Button as="a" href="#" variant="dark" icon={fileTextIcon} iconAlt="">
            기획서
          </Button>
        </div>
      </div>
    </div>
  );
}
