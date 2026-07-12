import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageIntro } from "@/components/marketing/PageIntro";
import { CourseListClient } from "@/components/marketing/CourseListClient";
import { getCourses } from "@/lib/data";

export const metadata = { title: "دوره‌های خلبانی — هما" };

export default function PilotCoursesPage() {
  return (
    <div className="bg-page min-h-screen">
      <Header active="/courses/pilot" />
      <PageIntro
        eyebrow="آموزش خلبانی"
        title="مسیر حرفه‌ای شدن در هوانوردی"
        subtitle="تئوری هوانوردی، ناوبری، هواشناسی و آماده‌سازی کامل برای آزمون‌های استاندارد خلبانی."
      />
      <CourseListClient courses={getCourses("pilot")} />
      <Footer />
    </div>
  );
}
