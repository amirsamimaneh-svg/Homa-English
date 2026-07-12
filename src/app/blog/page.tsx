import { PageShell, PageHead } from "@/components/PageShell";
import { Icon } from "@/components/icons";
import { blogPosts, blogCategories, toFa } from "@/lib/data";

export const metadata = { title: "بلاگ — هما" };

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          eyebrow="بلاگ"
          title={
            <>
              نکته‌هایی برای <span className="gradient-text">یادگیری بهتر</span>
            </>
          }
          subtitle="مقاله‌های کوتاه و کاربردی درباره‌ی یادگیری زبان، از تیم هما."
        />
      </section>

      <section className="wrap py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {blogCategories.map((c, i) => (
            <span
              key={c}
              className={`text-[13px] font-medium px-4 py-1.5 rounded-full cursor-pointer transition-colors ${
                i === 0 ? "bg-gradient-to-l from-brand-violet to-brand-indigo text-white" : "pill"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* featured */}
        <a href="#" className="card-glow p-8 grid md:grid-cols-2 gap-6 items-center mb-6 group">
          <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-brand-violet/30 via-brand-indigo/20 to-brand-cyan/20 relative overflow-hidden">
            <div className="absolute inset-0 blob bg-brand-violet/20" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-[12.5px] text-brand-cyan font-semibold mb-3">
              <span>{featured.category}</span>
              <span className="w-1 h-1 rounded-full bg-ink-500" />
              <span>{toFa(featured.readTime)} دقیقه</span>
            </div>
            <h2 className="text-[22px] font-bold text-white leading-snug mb-3 group-hover:text-brand-cyan transition-colors">
              {featured.title}
            </h2>
            <p className="text-[15px] text-ink-400 leading-7 mb-4">{featured.excerpt}</p>
            <span className="text-[13px] text-ink-500">{featured.date}</span>
          </div>
        </a>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <a key={p.slug} href="#" className="card-glow overflow-hidden group flex flex-col">
              <div className="aspect-[16/9] bg-gradient-to-br from-brand-indigo/25 to-brand-cyan/15" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[12px] text-brand-cyan font-semibold mb-2.5">
                  <span>{p.category}</span>
                  <span className="w-1 h-1 rounded-full bg-ink-500" />
                  <span>{toFa(p.readTime)} دقیقه</span>
                </div>
                <h3 className="text-[16px] font-bold text-white leading-snug mb-2 group-hover:text-brand-cyan transition-colors flex-1">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[12.5px] text-ink-500">{p.date}</span>
                  <Icon.Arrow width={16} height={16} className="text-ink-400 group-hover:text-brand-cyan transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
