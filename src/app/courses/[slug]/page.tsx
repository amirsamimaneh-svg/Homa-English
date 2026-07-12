import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Icon } from "@/components/icons";
import { courses, getCourse, curriculumFor, formatPrice, toFa } from "@/lib/data";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const curriculum = curriculumFor(course);
  const includes = [
    `${toFa(course.lessons)} درس ویدیویی`,
    "تمرین تعاملی نامحدود",
    "بازخورد هوشمند گفتار و نوشتار",
    "گواهی پایان دوره",
    "دسترسی مادام‌العمر",
  ];

  return (
    <PageShell>
      <section className="wrap pb-6">
        {/* breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-ink-400 mb-8">
          <Link href="/" className="hover:text-white">خانه</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-white">دوره‌ها</Link>
          <span>/</span>
          <span className="text-ink-200">{course.title}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* main */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="pill">{course.tag}</span>
              <span className="latin text-[13px] font-bold gradient-text">{course.cefr}</span>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold text-white tracking-tight leading-tight mb-5">
              {course.title}
            </h1>
            <p className="text-[17px] text-ink-300 leading-8 max-w-2xl">{course.summary}</p>

            {/* preview */}
            <div className="card-glow mt-10 aspect-video grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 blob bg-brand-violet/20" />
              <button className="relative w-16 h-16 rounded-full grid place-items-center bg-gradient-to-br from-brand-violet to-brand-cyan text-white shadow-2xl">
                <Icon.Play width={22} height={22} />
              </button>
            </div>

            {/* curriculum */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">سرفصل دوره</h2>
            <div className="space-y-3">
              {curriculum.map((ch, i) => (
                <details key={i} open={i === 0} className="card-glow p-5 group/details">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-[15.5px] font-semibold text-white">
                    {ch.title}
                    <Icon.Arrow
                      width={18}
                      height={18}
                      className="text-ink-400 -rotate-90 group-open/details:rotate-90 transition-transform"
                    />
                  </summary>
                  {ch.lessons.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {ch.lessons.map((l, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-[14px] text-ink-300">
                          <Icon.Play width={13} height={13} className="text-brand-cyan shrink-0" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              ))}
            </div>
          </div>

          {/* sidebar */}
          <aside className="card-glow p-7 lg:sticky lg:top-28">
            <div className="latin text-[30px] font-extrabold text-white">
              {formatPrice(course.price)}
              <span className="font-sans text-[15px] font-normal text-ink-400"> تومان</span>
            </div>
            <div className="text-[13px] text-ink-400 mt-1 mb-6">پرداخت اقساطی در ۲ قسط ممکن است</div>
            <Link href="/start" className="btn-grad w-full mb-3">
              ثبت‌نام در دوره
            </Link>
            <Link href="/contact" className="btn-glass w-full">
              مشاوره رایگان
            </Link>
            <ul className="mt-7 space-y-3.5">
              {includes.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[14px] text-ink-200">
                  <span className="w-5 h-5 rounded-full grid place-items-center bg-brand-cyan/15 text-brand-cyan shrink-0">
                    <Icon.Check width={13} height={13} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
