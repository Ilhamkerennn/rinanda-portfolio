
export default function About() {
  return (
    <section
      id="about"
      className="section-shell border-t border-white/[0.06] bg-[#0c0f0c] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* SECTION HEADING */}
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-7 bg-[#c5ff5b]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-xs sm:tracking-[0.3em]">
                About Me
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#f4f7f2] sm:mt-6 sm:text-5xl lg:text-6xl">
              A little bit
              <br />
              about <span className="accent-gradient">me.</span>
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#7d887c] sm:mt-6 sm:text-base">
              Getting to know the person behind the projects, ideas, and
              experiments.
            </p>

            {/* DECORATIVE PROFILE MARK */}
            <div className="mt-8 hidden max-w-xs items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 sm:flex lg:mt-12">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.07] text-lg font-bold text-[#c5ff5b]">
                R.
              </div>
              <div>
                <p className="text-sm font-semibold text-[#e7ece2]">
                  Rinanda
                </p>
                <p className="mt-1 text-xs text-[#7d887c]">
                  Technology &amp; Innovation
                </p>
              </div>
              <span className="ml-auto h-2 w-2 rounded-full bg-[#c5ff5b] shadow-[0_0_12px_rgba(197,255,91,0.5)]" />
            </div>
          </div>

          {/* ABOUT CONTENT */}
          <div className="min-w-0">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-br from-[#151a13] via-[#101310] to-[#0c0f0c] p-6 sm:rounded-[2rem] sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#c5ff5b]/[0.06] blur-[80px]"
              />

              <div className="relative">
                <span className="text-3xl font-semibold leading-none text-[#c5ff5b]">
                  &ldquo;
                </span>

                <p className="mt-2 text-lg font-medium leading-8 text-[#edf2e8] sm:text-xl sm:leading-9">
                  I&apos;m Rinanda, a Computer Network Engineering Technology
                  graduate who enjoys building practical technology solutions.
                </p>

                <div className="my-6 h-px bg-gradient-to-r from-[#c5ff5b]/25 via-white/[0.07] to-transparent sm:my-7" />

                <p className="text-sm leading-7 text-[#a4ada2] sm:text-base sm:leading-8">
                  I have an interest in web development, computer networking,
                  cybersecurity, and cloud technologies. I enjoy learning
                  through hands-on projects and turning ideas into functional
                  applications and systems.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#a4ada2] sm:mt-5 sm:text-base sm:leading-8">
                  My background in computer networking gives me a strong
                  interest in understanding how applications, servers,
                  networks, and security work together in real-world
                  environments.
                </p>

                <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
                  {[
                    "Web Development",
                    "Networking",
                    "Cybersecurity",
                    "Cloud & IoT",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#c5ff5b]/15 bg-[#c5ff5b]/[0.045] px-3 py-1.5 text-[10px] font-medium text-[#c6d4b8] sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="mt-5 grid grid-cols-3 divide-x divide-white/[0.08] rounded-2xl border border-white/[0.07] bg-white/[0.02] py-5 sm:mt-6 sm:py-6">
              <div className="px-3 text-center sm:px-5">
                <p className="text-2xl font-semibold tracking-[-0.06em] text-[#c5ff5b] sm:text-3xl">
                  2026
                </p>
                <p className="mt-2 text-[10px] leading-4 text-[#929d8e] sm:text-xs">
                  Graduation Year
                </p>
              </div>

              <div className="px-3 text-center sm:px-5">
                <p className="text-2xl font-semibold tracking-[-0.06em] text-[#c5ff5b] sm:text-3xl">
                  3+
                </p>
                <p className="mt-2 text-[10px] leading-4 text-[#929d8e] sm:text-xs">
                  Main Projects
                </p>
              </div>

              <div className="px-3 text-center sm:px-5">
                <p className="text-2xl font-semibold tracking-[-0.06em] text-[#c5ff5b] sm:text-3xl">
                  4
                </p>
                <p className="mt-2 text-[10px] leading-4 text-[#929d8e] sm:text-xs">
                  Focus Areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
