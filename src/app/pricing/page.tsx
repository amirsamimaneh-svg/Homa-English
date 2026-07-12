import Link from "next/link";
import { PageShell, PageHead } from "@/components/PageShell";
import { Icon } from "@/components/icons";
import { plans, faqs, formatPrice } from "@/lib/data";

export const metadata = { title: "قیمت‌ها — هما" };

export default function PricingPage() {
  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          center
          eyebrow="قیمت‌ها"
          title={
            <>
              پلنی که <span className="gradient-text">مناسب توست</span>
            </>
          }
          subtitle="بدون قرارداد، لغو در هر زمان. با پلن رایگان شروع کن و هر وقت خواستی ارتقا بده."
        />
      </section>

      <section className="wrap py-12">
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card-glow p-8 flex flex-col ${
                p.highlighted ? "md:-translate-y-3 !border-brand-violet/40" : ""
              }`}
            >
              {p.highlighted && (
                <div className="self-start pill !text-[12px] mb-4 !border-brand-violet/40">
                  <Icon.Sparkle width={12} height={12} className="text-brand-cyan" />
                  محبوب‌ترین
                </div>
              )}
              <div className="text-[15px] font-bold text-ink-200">{p.name}</div>
              <div className="text-[13px] text-ink-400 mt-1 mb-5">{p.tagline}</div>
              <div className="mb-6">
                {p.price < 0 ? (
                  <span className="text-2xl font-bold text-white">{p.period}</span>
                ) : p.price === 0 ? (
                  <span className="text-4xl font-extrabold text-white">رایگان</span>
                ) : (
                  <>
                    <span className="latin text-4xl font-extrabold text-white">{formatPrice(p.price)}</span>
                    <span className="text-[14px] text-ink-400"> تومان / {p.period}</span>
                  </>
                )}
              </div>
              <Link
                href={p.name === "سازمانی" ? "/contact" : "/start"}
                className={p.highlighted ? "btn-grad w-full" : "btn-glass w-full"}
              >
                {p.cta}
              </Link>
              <ul className="mt-7 space-y-3.5">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-ink-200">
                    <span className="mt-0.5 w-5 h-5 rounded-full grid place-items-center bg-brand-cyan/15 text-brand-cyan shrink-0">
                      <Icon.Check width={13} height={13} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* mini faq */}
      <section className="wrap py-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">سوال‌های پرتکرار</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} open={i === 0} className="card-glow p-5 group/details">
              <summary className="flex items-center justify-between cursor-pointer list-none text-[15px] font-semibold text-white">
                {f.q}
                <Icon.Arrow width={18} height={18} className="text-ink-400 -rotate-90 group-open/details:rotate-90 transition-transform" />
              </summary>
              <p className="mt-3 text-[14px] text-ink-300 leading-7">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
