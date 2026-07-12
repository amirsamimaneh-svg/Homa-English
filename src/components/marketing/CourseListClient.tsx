"use client";

import { useMemo, useState } from "react";
import type { Course } from "@/lib/data";
import { toFa } from "@/lib/data";
import { CourseCard } from "./CourseCard";

type Sort = "popular" | "cheap" | "expensive";

const modeLabels: Record<Course["mode"], string> = {
  online: "آنلاین زنده",
  "in-person": "حضوری",
  hybrid: "ترکیبی",
};

export function CourseListClient({ courses }: { courses: Course[] }) {
  const categories = useMemo(
    () => Array.from(new Set(courses.map((c) => c.category))),
    [courses]
  );
  const levels = useMemo(
    () => Array.from(new Set(courses.map((c) => c.level))),
    [courses]
  );
  const modes = useMemo(
    () => Array.from(new Set(courses.map((c) => c.mode))),
    [courses]
  );

  const [selCats, setSelCats] = useState<string[]>([]);
  const [selLevels, setSelLevels] = useState<string[]>([]);
  const [selModes, setSelModes] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>("popular");

  const toggle = (
    value: string,
    list: string[],
    setter: (v: string[]) => void
  ) => {
    setter(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    let result = courses.filter((c) => {
      if (selCats.length && !selCats.includes(c.category)) return false;
      if (selLevels.length && !selLevels.includes(c.level)) return false;
      if (selModes.length && !selModes.includes(c.mode)) return false;
      return true;
    });
    if (sort === "cheap") result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === "expensive") result = [...result].sort((a, b) => b.price - a.price);
    else result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return result;
  }, [courses, selCats, selLevels, selModes, sort]);

  const FilterGroup = ({
    title,
    options,
    selected,
    onToggle,
    labelFn,
  }: {
    title: string;
    options: string[];
    selected: string[];
    onToggle: (v: string) => void;
    labelFn?: (v: string) => string;
  }) => (
    <div className="mb-6 last:mb-0">
      <div className="text-[13px] font-bold text-muted mb-3">{title}</div>
      <div className="flex flex-col gap-2.5 text-sm">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => onToggle(opt)}
              className="w-4 h-4 accent-amber-500"
            />
            {labelFn ? labelFn(opt) : opt}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="px-6 md:px-20 pb-24 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 max-w-[1440px] mx-auto">
      {/* Filters */}
      <aside className="card p-6 self-start lg:sticky lg:top-24 h-fit">
        <div className="text-[15px] font-bold mb-5">فیلترها</div>
        <FilterGroup
          title="نوع دوره"
          options={categories}
          selected={selCats}
          onToggle={(v) => toggle(v, selCats, setSelCats)}
        />
        <FilterGroup
          title="سطح"
          options={levels}
          selected={selLevels}
          onToggle={(v) => toggle(v, selLevels, setSelLevels)}
        />
        <FilterGroup
          title="نحوه برگزاری"
          options={modes}
          selected={selModes}
          onToggle={(v) => toggle(v, selModes, setSelModes)}
          labelFn={(v) => modeLabels[v as Course["mode"]]}
        />
      </aside>

      {/* Grid */}
      <div>
        <div className="flex justify-between items-center mb-5">
          <div className="text-sm text-muted">{toFa(filtered.length)} دوره یافت شد</div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="px-3.5 py-2 rounded-lg border-[1.5px] border-line-200 text-[13.5px] bg-white cursor-pointer outline-none focus:border-amber-500"
          >
            <option value="popular">مرتب‌سازی: محبوب‌ترین</option>
            <option value="cheap">ارزان‌ترین</option>
            <option value="expensive">گران‌ترین</option>
          </select>
        </div>

        {filtered.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((c) => (
              <CourseCard key={c.slug} course={c} showInstructor />
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center text-muted">
            دوره‌ای با این فیلترها یافت نشد.
          </div>
        )}
      </div>
    </div>
  );
}
