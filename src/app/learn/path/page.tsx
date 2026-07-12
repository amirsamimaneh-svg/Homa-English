import Link from "next/link";
import { PhoneFrame } from "@/components/app/PhoneFrame";
import { LearnTabBar } from "@/components/app/LearnTabBar";
import { Sparkle } from "@/components/icons";

export const metadata = { title: "مسیر یادگیری — هما" };

const IconCheckNode = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="11" width="14" height="9" rx="2" stroke="#9DAEBB" strokeWidth="1.8" />
    <path d="M8 11V7a4 4 0 018 0v4" stroke="#9DAEBB" strokeWidth="1.8" />
  </svg>
);
const IconChest = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="8" width="18" height="12" rx="2" stroke="#BD7527" strokeWidth="1.8" />
    <path d="M3 12h18" stroke="#BD7527" strokeWidth="1.8" />
    <path d="M9 8V6a3 3 0 016 0v2" stroke="#BD7527" strokeWidth="1.8" />
  </svg>
);

function StatChip({ icon, value, color }: { icon: React.ReactNode; value: string; color: string }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-pill px-3.5 py-2 shadow-[0_2px_6px_rgba(15,41,66,0.06)]">
      {icon}
      <span className="num text-sm font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  );
}

export default function SkillPathPage() {
  return (
    <PhoneFrame bg="#FDF6EC">
      {/* Status row */}
      <div className="pt-14 sm:pt-[100px] px-5 pb-3.5 flex items-center justify-between">
        <StatChip icon={<span className="text-base">🔥</span>} value="۶۰" color="#FF7A45" />
        <StatChip icon={<Sparkle size={15} color="#34B37A" />} value="۲,۴۵۰" color="#34B37A" />
        <StatChip icon={<span className="text-[15px]">❤️</span>} value="۵" color="#0F2942" />
      </div>

      {/* Winding node path */}
      <div className="flex-1 overflow-auto pt-2.5 pb-10 relative">
        <div className="text-center text-[12.5px] font-bold text-muted mb-6">آمادگی آیلتس ۷ · درس ۴</div>
        <div className="flex flex-col items-center gap-9 relative">
          {/* node 1 done */}
          <div className="w-[68px] h-[68px] rounded-full bg-xp shadow-[0_5px_0_#248F5F] flex items-center justify-center">
            <IconCheckNode />
          </div>
          {/* node 2 done, offset */}
          <div className="w-[68px] h-[68px] rounded-full bg-xp shadow-[0_5px_0_#248F5F] flex items-center justify-center ms-[90px]">
            <IconCheckNode />
          </div>
          {/* node 3 current */}
          <Link href="/learn/exercise" className="relative mt-5.5 block">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy-800 text-white text-[11px] font-bold px-3 py-1 rounded-pill whitespace-nowrap">
              شروع
            </div>
            <div className="w-20 h-20 rounded-full bg-amber-500 shadow-[0_6px_0_#BD7527] flex items-center justify-center">
              <Sparkle size={34} color="#fff" />
            </div>
          </Link>
          {/* node 4 locked, offset */}
          <div className="w-[68px] h-[68px] rounded-full bg-line-300 shadow-[0_5px_0_#CBD4DC] flex items-center justify-center me-[90px]">
            <IconLock />
          </div>
          {/* node 5 locked */}
          <div className="w-[68px] h-[68px] rounded-full bg-line-300 shadow-[0_5px_0_#CBD4DC] flex items-center justify-center">
            <IconLock />
          </div>
          {/* chest */}
          <div className="w-[60px] h-[60px] rounded-card bg-amber-100 flex items-center justify-center ms-[90px]">
            <IconChest />
          </div>
        </div>
      </div>

      <LearnTabBar active="path" />
    </PhoneFrame>
  );
}
