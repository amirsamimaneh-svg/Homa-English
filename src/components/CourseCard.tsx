import Link from "next/link";
import type { Course } from "@/lib/data";
import { formatPrice, toFa } from "@/lib/data";
import { Icon } from "./icons";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card group p-6 flex flex-col transition-all duration-200 hover:border-ink-300 hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="pill">{course.tag}</span>
        <span className="latin text-[13px] font-semibold text-accent-600">{course.cefr}</span>
      </div>
      <h3 className="text-[19px] font-bold text-ink-950 mb-2">{course.title}</h3>
      <p className="text-[14px] text-ink-500 leading-7 flex-1">{course.summary}</p>
      <div className="flex items-center gap-4 mt-5 text-[13px] text-ink-500">
        <span>{toFa(course.lessons)} درس</span>
        <span className="w-1 h-1 rounded-full bg-ink-300" />
        <span>{toFa(course.weeks)} هفته</span>
      </div>
      <div className="flex items-center justify-between mt-5 pt-5 border-t border-line">
        <span className="latin text-[15px] font-bold text-ink-950">
          {formatPrice(course.price)}
          <span className="text-[13px] font-normal text-ink-500 font-sans"> تومان</span>
        </span>
        <span className="flex items-center gap-1 text-[14px] font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">
          مشاهده
          <Icon.Arrow width={16} height={16} />
        </span>
      </div>
    </Link>
  );
}
