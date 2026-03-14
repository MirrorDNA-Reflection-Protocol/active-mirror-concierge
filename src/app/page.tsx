"use client";

import { useState } from "react";
import Link from "next/link";
import { copy } from "@/lib/copy";
import ConciergeWizard from "@/components/ConciergeWizard";

export default function Home() {
  const [wizardActive, setWizardActive] = useState(false);

  if (wizardActive) {
    return <ConciergeWizard />;
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 sm:px-6">
      <div className="animate-fade-in w-full max-w-xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-am-blue/10 ring-1 ring-am-blue/20">
            <svg
              className="h-7 w-7 text-am-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-am-text sm:text-4xl">
          {copy.hero.headline}
        </h1>
        <p className="mb-10 text-base leading-relaxed text-am-muted sm:text-lg">
          {copy.hero.subhead}
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => setWizardActive(true)}
            className="w-full max-w-xs rounded-xl bg-am-blue px-6 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-am-blue/80 active:scale-[0.98] sm:w-auto sm:min-w-[200px]"
          >
            {copy.hero.primaryCta}
          </button>
          <Link
            href="/browse"
            className="w-full max-w-xs rounded-xl border border-am-border px-6 py-3.5 text-center text-base font-medium text-am-text transition-all duration-200 hover:border-am-blue/30 hover:bg-am-card active:scale-[0.98] sm:w-auto sm:min-w-[200px]"
          >
            {copy.hero.secondaryCta}
          </Link>
          <a
            href="https://chetana.activemirror.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-sm text-am-muted underline decoration-am-border underline-offset-4 transition-colors hover:text-am-text"
          >
            {copy.hero.tertiaryCta}
          </a>
        </div>
      </div>

      {/* No-JS fallback content */}
      <noscript>
        <div className="mt-12 w-full max-w-xl rounded-xl border border-am-border bg-am-card p-6 text-center">
          <p className="mb-4 text-am-muted">
            This guided experience requires JavaScript. You can still explore
            directly:
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://chetana.activemirror.ai"
              className="text-am-blue underline"
            >
              Chetana — Scam Protection
            </a>
            <a
              href="https://id.activemirror.ai"
              className="text-am-blue underline"
            >
              ID — Identity Verification
            </a>
            <a
              href="https://github.com/active-mirror/active-mirror-identity"
              className="text-am-blue underline"
            >
              Mirror Seed — Local AI
            </a>
            <a
              href="https://activemirror.ai"
              className="text-am-blue underline"
            >
              Explore the Ecosystem
            </a>
          </div>
        </div>
      </noscript>
    </div>
  );
}
