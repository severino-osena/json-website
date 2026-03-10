"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        Написать сообщение
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-xs text-slate-400"
          >
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ваше имя"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/30"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs text-slate-400"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/30"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs text-slate-400"
        >
          Краткое сообщение
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder="Напишите короткое сообщение..."
          className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/30"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-300 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:translate-y-0.5 hover:shadow-xl disabled:opacity-70"
      >
        {status === "sending" ? "Отправка..." : "Отправить"}
      </button>
      {status === "success" && (
        <p className="text-center text-sm text-emerald-400">
          Сообщение отправлено. Спасибо!
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-rose-400">
          Не удалось отправить. Попробуйте ещё раз или напишите напрямую на json.gy@mail.ru.
        </p>
      )}
    </form>
  );
}
