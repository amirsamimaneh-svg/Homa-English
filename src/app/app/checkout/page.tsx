"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/app/PhoneFrame";
import { IconCheck, IconShield } from "@/components/icons";
import { getCourse, getInstructor, formatPrice, toFa, courses } from "@/lib/data";

type Step = "plan" | "gateway" | "success";
type Plan = "full" | "installment";

const COUPONS: Record<string, number> = { HOMA10: 0.1, WELCOME: 0.15 };

function CheckoutFlow() {
  const params = useSearchParams();
  const router = useRouter();
  const course = getCourse(params.get("course") ?? "") ?? courses[1];
  const instructor = getInstructor(course.instructorId);

  const [step, setStep] = useState<Step>("plan");
  const [plan, setPlan] = useState<Plan>("full");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState<string | null>(null);

  const total = useMemo(() => Math.round(course.price * (1 - discount)), [course.price, discount]);

  const applyCoupon = () => {
    const rate = COUPONS[coupon.trim().toUpperCase()];
    if (rate) {
      setDiscount(rate);
      setCouponMsg(`کد تخفیف اعمال شد (${toFa(rate * 100)}٪)`);
    } else {
      setDiscount(0);
      setCouponMsg("کد تخفیف نامعتبر است");
    }
  };

  return (
    <PhoneFrame bg={step === "gateway" || step === "success" ? "#fff" : "#F5F9FC"}>
      {step === "plan" && (
        <div className="h-full box-border px-5 pt-14 sm:pt-[100px] pb-6 overflow-auto flex-1">
          <div className="text-lg font-extrabold text-navy-800 mb-[18px]">تکمیل ثبت‌نام</div>

          <div className="bg-white rounded-card p-[18px] flex gap-3.5 items-center mb-5">
            <div
              className="w-14 h-14 rounded-xl shrink-0"
              style={{ background: `linear-gradient(135deg, ${course.gradient[0]}, ${course.gradient[1]})` }}
            />
            <div>
              <div className="text-[14.5px] font-bold mb-1">{course.title}</div>
              <div className="text-[12.5px] text-muted">
                {toFa(course.sessions)} جلسه · {instructor?.name}
              </div>
            </div>
          </div>

          <div className="text-[13px] font-bold text-muted mb-3">پلن پرداخت</div>
          <div className="flex flex-col gap-2.5 mb-6">
            <PlanOption
              selected={plan === "full"}
              onClick={() => setPlan("full")}
              label="پرداخت کامل"
              amount={`${formatPrice(total)} ت`}
            />
            <PlanOption
              selected={plan === "installment"}
              onClick={() => setPlan("installment")}
              label="۲ قسط"
              amount={`${formatPrice(Math.round(total / 2))} ت × ۲`}
              muted
            />
          </div>

          <div className="text-[13px] font-bold text-muted mb-3">کد تخفیف</div>
          <div className="flex gap-2 mb-2">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="کد تخفیف را وارد کن (HOMA10)"
              className="input flex-1 !py-3 !text-[13.5px] !bg-white"
            />
            <button onClick={applyCoupon} className="bg-navy-800 text-white px-[18px] rounded-btn text-[13.5px] font-bold">
              اعمال
            </button>
          </div>
          {couponMsg && (
            <div className={`text-[12px] font-semibold mb-4 ${discount ? "text-success" : "text-error"}`}>
              {couponMsg}
            </div>
          )}

          <div className="bg-white rounded-[14px] p-4 flex flex-col gap-2 mt-4 mb-6">
            <Row label="قیمت دوره" value={formatPrice(course.price)} />
            <Row label="تخفیف" value={formatPrice(course.price - total)} success />
            <div className="h-px bg-line my-1" />
            <Row label="مبلغ قابل پرداخت" value={`${formatPrice(total)} ت`} bold />
          </div>

          <button onClick={() => setStep("gateway")} className="btn-primary w-full !rounded-xl">
            ادامه و پرداخت
          </button>
        </div>
      )}

      {step === "gateway" && (
        <div className="h-full box-border px-5 pt-14 sm:pt-[100px] pb-6 flex flex-col flex-1">
          <div className="text-lg font-extrabold text-navy-800 mb-1.5">پرداخت امن</div>
          <div className="text-[13px] text-muted mb-6">اتصال به درگاه بانکی</div>

          <div className="bg-navy-800 rounded-card p-[22px] text-white mb-7">
            <div className="text-xs text-[#AFC3D6] mb-2.5">مبلغ قابل پرداخت</div>
            <div className="num text-[28px] font-bold">
              {formatPrice(total)} <span className="text-sm font-normal">تومان</span>
            </div>
          </div>

          <div className="text-[13px] font-bold text-muted mb-3">شماره کارت</div>
          <input placeholder="•••• •••• •••• ••••" className="input-ltr !text-center mb-4" dir="ltr" />
          <div className="flex gap-3 mb-7">
            <input placeholder="CVV2" className="input-ltr flex-1 !text-center" />
            <input placeholder="MM/YY" className="input-ltr flex-1 !text-center" />
          </div>

          <button onClick={() => setStep("success")} className="btn-primary w-full !rounded-xl mt-auto">
            پرداخت {formatPrice(total)} تومان
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-faint">
            <IconShield width={14} height={14} />
            پرداخت با رمزنگاری کامل و امن
          </div>
        </div>
      )}

      {step === "success" && (
        <div className="h-full box-border px-6 flex flex-col items-center justify-center text-center flex-1">
          <div className="w-[84px] h-[84px] rounded-full bg-success-bg flex items-center justify-center mb-6 text-success">
            <IconCheck width={40} height={40} />
          </div>
          <div className="text-xl font-extrabold text-navy-800 mb-2.5">پرداخت با موفقیت انجام شد</div>
          <div className="text-sm text-muted leading-[1.9] mb-8">
            به دوره «{course.title}» خوش آمدی! کلاس اول تا ۲ روز دیگر شروع می‌شود.
          </div>
          <button onClick={() => router.push("/lms/dashboard")} className="btn-primary w-full !rounded-xl">
            رفتن به داشبورد
          </button>
        </div>
      )}
    </PhoneFrame>
  );
}

function PlanOption({
  selected,
  onClick,
  label,
  amount,
  muted = false,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  amount: string;
  muted?: boolean;
}) {
  return (
    <label
      onClick={onClick}
      className={`flex items-center justify-between bg-white rounded-xl px-4 py-3.5 cursor-pointer border-2 transition-colors ${
        selected ? "border-amber-500" : "border-line-300"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <input type="radio" checked={selected} onChange={onClick} className="accent-amber-500" />
        <span className="text-sm font-bold">{label}</span>
      </div>
      <span className={`num text-sm font-bold ${muted ? "text-muted" : ""}`}>{amount}</span>
    </label>
  );
}

function Row({
  label,
  value,
  bold = false,
  success = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
  success?: boolean;
}) {
  return (
    <div
      className={`flex justify-between ${bold ? "text-[15px] font-bold" : "text-[13px]"} ${
        success ? "text-success" : bold ? "" : "text-muted"
      }`}
    >
      <span>{label}</span>
      <span className="num">{value}</span>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutFlow />
    </Suspense>
  );
}
