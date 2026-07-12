"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthShell } from "@/components/AuthShell";
import { Icon } from "@/components/icons";

export default function LoginPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthShell
      title="خوش برگشتی"
      subtitle="وارد حساب کاربری هما شو"
      footer={
        <>
          حساب نداری؟{" "}
          <Link href="/start" className="text-brand-cyan font-semibold hover:underline">
            ثبت‌نام کن
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="text-center py-4">
          <div className="w-14 h-14 rounded-full grid place-items-center mx-auto mb-4 bg-gradient-to-br from-brand-violet to-brand-cyan text-white">
            <Icon.Check width={26} height={26} />
          </div>
          <p className="text-[15px] text-ink-200 leading-7">
            لینک ورود به ایمیل/شماره‌ات ارسال شد. صندوق پیام‌ها را بررسی کن.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-[13px] text-ink-300 mb-2">ایمیل یا شماره موبایل</label>
            <input required placeholder="you@example.com" className="field latin" dir="ltr" />
          </div>
          <div>
            <label className="block text-[13px] text-ink-300 mb-2">رمز عبور</label>
            <input required type="password" placeholder="••••••••" className="field" />
          </div>
          <div className="text-left">
            <Link href="/help" className="text-[13px] text-brand-cyan hover:underline">
              رمز را فراموش کردی؟
            </Link>
          </div>
          <button type="submit" className="btn-grad w-full !py-3.5">
            ورود
          </button>
        </form>
      )}
    </AuthShell>
  );
}
