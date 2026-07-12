"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/data";
import { toFa } from "@/lib/data";

const gradients: Record<string, string> = {
  "آموزش زبان": "linear-gradient(135deg,#DCE8F1,#F5F9FC)",
  آیلتس: "linear-gradient(135deg,#DCE8F1,#F5F9FC)",
  خلبانی: "linear-gradient(135deg,#16344F,#0F2942)",
  یادگیری: "linear-gradient(135deg,#FBEBD4,#F7DFC0)",
};

export function BlogClient({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => ["همه", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("همه");

  const filtered = active === "همه" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <section className="px-6 md:px-20 pt-5 pb-5 max-w-[1000px] mx-auto">
        <div className="flex gap-2.5 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[13px] font-semibold px-[18px] py-2 rounded-pill cursor-pointer transition-colors ${
                active === cat
                  ? "bg-navy-800 text-white font-bold"
                  : "bg-white border border-line-200 text-body hover:border-navy-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 pb-24 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <a key={p.slug} href="#" className="card overflow-hidden block hover:-translate-y-1 transition-transform">
              <div className="h-[170px]" style={{ background: gradients[p.category] ?? gradients["آموزش زبان"] }} />
              <div className="p-[22px]">
                <div className="text-xs text-amber-600 font-bold mb-2">
                  {p.category} · {toFa(p.readTime)} دقیقه مطالعه
                </div>
                <div className="text-base font-bold leading-[1.7] mb-2.5">{p.title}</div>
                <div className="text-[13px] text-muted">{p.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
