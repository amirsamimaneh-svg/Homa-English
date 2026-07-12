"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/app/PhoneFrame";
import { Sparkle } from "@/components/icons";

/**
 * Gamified exercise flow: word-arrange → listening → speaking.
 * A wrong answer routes to the AI-feedback screen (the canonical
 * "توضیح هوشمند" pattern) before continuing. Finishing all three
 * exercises advances to the Lesson Complete screen.
 */

const TOTAL = 3;
const CORRECT_SENTENCE = ["He", "exercises", "every", "morning"];
const WORD_BANK = ["He", "exercises", "every", "morning"];
const LISTEN_ANSWER = "i go to work by bus";

type Screen = "exercise" | "feedback";

function Hearts({ count }: { count: number }) {
  return (
    <span className="text-base tracking-tight">
      {"❤️".repeat(count)}
      {"🤍".repeat(5 - count)}
    </span>
  );
}

function ProgressHeader({ step, hearts }: { step: number; hearts: number }) {
  const progress = Math.round((step / TOTAL) * 100);
  return (
    <div className="pt-14 sm:pt-[100px] px-5 flex items-center gap-3">
      <Hearts count={hearts} />
      <div className="flex-1 h-2.5 bg-line rounded-pill overflow-hidden">
        <div className="h-full bg-xp transition-all" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default function ExercisePage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0..2
  const [hearts, setHearts] = useState(4);
  const [screen, setScreen] = useState<Screen>("exercise");
  const [recording, setRecording] = useState(false);

  // word-arrange state
  const [answer, setAnswer] = useState<string[]>([]);
  const remaining = WORD_BANK.filter((w) => {
    const usedCount = answer.filter((a) => a === w).length;
    const bankCount = WORD_BANK.filter((b) => b === w).length;
    return usedCount < bankCount;
  });

  // listening state
  const [typed, setTyped] = useState("");

  const advance = () => {
    if (step + 1 >= TOTAL) {
      router.push("/learn/complete");
    } else {
      setStep(step + 1);
      setScreen("exercise");
      setAnswer([]);
      setTyped("");
    }
  };

  const checkWordArrange = () => {
    const correct = answer.join(" ") === CORRECT_SENTENCE.join(" ");
    if (correct) advance();
    else {
      setHearts((h) => Math.max(0, h - 1));
      setScreen("feedback");
    }
  };

  const checkListening = () => {
    const correct = typed.trim().toLowerCase().replace(/[.]/g, "") === LISTEN_ANSWER;
    if (correct) advance();
    else {
      setHearts((h) => Math.max(0, h - 1));
      setScreen("feedback");
    }
  };

  // ---- AI feedback screen ----
  if (screen === "feedback") {
    const isListen = step === 1;
    const your = isListen ? typed || "—" : answer.join(" ") || "—";
    const right = isListen ? "I go to work by bus." : "He exercises every morning.";
    return (
      <PhoneFrame bg="#fff">
        <ProgressHeader step={step} hearts={hearts} />
        <div className="flex-1 px-5 pt-7 overflow-auto">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-full bg-[#FDECEC] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="#D64545" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-base font-extrabold text-error">پاسخ درست نبود</div>
          </div>

          <div className="bg-page rounded-[14px] p-4 mb-4">
            <div className="text-xs text-faint mb-1.5">پاسخ تو</div>
            <div className="num text-[15px] text-error line-through text-left" dir="ltr">
              {your}
            </div>
          </div>
          <div className="bg-success-bg rounded-[14px] p-4 mb-6">
            <div className="text-xs text-muted mb-1.5">پاسخ صحیح</div>
            <div className="num text-[15px] text-success-text font-bold text-left" dir="ltr">
              {right}
            </div>
          </div>

          <div className="flex gap-2.5 items-start bg-amber-100 rounded-[14px] p-4">
            <Sparkle size={18} color="#BD7527" pulse />
            <div className="text-[13px] text-amber-700 leading-[1.9]">
              <b>توضیح هوشمند:</b>{" "}
              {isListen
                ? "به تلفظ کامل جمله دقت کن؛ حرف اضافه «by» برای وسیله نقلیه استفاده می‌شود: «by bus»."
                : "با فاعل سوم‌شخص مفرد (he/she/it) باید به فعل زمان حال ساده حرف «s» اضافه شود؛ پس «exercise» درست است «exercises»."}
            </div>
          </div>
        </div>
        <div className="px-5 pt-4 pb-10">
          <button onClick={advance} className="btn-primary w-full !rounded-xl">
            ادامه
          </button>
        </div>
      </PhoneFrame>
    );
  }

  // ---- Exercise 1: word arrange ----
  if (step === 0) {
    return (
      <PhoneFrame bg="#fff">
        <ProgressHeader step={step} hearts={hearts} />
        <div className="flex-1 px-5 pt-8">
          <div className="text-[13px] font-bold text-muted mb-3.5">این جمله را به انگلیسی بچین</div>
          <div className="text-[19px] font-extrabold text-navy-800 mb-8 leading-[1.8]">
            او هر روز صبح ورزش می‌کند.
          </div>

          <div
            className="flex flex-wrap gap-2.5 min-h-20 border-b-2 border-line pb-5 mb-7"
            dir="ltr"
          >
            {answer.map((w, i) => (
              <button
                key={i}
                onClick={() => setAnswer(answer.filter((_, j) => j !== i))}
                className="bg-amber-100 border-2 border-amber-500 text-amber-700 num text-[15px] font-bold px-[18px] py-2.5 rounded-xl"
              >
                {w}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-faint mb-3.5">کلمات باقی‌مانده</div>
          <div className="flex flex-wrap gap-2.5" dir="ltr">
            {remaining.map((w, i) => (
              <button
                key={i}
                onClick={() => setAnswer([...answer, w])}
                className="bg-page border-[1.5px] border-line-300 text-navy-800 num text-[15px] font-bold px-[18px] py-2.5 rounded-xl"
              >
                {w}
              </button>
            ))}
          </div>
        </div>
        <div className="px-5 pt-4 pb-10">
          <button onClick={checkWordArrange} disabled={answer.length === 0} className="btn-primary w-full !rounded-xl">
            بررسی پاسخ
          </button>
        </div>
      </PhoneFrame>
    );
  }

  // ---- Exercise 2: listening ----
  if (step === 1) {
    return (
      <PhoneFrame bg="#fff">
        <ProgressHeader step={step} hearts={hearts} />
        <div className="flex-1 flex flex-col items-center px-6 pt-8 text-center">
          <div className="text-[13px] font-bold text-muted mb-7">به جمله گوش کن و بنویس</div>
          <button className="w-[88px] h-[88px] rounded-full bg-amber-100 flex items-center justify-center mb-8 text-amber-600">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" />
              <path d="M16 8a5 5 0 010 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <input
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="I go to work by bus"
            className="input-ltr !text-center"
            dir="ltr"
          />
          <div className="text-[11px] text-faint mt-3">راهنمایی: «I go to work by bus»</div>
        </div>
        <div className="px-5 pt-4 pb-10">
          <button onClick={checkListening} disabled={!typed.trim()} className="btn-primary w-full !rounded-xl">
            بررسی پاسخ
          </button>
        </div>
      </PhoneFrame>
    );
  }

  // ---- Exercise 3: speaking ----
  return (
    <PhoneFrame bg="#fff">
      <ProgressHeader step={step} hearts={hearts} />
      <div className="flex-1 flex flex-col items-center px-6 pt-8 text-center">
        <div className="text-[13px] font-bold text-muted mb-5">این جمله را با صدای بلند بخوان</div>
        <div className="num text-[22px] font-bold text-navy-800 mb-10" dir="ltr">
          &quot;I go to work by bus.&quot;
        </div>
        <button
          onClick={() => setRecording(true)}
          className="w-24 h-24 rounded-full bg-error flex items-center justify-center mb-5 shadow-[0_0_0_10px_rgba(214,69,69,0.12)]"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <rect x="9" y="3" width="6" height="12" rx="3" fill="#fff" />
            <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <div className="text-[12.5px] text-faint">{recording ? "در حال ضبط... دوباره لمس کن" : "برای ضبط صدا لمس کن"}</div>
      </div>
      <div className="px-5 pt-4 pb-10">
        <button
          onClick={advance}
          className={recording ? "btn-primary w-full !rounded-xl" : "btn w-full !rounded-xl bg-page text-faint !py-[15px]"}
        >
          ادامه
        </button>
      </div>
    </PhoneFrame>
  );
}
