"use client";

import { useState } from "react";
import { PageShell, PageHead } from "@/components/PageShell";
import { Icon } from "@/components/icons";

const infos = [
  { icon: <Icon.Chat width={18} height={18} />, label: "ایمیل", value: "hi@homa-english.ir" },
  { icon: <Icon.Sparkle width={18} height={18} />, label: "پشتیبانی", value: "هر روز، ۹ تا ۲۱" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          eyebrow="تماس"
          title={
            <>
              بیا <span className="gradient-text">حرف بزنیم</span>
            </>
          }
          subtitle="سوالی داری یا برای تیمت به هما نیاز داری؟ پیام بده، زود جواب می‌دهیم."
        />
      </section>

      <section className="wrap py-12 grid lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
        {/* info */}
        <div className="space-y-4">
          {infos.map((i) => (
            <div key={i.label} className="card-glow p-6 flex items-center gap-4">
              <span className="w-11 h-11 rounded-2xl grid place-items-center bg-gradient-to-br from-brand-violet/25 to-brand-cyan/15 border border-white/10 text-brand-cyan shrink-0">
                {i.icon}
              </span>
              <div>
                <div className="text-[13px] text-ink-400">{i.label}</div>
                <div className="text-[15px] font-semibold text-white mt-0.5">{i.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* form */}
        <div className="card-glow p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full grid place-items-center mx-auto mb-4 bg-gradient-to-br from-brand-violet to-brand-cyan text-white">
                <Icon.Check width={26} height={26} />
              </div>
              <p className="text-[15px] text-ink-200 leading-7">پیامت رسید! به‌زودی جواب می‌دهیم.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-ink-300 mb-2">نام</label>
                  <input required placeholder="نام تو" className="field" />
                </div>
                <div>
                  <label className="block text-[13px] text-ink-300 mb-2">ایمیل</label>
                  <input required placeholder="you@example.com" className="field latin" dir="ltr" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] text-ink-300 mb-2">پیام</label>
                <textarea required rows={4} placeholder="چطور می‌توانیم کمک کنیم؟" className="field resize-none" />
              </div>
              <button type="submit" className="btn-grad w-full !py-3.5">ارسال پیام</button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}
