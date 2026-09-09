import { useEffect, useState } from "react";
import { navLinks } from "../../data/content";
import Button from "../common/Button";
import LogoIcon from "../common/LogoIcon";
import LogoText from "../common/LogoText";

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
        <a href="#hero" className="no-cursor-dot flex items-center gap-1.5 text-xl font-bold text-ink visited:text-ink sm:text-[28px]">
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

        <Button href="#contact" variant="dark" size="connect">
          Let&apos;s Connect
        </Button>
      </div>
    </header>
  );
}
