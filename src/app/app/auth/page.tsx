"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/app/PhoneFrame";
import { HomaLogo } from "@/components/icons";
import { toFa } from "@/lib/data";

type Mode = "login" | "signup" | "otp";

function AuthFlow() {
  const params = useSearchParams();
  const router = useRouter();
  const [mode, setMode] = useState<Mode>(params.get("mode") === "signup" ? "signup" : "login");

  return (
    <PhoneFrame>
      {mode === "login" && <Login onOtp={() => setMode("otp")} onSignup={() => setMode("signup")} />}
      {mode === "signup" && <Signup onContinue={() => setMode("otp")} onLogin={() => setMode("login")} />}
      {mode === "otp" && <Otp onVerified={() => router.push("/lms/dashboard")} />}
    </PhoneFrame>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  ltr = false,
}: {
  label: string;
  type?: string;
  placeholder: string;
  ltr?: boolean;
}) {
  return (
    <div>
      <div className="text-[12.5px] text-muted mb-[7px] font-semibold">{label}</div>
      <input type={type} placeholder={placeholder} className={ltr ? "input-ltr" : "input"} />
    </div>
  );
}

function Login({ onOtp, onSignup }: { onOtp: () => void; onSignup: () => void }) {
  return (
    <div className="h-full box-border px-6 pt-16 sm:pt-[110px] pb-6 flex flex-col flex-1">
      <div className="flex flex-col items-center mb-9">
        <HomaLogo size={44} float />
        <div className="text-xl font-extrabold text-navy-800 mt-3.5">خوش برگشتی!</div>
        <div className="text-[13.5px] text-muted mt-1.5">وارد حساب کاربری هما شو</div>
      </div>
      <div className="flex flex-col gap-3.5 flex-1">
        <Field label="شماره موبایل" placeholder="09xxxxxxxxx" ltr />
        <Field label="رمز عبور" type="password" placeholder="••••••••" />
        <div className="text-left text-[13px] text-amber-600 font-semibold cursor-pointer">
          رمز را فراموش کرده‌ای؟
        </div>
        <button onClick={onOtp} className="btn-primary !py-[15px] !rounded-xl mt-2">
          ورود
        </button>
        <div className="flex items-center gap-2.5 my-1.5 text-[#B9C4CE] text-xs">
          <div className="flex-1 h-px bg-line" /> یا <div className="flex-1 h-px bg-line" />
        </div>
        <button onClick={onOtp} className="bg-page text-navy-800 border-[1.5px] border-line rounded-xl py-3.5 text-[14.5px] font-bold">
          ورود سریع با کد پیامکی
        </button>
      </div>
      <div className="text-center text-[13.5px] text-muted mt-4">
        حساب کاربری نداری؟{" "}
        <span onClick={onSignup} className="text-navy-800 font-bold cursor-pointer">
          ثبت‌نام کن
        </span>
      </div>
    </div>
  );
}

function Signup({ onContinue, onLogin }: { onContinue: () => void; onLogin: () => void }) {
  return (
    <div className="h-full box-border px-6 pt-14 sm:pt-[100px] pb-6 flex flex-col flex-1">
      <div className="mb-6">
        <div className="text-xl font-extrabold text-navy-800">ساخت حساب کاربری</div>
        <div className="text-[13.5px] text-muted mt-1.5">چند قدم تا شروع یادگیری</div>
      </div>
      <div className="flex flex-col gap-3.5 flex-1">
        <Field label="نام و نام خانوادگی" placeholder="مثلاً علی رضایی" />
        <Field label="شماره موبایل" placeholder="09xxxxxxxxx" ltr />
        <Field label="رمز عبور" type="password" placeholder="حداقل ۸ کاراکتر" />
        <label className="flex items-center gap-2 text-[12.5px] text-muted mt-1">
          <input type="checkbox" defaultChecked className="accent-amber-500" />
          با <span className="text-navy-800 font-bold">قوانین و حریم خصوصی</span> هما موافقم
        </label>
        <button onClick={onContinue} className="btn-primary !py-[15px] !rounded-xl mt-2">
          ادامه
        </button>
      </div>
      <div className="text-center text-[13.5px] text-muted">
        قبلاً ثبت‌نام کرده‌ای؟{" "}
        <span onClick={onLogin} className="text-navy-800 font-bold cursor-pointer">
          وارد شو
        </span>
      </div>
    </div>
  );
}

function Otp({ onVerified }: { onVerified: () => void }) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(45);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const setDigit = (i: number, v: string) => {
    const clean = v.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = clean;
    setDigits(next);
    if (clean && i < 3) refs.current[i + 1]?.focus();
  };

  const filled = digits.every((d) => d !== "");
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="h-full box-border px-6 pt-16 sm:pt-[120px] pb-6 flex flex-col items-center text-center flex-1">
      <div className="w-16 h-16 rounded-[18px] bg-amber-100 flex items-center justify-center mb-[22px] text-amber-600">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </div>
      <div className="text-[19px] font-extrabold text-navy-800 mb-2.5">کد تایید را وارد کن</div>
      <div className="text-[13.5px] text-muted mb-8 leading-[1.8]">
        کد ۴ رقمی به شماره <span className="num inline-block" dir="ltr">0912***4567</span> پیامک شد
      </div>
      <div className="flex gap-3 mb-7" dir="ltr">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            value={d}
            onChange={(e) => setDigit(i, e.target.value)}
            inputMode="numeric"
            className={`w-[52px] h-[60px] rounded-xl border-[1.5px] text-center num text-[22px] font-bold text-navy-800 outline-none transition-colors ${
              d ? "border-amber-500" : "border-line-300 focus:border-amber-500"
            }`}
          />
        ))}
      </div>
      <button
        onClick={onVerified}
        disabled={!filled}
        className="btn-primary w-full !py-[15px] !rounded-xl mb-4"
      >
        تایید و ورود
      </button>
      <div className="text-[13px] text-muted">
        {seconds > 0 ? (
          <>
            ارسال مجدد کد تا{" "}
            <span className="num text-navy-800 font-bold">
              {toFa(mm)}:{toFa(ss)}
            </span>
          </>
        ) : (
          <span onClick={() => setSeconds(45)} className="text-amber-600 font-bold cursor-pointer">
            ارسال مجدد کد
          </span>
        )}
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={null}>
      <AuthFlow />
    </Suspense>
  );
}
