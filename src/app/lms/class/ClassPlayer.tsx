"use client";

import { useState } from "react";
import { Sparkle } from "@/components/icons";

const IconFile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-muted">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const tabs = ["محتوا", "تکالیف", "گفتگو"] as const;
type Tab = (typeof tabs)[number];

export function ClassPlayer() {
  const [tab, setTab] = useState<Tab>("محتوا");

  return (
    <div className="flex-1 flex flex-col bg-navy-900 overflow-hidden">
      <div className="pt-14 sm:pt-[52px]" />
      {/* Video */}
      <div className="h-[220px] bg-black relative flex items-center justify-center mx-4 rounded-card overflow-hidden">
        <button className="w-[60px] h-[60px] rounded-full bg-white/[0.14] flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7z" fill="#fff" />
          </svg>
        </button>
        <div className="absolute bottom-2.5 left-3.5 right-3.5">
          <div className="h-1 bg-white/25 rounded-pill overflow-hidden mb-2">
            <div className="w-[38%] h-full bg-amber-500" />
          </div>
          <div className="flex justify-between num text-[11px] text-white">
            <span>۱۴:۲۰</span>
            <span>۳۷:۰۰</span>
          </div>
        </div>
        <span className="absolute top-3 left-3 bg-amber-500/90 text-white text-[10.5px] font-bold px-2.5 py-1 rounded-pill">
          زنده 🔴
        </span>
      </div>

      {/* Sheet */}
      <div className="mt-4 flex-1 overflow-auto bg-white rounded-t-[22px] px-5 pt-[18px]">
        <div className="text-base font-extrabold text-navy-800 mb-1.5">Writing Task 2 — استراتژی نگارش</div>
        <div className="text-[12.5px] text-muted mb-[18px]">دکتر شیرین علوی · آیلتس آکادمیک فشرده · جلسه ۱۵</div>

        <div className="flex gap-2 mb-5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-xs font-bold px-4 py-2 rounded-pill transition-colors ${
                tab === t ? "bg-navy-800 text-white" : "bg-page text-body font-semibold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "محتوا" && (
          <>
            <div className="text-[13px] font-bold text-muted mb-2.5">فایل‌های این جلسه</div>
            <div className="flex flex-col gap-2.5 mb-[22px]">
              {["جزوه استراتژی‌های Task 2.pdf", "نمونه انشاهای نمره ۸"].map((f) => (
                <div key={f} className="bg-page rounded-xl px-3.5 py-3 flex items-center gap-2.5">
                  <IconFile />
                  <span className="text-[13px] flex-1">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-start bg-amber-100 rounded-[14px] p-4 mb-5">
              <Sparkle size={18} color="#BD7527" pulse />
              <div className="text-[12.5px] text-amber-700 leading-[1.8]">
                <b>خلاصه هوشمند جلسه:</b> این جلسه بر ساختار سه‌بخشی مقاله و جملات ارتباطی تمرکز دارد. تمرین
                پیشنهادی: نوشتن یک مقاله ۲۵۰ کلمه‌ای درباره مزایای کار از راه دور.
              </div>
            </div>
          </>
        )}

        {tab === "تکالیف" && (
          <div className="flex flex-col gap-3 mb-5">
            <div className="bg-page rounded-xl p-4">
              <div className="text-[13.5px] font-bold mb-1">نگارش مقاله Task 2</div>
              <div className="text-xs text-muted">مهلت ارسال: ۲ روز دیگر</div>
            </div>
            <div className="bg-page rounded-xl p-4 opacity-60">
              <div className="text-[13.5px] font-bold mb-1">تمرین واژگان درس ۱۴</div>
              <div className="text-xs text-success font-bold">ارسال‌شده ✓</div>
            </div>
          </div>
        )}

        {tab === "گفتگو" && (
          <div className="flex flex-col gap-3 mb-5">
            {[
              { n: "نگار احمدی", t: "استاد، آیا مقدمه باید حتماً paraphrase سوال باشد؟" },
              { n: "دکتر شیرین علوی", t: "بله، بهتره سوال رو با کلمات خودت بازنویسی کنی." },
            ].map((m, i) => (
              <div key={i} className="bg-page rounded-xl p-3.5">
                <div className="text-[12.5px] font-bold mb-1">{m.n}</div>
                <div className="text-[12.5px] text-muted leading-[1.7]">{m.t}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
