"use client";

import { useState, useEffect } from "react";
import { PhoneFrame } from "@/components/app/PhoneFrame";
import { quiz, toFa } from "@/lib/data";

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [seconds, setSeconds] = useState(522); // 08:42
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done || seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, done]);

  const q = quiz[index];
  const total = quiz.length;
  const progress = Math.round(((index + (done ? 1 : 0)) / total) * 100);

  const next = () => {
    if (selected === null) return;
    const gotIt = selected === q.correct;
    const newCount = correctCount + (gotIt ? 1 : 0);
    setCorrectCount(newCount);
    if (index + 1 >= total) {
      setDone(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  if (done) {
    const score = Math.round((correctCount / total) * 100);
    const passed = score >= 60;
    return (
      <PhoneFrame bg="#0F2942">
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <ScoreRing score={score} />
          <div className="text-[19px] font-extrabold text-white mb-2.5 mt-6">
            {passed ? "آفرین! قبول شدی" : "نزدیک بودی!"}
          </div>
          <div className="text-[13.5px] text-[#AFC3D6] leading-[1.9] mb-7">
            {toFa(correctCount)} از {toFa(total)} سوال را درست پاسخ دادی
            {passed ? " و به نمره قبولی رسیدی." : "؛ برای قبولی کمی بیشتر تمرین کن."}
          </div>
          <a href="/lms/dashboard" className="btn-primary w-full !rounded-xl">
            بازگشت به دوره
          </a>
        </div>
      </PhoneFrame>
    );
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <PhoneFrame bg="#F5F9FC">
      <div className="pt-14 sm:pt-[100px] px-5 pb-3">
        <div className="flex justify-between items-center mb-3.5">
          <span className="text-[13px] font-bold text-muted">
            سوال {toFa(index + 1)} از {toFa(total)}
          </span>
          <span className="num text-[13px] font-bold text-error">
            {toFa(mm)}:{toFa(ss)}
          </span>
        </div>
        <div className="h-1.5 bg-line rounded-pill overflow-hidden">
          <div className="h-full bg-amber-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="flex-1 overflow-auto px-5 py-3.5">
        <div className="text-base font-bold text-navy-800 leading-[1.9] mb-[22px]">{q.prompt}</div>
        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => (
            <label
              key={i}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-2.5 bg-white rounded-xl p-4 cursor-pointer border-2 transition-colors ${
                selected === i ? "border-amber-500" : "border-line-300"
              }`}
            >
              <input type="radio" checked={selected === i} onChange={() => setSelected(i)} className="accent-amber-500" />
              <span className={`text-[14.5px] ${selected === i ? "font-bold" : ""}`}>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="px-5 pt-4 pb-10">
        <button onClick={next} disabled={selected === null} className="btn-primary w-full !rounded-xl">
          {index + 1 >= total ? "پایان آزمون" : "سوال بعدی"}
        </button>
      </div>
    </PhoneFrame>
  );
}

function ScoreRing({ score }: { score: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 900;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setDisplay(Math.round(t * score));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [score]);

  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (display / 100) * c;

  return (
    <div className="relative w-[120px] h-[120px]">
      <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
        <circle cx="60" cy="60" r={r} stroke="rgba(255,255,255,0.15)" strokeWidth="6" fill="none" />
        <circle
          cx="60"
          cy="60"
          r={r}
          stroke="#D98E3B"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center num text-[32px] font-bold text-white">
        {toFa(display)}٪
      </span>
    </div>
  );
}
