"use client";

const contactItems = [
  {
    label: "Email",
    value: "nandailham79@gmail.com",
    href: "mailto:nandailham79@gmail.com",
    icon: "✉",
  },
  {
    label: "WhatsApp",
    value: "082179446793",
    href: "https://wa.me/6282179446793",
    icon: "◉",
  },
  {
    label: "GitHub",
    value: "github.com/Ilhamkerennn",
    href: "https://github.com/Ilhamkerennn",
    icon: "⌘",
  },
  {
    label: "Instagram",
    value: "@ilhamrnd",
    href: "https://instagram.com/ilhamrnd",
    icon: "◎",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#080a06] px-5 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#c5ff5b]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-[#c5ff5b]/10 blur-[120px]"
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full border border-[#c5ff5b]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-80 w-80 rounded-full border border-[#c5ff5b]/20"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Left content */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#c5ff5b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c5ff5b] sm:text-sm">
                Contact
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s work
              <span className="mt-1 block text-[#c5ff5b]">
                together.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Have a project, opportunity, or technical discussion in mind?
              Feel free to reach out. I&apos;m open to opportunities,
              collaborations, and interesting technical projects.
            </p>

            <div className="mt-8">
              <a
                href="mailto:nandailham79@gmail.com"
                aria-label="Send an email to Rinanda"
                className="group inline-flex min-h-12 items-center justify-center rounded-full bg-[#c5ff5b] px-6 py-3 text-sm font-semibold text-[#10130a] shadow-[0_0_30px_rgba(197,255,91,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-[#d5ff85] hover:shadow-[0_0_40px_rgba(197,255,91,0.3)]"
              >
                Send Me an Email
                <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => {
              const isExternal = item.href.startsWith("https://");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-[#c5ff5b]/20 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c5ff5b]/60 hover:bg-[#c5ff5b]/[0.05] hover:shadow-[0_12px_40px_rgba(197,255,91,0.06)] sm:p-7"
                >
                  {/* Card glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c5ff5b]/[0.06] blur-2xl transition duration-300 group-hover:bg-[#c5ff5b]/[0.14]"
                  />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#c5ff5b]/60 text-2xl text-[#c5ff5b] transition duration-300 group-hover:bg-[#c5ff5b] group-hover:text-[#10130a]">
                    <span aria-hidden="true">{item.icon}</span>
                  </div>

                  <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                    {item.label}
                  </p>

                  <p className="relative mt-2 break-all text-sm font-medium leading-6 text-white transition-colors duration-300 group-hover:text-[#c5ff5b] sm:text-base">
                    {item.value}
                  </p>

                  <div className="relative mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-[#c5ff5b]">
                    <span>Open</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 left-6 h-px w-8 bg-[#c5ff5b]/60 transition-all duration-300 group-hover:w-14 sm:left-7"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-20 flex items-center justify-center gap-5 sm:mt-28">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c5ff5b]/30" />
          <span className="text-lg text-[#c5ff5b]">✦</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c5ff5b]/30" />
        </div>
      </div>
    </section>
  );
}