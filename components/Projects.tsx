
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const [featured, ...others] = projects;

  return (
    <section
      id="projects"
      className="section-shell border-t border-white/[0.07] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5ff5b] sm:tracking-[0.3em]">
              Selected Projects
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] text-[#f4f7f2] sm:text-5xl lg:text-6xl">
              Ideas turned into{" "}
              <span className="accent-gradient">
                real projects.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#a4ada2] sm:text-base sm:leading-8">
              A closer look at the applications, systems, and technical
              experiments I have worked on.
            </p>
          </div>

          <span className="w-fit rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-[#a4ada2]">
            <span className="mr-2 font-semibold text-[#c5ff5b]">
              {String(projects.length).padStart(2, "0")}
            </span>
            Featured projects
          </span>
        </div>

        {/* Featured project */}
        {featured && (
          <article className="soft-card mt-10 overflow-hidden rounded-[1.5rem] sm:mt-14 sm:rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Featured image */}
              <Link
                href={`/projects/${featured.slug}`}
                aria-label={`View ${featured.title} details`}
                className="group relative block min-w-0 overflow-hidden border-b border-white/[0.07] bg-[#0b0e0b] p-3 sm:p-5 lg:border-b-0 lg:border-r lg:p-6"
              >
                <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#090b0a]/90 px-3 py-2 backdrop-blur-xl sm:left-8 sm:top-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c5ff5b]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#dce4d6]">
                    Featured / {featured.number}
                  </span>
                </div>

                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#10140f] p-4 sm:min-h-[400px] sm:p-6 lg:min-h-[440px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,255,91,0.11),transparent_65%)]"
                  />

                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={`${featured.title} project preview`}
                      width={
                        featured.slug === "gps-attendance"
                          ? 738
                          : 1600
                      }
                      height={
                        featured.slug === "gps-attendance"
                          ? 1600
                          : 900
                      }
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className={`relative z-10 h-auto max-h-[290px] w-full transition-transform duration-700 group-hover:scale-[1.025] sm:max-h-[350px] lg:max-h-[390px] ${
                        featured.slug === "gps-attendance"
                          ? "max-w-[240px] rounded-2xl object-contain shadow-2xl sm:max-w-[270px] lg:max-w-[290px]"
                          : "max-w-full rounded-xl object-contain drop-shadow-2xl"
                      }`}
                    />
                  ) : (
                    <span className="relative z-10 text-sm text-[#a4ada2]">
                      Project preview
                    </span>
                  )}

                  <span className="absolute bottom-4 right-4 z-20 rounded-full border border-white/10 bg-[#090b0a]/85 px-3 py-1.5 text-[10px] text-[#a4ada2] backdrop-blur">
                    {featured.year}
                  </span>
                </div>
              </Link>

              {/* Featured information */}
              <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-10 xl:p-12">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.07] px-3 py-1.5 text-[11px] font-medium text-[#d5f8a5]">
                    {featured.category}
                  </span>

                  <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-[#a4ada2]">
                    {featured.status}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#f4f7f2] sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#a4ada2] sm:text-base sm:leading-8">
                  {featured.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-[#c6cec1] sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}

                  {featured.technologies.length > 5 && (
                    <span className="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[11px] text-[#8d9888]">
                      +{featured.technologies.length - 5}
                    </span>
                  )}
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <Link
                    href={`/projects/${featured.slug}`}
                    className="group/link inline-flex min-h-12 items-center gap-4 rounded-full bg-[#c5ff5b] px-6 py-3 text-sm font-bold text-[#10130c] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d5ff8a] hover:shadow-[0_12px_35px_rgba(197,255,91,0.13)]"
                  >
                    Explore case study
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2">
            {others.map((project) => (
              <article
                key={project.slug}
                className="soft-card group flex min-w-0 flex-col rounded-[1.5rem] sm:rounded-[2rem]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} details`}
                  className="block p-3 sm:p-4"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/[0.06] bg-[#0c0f0c] p-4 sm:rounded-[1.5rem] sm:p-6">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,255,91,0.075),transparent_70%)]"
                    />

                    <span className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-[#090b0a]/85 px-3 py-1.5 font-mono text-[10px] text-[#c5ff5b] backdrop-blur">
                      / {project.number}
                    </span>

                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        width={1600}
                        height={900}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="relative z-10 h-full max-h-[260px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.035]"
                      />
                    ) : (
                      <span className="relative z-10 text-sm text-[#a4ada2]">
                        Project preview
                      </span>
                    )}

                    <span className="absolute bottom-4 right-4 z-20 rounded-full border border-white/10 bg-[#090b0a]/85 px-3 py-1.5 text-[10px] text-[#a4ada2] backdrop-blur">
                      {project.year}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-7 sm:pb-7 sm:pt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c5ff5b]">
                      {project.category}
                    </span>

                    <span className="text-[#596153]">/</span>

                    <span className="text-[10px] text-[#7d887c]">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-[#f4f7f2] transition-colors duration-300 group-hover:text-[#c5ff5b] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#a4ada2]">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-[#b5beb0] sm:text-[11px]"
                      >
                        {technology}
                      </span>
                    ))}

                    {project.technologies.length > 4 && (
                      <span className="rounded-lg border border-white/[0.07] px-2.5 py-1.5 text-[10px] text-[#7d887c]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-7 flex-1" />

                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-3 text-sm font-semibold text-[#e7ede2] transition-colors hover:text-[#c5ff5b]"
                    >
                      View project details
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-5 sm:mt-12 sm:pt-6">
          <p className="text-xs text-[#7d887c]">
            Software · Networking · Cybersecurity
          </p>

          <a
            href="#contact"
            className="text-xs font-semibold text-[#c5ff5b] transition-colors hover:text-[#e0ffad]"
          >
            Have a project in mind? ↗
          </a>
        </div>
      </div>
    </section>
  );
}
