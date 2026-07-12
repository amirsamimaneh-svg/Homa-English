import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { faqGroups } from "@/lib/data";

export const metadata = { title: "سوالات متداول — هما" };

export default function FAQPage() {
  let first = true;
  return (
    <div className="bg-page min-h-screen">
      <Header active="/faq" />

      <section className="px-6 md:px-20 pt-16 pb-5 text-center">
        <div className="text-[13px] font-bold text-amber-600 mb-2.5">سوالات متداول</div>
        <h1 className="text-[32px] font-extrabold">هر چیزی که باید بدانید</h1>
      </section>

      <section className="px-6 md:px-20 pt-10 pb-24 max-w-[800px] mx-auto">
        {faqGroups.map((group) => (
          <div key={group.heading} className="mb-10 last:mb-0">
            <div className="text-sm font-bold text-muted mb-4">{group.heading}</div>
            <div className="flex flex-col gap-3">
              {group.items.map((item, i) => {
                const open = first;
                first = false;
                return (
                  <details
                    key={i}
                    open={open}
                    className="bg-white border border-line rounded-xl px-5 py-[18px] group"
                  >
                    <summary className="text-[15px] font-bold cursor-pointer list-none flex items-center justify-between gap-3">
                      {item.q}
                      <span className="text-muted transition-transform group-open:rotate-180 shrink-0">▾</span>
                    </summary>
                    <div className="text-sm text-muted mt-3 leading-[1.9]">{item.a}</div>
                  </details>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <Footer simple />
    </div>
  );
}
