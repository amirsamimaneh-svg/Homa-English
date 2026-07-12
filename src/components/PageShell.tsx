import { Background } from "./Background";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Wraps a page in the shared dark background, floating header, and footer. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      <main className="pt-28">{children}</main>
      <Footer />
    </>
  );
}

/** Standard page heading block used across inner pages. */
export function PageHead({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`wrap ${center ? "text-center" : ""}`}>
      <div className={center ? "max-w-2xl mx-auto" : "max-w-2xl"}>
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h1 className="text-[clamp(2.1rem,5vw,3.4rem)] font-extrabold text-white tracking-tight leading-[1.15]">
          {title}
        </h1>
        {subtitle && <p className="mt-5 text-[17px] text-ink-300 leading-8">{subtitle}</p>}
      </div>
    </div>
  );
}
