"use client";

import { useState } from "react";
import { IconCheck } from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [track, setTrack] = useState<"language" | "pilot">("language");

  if (submitted) {
    return (
      <div className="card p-9 flex flex-col items-center text-center gap-3">
        <div className="w-14 h-14 rounded-full bg-success-bg flex items-center justify-center text-success">
          <IconCheck width={28} height={28} />
        </div>
        <div className="text-lg font-bold">درخواست شما ثبت شد</div>
        <div className="text-sm text-muted leading-[1.9] max-w-[320px]">
          کارشناسان ما در کمتر از یک روز کاری با شما تماس می‌گیرند. سپاس از اعتماد شما به هما.
        </div>
        <button onClick={() => setSubmitted(false)} className="btn-ghost mt-2">
          ارسال درخواست جدید
        </button>
      </div>
    );
  }

  return (
    <form
      className="card !rounded-[20px] p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="text-lg font-bold mb-6">درخواست مشاوره رایگان</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mb-[18px]">
        <div>
          <div className="text-[13px] text-muted mb-2 font-semibold">نام و نام خانوادگی</div>
          <input required placeholder="مثلاً سارا محمدی" className="input" />
        </div>
        <div>
          <div className="text-[13px] text-muted mb-2 font-semibold">شماره موبایل</div>
          <input required placeholder="09xxxxxxxxx" className="input-ltr" />
        </div>
      </div>
      <div className="mb-[18px]">
        <div className="text-[13px] text-muted mb-2 font-semibold">علاقه‌مند به کدام مسیر هستید؟</div>
        <div className="flex gap-3">
          {[
            { v: "language", label: "زبان انگلیسی" },
            { v: "pilot", label: "خلبانی" },
          ].map((opt) => (
            <label
              key={opt.v}
              className={`flex-1 flex items-center gap-2 border-[1.5px] rounded-btn px-3.5 py-3 text-sm cursor-pointer transition-colors ${
                track === opt.v ? "border-amber-500 bg-amber-100/40" : "border-line-200"
              }`}
            >
              <input
                type="radio"
                name="track"
                checked={track === opt.v}
                onChange={() => setTrack(opt.v as "language" | "pilot")}
                className="accent-amber-500"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="text-[13px] text-muted mb-2 font-semibold">پیام (اختیاری)</div>
        <textarea
          rows={4}
          placeholder="سطح فعلی، هدف یا سوال خود را بنویسید..."
          className="input resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        ارسال درخواست
      </button>
    </form>
  );
}
