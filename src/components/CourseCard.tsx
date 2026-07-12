import Link from "next/link";
import type { Course } from "@/lib/data";
import { formatPrice, toFa } from "@/lib/data";
import { Icon } from "./icons";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card-glow group p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="pill !py-1 !px-3 !text-[12px]">{course.tag}</span>
        <span className="latin text-[12.5px] font-bold gradient-text">{course.cefr}</span>
      </div>
      <h3 className="text-[19px] font-bold text-white mb-2">{course.title}</h3>
      <p className="text-[14px] text-ink-400 leading-7 flex-1">{course.summary}</p>
      <div className="flex items-center gap-3 mt-5 text-[13px] text-ink-400">
        <span>{toFa(course.lessons)} درس</span>
        <span className="w-1 h-1 rounded-full bg-ink-500" />
        <span>{toFa(course.weeks)} هفته</span>
      </div>
      <div className="flex items-center justify-between mt-5 pt-5 border-t border-white/10">
        <span className="latin text-[15px] font-bold text-white">
          {formatPrice(course.price)}
          <span className="font-sans text-[13px] font-normal text-ink-400"> تومان</span>
        </span>
        <span className="flex items-center gap-1 text-[14px] font-semibold text-ink-200 group-hover:text-brand-cyan transition-colors">
          مشاهده
          <Icon.Arrow width={16} height={16} />
        </span>
      </div>
    </Link>
  );
}
