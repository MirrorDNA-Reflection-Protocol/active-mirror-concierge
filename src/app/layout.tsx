import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Active Mirror Concierge",
  description:
    "Start with your need. Get the right Active Mirror path. Protection, identity, local AI, and guided trust tools in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-am-bg text-am-text antialiased">
        <header className="sticky top-0 z-50 border-b border-am-border bg-am-bg/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-am-blue">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-am-text">
                Active Mirror
              </span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link
                href="/browse"
                className="text-sm text-am-muted transition-colors hover:text-am-text"
              >
                Browse all
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-4xl">{children}</main>
        <footer className="mt-auto border-t border-am-border py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="text-center text-xs text-am-muted">
              Active Mirror — trustworthy routing for real needs.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
