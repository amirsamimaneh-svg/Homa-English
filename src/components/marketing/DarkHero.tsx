import { FlightPath } from "../icons";

export function DarkHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative px-6 md:px-20 py-20 bg-navy-900 overflow-hidden text-center">
      <FlightPath opacity={0.07} />
      <div className="relative max-w-[680px] mx-auto">
        {eyebrow && <div className="text-[13px] font-bold text-amber-500 mb-4">{eyebrow}</div>}
        <h1 className="text-[32px] md:text-[40px] font-extrabold text-white leading-[1.5] mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-base text-[#AFC3D6] leading-[1.9]">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

/** Reusable dark CTA banner used at the bottom of several marketing pages. */
export function CTABanner({
  title,
  subtitle,
  buttonLabel = "درخواست مشاوره رایگان",
  href = "/contact",
}: {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="mx-6 md:mx-20 mb-[88px] bg-navy-900 rounded-[24px] p-10 md:p-16 text-center relative overflow-hidden">
      <FlightPath opacity={0.08} />
      <div className="relative">
        <h2 className="text-[26px] font-bold text-white mb-3.5">{title}</h2>
        {subtitle && <p className="text-[15.5px] text-[#AFC3D6] mb-7">{subtitle}</p>}
        <a href={href} className="btn-primary !px-8 !py-4">
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
