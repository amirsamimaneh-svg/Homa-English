import Link from "next/link";
import { PhoneFrame } from "@/components/app/PhoneFrame";
import { Sparkle, IconCheck } from "@/components/icons";

export const metadata = { title: "درس تمام شد — هما" };

const confetti = [
  { cx: 60, cy: 120, r: 6 },
  { cx: 340, cy: 180, r: 8 },
  { cx: 90, cy: 260, r: 5 },
  { cx: 310, cy: 90, r: 4 },
  { cx: 200, cy: 140, r: 6 },
  { cx: 40, cy: 200, r: 4 },
  { cx: 360, cy: 320, r: 5 },
  { cx: 120, cy: 380, r: 6 },
];

export default function LessonCompletePage() {
  return (
    <PhoneFrame bg="#D98E3B">
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <svg className="flightpath" viewBox="0 0 400 800" preserveAspectRatio="none" style={{ opacity: 0.12 }} aria-hidden>
          {confetti.map((c, i) => (
            <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="#fff" />
          ))}
        </svg>

        <div className="relative pt-20 sm:pt-[110px] px-7 text-center w-full box-border">
          <div className="text-[22px] font-extrabold text-white mb-1.5">درس تمام شد! 🎉</div>
          <div className="text-sm text-white/85 mb-8">آمادگی آیلتس ۷ · درس ۴</div>

          <div className="bg-white rounded-[20px] p-7 mb-5">
            <div className="flex justify-around mb-6">
              <Stat bg="#E4F5EC" value="۴۰" label="XP" icon={<Sparkle size={22} color="#34B37A" />} />
              <Stat
                bg="#FBEBD4"
                value="۹۰٪"
                label="دقت"
                icon={<IconCheck width={22} height={22} className="text-amber-600" />}
              />
              <Stat bg="#FDECEC" value="۶۱" label="استریک" icon={<span className="text-xl">🔥</span>} />
            </div>

            <div className="bg-page rounded-[14px] p-4">
              <div className="flex justify-between text-[12.5px] text-muted mb-2">
                <span>پیشرفت درس ۴</span>
                <span>۸۰٪</span>
              </div>
              <div className="h-2 bg-line rounded-pill overflow-hidden">
                <div className="h-full bg-xp w-[80%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-auto w-full box-border px-6 pb-10">
          <Link href="/learn/path" className="btn-secondary w-full !rounded-xl !bg-navy-800">
            ادامه مسیر
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}

function Stat({
  bg,
  value,
  label,
  icon,
}: {
  bg: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-2.5"
        style={{ background: bg }}
      >
        {icon}
      </div>
      <div className="num text-xl font-bold text-navy-800">{value}</div>
      <div className="text-[11.5px] text-muted mt-0.5">{label}</div>
    </div>
  );
}
