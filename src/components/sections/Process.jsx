import { process } from "../../data/content";
import useScrollProgress from "../../hooks/useScrollProgress";

function SearchIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.3 12.3 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LayoutIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="1.5" y="1.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 7h15M7 7v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.5 4.5 2 9l4.5 4.5M11.5 4.5 16 9l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 9.2 7.8 11.5 12.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons = [SearchIcon, LayoutIcon, CodeIcon, CheckIcon];

export default function Process() {
  const [trackRef, progress] = useScrollProgress();
  const stepCount = process.length;
  // The section is short relative to a full viewport scroll, so the raw
  // progress (which spans the element's entire enter-to-exit travel) creeps
  // along too slowly to read as "filling up" — speed it up so it completes
  // within the first ~80% of that travel instead of all of it.
  const fillProgress = Math.min(1, progress * 1.25);

  return (
    <section ref={trackRef} className="rounded-t-[60px] bg-mist px-4 py-16 sm:px-8 lg:px-[18px]">
      <div className="mx-auto max-w-[1350px]">
        <div className="flex flex-col items-center gap-4 pb-14 text-center">
          <span className="inline-flex h-[70px] items-center justify-center rounded-full border-2 border-ink px-9 text-xl font-bold text-ink sm:h-[100px] sm:text-[35px]">
            HOW I WORK
          </span>
          <p className="max-w-[520px] text-sm text-muted sm:text-base">
            기획부터 배포까지, 4단계로 직접 부딪히며 결과를 만듭니다.
          </p>
        </div>

        {/* Progress track — fills left to right as the section scrolls through
            view, echoing each step's active state below via the same threshold. */}
        <div className="relative mx-auto mb-10 hidden h-[2px] max-w-[900px] rounded-full bg-divider sm:block">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gold"
            style={{ width: `${fillProgress * 100}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-between">
            {process.map((step, i) => {
              const active = fillProgress >= i / (stepCount - 1) - 0.02;
              return (
                <span
                  key={step.number}
                  className={`size-2.5 rounded-full border-2 transition-colors duration-300 ${
                    active ? "border-gold bg-gold" : "border-divider bg-mist"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => {
            const Icon = icons[i];
            const active = fillProgress >= i / (stepCount - 1) - 0.02;
            return (
              <div
                key={step.number}
                className="flex flex-col gap-4 rounded-[24px] border border-divider bg-white px-7 py-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0px_20px_36px_-12px_rgba(0,0,0,0.14)]"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[13px] font-bold tracking-[2px] transition-colors duration-300 ${active ? "text-gold" : "text-muted"}`}>
                    {step.number}
                  </span>
                  <Icon className="text-ink" />
                </div>
                <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                <p className="text-sm font-medium leading-[1.6] text-body-grey">{step.summary}</p>
                <p className="text-xs leading-[1.7] text-muted">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
