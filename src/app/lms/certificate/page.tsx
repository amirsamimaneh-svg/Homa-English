import { HomaLogo, IconShield } from "@/components/icons";

export const metadata = { title: "گواهی پایان دوره — هما" };

export default function CertificatePage() {
  return (
    <div className="bg-page min-h-screen p-6 md:p-16 flex flex-col items-center">
      <div className="max-w-[900px] w-full bg-white rounded-lg p-8 md:p-16 relative overflow-hidden border border-line shadow-[0_20px_60px_rgba(15,41,66,0.12)]">
        <svg className="flightpath" viewBox="0 0 900 620" preserveAspectRatio="none" style={{ opacity: 0.05 }} aria-hidden>
          <path d="M-50,500 C 200,400 400,540 650,420 C 780,360 850,440 950,380" stroke="#D98E3B" strokeWidth="2" fill="none" />
          <circle cx="780" cy="120" r="80" stroke="#0F2942" strokeWidth="1" fill="none" />
          <circle cx="780" cy="120" r="140" stroke="#0F2942" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative border-[1.5px] border-line-200 rounded p-8 md:p-14 text-center">
          <HomaLogo size={48} className="mx-auto mb-5" />
          <div className="num text-[13px] font-bold tracking-[3px] text-amber-500 uppercase mb-1.5">
            گواهی پایان دوره
          </div>
          <div className="text-[15px] text-muted mb-9">آموزشگاه هما</div>

          <div className="text-sm text-muted mb-3.5">این گواهی تقدیم می‌شود به</div>
          <div className="text-[28px] md:text-[34px] font-extrabold text-navy-800 mb-7">آرمان رضایی</div>

          <div className="text-[14.5px] text-body leading-[2] max-w-[560px] mx-auto mb-10">
            بابت گذراندن موفقیت‌آمیز دوره «<b>آیلتس آکادمیک فشرده</b>» به مدت ۲۴ جلسه، زیر نظر دکتر شیرین
            علوی، با نمره نهایی <span className="num font-bold">۸۷</span> از ۱۰۰.
          </div>

          <div className="flex justify-between items-end max-w-[560px] mx-auto gap-4">
            <div className="text-center">
              <div className="num text-sm text-navy-800 border-b-[1.5px] border-line-200 pb-2 mb-2 w-[110px] md:w-40">
                ۲۹ تیر ۱۴۰۳
              </div>
              <div className="text-[11.5px] text-faint">تاریخ صدور</div>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-500 shrink-0">
              <IconShield width={26} height={26} />
            </div>
            <div className="text-center">
              <div className="num text-sm text-navy-800 border-b-[1.5px] border-line-200 pb-2 mb-2 w-[110px] md:w-40">
                HOMA-IE-7734
              </div>
              <div className="text-[11.5px] text-faint">کد رهگیری</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3.5 mt-8">
        <button className="btn-primary">دانلود PDF</button>
        <button className="btn-outline">اشتراک‌گذاری در لینکدین</button>
      </div>
    </div>
  );
}
