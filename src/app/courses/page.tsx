import { PageShell, PageHead } from "@/components/PageShell";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/data";

export const metadata = { title: "دوره‌ها — هما" };

export default function CoursesPage() {
  return (
    <PageShell>
      <section className="pb-8 pt-4">
        <PageHead
          eyebrow="دوره‌ها"
          title={
            <>
              مسیر یادگیری‌ات را <span className="gradient-text">انتخاب کن</span>
            </>
          }
          subtitle="از مکالمه‌ی روزمره تا آمادگی آزمون‌های بین‌المللی — برای هر سطح و هر هدف."
        />
      </section>
      <section className="wrap py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
