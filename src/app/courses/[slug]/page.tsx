import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { Sparkle, IconCheck } from "@/components/icons";
import {
  courses,
  getCourse,
  getInstructor,
  getCurriculum,
  getReviews,
  courseFeatures,
  formatPrice,
  toFa,
} from "@/lib/data";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const instructor = getInstructor(course.instructorId);
  const curriculum = getCurriculum(course);
  const reviews = getReviews(course);
  const features = courseFeatures(course);
  const isPilot = course.track === "pilot";

  return (
    <div className="bg-page min-h-screen">
      <Header active={isPilot ? "/courses/pilot" : "/courses/language"} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-20 pt-5 text-[13px] text-muted flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-navy-800">خانه</Link>
        <span>›</span>
        <Link href={isPilot ? "/courses/pilot" : "/courses/language"} className="hover:text-navy-800">
          {isPilot ? "دوره‌های خلبانی" : "دوره‌های زبان"}
        </Link>
        <span>›</span>
        <span className="text-navy-800">{course.title}</span>
      </div>

      <div className="px-6 md:px-20 pt-6 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 max-w-[1440px] mx-auto items-start">
        {/* Main */}
        <div>
          <div className="flex gap-2.5 mb-5 flex-wrap">
            <span className="tag-amber">{course.level}</span>
            <span className="tag-level">{course.category}</span>
          </div>
          <h1 className="text-[32px] font-extrabold mb-4 leading-[1.5]">{course.title}</h1>
          <p className="text-[15.5px] text-muted leading-[1.9] mb-8 max-w-[640px]">{course.summary}</p>

          <div
            className="h-[260px] rounded-card mb-10 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${course.gradient[0]}, ${course.gradient[1]})` }}
          >
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill={isPilot ? "#D98E3B" : "#8A5321"} />
            </svg>
          </div>

          {/* Curriculum */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-5">سرفصل دوره</h2>
            <div className="flex flex-col gap-3">
              {curriculum.map((chapter, i) => (
                <details
                  key={i}
                  open={i === 0}
                  className="bg-white border border-line rounded-xl px-5 py-[18px] group"
                >
                  <summary className="text-[15px] font-bold cursor-pointer list-none flex items-center justify-between">
                    {chapter.title}
                    <span className="text-muted transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  {chapter.lessons.length > 0 && (
                    <div className="text-sm text-muted mt-3 leading-[2]">
                      {chapter.lessons.map((l, j) => (
                        <div key={j}>{l}</div>
                      ))}
                    </div>
                  )}
                </details>
              ))}
            </div>
          </div>

          {/* Instructor */}
          {instructor && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-5">مدرس دوره</h2>
              <div className="card p-6 flex gap-5 items-center">
                <div className="w-[72px] h-[72px] rounded-full bg-navy-100 shrink-0" />
                <div>
                  <div className="text-base font-bold mb-1.5">{instructor.name}</div>
                  <div className="text-[13.5px] text-muted leading-[1.8]">{instructor.bio}</div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews */}
          <div>
            <h2 className="text-xl font-bold mb-5">نظرات دانشجویان</h2>
            <div className="flex flex-col gap-3.5">
              {reviews.map((r, i) => (
                <div key={i} className="card p-5">
                  <div className="text-sm font-bold mb-1.5">
                    {r.name} — <span className="text-amber-500">{"★".repeat(r.rating)}</span>
                  </div>
                  <div className="text-[13.5px] text-muted leading-[1.8]">{r.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="card p-7 lg:sticky lg:top-24">
          <div className="num text-[28px] font-bold mb-1">{formatPrice(course.price)} تومان</div>
          <div className="text-[13px] text-muted mb-6">امکان پرداخت اقساطی در ۲ قسط</div>
          <Link href={`/app/checkout?course=${course.slug}`} className="btn-primary w-full mb-3">
            ثبت‌نام در دوره
          </Link>
          <Link href="/contact" className="btn-outline w-full">
            مشاوره رایگان
          </Link>

          <div className="mt-7 flex flex-col gap-3.5 text-sm text-body">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2.5">
                {course.hasAI && i === features.length - 1 ? (
                  <Sparkle size={16} />
                ) : (
                  <IconCheck width={16} height={16} className="text-success shrink-0" />
                )}
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
