import Link from "next/link";
import { PageShell, PageHead } from "@/components/PageShell";
import { Icon } from "@/components/icons";
import { faqs } from "@/lib/data";

export const metadata = { title: "سوالات متداول — هما" };

const extra = [
  { q: "آیا برای موبایل هم مناسب است؟", a: "بله، هما کاملاً واکنش‌گراست و روی موبایل، تبلت و دسکتاپ به‌خوبی کار می‌کند." },
  { q: "می‌توانم اشتراکم را لغو کنم؟", a: "بله، هر زمان که بخواهی می‌توانی لغو کنی؛ بدون قرارداد و بدون جریمه." },
  { q: "گواهی پایان دوره معتبر است؟", a: "گواهی هما با کد رهگیری صادر می‌شود و قابل استعلام است." },
];

export default function FAQPage() {
  const all = [...faqs, ...extra];
  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          center
          eyebrow="راهنما"
          title={
            <>
              سوال‌های <span className="gradient-text">پرتکرار</span>
            </>
          }
          subtitle="هر چیزی که لازم است بدانی، یک‌جا."
        />
      </section>

      <section className="wrap py-12 max-w-3xl">
        <div className="space-y-3">
          {all.map((f, i) => (
            <details key={i} open={i === 0} className="card-glow p-5 group/details">
              <summary className="flex items-center justify-between cursor-pointer list-none text-[15px] font-semibold text-white">
                {f.q}
                <Icon.Arrow width={18} height={18} className="text-ink-400 -rotate-90 group-open/details:rotate-90 transition-transform shrink-0" />
              </summary>
              <p className="mt-3 text-[14px] text-ink-300 leading-7">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[15px] text-ink-300 mb-5">جوابت را پیدا نکردی؟</p>
          <Link href="/contact" className="btn-glass">با ما تماس بگیر</Link>
        </div>
      </section>
    </PageShell>
  );
}
