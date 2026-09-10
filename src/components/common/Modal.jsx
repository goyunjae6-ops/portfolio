import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink/60 p-4 sm:p-8" onClick={onClose}>
      <div
        className="relative max-h-[85vh] w-full max-w-[720px] overflow-y-auto rounded-[32px] bg-white p-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-6 top-6 flex size-9 items-center justify-center rounded-full border border-divider text-ink transition-colors hover:bg-ink hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
