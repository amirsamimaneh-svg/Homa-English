"use client";

import { useState } from "react";
import { PhoneFrame, TabBar } from "@/components/app/PhoneFrame";
import { enrollments, invoices, currentUser, formatPrice, toFa, pct } from "@/lib/data";

type Tab = "courses" | "invoices" | "profile";

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("courses");

  return (
    <PhoneFrame>
      <div className="flex-1 overflow-auto bg-page flex flex-col">
        {tab === "courses" && <Courses />}
        {tab === "invoices" && <Invoices />}
        {tab === "profile" && <Profile />}
      </div>
      <TabBar>
        <TabTab label="دوره‌ها" active={tab === "courses"} onClick={() => setTab("courses")} icon={<IconHome />} />
        <TabTab label="فاکتورها" active={tab === "invoices"} onClick={() => setTab("invoices")} icon={<IconList />} />
        <TabTab label="پروفایل" active={tab === "profile"} onClick={() => setTab("profile")} icon={<IconUser />} />
      </TabBar>
    </PhoneFrame>
  );
}

function Courses() {
  return (
    <>
      <div className="px-5 pt-14 sm:pt-[100px] pb-4">
        <div className="text-[19px] font-extrabold text-navy-800">سلام، آرمان 👋</div>
        <div className="text-[13px] text-muted mt-1">{toFa(enrollments.length)} دوره فعال داری</div>
      </div>
      <div className="px-5 flex flex-col gap-3.5 pb-6">
        {enrollments.map((e) => {
          const p = pct(e.done, e.total);
          return (
            <div key={e.title} className="bg-white rounded-card p-[18px]">
              <div className="flex justify-between items-start mb-3.5">
                <div>
                  <div className="text-[14.5px] font-bold mb-2.5">{e.title}</div>
                  <div className="text-xs text-muted">{e.instructor}</div>
                </div>
                <span className="tag-success !text-[11px] !px-2.5 !py-[5px]">فعال</span>
              </div>
              <div className="h-1.5 bg-line rounded-pill overflow-hidden mb-2">
                <div className="h-full bg-amber-500" style={{ width: `${p}%` }} />
              </div>
              <div className="flex justify-between text-xs text-muted">
                <span>
                  {toFa(e.done)} از {toFa(e.total)} جلسه
                </span>
                <span>{toFa(p)}٪</span>
              </div>
            </div>
          );
        })}
        <div className="bg-white border-[1.5px] border-dashed border-line-200 rounded-card p-[18px] text-center text-muted text-[13px] font-semibold cursor-pointer">
          ۱ دوره تکمیل‌شده — گواهی صادر شد ←
        </div>
      </div>
    </>
  );
}

function Invoices() {
  return (
    <>
      <div className="px-5 pt-14 sm:pt-[100px] pb-4 text-[19px] font-extrabold text-navy-800">فاکتورها</div>
      <div className="px-5 flex flex-col gap-3 pb-6">
        {invoices.map((inv, i) => (
          <div key={i} className="bg-white rounded-[14px] p-4 flex justify-between items-center">
            <div>
              <div className="text-sm font-bold mb-1">{inv.title}</div>
              <div className="text-xs text-muted">{inv.date}</div>
            </div>
            <div className="text-left">
              <div className="num text-[13.5px] font-bold">{formatPrice(inv.amount)}</div>
              <div className="text-[11px] text-success font-bold">پرداخت‌شده</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Profile() {
  const rows1 = ["ویرایش مشخصات", "تغییر رمز عبور", "اعلان‌ها"];
  return (
    <>
      <div className="pt-14 sm:pt-[100px] pb-5 px-5 flex flex-col items-center bg-navy-800">
        <div className="w-[72px] h-[72px] rounded-full bg-white/15 mb-3" />
        <div className="text-[17px] font-bold text-white">{currentUser.name}</div>
        <div className="num text-[12.5px] text-[#AFC3D6] mt-1" dir="ltr">
          {currentUser.phoneMasked}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="bg-white rounded-[14px] p-1">
          {rows1.map((r, i) => (
            <div
              key={r}
              className={`flex items-center justify-between px-3.5 py-3.5 ${
                i < rows1.length - 1 ? "border-b border-[#F2F5F8]" : ""
              }`}
            >
              <span className="text-sm">{r}</span>
              <span className="text-[#C7D0D8]">‹</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-[14px] p-1 mt-2">
          <div className="flex items-center justify-between px-3.5 py-3.5 border-b border-[#F2F5F8]">
            <span className="text-sm">پشتیبانی</span>
            <span className="text-[#C7D0D8]">‹</span>
          </div>
          <div className="flex items-center px-3.5 py-3.5">
            <span className="text-sm text-error">خروج از حساب</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* --- tab bar (custom, since account uses onClick handlers) --- */
function TabTab({
  label,
  active,
  onClick,
  icon,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 py-3 pb-8 text-[11px] font-bold transition-colors ${
        active ? "text-amber-500" : "text-faint"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 12l8-8 8 8M6 10v10h12V10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);
const IconList = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
