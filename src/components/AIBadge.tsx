import { Sparkle } from "./icons";

type Variant = "light" | "dark" | "card";

/**
 * The single, canonical "AI" visual marker for the whole platform:
 * a 4-pointed amber sparkle + amber tint + amber label. Never re-implement
 * this pattern per screen — always use this component.
 */
export function AIBadge({
  children = "ساخته‌شده با AI",
  variant = "light",
  pulse = false,
  className = "",
}: {
  children?: React.ReactNode;
  variant?: Variant;
  pulse?: boolean;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    light: "bg-amber-100 text-amber-700",
    dark: "bg-navy-800 text-amber-500",
    card: "bg-[rgba(217,142,59,0.16)] text-amber-500",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill px-4 py-[7px] text-[13px] font-bold ${styles[variant]} ${className}`}
    >
      <Sparkle size={14} pulse={pulse} />
      {children}
    </span>
  );
}

/**
 * AI content card: white card with dashed amber border + sparkle-labeled header.
 * Used for AI feedback / analysis boxes.
 */
export function AICard({
  title = "تحلیل هوشمند AI",
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-card border-2 border-dashed border-[#D9C3A0] p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2.5">
        <Sparkle size={18} pulse />
        <span className="text-[13px] font-bold text-amber-700">{title}</span>
      </div>
      <div className="text-sm text-muted leading-[1.8]">{children}</div>
    </div>
  );
}
