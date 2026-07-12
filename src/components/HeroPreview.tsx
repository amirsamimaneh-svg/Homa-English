import { Icon } from "./icons";

/** Floating glass "lesson" mock shown in the hero to convey the live product. */
export function HeroPreview() {
  return (
    <div className="relative">
      {/* glow behind */}
      <div className="absolute inset-0 -m-10 blob bg-brand-violet/30 animate-pulseGlow" />
      <div className="absolute inset-0 -m-6 blob bg-brand-cyan/20" />

      <div className="relative glass-strong rounded-[26px] p-5 shadow-2xl animate-float">
        {/* top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="latin text-[12px] text-ink-300">درس ۴</span>
            <div className="w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-l from-brand-violet to-brand-cyan" />
            </div>
          </div>
          <div className="flex items-center gap-1 latin text-[13px] font-semibold text-brand-cyan">
            <Icon.Bolt width={15} height={15} />
            ۲٬۴۵۰
          </div>
        </div>

        {/* prompt */}
        <div className="text-[13px] text-ink-400 mb-2">این جمله را به انگلیسی بگو</div>
        <div className="text-[17px] font-bold text-white mb-5">او هر روز ورزش می‌کند.</div>

        {/* answer chips */}
        <div className="flex flex-wrap gap-2 mb-3" dir="ltr">
          {["He", "exercises"].map((w) => (
            <span
              key={w}
              className="latin text-[14px] font-semibold text-white px-3.5 py-2 rounded-xl bg-gradient-to-b from-brand-violet/30 to-brand-indigo/20 border border-brand-violet/40"
            >
              {w}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pb-5 mb-5 border-b border-white/10" dir="ltr">
          {["every", "morning"].map((w) => (
            <span key={w} className="latin text-[14px] font-semibold text-ink-200 px-3.5 py-2 rounded-xl glass">
              {w}
            </span>
          ))}
        </div>

        {/* AI feedback chip */}
        <div className="flex items-start gap-2.5 rounded-2xl p-3.5 bg-gradient-to-l from-brand-violet/15 to-brand-cyan/10 border border-white/10">
          <span className="mt-0.5 shrink-0 w-7 h-7 rounded-full grid place-items-center bg-gradient-to-br from-brand-violet to-brand-cyan text-white">
            <Icon.Sparkle width={14} height={14} />
          </span>
          <p className="text-[12.5px] text-ink-200 leading-6">
            <b className="text-white">دستیار هوشمند:</b> با فاعل سوم‌شخص، فعل «s» می‌گیرد →{" "}
            <span className="latin">exercises</span>
          </p>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-5 -left-4 glass-strong rounded-2xl px-4 py-3 animate-floatSlow flex items-center gap-2.5">
        <span className="w-9 h-9 rounded-xl grid place-items-center bg-gradient-to-br from-brand-fuchsia to-brand-violet text-white">
          <Icon.Check width={18} height={18} />
        </span>
        <div>
          <div className="latin text-[15px] font-bold text-white leading-none">۶۱</div>
          <div className="text-[11px] text-ink-400 mt-1">روز پیاپی 🔥</div>
        </div>
      </div>
    </div>
  );
}
