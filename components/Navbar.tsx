
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090b0a]/80 backdrop-blur-2xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        {/* BRAND */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="group flex shrink-0 items-center text-xl font-bold tracking-[-0.07em] text-[#f4f7f2] transition-opacity hover:opacity-80"
        >
          Rinanda
          <span className="ml-0.5 text-[#c5ff5b] transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(197,255,91,0.7)]">
            .
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={`Navigate to ${item.label}`}
              className="group relative whitespace-nowrap py-2 text-[12px] font-medium text-[#929d8e] transition-colors duration-300 hover:text-[#c5ff5b] xl:text-[13px]"
            >
              {item.label}

              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#c5ff5b] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}

          <a
            href="mailto:nandailham79@gmail.com"
            aria-label="Send an email to Rinanda"
            className="group ml-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#c5ff5b]/25 bg-[#c5ff5b]/[0.06] px-4 py-2.5 text-xs font-semibold text-[#d5f8a5] transition duration-300 hover:-translate-y-0.5 hover:border-[#c5ff5b]/50 hover:bg-[#c5ff5b]/[0.12] hover:shadow-[0_8px_30px_rgba(197,255,91,0.08)]"
          >
            Let&apos;s Talk
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </a>
        </div>

        {/* MOBILE NAVIGATION */}
        <details className="group relative lg:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-[#dce4d6] transition duration-300 hover:border-[#c5ff5b]/30 hover:bg-[#c5ff5b]/[0.06] [&::-webkit-details-marker]:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span className="block h-0.5 w-full rounded-full bg-current transition-transform duration-300 group-open:translate-y-[7px] group-open:rotate-45" />
              <span className="block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 group-open:opacity-0" />
              <span className="block h-0.5 w-full rounded-full bg-current transition-transform duration-300 group-open:-translate-y-[7px] group-open:-rotate-45" />
            </span>
          </summary>

          <div className="absolute right-0 top-[58px] w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#101310]/[0.98] shadow-2xl shadow-black/60 backdrop-blur-2xl">
            {/* MENU HEADER */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#7d887c]">
                  Navigation
                </p>
                <p className="mt-1 text-sm font-semibold text-[#f4f7f2]">
                  Explore my portfolio
                </p>
              </div>

              <span className="text-sm font-bold tracking-tight text-[#c5ff5b]">
                Rinanda.
              </span>
            </div>

            {/* MENU LINKS */}
            <div className="px-3 py-3">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={`Navigate to ${item.label}`}
                  className="group/link flex items-center justify-between rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-[#c5ff5b]/[0.06]"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-5 text-[10px] font-semibold tabular-nums text-[#64705e] transition-colors group-hover/link:text-[#c5ff5b]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-[#b5beb0] transition-colors group-hover/link:text-white">
                      {item.label}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="translate-x-0 text-[#788473] transition duration-200 group-hover/link:translate-x-1 group-hover/link:text-[#c5ff5b]"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* MOBILE CONTACT BUTTON */}
            <div className="border-t border-white/[0.07] p-4">
              <a
                href="mailto:nandailham79@gmail.com"
                aria-label="Send an email to Rinanda"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#c5ff5b] px-5 py-3.5 text-sm font-bold text-[#11150c] transition duration-300 hover:bg-[#d5ff8a]"
              >
                Let&apos;s Talk
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
