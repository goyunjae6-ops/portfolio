import { useEffect, useRef, useState } from "react";
import { getBotReply, suggestedQuestions } from "../../data/chatbot";

const GREETING = getBotReply("안녕");

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeChat();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeChat() {
    setOpen(false);
    setMessages([{ role: "bot", text: GREETING }]);
    setInput("");
    setTyping(false);
  }

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getBotReply(trimmed) }]);
      setTyping(false);
    }, 450);
  }

  function onSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="animate-bounce-in fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 sm:bottom-10 sm:right-10">
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="포트폴리오 챗봇"
          className="flex h-[70vh] max-h-[520px] w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-[24px] border border-divider bg-white shadow-[0px_16px_40px_0px_rgba(0,0,0,0.18)]"
        >
          <div className="flex items-center justify-between border-b border-divider px-5 py-4">
            <div>
              <p className="text-sm font-bold text-ink">포트폴리오 챗봇 🤖</p>
              <p className="text-xs text-muted">궁금한 걸 물어보세요</p>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="챗봇 닫기"
              className="no-cursor-dot flex size-8 items-center justify-center rounded-full border border-divider text-ink transition-all hover:scale-105 hover:bg-ink hover:text-white"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] whitespace-pre-line break-keep rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "bot" ? "self-start bg-tag text-ink" : "self-end bg-ink text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="self-start rounded-2xl bg-tag px-4 py-2.5 text-sm text-muted">입력 중...</div>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto border-t border-divider px-4 py-3">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="no-cursor-dot shrink-0 rounded-full bg-pill px-3.5 py-1.5 text-xs font-medium text-[#333] transition-colors hover:bg-[#333] hover:text-pill"
              >
                {q}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-divider px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하세요"
              aria-label="메시지 입력"
              className="h-10 flex-1 rounded-full border border-divider bg-cream px-4 text-sm text-ink outline-none focus:border-ink"
            />
            <button
              type="submit"
              aria-label="전송"
              className="no-cursor-dot flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-all hover:scale-105 hover:bg-black"
            >
              ↑
            </button>
          </form>
        </div>
      )}

      <div className="relative flex items-center justify-center">
        {!open && (
          <svg
            className="pointer-events-none absolute -inset-3 animate-orbit"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <defs>
              <path id="chatbot-orbit-path" d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
            </defs>
            <text className="fill-ink text-[9px] font-semibold tracking-[0.2em]">
              <textPath
                href="#chatbot-orbit-path"
                startOffset="0%"
                textLength="263.9"
                lengthAdjust="spacing"
              >
                CHATBOT • CHATBOT • CHATBOT • CHATBOT •{" "}
              </textPath>
            </text>
          </svg>
        )}

        <button
          type="button"
          onClick={() => (open ? closeChat() : setOpen(true))}
          aria-label={open ? "챗봇 닫기" : "챗봇 열기"}
          aria-expanded={open}
          className="no-cursor-dot flex size-16 items-center justify-center rounded-full bg-ink text-3xl text-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.24)] transition-transform hover:scale-105"
        >
          {open ? "✕" : "🏃"}
        </button>
      </div>
    </div>
  );
}
