
export default function Experience() {
  const achievements = [
    { number: "1,760", label: "Outbound Calls" },
    { number: "31", label: "Customer Visits" },
    { number: "10", label: "Dismantles" },
  ];

  const responsibilities = [
    "Conducted outbound calls to support customer communication and service follow-ups.",
    "Participated in customer visits and field activities related to Iconnet services.",
    "Assisted with service dismantling activities involving FAT / ONT equipment.",
    "Managed customer information and operational records through ICRM.",
  ];

  const skills = [
    "Outbound Call",
    "Customer Visit",
    "ICRM",
    "FAT / ONT",
    "Customer Data",
  ];

  return (
    <section
      id="experience"
      className="section-shell relative overflow-hidden border-t border-white/[0.07] py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#c5ff5b]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5ff5b] sm:tracking-[0.3em]">
              Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] text-[#f4f7f2] sm:text-5xl lg:text-6xl">
              Where I gained
              <br />
              <span className="accent-gradient">
                practical experience.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#a4ada2] sm:text-base sm:leading-8">
              Real-world experience, hands-on responsibilities, and
              practical skills developed through professional internship.
            </p>
          </div>

          <span className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs text-[#a4ada2]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5ff5b]" />
            Internship · 2025
          </span>
        </div>

        {/* Main experience card */}
        <article className="soft-card mt-10 overflow-hidden rounded-[1.5rem] sm:mt-14 sm:rounded-[2rem]">
          {/* Card header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c5ff5b]/15 bg-[#c5ff5b]/[0.06]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5 text-[#c5ff5b]"
                  aria-hidden="true"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <path d="M3 12h18M10 12v2h4v-2" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#f4f7f2] sm:text-base">
                  Professional Experience
                </p>
                <p className="mt-1 text-xs text-[#7d887c]">
                  Customer Service & Field Operations
                </p>
              </div>
            </div>

            <span className="rounded-full border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#d5f8a5] sm:text-xs">
              Completed
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Company information */}
            <div className="border-b border-white/[0.07] p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5ff5b]">
                Organization
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#f4f7f2] sm:text-3xl">
                PT PLN Icon Plus
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#a4ada2]">
                Kantor Perwakilan Lhokseumawe
              </p>

              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-[#0c0f0c]/70 p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7d887c]">
                  Internship Period
                </p>

                <p className="mt-3 text-xl font-semibold text-[#f4f7f2] sm:text-2xl">
                  Feb — Jul 2025
                </p>

                <p className="mt-2 text-xs leading-5 text-[#a4ada2]">
                  February 3 – July 31, 2025
                </p>

                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-[#8aa93b] to-[#c5ff5b]" />
                </div>

                <p className="mt-3 text-xs text-[#7d887c]">
                  6-month internship
                </p>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#c5ff5b]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <p className="text-xs leading-6 text-[#a4ada2]">
                  Lhokseumawe, Aceh, Indonesia
                </p>
              </div>
            </div>

            {/* Role details */}
            <div className="min-w-0 p-5 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5ff5b]">
                Role & Responsibilities
              </p>

              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.035em] text-[#f4f7f2] sm:text-2xl">
                Implementasi Kegiatan Visit Outbound Call pada Layanan Iconnet
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#a4ada2] sm:text-base sm:leading-8">
                Participated in customer service and operational activities
                related to Iconnet services, including outbound calls,
                customer visits, dismantling activities, and customer
                information management.
              </p>

              {/* Responsibilities */}
              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7d887c]">
                  Key Responsibilities
                </p>

                <div className="space-y-4">
                  {responsibilities.map((item, index) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#c5ff5b]/15 bg-[#c5ff5b]/[0.05] font-mono text-[10px] text-[#c5ff5b]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-[#b5beb0]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#7d887c]">
                  Skills & Activities
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] text-[#c6cec1] transition-colors duration-300 hover:border-[#c5ff5b]/30 hover:text-[#d5f8a5] sm:text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievement statistics */}
          <div className="border-t border-white/[0.07] bg-[#0c0f0c]/50 p-5 sm:p-8 lg:px-10 lg:py-9">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5ff5b]">
                Internship Highlights
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#f4f7f2] sm:text-xl">
                Work delivered in numbers.
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`min-w-0 ${
                    index > 0
                      ? "border-l border-white/[0.08] pl-3 sm:pl-6"
                      : ""
                  }`}
                >
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-[#f4f7f2] sm:text-4xl lg:text-5xl">
                    {achievement.number}
                  </p>

                  <p className="mt-2 text-[10px] font-medium leading-4 text-[#c5ff5b] sm:text-sm">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates and documents — inside Experience card */}
          <div className="border-t border-white/[0.07] p-5 sm:p-8 lg:px-10 lg:py-9">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5ff5b]">
                Supporting Documents
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#f4f7f2] sm:text-xl">
                Certificates & Documents
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#a4ada2]">
                Official documents supporting my internship experience at
                PT PLN Icon Plus.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Certificate */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-[#c5ff5b]/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c5ff5b]/15 bg-[#c5ff5b]/[0.06] text-[#c5ff5b]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M7 3.75h7l5 5V20a.75.75 0 0 1-.75.75h-11.5A.75.75 0 0 1 6 20V4.5a.75.75 0 0 1 .75-.75Z" />
                      <path d="M14 4v5h5M9 13h6M9 16h3" />
                      <path d="m13 18 1.5 1.5 3-3" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c5ff5b]">
                      Certificate
                    </p>

                    <h4 className="mt-2 font-semibold text-[#f4f7f2]">
                      Internship Certificate
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-[#a4ada2]">
                      Official proof of internship completion.
                    </p>
                  </div>
                </div>

                <a
                  href="/documents/sertifikat-magang.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#c5ff5b] transition hover:text-[#e0ffab]"
                >
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Internship Report */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-[#c5ff5b]/30 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c5ff5b]/15 bg-[#c5ff5b]/[0.06] text-[#c5ff5b]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M7 3.75h7l5 5V20a.75.75 0 0 1-.75.75h-11.5A.75.75 0 0 1 6 20V4.5a.75.75 0 0 1 .75-.75Z" />
                      <path d="M14 4v5h5M9 13h6M9 16.5h6" />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c5ff5b]">
                      Internship Report
                    </p>

                    <h4 className="mt-2 font-semibold text-[#f4f7f2]">
                      Internship Report
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-[#a4ada2]">
                      Documentation of activities, customer visits, and
                      outbound call results.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/documents/laporan-magang.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-[#c5ff5b] transition hover:text-[#e0ffab]"
                  >
                    View Report ↗
                  </a>

                  <a
                    href="/documents/laporan-magang.pdf"
                    download="Laporan-Magang-Ilham-Rinanda.pdf"
                    className="text-sm font-medium text-[#a4ada2] transition hover:text-white"
                  >
                    Download PDF ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Closing note */}
        <div className="mt-6 flex items-start gap-3 border-t border-white/[0.07] pt-5 sm:mt-8 sm:pt-6">
          <span className="mt-0.5 text-[#c5ff5b]">↗</span>
          <p className="max-w-3xl text-xs leading-6 text-[#7d887c] sm:text-sm">
            This experience strengthened my communication, coordination,
            customer service, and operational problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}
