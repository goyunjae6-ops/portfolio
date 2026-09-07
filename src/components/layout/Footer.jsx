import { footer, navLinks } from "../../data/content";
import Button from "../common/Button";

function MailIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.25 4.5h13.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2.25 5.25 9 10.5l6.75-5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.75 16.5v-3c-.052-.465-.015-.938.112-1.388.128-.45.345-.87.638-1.237-2.25 0-4.5-1.5-4.5-4.125-.061-.936.204-1.863.75-2.625-.225-.863-.225-1.763 0-2.625 0 0 .75 0 2.25 1.125 1.98-.375 4.02-.375 6 0 1.5-1.125 2.25-1.125 2.25-1.125.21.862.21 1.762 0 2.625.548.765.81 1.687.75 2.625 0 2.625-2.25 4.125-4.5 4.125.585.743.854 1.686.75 2.625v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.75 13.5c-3.383 1.5-3.75-1.5-5.25-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="1.5" y="1.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.25 8.25v5.25M5.25 5.7v.05M8.5 13.5v-3c0-1.1.7-2 1.9-2 1.15 0 1.85.9 1.85 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 9v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13" cy="5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function ArrowUpIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 11.5V2.5M2.5 7 7 2.5 11.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 rounded-t-[60px] bg-white px-6 pt-16 sm:px-10 md:px-[30px]">
      <div className="mx-auto max-w-[1860px]">
        {/* CTA */}
        <div className="flex flex-col gap-8 border-b border-divider pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[2px] text-gold">GET IN TOUCH</p>
            <a href={`mailto:${footer.email}`} className="cursor-accent inline-block pt-3 text-ink visited:text-ink transition-colors hover:text-gold">
              <p className="font-normal leading-[0.95] text-[64px] sm:text-[90px] md:text-[102px]">Let&rsquo;s</p>
              <p className="font-normal leading-[0.95] text-[64px] sm:text-[90px] md:text-[102px]">Connect</p>
            </a>
            <p className="mt-4 max-w-[420px] text-sm text-muted sm:text-base">
              새로운 프로젝트나 협업 제안이 있다면 언제든 편하게 연락 주세요.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button as="a" href={`mailto:${footer.email}`} variant="dark" size="lg" className="btn-press">
              <MailIcon className="size-[18px]" />
              이메일 보내기
            </Button>
            <Button as="a" href="resume.html" target="_blank" rel="noopener noreferrer" variant="outline" size="lg" className="btn-press">
              <ArrowUpIcon className="size-[14px] rotate-45" />
              이력서 보기
            </Button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 border-b border-divider py-14 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-base font-bold text-ink">{footer.name}</p>
            <p className="text-sm text-muted">{footer.role}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[2px] text-gold">QUICK LINKS</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-ink visited:text-ink transition-colors hover:text-gold">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[2px] text-gold">CONNECT</p>
            <a href={`mailto:${footer.email}`} className="text-sm text-ink visited:text-ink transition-colors hover:text-gold">
              {footer.email}
            </a>
            <div className="mt-1 flex gap-3">
              {footer.menu.map((item) => {
                const Icon = socialIcons[item.label];
                return (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex size-10 items-center justify-center rounded-full border-2 border-ink text-ink visited:text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-ink">{footer.copyright}</p>
          <a href="#hero" className="flex items-center gap-1.5 text-xs text-ink visited:text-ink transition-colors hover:text-gold">
            맨 위로
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
