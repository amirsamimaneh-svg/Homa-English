import Link from "next/link";
import { PageShell, PageHead } from "@/components/PageShell";
import { Icon } from "@/components/icons";
import { stats } from "@/lib/data";

export const metadata = { title: "درباره هما" };

const values = [
  { title: "یادگیرنده در مرکز", text: "هر تصمیم طراحی ما از یک سوال شروع می‌شود: این به زبان‌آموز کمک می‌کند؟" },
  { title: "علم، نه حدس", text: "روش‌های ما بر پایه‌ی پژوهش‌های یادگیری زبان ساخته شده‌اند." },
  { title: "تکنولوژی در خدمت انسان", text: "هوش مصنوعی را برای شخصی‌سازی به کار می‌گیریم، نه جایگزینی معلم." },
];

const timeline = [
  { year: "۱۴۰۰", text: "هما با یک ایده ساده شروع شد: یادگیری زبان باید لذت‌بخش باشد." },
  { year: "۱۴۰۱", text: "اولین دوره‌های تعاملی و سامانه‌ی تمرین روزانه راه‌اندازی شد." },
  { year: "۱۴۰۲", text: "دستیار هوشمند برای بازخورد گفتار و نوشتار اضافه شد." },
  { year: "۱۴۰۳", text: "بیش از ۶٬۸۰۰ زبان‌آموز فعال در مسیر یادگیری هما." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          eyebrow="درباره هما"
          title={
            <>
              یادگیری زبان را <span className="gradient-text">دوباره ساختیم</span>
            </>
          }
          subtitle="هما یک تیم کوچک با یک هدف بزرگ است: اینکه یادگیری انگلیسی برای هر فارسی‌زبان ساده، هوشمند و لذت‌بخش باشد."
        />
      </section>

      {/* stats */}
      <section className="wrap py-12">
        <div className="glass rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 rtl:divide-x-reverse overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <div className="latin text-[30px] font-bold text-white">
                {s.value}
                <span className="gradient-text">{s.suffix}</span>
              </div>
              <div className="text-[13.5px] text-ink-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="wrap py-12">
        <h2 className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold text-white tracking-tight mb-10">ارزش‌های ما</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.title} className="card-glow p-8">
              <h3 className="text-[18px] font-bold text-white mb-2.5">{v.title}</h3>
              <p className="text-[15px] text-ink-400 leading-7">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="wrap py-12">
        <h2 className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold text-white tracking-tight mb-10">مسیر ما</h2>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.year} className="card-glow p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="latin text-[22px] font-bold gradient-text sm:w-24 shrink-0">{t.year}</div>
              <p className="text-[15px] text-ink-300 leading-7">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-12 text-center">
        <Link href="/start" className="btn-grad !px-8 !py-4">
          به هما بپیوند
          <Icon.Arrow width={18} height={18} />
        </Link>
      </section>
    </PageShell>
  );
}
