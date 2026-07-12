export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="px-6 md:px-20 pt-14 pb-5">
      {eyebrow && <div className="text-[13px] font-bold text-amber-600 mb-2.5">{eyebrow}</div>}
      <h1 className="text-[32px] font-extrabold mb-3">{title}</h1>
      {subtitle && (
        <p className="text-[15px] text-muted max-w-[600px] leading-[1.85]">{subtitle}</p>
      )}
    </section>
  );
}
