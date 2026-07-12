"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthShell } from "@/components/AuthShell";
import { Icon } from "@/components/icons";

type Step = "signup" | "level" | "done";

const levels = [
  { key: "beginner", label: "تازه‌کار", desc: "تازه شروع کرده‌ام", course: "grammar-foundations" },
  { key: "some", label: "کمی بلدم", desc: "جمله‌های ساده می‌سازم", course: "everyday-conversation" },
  { key: "mid", label: "متوسط", desc: "می‌توانم مکالمه کنم", course: "business-english" },
  { key: "advanced", label: "پیشرفته", desc: "برای آزمون آماده می‌شوم", course: "ielts-academic" },
];

export default function StartPage() {
  const [step, setStep] = useState<Step>("signup");
  const [picked, setPicked] = useState<(typeof levels)[number] | null>(null);

  const titles: Record<Step, string> = {
    signup: "ساخت حساب رایگان",
    level: "سطحت کجاست؟",
    done: "آماده‌ای!",
  };
  const subs: Record<Step, string> = {
    signup: "چند ثانیه تا شروع یادگیری",
    level: "تا مسیر مناسب را پیشنهاد بدهیم",
    done: "مسیر مخصوص تو آماده شد",
  };

  return (
    <AuthShell
      title={titles[step]}
      subtitle={subs[step]}
      footer={
        step === "signup" ? (
          <>
            حساب داری؟{" "}
            <Link href="/login" className="text-brand-cyan font-semibold hover:underline">
              وارد شو
            </Link>
          </>
        ) : undefined
      }
    >
      {step === "signup" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep("level");
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-[13px] text-ink-300 mb-2">نام</label>
            <input required placeholder="مثلاً سارا" className="field" />
          </div>
          <div>
            <label className="block text-[13px] text-ink-300 mb-2">ایمیل یا شماره موبایل</label>
            <input required placeholder="you@example.com" className="field latin" dir="ltr" />
          </div>
          <div>
            <label className="block text-[13px] text-ink-300 mb-2">رمز عبور</label>
            <input required type="password" placeholder="حداقل ۸ کاراکتر" className="field" />
          </div>
          <button type="submit" className="btn-grad w-full !py-3.5">
            ادامه
            <Icon.Arrow width={17} height={17} />
          </button>
        </form>
      )}

      {step === "level" && (
        <div className="space-y-3">
          {levels.map((l) => (
            <button
              key={l.key}
              onClick={() => {
                setPicked(l);
                setStep("done");
              }}
              className="w-full text-right card-glow p-4 flex items-center justify-between hover:-translate-y-0.5 transition-transform"
            >
              <div>
                <div className="text-[15px] font-bold text-white">{l.label}</div>
                <div className="text-[13px] text-ink-400 mt-0.5">{l.desc}</div>
              </div>
              <Icon.Arrow width={18} height={18} className="text-ink-400" />
            </button>
          ))}
        </div>
      )}

      {step === "done" && (
        <div className="text-center py-2">
          <div className="w-16 h-16 rounded-full grid place-items-center mx-auto mb-5 bg-gradient-to-br from-brand-violet to-brand-cyan text-white">
            <Icon.Check width={30} height={30} />
          </div>
          <p className="text-[15px] text-ink-200 leading-7 mb-6">
            بر اساس سطح تو، دوره‌ی پیشنهادی ما آماده است. بیا شروع کنیم!
          </p>
          <Link href={`/courses/${picked?.course ?? "everyday-conversation"}`} className="btn-grad w-full !py-3.5">
            دیدن دوره‌ی پیشنهادی
            <Icon.Arrow width={17} height={17} />
          </Link>
          <Link href="/courses" className="btn-ghost w-full mt-2">
            مشاهده همه دوره‌ها
          </Link>
        </div>
      )}
    </AuthShell>
  );
}
