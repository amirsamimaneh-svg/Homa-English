import Link from "next/link";
import type { Course } from "@/lib/data";
import { formatPrice, toFa, getInstructor } from "@/lib/data";
import { Sparkle } from "../icons";

export function CourseCard({ course, showInstructor = false }: { course: Course; showInstructor?: boolean }) {
  const instructor = showInstructor ? getInstructor(course.instructorId) : undefined;
  const isPilot = course.track === "pilot";

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card overflow-hidden block hover:-translate-y-1 transition-transform"
    >
      <div
        className="h-[120px] flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${course.gradient[0]}, ${course.gradient[1]})` }}
      >
        <span
          className={`text-xs font-bold px-3 py-[5px] rounded-pill ${
            isPilot ? "bg-[rgba(217,142,59,0.2)] text-amber-500" : "bg-navy-800 text-amber-500"
          }`}
        >
          {isPilot ? "خلبانی" : "زبان"}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-muted">{course.level}</span>
          {course.hasAI && <Sparkle size={13} />}
        </div>
        <div className="text-base font-bold mb-2.5 leading-[1.7]">{course.title}</div>
        {instructor && (
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-6 rounded-full bg-navy-100 shrink-0" />
            <span className="text-xs text-muted">{instructor.name}</span>
          </div>
        )}
        <div className="text-xs text-muted mb-2.5">{toFa(course.sessions)} جلسه</div>
        <div className="num text-[17px] font-bold">{formatPrice(course.price)} تومان</div>
      </div>
    </Link>
  );
}
