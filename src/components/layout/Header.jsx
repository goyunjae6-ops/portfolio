import { useEffect, useState } from "react";
import { navLinks } from "../../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-2 z-50 flex justify-center px-4 sm:top-4">
      <div
        className={`flex w-full max-w-[1350px] items-center justify-between rounded-[36px] bg-white/95 px-5 py-3 transition-shadow duration-300 sm:px-10 ${
          scrolled ? "shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" : "shadow-none"
        }`}
      >
        <a href="#hero" className="text-xl font-bold text-ink visited:text-ink sm:text-[28px]">
          yoonjae
        </a>

        <nav className="hidden items-center gap-3.5 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-10 items-center justify-center rounded-full bg-pill px-5 text-base font-medium text-[#333] visited:text-[#333] lg:px-7 lg:text-xl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="flex h-10 w-[110px] items-center justify-center rounded-full bg-ink text-sm font-semibold text-white visited:text-white sm:w-[140px] sm:text-base"
        >
          Let&apos;s Connect
        </a>
      </div>
    </header>
  );
}
