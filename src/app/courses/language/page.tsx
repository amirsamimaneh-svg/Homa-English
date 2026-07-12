import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { PageIntro } from "@/components/marketing/PageIntro";
import { CourseListClient } from "@/components/marketing/CourseListClient";
import { getCourses } from "@/lib/data";

export const metadata = { title: "دوره‌های زبان انگلیسی — هما" };

export default function LanguageCoursesPage() {
  return (
    <div className="bg-page min-h-screen">
      <Header active="/courses/language" />
      <PageIntro
        eyebrow="آموزش زبان انگلیسی"
        title="دوره‌ای که با هدف شما هم‌راستاست"
        subtitle="از مکالمه روزمره تا آمادگی آیلتس و تافل، برای هر سن و هر سطح."
      />
      <CourseListClient courses={getCourses("language")} />
      <Footer />
    </div>
  );
}
