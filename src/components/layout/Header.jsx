import { useEffect, useState } from "react";
import { navLinks } from "../../data/content";
import Button from "../common/Button";
import LogoIcon from "../common/LogoIcon";
import LogoText from "../common/LogoText";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-2 z-50 flex justify-center px-4 sm:top-4">
      <div
        className={`relative flex w-full max-w-[1350px] items-center justify-between rounded-[36px] bg-white/95 px-5 py-3 transition-shadow duration-300 sm:px-10 ${
          scrolled ? "shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" : "shadow-none"
        }`}
      >
        <a href="#hero" className="no-cursor-dot flex w-[140px] items-center gap-2 text-xl font-bold text-ink visited:text-ink sm:text-[28px]">
          <LogoIcon />
          <LogoText />
        </a>

        <nav className="hidden items-center gap-3.5 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              variant="pill"
              size="nav"
              className="btn-press relative z-[10001]"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#contact" variant="dark" size="connect">
            Let&apos;s Connect
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="relative flex size-10 shrink-0 items-center justify-center rounded-full text-ink md:hidden"
          >
            <span className="relative block h-[14px] w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`absolute inset-x-4 top-[calc(100%+8px)] flex flex-col gap-2 rounded-[28px] bg-white/95 p-4 shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] transition-all duration-200 md:hidden ${
          menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-medium text-ink visited:text-ink transition-colors hover:bg-pill"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
