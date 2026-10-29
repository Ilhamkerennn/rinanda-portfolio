
const skillCategories = [
  {
    title: "Frontend",
    number: "01",
    description: "Building modern and responsive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    title: "Backend",
    number: "02",
    description: "Developing APIs and application backends.",
    skills: ["PHP", "Laravel", "REST API", "MySQL"],
  },
  {
    title: "Networking & System",
    number: "03",
    description: "Working with networks, servers, and Linux environments.",
    skills: ["Linux", "SSH", "TCP/IP", "Networking", "VPS"],
  },
  {
    title: "Cybersecurity",
    number: "04",
    description: "Understanding authentication and security testing.",
    skills: [
      "SSH Security",
      "Two-Factor Authentication",
      "TOTP",
      "Brute Force Testing",
      "Authentication Logs",
      "PAM",
    ],
  },
  {
    title: "Tools",
    number: "05",
    description: "Tools used for development and technical workflows.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Android Studio",
      "XAMPP",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell border-t border-white/[0.06] bg-[#090b0a] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#c5ff5b]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-xs sm:tracking-[0.3em]">
              Skills &amp; Expertise
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#f4f7f2] sm:mt-6 sm:text-5xl lg:text-6xl">
            Technologies I
            <br />
            work <span className="accent-gradient">with.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#a4ada2] sm:mt-6 sm:text-base sm:leading-8">
            A collection of technologies and tools I use to build applications,
            work with networks, and explore cybersecurity.
          </p>
        </div>

        {/* SKILL CATEGORY CARDS */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="soft-card group flex h-full flex-col p-5 sm:p-7"
            >
              {/* CARD TOP */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.07] text-xs font-bold tracking-wider text-[#c5ff5b] transition duration-300 group-hover:bg-[#c5ff5b]/[0.13]">
                  {category.number}
                </div>

                <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#788473] transition-colors group-hover:border-[#c5ff5b]/20 group-hover:text-[#c5ff5b]">
                  {String(category.skills.length).padStart(2, "0")} Skills
                </span>
              </div>

              {/* CARD DESCRIPTION */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold tracking-tight text-[#f4f7f2] transition-colors duration-300 group-hover:text-[#c5ff5b] sm:text-xl">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-12 text-xs leading-6 text-[#929d8e] sm:text-sm">
                  {category.description}
                </p>
              </div>

              {/* TECHNOLOGY TAGS */}
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-[#c3ccbd] transition duration-200 hover:border-[#c5ff5b]/30 hover:bg-[#c5ff5b]/[0.06] hover:text-[#e7f8d3] sm:text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CARD FOOTER */}
              <div className="mt-auto flex items-center gap-2 pt-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c5ff5b]/70 transition-shadow group-hover:shadow-[0_0_10px_rgba(197,255,91,0.5)]" />
                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#667063]">
                  Continuous learning
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
