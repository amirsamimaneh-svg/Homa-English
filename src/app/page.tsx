import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { HeroPreview } from "@/components/HeroPreview";
import { Icon } from "@/components/icons";
import { courses, stats, features, steps, testimonials } from "@/lib/data";

const featureIcon: Record<string, React.ReactNode> = {
  target: <Icon.Target width={22} height={22} />,
  sparkle: <Icon.Sparkle width={22} height={22} />,
  chart: <Icon.Chart width={22} height={22} />,
};

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute top-0 inset-x-0 h-[600px] grid-fade" />
      <div className="absolute -top-32 right-[-10%] w-[560px] h-[560px] blob bg-brand-violet/25 animate-drift" />
      <div className="absolute top-[10%] left-[-12%] w-[520px] h-[520px] blob bg-brand-cyan/20 animate-drift" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] blob bg-brand-indigo/20" />
    </div>
  );
}

export default function Home() {
  const popular = courses.slice(0, 3);

  return (
    <>
      <Background />
      <Header />

      {/* Hero */}
      <section className="wrap pt-36 pb-24 sm:pt-44">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div className="animate-fadeUp">
            <div className="pill mb-7">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulseGlow" />
              نسل جدید یادگیری زبان با هوش مصنوعی
            </div>
            <h1 className="text-[clamp(2.6rem,6.2vw,4.6rem)] font-extrabold leading-[1.1] tracking-tight text-white">
              انگلیسی را
              <br />
              <span className="gradient-text">زنده</span> تجربه کن.
            </h1>
            <p className="mt-6 text-[18px] sm:text-[19px] text-ink-300 leading-8 max-w-xl">
              هما مسیر یادگیری‌ات را با هوش مصنوعی می‌سازد — تمرین تعاملی، بازخورد لحظه‌ای و پیشرفتی که
              هر روز حسش می‌کنی.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/start" className="btn-grad !px-8 !py-4 !text-base">
                رایگان شروع کن
                <Icon.Arrow width={18} height={18} />
              </Link>
              <Link href="/method" className="btn-glass !px-7 !py-4 !text-base">
                <Icon.Play width={15} height={15} />
                روش هما
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-5 text-[13.5px] text-ink-400">
              <div className="flex -space-x-2.5 rtl:space-x-reverse">
                {["from-brand-violet to-brand-fuchsia", "from-brand-cyan to-brand-sky", "from-brand-indigo to-brand-violet", "from-brand-fuchsia to-brand-cyan"].map(
                  (g, i) => (
                    <span key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} ring-2 ring-base`} />
                  )
                )}
              </div>
              <span>
                <b className="text-white latin">۶٬۸۰۰+</b> زبان‌آموز فعال
              </span>
            </div>
          </div>

          <div className="animate-fadeUp" style={{ animationDelay: "0.15s" }}>
            <HeroPreview />
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="wrap">
        <div className="glass rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 rtl:divide-x-reverse overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <div className="latin text-[30px] sm:text-[34px] font-bold text-white">
                {s.value}
                <span className="gradient-text">{s.suffix}</span>
              </div>
              <div className="text-[13.5px] text-ink-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features — bento */}
      <section className="wrap py-28">
        <div className="max-w-xl mb-14">
          <div className="eyebrow mb-3">چرا هما</div>
          <h2 className="text-[clamp(1.9rem,4.2vw,2.8rem)] font-bold text-white tracking-tight leading-tight">
            یادگیری‌ای که <span className="gradient-text">با تو</span> جلو می‌آید
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-glow p-8 group">
              <div className="w-12 h-12 rounded-2xl grid place-items-center mb-6 bg-gradient-to-br from-brand-violet/25 to-brand-cyan/15 border border-white/10 text-brand-cyan">
                {featureIcon[f.icon]}
              </div>
              <h3 className="text-[19px] font-bold text-white mb-2.5">{f.title}</h3>
              <p className="text-[15px] text-ink-400 leading-7">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="wrap py-8">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <div className="eyebrow mb-3">دوره‌ها</div>
            <h2 className="text-[clamp(1.9rem,4.2vw,2.8rem)] font-bold text-white tracking-tight">
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

      {/* Steps */}
      <section className="wrap py-28">
        <div className="max-w-xl mb-14">
          <div className="eyebrow mb-3">مسیر تو</div>
          <h2 className="text-[clamp(1.9rem,4.2vw,2.8rem)] font-bold text-white tracking-tight">
            چهار قدم تا روان شدن
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="card-glow p-7 group">
              <div className="latin text-[15px] font-bold gradient-text mb-5">{s.n}</div>
              <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
              <p className="text-[14.5px] text-ink-400 leading-7">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="wrap py-8">
        <div className="max-w-xl mb-14">
          <div className="eyebrow mb-3">تجربه زبان‌آموزان</div>
          <h2 className="text-[clamp(1.9rem,4.2vw,2.8rem)] font-bold text-white tracking-tight">
            نتیجه‌ای که <span className="gradient-text">حس می‌شود</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-glow p-7 flex flex-col">
              <div className="flex gap-0.5 text-brand-cyan mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.Star key={i} width={15} height={15} />
                ))}
              </div>
              <blockquote className="text-[15px] text-ink-200 leading-8 flex-1">«{t.quote}»</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-violet to-brand-cyan" />
                <div>
                  <div className="text-[14px] font-bold text-white">{t.name}</div>
                  <div className="text-[12.5px] text-ink-400">{t.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap py-24">
        <div className="relative rounded-[32px] overflow-hidden glass-strong px-8 py-20 sm:px-16 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[360px] blob bg-brand-violet/40 animate-pulseGlow" />
          <div className="absolute -bottom-24 right-10 w-[360px] h-[300px] blob bg-brand-cyan/25" />
          <div className="relative max-w-xl mx-auto">
            <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold text-white tracking-tight leading-tight">
              آماده‌ای <span className="gradient-text">شروع</span> کنی؟
            </h2>
            <p className="mt-4 text-[17px] text-ink-300 leading-8">
              آزمون تعیین سطح رایگان بده و مسیر مخصوص خودت را همین حالا ببین.
            </p>
            <Link href="/start" className="btn-grad !px-9 !py-4 !text-base mt-9">
              رایگان شروع کن
              <Icon.Arrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
