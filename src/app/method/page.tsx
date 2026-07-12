import Link from "next/link";
import { PageShell, PageHead } from "@/components/PageShell";
import { Icon } from "@/components/icons";
import { steps, features } from "@/lib/data";

export const metadata = { title: "روش هما — یادگیری هوشمند" };

const featureIcon: Record<string, React.ReactNode> = {
  target: <Icon.Target width={22} height={22} />,
  sparkle: <Icon.Sparkle width={22} height={22} />,
  chart: <Icon.Chart width={22} height={22} />,
};

export default function MethodPage() {
  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          eyebrow="روش هما"
          title={
            <>
              یادگیری‌ای که با <span className="gradient-text">علم</span> ساخته شده
            </>
          }
          subtitle="ترکیبی از تکرار فاصله‌دار، تمرین فعال و بازخورد هوشمند — تا یادگیری‌ات سریع، پایدار و لذت‌بخش باشد."
        />
      </section>

      {/* pillars */}
      <section className="wrap py-12">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-glow p-8">
              <div className="w-12 h-12 rounded-2xl grid place-items-center mb-6 bg-gradient-to-br from-brand-violet/25 to-brand-cyan/15 border border-white/10 text-brand-cyan">
                {featureIcon[f.icon]}
              </div>
              <h3 className="text-[19px] font-bold text-white mb-2.5">{f.title}</h3>
              <p className="text-[15px] text-ink-400 leading-7">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* steps timeline */}
      <section className="wrap py-16">
        <h2 className="text-[clamp(1.7rem,4vw,2.4rem)] font-bold text-white tracking-tight mb-12">
          مسیر تو، قدم به قدم
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="card-glow p-7">
              <div className="latin text-[15px] font-bold gradient-text mb-5">{s.n}</div>
              <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
              <p className="text-[14.5px] text-ink-400 leading-7">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="wrap py-16">
        <div className="relative rounded-[32px] overflow-hidden glass-strong px-8 py-16 sm:px-16 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[340px] blob bg-brand-violet/40" />
          <div className="relative">
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-white tracking-tight">
              خودت امتحانش کن
            </h2>
            <p className="mt-4 text-[16px] text-ink-300">اولین درس رایگان است — همین حالا شروع کن.</p>
            <Link href="/start" className="btn-grad !px-8 !py-4 mt-8">
              رایگان شروع کن
              <Icon.Arrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
