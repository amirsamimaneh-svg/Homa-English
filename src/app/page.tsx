import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { Icon } from "@/components/icons";
import { courses, stats, features, steps, testimonials } from "@/lib/data";

const featureIcon: Record<string, React.ReactNode> = {
  target: <Icon.Target width={22} height={22} />,
  sparkle: <Icon.Sparkle width={22} height={22} />,
  chart: <Icon.Chart width={22} height={22} />,
};

export default function Home() {
  const popular = courses.filter((c) => c.popular || true).slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="wrap pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-3xl animate-fadeUp">
          <div className="pill mb-7">
            <Icon.Sparkle width={14} height={14} className="text-accent-600" />
            یادگیری با دستیار هوشمند
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold text-ink-950 leading-[1.15] tracking-tight">
            انگلیسی را
            <br />
            <span className="text-accent-600">هدفمند</span> یاد بگیر.
          </h1>
          <p className="mt-6 text-[18px] sm:text-[20px] text-ink-500 leading-8 max-w-xl">
            هما مسیر یادگیری‌ات را بر اساس سطح و هدف تو می‌سازد — با تمرین‌های تعاملی، بازخورد هوشمند و
            پیشرفتی که هر روز می‌بینی.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/start" className="btn-primary !px-7 !py-3.5 !text-base">
              شروع رایگان
              <Icon.Arrow width={18} height={18} />
            </Link>
            <Link href="/method" className="btn-outline !px-7 !py-3.5 !text-base">
              روش هما چیست؟
            </Link>
          </div>
          <p className="mt-5 text-[13.5px] text-ink-400">بدون نیاز به کارت بانکی · لغو در هر زمان</p>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-y border-line bg-surface">
        <div className="wrap grid grid-cols-2 md:grid-cols-4 divide-x divide-line rtl:divide-x-reverse">
          {stats.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <div className="latin text-[28px] sm:text-[32px] font-bold text-ink-950">
                {s.value}
                <span className="text-accent-600">{s.suffix}</span>
              </div>
              <div className="text-[13.5px] text-ink-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="wrap py-24">
        <div className="max-w-xl mb-14">
          <div className="eyebrow mb-3">چرا هما</div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-ink-950 tracking-tight leading-tight">
            یادگیری‌ای که با تو جلو می‌آید
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((f) => (
            <div key={f.title}>
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-5">
                {featureIcon[f.icon]}
              </div>
              <h3 className="text-[18px] font-bold text-ink-950 mb-2">{f.title}</h3>
              <p className="text-[15px] text-ink-500 leading-7">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="wrap py-24 border-t border-line">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <div className="eyebrow mb-3">دوره‌ها</div>
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-ink-950 tracking-tight">
              از همین امروز شروع کن
            </h2>
          </div>
          <Link href="/courses" className="btn-ghost shrink-0">
            همه دوره‌ها
            <Icon.Arrow width={16} height={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="wrap py-24 border-t border-line">
        <div className="max-w-xl mb-14">
          <div className="eyebrow mb-3">مسیر تو</div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-ink-950 tracking-tight">
            چهار قدم تا روان شدن
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="latin text-[15px] font-bold text-accent-600 mb-4">{s.n}</div>
              <h3 className="text-[17px] font-bold text-ink-950 mb-2">{s.title}</h3>
              <p className="text-[14.5px] text-ink-500 leading-7">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="wrap py-24 border-t border-line">
        <div className="max-w-xl mb-14">
          <div className="eyebrow mb-3">تجربه زبان‌آموزان</div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-ink-950 tracking-tight">
            نتیجه‌ای که حس می‌شود
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-7 flex flex-col">
              <div className="flex gap-0.5 text-accent-500 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.Star key={i} width={15} height={15} />
                ))}
              </div>
              <blockquote className="text-[15px] text-ink-800 leading-8 flex-1">«{t.quote}»</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line">
                <div className="text-[14px] font-bold text-ink-950">{t.name}</div>
                <div className="text-[13px] text-ink-500 mt-0.5">{t.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap pb-24">
        <div className="rounded-2xl bg-ink-950 text-white px-8 py-16 sm:px-16 sm:py-20 text-center relative overflow-hidden">
          <div className="relative max-w-xl mx-auto">
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight leading-tight">
              امروز اولین قدم را بردار
            </h2>
            <p className="mt-4 text-[16px] text-ink-300 leading-8">
              آزمون تعیین سطح رایگان بده و مسیر مخصوص خودت را ببین.
            </p>
            <Link href="/start" className="btn-accent !px-8 !py-3.5 !text-base mt-8">
              شروع رایگان
              <Icon.Arrow width={18} height={18} />
            </Link>
          </div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl" />
        </div>
      </section>

      <Footer />
    </>
  );
}
