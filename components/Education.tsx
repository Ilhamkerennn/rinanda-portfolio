
export default function Education() {
  const subjects = [
    "Computer Networking",
    "Software Development",
    "Cybersecurity",
    "Linux",
    "Web Development",
  ];

  return (
    <section
      id="education"
      className="section-shell relative overflow-hidden border-t border-white/[0.07] py-20 sm:py-28 lg:py-32"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c5ff5b]/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Section heading */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#c5ff5b]" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-sm sm:tracking-[0.3em]">
                  Education
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] text-[#f4f7f2] sm:mt-6 sm:text-5xl lg:text-6xl">
                My academic
                <br />
                <span className="text-[#c5ff5b]">background.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#a4ada2] sm:mt-6 sm:text-base sm:leading-8">
                Building a strong foundation in computer networking,
                information technology, and software development through
                academic learning and hands-on projects.
              </p>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <span className="text-xl text-[#c5ff5b]">✳</span>
              <span className="h-px w-32 bg-gradient-to-r from-[#c5ff5b]/50 to-transparent" />
            </div>
          </div>

          {/* Education card */}
          <div className="soft-card relative overflow-hidden rounded-3xl border border-white/[0.09] p-5 sm:p-8 lg:p-10">
            {/* Subtle card glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c5ff5b]/[0.06] blur-[80px]"
            />

            <div className="relative">
              {/* Institution header */}
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.06] sm:h-14 sm:w-14">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-[#c5ff5b] sm:h-7 sm:w-7"
                    >
                      <path
                        d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.5 11.5v4.2c0 .7 2.5 2.8 5.5 2.8s5.5-2.1 5.5-2.8v-4.2M21 9.5v5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c5ff5b] sm:text-sm">
                      Higher Education
                    </p>

                    <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[#f4f7f2] sm:mt-3 sm:text-2xl">
                      Politeknik Negeri Lhokseumawe
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#a4ada2] sm:text-base">
                      Jurusan Teknologi Informasi dan Komputer
                    </p>
                  </div>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.05] px-3.5 py-1.5 text-xs font-medium text-[#c5ff5b] sm:px-4 sm:py-2 sm:text-sm">
                  2022 — 2026
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/[0.09] sm:my-8" />

              {/* Degree */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7d887c] sm:text-sm">
                  Degree Program
                </p>

                <h4 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-[#f4f7f2] sm:mt-3 sm:text-2xl">
                  D4 Teknologi Rekayasa Komputer Jaringan
                </h4>
              </div>

              {/* Academic status */}
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:mt-7 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c5ff5b]/[0.10]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c5ff5b] shadow-[0_0_12px_rgba(197,255,91,0.45)]" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-[#f4f7f2] sm:text-base">
                    Graduated / Yudisium
                  </p>
                  <p className="mt-1 text-xs text-[#7d887c] sm:text-sm">
                    Academic milestone
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-[#a4ada2] sm:mt-7 sm:text-base sm:leading-8">
                Studied computer networking, software development,
                cybersecurity, systems, and related information technology
                topics through academic coursework and hands-on projects.
              </p>

              {/* Subjects */}
              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                {subjects.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.035] px-3 py-1.5 text-[11px] text-[#cbd4c7] transition-colors duration-300 hover:border-[#c5ff5b]/50 hover:bg-[#c5ff5b]/[0.08] hover:text-[#c5ff5b] sm:px-3.5 sm:py-2 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
