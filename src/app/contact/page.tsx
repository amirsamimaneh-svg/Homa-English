import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { ContactForm } from "./ContactForm";

export const metadata = { title: "تماس با ما — هما" };

const IconChip = ({ children }: { children: React.ReactNode }) => (
  <div className="w-11 h-11 rounded-btn bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
    {children}
  </div>
);

export default function ContactPage() {
  return (
    <div className="bg-page min-h-screen">
      <Header active="/contact" />

      <section className="px-6 md:px-20 py-16 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14">
        {/* Info */}
        <div>
          <div className="text-[13px] font-bold text-amber-600 mb-2.5">تماس با ما</div>
          <h1 className="text-[30px] font-extrabold mb-4 leading-[1.5]">سوالی داری؟ در کنارتیم</h1>
          <p className="text-[15px] text-muted leading-[1.9] mb-9">
            فرم مشاوره رایگان را پر کن تا کارشناسان ما در کمتر از یک روز کاری با شما تماس بگیرند.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <IconChip>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </IconChip>
              <div>
                <div className="num text-sm font-bold" dir="ltr">۰۲۱-۸۸۷۷۶۶۵۵</div>
                <div className="text-[12.5px] text-muted">شنبه تا پنج‌شنبه، ۹ تا ۱۸</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <IconChip>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </IconChip>
              <div>
                <div className="text-sm font-bold text-right" dir="ltr">info@homa-edu.ir</div>
                <div className="text-[12.5px] text-muted">پاسخ ایمیل تا ۲۴ ساعت</div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <IconChip>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s7-6.3 7-12A7 7 0 105 10c0 5.7 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </IconChip>
              <div>
                <div className="text-sm font-bold">تهران، خیابان ولیعصر، برج آسمان</div>
                <div className="text-[12.5px] text-muted">طبقه ۴</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </section>

      <Footer simple />
    </div>
  );
}
