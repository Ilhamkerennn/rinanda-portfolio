
type Certification = {
  number: string;
  title: string;
  issuer: string;
  program: string;
  year: string;
  description: string;
  pdf?: string;
};

const certifications: Certification[] = [
  
  {
    number: "01",
    title: "Introduction to Cyber Security and Career Awareness",
    issuer: "Digital Talent Scholarship",
    program: "Micro Skill Digital Talent Scholarship 2025",
    year: "2025",
    description:
      "Micro skill program focused on fundamental cybersecurity concepts and career awareness in the cybersecurity field.",
    pdf: "/certificates/Introduction%20to%20Cyber%20Security%20and%20Career%20Awareness.pdf",
  },
  {
    number: "02",
    title:
      "Pentingnya Menjaga Keamanan Digital: Perlindungan Diri di Dunia Maya",
    issuer: "Digital Talent Scholarship",
    program: "Micro Skill Digital Talent Scholarship 2025",
    year: "2025",
    description:
      "Micro skill program covering digital security awareness and practical protection of personal information in cyberspace.",
    pdf: "/certificates/Pentingnya%20Menjaga%20Keamanan%20Digital%20Perlindungan%20Diri%20di%20Dunia%20Maya.pdf",
  },
  {
    number: "03",
    title: "Konsep Pemrograman",
    issuer: "Digital Talent Scholarship",
    program: "Micro Skill Digital Talent Scholarship 2025",
    year: "2025",
    description:
      "Micro skill program introducing fundamental programming concepts and computational thinking.",
    pdf: "/certificates/Konsep%20Pemrograman.pdf",
  },
  {
    number: "04",
    title: "Fundamental Junior Network Administrator",
    issuer: "Digital Talent Scholarship",
    program:
      "Vocational School Graduate Academy Digital Talent Scholarship 2025",
    year: "2025",
    description:
      "Training program focused on fundamental knowledge and skills for junior network administration.",
    pdf: "/certificates/Fundamental%20Junior%20Network%20Administrator%20Vocational%20School%20Graduate%20Academy%20Digital%20Talent%20Scholarship%202025.pdf",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-shell relative isolate overflow-hidden border-t border-white/[0.07] py-20 sm:py-28 lg:py-32"
    >
      {/* Ambient lime lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-[#c5ff5b]/[0.055] blur-[130px] sm:h-[500px] sm:w-[500px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c5ff5b]" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-sm sm:tracking-[0.3em]">
              Certifications
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#f4f7f2] sm:mt-6 sm:text-5xl lg:text-6xl">
            Certificates &amp;
            <br />
            <span className="accent-gradient">achievements.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#a4ada2] sm:mt-6 sm:text-base sm:leading-8">
            Selected certifications and training programs that support my
            background in networking, programming, cybersecurity, and digital
            technology.
          </p>
        </div>

        {/* Certificate list */}
        <div className="mt-10 space-y-3 sm:mt-14 sm:space-y-4">
          {certifications.map((certificate) => (
            <article
              key={certificate.number}
              className="soft-card group relative overflow-hidden rounded-2xl border border-white/[0.07] p-5 transition-all duration-300 hover:border-[#c5ff5b]/25 hover:bg-[#111610] sm:rounded-3xl sm:p-7 lg:p-8"
            >
              {/* Lime accent on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-0.5 bg-[#c5ff5b] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="grid gap-4 sm:gap-5 lg:grid-cols-[60px_minmax(0,1fr)_auto] lg:items-start lg:gap-7">
                {/* Certificate number and mobile year */}
                <div className="flex items-center justify-between lg:block">
                  <span className="font-mono text-xs tracking-wider text-[#c5ff5b] sm:text-sm">
                    {certificate.number}
                  </span>

                  <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[11px] text-[#a4ada2] lg:hidden">
                    {certificate.year}
                  </span>
                </div>

                {/* Certificate details */}
                <div className="min-w-0">
                  <h3 className="max-w-3xl text-lg font-semibold leading-7 text-[#f4f7f2] transition-colors duration-300 group-hover:text-[#d5f8a5] sm:text-xl sm:leading-8 lg:text-2xl">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#c5ff5b]">
                    {certificate.issuer}
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#7d887c] sm:text-sm">
                    {certificate.program}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#a4ada2] sm:mt-5 sm:text-base">
                    {certificate.description}
                  </p>

                  {certificate.pdf && (
                    <a
                      href={certificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${certificate.title}`}
                      className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.05] px-4 py-2 text-xs font-semibold text-[#c5ff5b] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c5ff5b]/50 hover:bg-[#c5ff5b]/[0.1] sm:mt-6 sm:text-sm"
                    >
                      View Certificate
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  )}
                </div>

                {/* Desktop year */}
                <span className="hidden w-fit shrink-0 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-xs font-medium text-[#a4ada2] lg:inline-block">
                  {certificate.year}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center gap-2 text-xs text-[#667063] sm:mt-10 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c5ff5b]" />
          Continuous learning, one achievement at a time.
        </div>
      </div>
    </section>
  );
}
