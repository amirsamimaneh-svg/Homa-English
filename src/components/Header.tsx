"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./icons";

const nav = [
  { href: "/courses", label: "دوره‌ها" },
  { href: "/method", label: "روش هما" },
  { href: "/pricing", label: "قیمت‌ها" },
  { href: "/about", label: "درباره" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="wrap pt-4">
        <div className="glass-strong rounded-3xl">
          <div className="flex items-center justify-between h-14 pr-5 pl-2.5">
            <Link href="/" className="text-white" onClick={() => setOpen(false)}>
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center gap-7 text-[14.5px] text-ink-300">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn-ghost hidden sm:inline-flex !py-2">
                ورود
              </Link>
              <Link href="/start" className="btn-grad !px-5 !py-2.5 !text-[14px]">
                شروع رایگان
              </Link>
              {/* mobile menu toggle */}
              <button
                aria-label="منو"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden w-9 h-9 grid place-items-center text-ink-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* mobile dropdown */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-5 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[15px] text-ink-200 hover:text-white transition-colors"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] text-ink-200 hover:text-white transition-colors border-t border-white/10 mt-1 pt-3"
              >
                ورود
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
