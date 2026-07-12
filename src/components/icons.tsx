import type { SVGProps } from "react";

/** Minimal geometric line-art of the mythical "Homa" bird. Stroke-only, amber eye dot. */
export function HomaLogo({
  size = 34,
  stroke = "#0F2942",
  float = false,
  ...props
}: { size?: number; stroke?: string; float?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={float ? "animate-homaFloat" : undefined}
      {...props}
    >
      <path
        d="M32 10 C 24 18, 10 20, 4 32 C 14 30, 24 30, 30 36 C 24 40, 16 46, 14 56 C 22 50, 30 46, 32 40 C 34 46, 42 50, 50 56 C 48 46, 40 40, 34 36 C 40 30, 50 30, 60 32 C 54 20, 40 18, 32 10 Z"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="32" cy="24" r="2.2" fill="#D98E3B" />
    </svg>
  );
}

/** The canonical AI marker: a 4-pointed amber sparkle. Reused everywhere "AI" appears. */
export function Sparkle({
  size = 14,
  color = "#D98E3B",
  pulse = false,
  ...props
}: { size?: number; color?: string; pulse?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2l1.6 5.1L19 9l-5.4 1.9L12 16l-1.6-5.1L5 9l5.4-1.9L12 2z"
        fill={color}
        className={pulse ? "animate-sparklePulse" : undefined}
      />
    </svg>
  );
}

/** Faint decorative flight-path + radar line-art behind dark heroes. */
export function FlightPath({ opacity = 0.07 }: { opacity?: number }) {
  return (
    <svg
      className="flightpath"
      viewBox="0 0 1600 500"
      preserveAspectRatio="none"
      style={{ opacity }}
      aria-hidden
    >
      <path
        d="M-50,380 C 250,280 500,430 800,300 C 1100,180 1350,340 1650,220"
        stroke="#D98E3B"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="1420" cy="110" r="70" stroke="#D98E3B" strokeWidth="1" fill="none" />
      <circle cx="1420" cy="110" r="130" stroke="#D98E3B" strokeWidth="1" fill="none" />
      <circle cx="1420" cy="110" r="190" stroke="#D98E3B" strokeWidth="1" fill="none" />
    </svg>
  );
}

/* ---- Generic line icons (1.8–2px stroke, currentColor) ---- */

export function IconBook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 5h16M4 12h10M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 12l7-2 3-8 2 1-2 7 6-1 3 3-8 2-3 8-2-1 2-7-6 1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function IconLms(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );
}

export function IconArrow({ className, ...props }: SVGProps<SVGSVGElement>) {
  // RTL-facing arrow (points left, the "forward" direction in Farsi)
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevron(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
