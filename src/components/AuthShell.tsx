import Link from "next/link";
import { Background } from "./Background";
import { Logo } from "./icons";

/** Centered glass card layout for auth / onboarding screens. */
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <>
      <Background />
      <div className="min-h-screen grid place-items-center px-6 py-16">
        <div className="w-full max-w-md">
          <Link href="/" className="flex justify-center text-white mb-8">
            <Logo />
          </Link>
          <div className="card-glow p-8 sm:p-10">
            <h1 className="text-[24px] font-extrabold text-white text-center">{title}</h1>
            {subtitle && <p className="text-[14px] text-ink-400 text-center mt-2 mb-7">{subtitle}</p>}
            <div className={subtitle ? "" : "mt-7"}>{children}</div>
          </div>
          {footer && <div className="text-center text-[14px] text-ink-400 mt-6">{footer}</div>}
        </div>
      </div>
    </>
  );
}
