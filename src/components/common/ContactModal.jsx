import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = { name: "", email: "", message: "" };

// "idle" | "sending" | "sent" | "error"
export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm(initialForm);
      setStatus("idle");
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <p className="text-base font-bold tracking-[2px] text-gold">GET IN TOUCH</p>
      <h3 className="mt-2 text-2xl font-bold leading-[1.2] text-ink sm:text-[32px]">이메일 보내기</h3>
      <p className="mt-3 text-base leading-[1.6] text-muted">
        아래 내용을 남겨주시면 확인 후 빠르게 답변드리겠습니다.
      </p>

      {status === "sent" ? (
        <div className="mt-8 rounded-2xl border border-divider bg-mist/40 px-6 py-8 text-center">
          <p className="text-lg font-bold text-ink">메일이 전송되었습니다.</p>
          <p className="mt-2 text-base text-muted">빠른 시일 내에 답변드리겠습니다.</p>
          <button
            type="button"
            onClick={handleClose}
            className="btn-press mt-6 h-[52px] rounded-full bg-ink px-6 text-base font-semibold text-white transition-colors hover:bg-black"
          >
            닫기
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-base font-bold uppercase tracking-[1.5px] text-gold">
              이름
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="이름을 입력해주세요"
              className="h-[52px] rounded-xl border border-divider bg-white px-4 text-base text-ink outline-none transition-colors focus:border-gold"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-base font-bold uppercase tracking-[1.5px] text-gold">
              이메일
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="답변받으실 이메일을 입력해주세요"
              className="h-[52px] rounded-xl border border-divider bg-white px-4 text-base text-ink outline-none transition-colors focus:border-gold"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="text-base font-bold uppercase tracking-[1.5px] text-gold">
              내용
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="전달하고 싶은 내용을 자유롭게 작성해주세요"
              className="resize-none rounded-xl border border-divider bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-gold"
            />
          </div>

          {status === "error" && (
            <p className="text-base text-red-500">
              전송에 실패했습니다. 잠시 후 다시 시도해주세요.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-press mt-2 h-[52px] rounded-full bg-ink text-base font-semibold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "전송 중..." : "보내기"}
          </button>
        </form>
      )}
    </Modal>
  );
}
