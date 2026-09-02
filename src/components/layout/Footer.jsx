import { footer } from "../../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 rounded-t-[60px] bg-white px-6 pt-16 sm:px-10 md:px-[30px]">
      <div className="mx-auto max-w-[1860px]">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold text-ink">{footer.name}</p>
          <p className="text-xs text-ink">{footer.role}</p>
        </div>

        <div className="pt-6">
          <p className="font-normal leading-[0.95] text-ink text-[64px] sm:text-[90px] md:text-[102px]">Let&rsquo;s</p>
          <p className="font-normal leading-[0.95] text-ink text-[64px] sm:text-[90px] md:text-[102px]">Connect</p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-divider py-6 sm:flex-row sm:items-end">
          <p className="text-xs text-ink">{footer.copyright}</p>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a href="#hero" className="text-xs text-ink hover:underline">
              View CV
            </a>
            <a href={`mailto:${footer.email}`} className="text-xs text-ink hover:underline">
              {footer.email}
            </a>
            <nav className="flex flex-wrap gap-x-3 text-xs text-ink">
              {footer.menu.map((item) => (
                <a key={item} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
