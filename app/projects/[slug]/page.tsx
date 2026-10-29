import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Rinanda Portfolio`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.image ? [project.image] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectDetail({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const workflowSteps =
    project.slug === "gps-attendance"
      ? [
          {
            title: "Authentication",
            description:
              "Users sign in before accessing attendance functions.",
          },
          {
            title: "Location validation",
            description:
              "The app checks the user's location against the permitted radius.",
          },
          {
            title: "Attendance records",
            description:
              "Users can check in, check out, and review attendance history.",
          },
        ]
      : project.slug === "crypto-dashboard"
        ? [
            {
              title: "Collect market data",
              description:
                "Retrieve cryptocurrency market information from the configured API.",
            },
            {
              title: "Explore assets",
              description:
                "Search, sort, and organize assets using the available market tools.",
            },
            {
              title: "Review details",
              description:
                "Present asset information, charts, and favorites in a responsive interface.",
            },
          ]
        : [
            {
              title: "Prepare the environment",
              description:
                "Configure the Ubuntu environment and SSH authentication setup.",
            },
            {
              title: "Add a second factor",
              description:
                "Integrate TOTP authentication as an additional verification step.",
            },
            {
              title: "Evaluate security",
              description:
                "Compare authentication behavior and review logs during controlled tests.",
            },
          ];

  const isMobileProject = project.slug === "gps-attendance";
  const isResearchProject = project.slug === "ssh-2fa";

  const otherProjects = projects.filter(
    (item) => item.slug !== project.slug,
  );

  return (
    <main className="min-h-screen overflow-x-clip bg-[#090b0a] text-[#f4f7f2]">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090b0a]/85 backdrop-blur-2xl">
        <nav
          aria-label="Project navigation"
          className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        >
          <Link
            href="/"
            aria-label="Rinanda homepage"
            className="text-lg font-semibold tracking-[-0.05em] text-[#f4f7f2] transition hover:text-[#c5ff5b]"
          >
            Rinanda<span className="text-[#c5ff5b]">.</span>
          </Link>

          <Link
            href="/#projects"
            className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-xs font-medium text-[#c2cbbd] transition hover:border-[#c5ff5b]/30 hover:text-[#c5ff5b] sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            Back to projects
          </Link>
        </nav>
      </header>

      {/* Project hero */}
      <section className="section-shell relative overflow-hidden border-b border-white/[0.07]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#c5ff5b]/[0.07] blur-[130px] sm:h-[600px] sm:w-[600px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10 lg:pb-20 lg:pt-24">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.07] px-3 py-1.5 text-[11px] font-medium text-[#d5f8a5]">
              {project.category}
            </span>
            <span className="text-[#53604c]">/</span>
            <span className="text-xs text-[#a4ada2]">{project.year}</span>
            <span className="text-[#53604c]">/</span>
            <span className="text-xs text-[#a4ada2]">{project.status}</span>
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_180px] lg:items-end lg:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7d887c] sm:text-xs">
                Project {project.number}
              </p>

              <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {project.title}
                <span className="text-[#c5ff5b]">.</span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#a4ada2] sm:mt-8 sm:text-lg sm:leading-8">
                {project.shortDescription}
              </p>
            </div>

            <div className="hidden border-l border-white/[0.1] pl-6 lg:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#7d887c]">
                Focus area
              </p>
              <p className="mt-3 text-sm leading-6 text-[#dce4d6]">
                {isMobileProject
                  ? "Mobile application & API"
                  : isResearchProject
                    ? "Security research"
                    : "Web application & data"}
              </p>
            </div>
          </div>

          {/* Main project screenshot */}
          {project.image && (
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.1] bg-[#101310] shadow-2xl shadow-black/40 sm:rounded-[2rem]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-6 sm:py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c5ff5b]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>

                  <span className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#8d9888] sm:text-[10px] sm:tracking-[0.22em]">
                    {isResearchProject
                      ? "Research overview"
                      : "Project preview"}
                  </span>

                  <span className="font-mono text-[10px] text-[#c5ff5b]">
                    {project.number} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={`relative flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(197,255,91,0.045),transparent_70%)] p-4 sm:p-8 lg:p-10 ${
                    isMobileProject ? "min-h-[360px] sm:min-h-[520px]" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={isMobileProject ? 738 : isResearchProject ? 2007 : 1600}
                    height={isMobileProject ? 1600 : isResearchProject ? 783 : 900}
                    priority
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className={`h-auto object-contain ${
                      isMobileProject
                        ? "max-h-[560px] w-auto max-w-full rounded-2xl border border-white/[0.08] shadow-2xl sm:max-h-[700px]"
                        : "max-h-[720px] w-full max-w-6xl rounded-xl border border-white/[0.08] shadow-2xl sm:rounded-2xl"
                    }`}
                  />
                </div>

                <div className="border-t border-white/[0.07] px-4 py-3 sm:px-6 sm:py-4">
                  <p className="text-xs leading-5 text-[#8d9888] sm:text-sm">
                    {isResearchProject
                      ? "Research methodology and SSH security testing overview."
                      : `${project.title} — project interface preview.`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project details */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-16 lg:px-10">
          <div className="min-w-0">
            {/* Overview */}
            <section>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-xs sm:tracking-[0.3em]">
                01 / Overview
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.045em] sm:text-4xl">
                About the project
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#a4ada2] sm:mt-6 sm:text-base sm:leading-8">
                {project.description}
              </p>
            </section>

            {/* Workflow */}
            <section className="mt-14 sm:mt-20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-xs sm:tracking-[0.3em]">
                02 / Process
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.045em] sm:text-4xl">
                How it works
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8d9888] sm:text-base">
                An overview of the main stages and technical focus of this
                project.
              </p>

              <div className="mt-7 grid gap-3 sm:mt-9 sm:gap-4">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="group grid grid-cols-[42px_minmax(0,1fr)] gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 hover:border-[#c5ff5b]/25 hover:bg-[#c5ff5b]/[0.025] sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-5 sm:p-6"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#c5ff5b]/15 bg-[#c5ff5b]/[0.06] font-mono text-xs text-[#c5ff5b] sm:h-12 sm:w-12 sm:text-sm">
                      0{index + 1}
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[#e8eee3] sm:text-base">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#8d9888] sm:text-sm sm:leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mt-14 sm:mt-20">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-xs sm:tracking-[0.3em]">
                    03 / Capabilities
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.045em] sm:text-4xl">
                    Key features
                  </h2>
                </div>

                <span className="shrink-0 font-mono text-[10px] text-[#7d887c] sm:text-xs">
                  {String(project.features.length).padStart(2, "0")} ITEMS
                </span>
              </div>

              <div className="mt-7 border-t border-white/[0.08] sm:mt-9">
                {project.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="group flex items-start gap-4 border-b border-white/[0.08] py-4 sm:items-center sm:gap-6 sm:py-5"
                  >
                    <span className="w-7 shrink-0 font-mono text-[10px] text-[#65715e] transition-colors group-hover:text-[#c5ff5b] sm:w-8 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-[#c8d0c3] transition-colors group-hover:text-[#f4f7f2] sm:text-base">
                      {feature}
                    </p>

                    <span
                      aria-hidden="true"
                      className="ml-auto pt-0.5 text-sm text-[#53604c] transition-colors group-hover:text-[#c5ff5b]"
                    >
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Technical sidebar */}
          <aside className="min-w-0">
            <div className="space-y-4 lg:sticky lg:top-24">
              <div className="soft-card rounded-2xl p-5 sm:rounded-3xl sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c5ff5b] sm:text-xs">
                  Technology stack
                </p>

                <h2 className="mt-3 text-lg font-semibold tracking-[-0.03em]">
                  Built with
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] text-[#c7d0c1] transition hover:border-[#c5ff5b]/25 hover:text-[#c5ff5b] sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#101310] p-5 sm:rounded-3xl sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7d887c] sm:text-xs">
                  Project information
                </p>

                <div className="mt-5 divide-y divide-white/[0.07]">
                  <div className="py-4 first:pt-0">
                    <p className="text-xs text-[#7d887c]">Category</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#e0e7da]">
                      {project.category}
                    </p>
                  </div>

                  <div className="py-4">
                    <p className="text-xs text-[#7d887c]">Year</p>
                    <p className="mt-1.5 text-sm text-[#e0e7da]">
                      {project.year}
                    </p>
                  </div>

                  <div className="py-4 last:pb-0">
                    <p className="text-xs text-[#7d887c]">Status</p>
                    <p className="mt-1.5 inline-flex items-center gap-2 text-sm text-[#e0e7da]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c5ff5b]" />
                      {project.status}
                    </p>
                  </div>
                </div>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-between rounded-full bg-[#c5ff5b] px-5 py-3.5 text-sm font-bold text-[#10130c] transition hover:-translate-y-0.5 hover:bg-[#d5ff8a]"
                >
                  View source on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              <Link
                href="/#contact"
                className="flex min-h-12 items-center justify-between rounded-full border border-white/[0.1] px-5 py-3.5 text-sm font-medium text-[#dce4d6] transition hover:border-[#c5ff5b]/25 hover:text-[#c5ff5b]"
              >
                Discuss a project
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* More projects */}
      {otherProjects.length > 0 && (
        <section className="border-t border-white/[0.07] bg-white/[0.015] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c5ff5b] sm:text-xs">
                  Continue exploring
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  More projects
                </h2>
              </div>

              <Link
                href="/#projects"
                className="w-fit text-sm font-medium text-[#a4ada2] transition hover:text-[#c5ff5b]"
              >
                View all projects ↗
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 sm:mt-10 sm:gap-5">
              {otherProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#101310] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#c5ff5b]/25 sm:gap-5 sm:p-5"
                >
                  {item.image ? (
                    <div className="relative flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[#090b0a] p-2 sm:h-24 sm:w-32">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="128px"
                        className="object-contain p-2 transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl bg-[#090b0a] text-xs text-[#7d887c] sm:h-24 sm:w-32">
                      Project
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#7d887c]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold leading-5 text-[#e9eee4] transition group-hover:text-[#c5ff5b] sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#8d9888]">
                      {item.shortDescription}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg text-[#7d887c] transition group-hover:translate-x-1 group-hover:text-[#c5ff5b]"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Link
            href="/"
            className="w-fit text-sm font-semibold tracking-[-0.03em] text-[#e8eee3] transition hover:text-[#c5ff5b]"
          >
            Rinanda<span className="text-[#c5ff5b]">.</span>
          </Link>

          <p className="text-xs text-[#7d887c]">
            Designed with curiosity. Built through practice.
          </p>

          <Link
            href="/#projects"
            className="w-fit text-xs text-[#a4ada2] transition hover:text-[#c5ff5b]"
          >
            Back to portfolio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}