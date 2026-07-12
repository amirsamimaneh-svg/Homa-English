import Link from "next/link";
import { PageShell, PageHead } from "@/components/PageShell";
import { Icon } from "@/components/icons";

export const metadata = { title: "راهنما — هما" };

const topics = [
  { title: "شروع کار", text: "چطور حساب بسازم و اولین دوره را انتخاب کنم.", href: "/start" },
  { title: "دوره‌ها و تمرین‌ها", text: "نحوه‌ی دسترسی به درس‌ها و تمرین‌های تعاملی.", href: "/courses" },
  { title: "اشتراک و پرداخت", text: "پلن‌ها، پرداخت و مدیریت اشتراک.", href: "/pricing" },
  { title: "حساب کاربری", text: "ورود، رمز عبور و تنظیمات حساب.", href: "/login" },
];

export default function HelpPage() {
  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          center
          eyebrow="مرکز راهنما"
          title={
            <>
              چطور می‌توانیم <span className="gradient-text">کمک کنیم؟</span>
            </>
          }
          subtitle="یک موضوع را انتخاب کن یا مستقیم با ما تماس بگیر."
        />
      </section>

      <section className="wrap py-12">
        <div className="grid sm:grid-cols-2 gap-5">
          {topics.map((t) => (
            <Link key={t.title} href={t.href} className="card-glow p-7 group flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[17px] font-bold text-white mb-2">{t.title}</h3>
                <p className="text-[14.5px] text-ink-400 leading-7">{t.text}</p>
              </div>
              <Icon.Arrow width={20} height={20} className="text-ink-400 group-hover:text-brand-cyan transition-colors shrink-0 mt-1" />
            </Link>
          ))}
        </div>

        <div className="card-glow p-8 mt-8 text-center">
          <p className="text-[15px] text-ink-300 mb-5">هنوز کمک لازم داری؟</p>
          <Link href="/contact" className="btn-grad">
            تماس با پشتیبانی
            <Icon.Arrow width={17} height={17} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
