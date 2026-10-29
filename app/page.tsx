import Certificates from "@/components/Certificates";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Ilhamkerennn",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ilhamrnd",
  },
  {
    label: "Email",
    href: "mailto:nandailham79@gmail.com",
  },
];

const focusAreas = [
  { number: "01", label: "Web Development", tag: "WEB" },
  { number: "02", label: "Computer Networking", tag: "NET" },
  { number: "03", label: "IT & Security", tag: "SEC" },
  { number: "04", label: "Internet of Things", tag: "IOT" },
];

const stats = [
  { value: "D4", label: "Computer Network Technology" },
  { value: "IT", label: "Software & Infrastructure" },
  { value: "01", label: "Curiosity. Endless Learning." },
];

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen overflow-x-clip bg-[#090b0a] text-[#f4f7f2] selection:bg-[#c5ff5b]/80 selection:text-[#10130c]"
    >
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="section-shell relative overflow-hidden border-b border-white/[0.07]"
      >
        {/* Ambient lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-[#c5ff5b]/[0.08] blur-[130px] sm:h-[600px] sm:w-[600px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.05] blur-[130px]"
        />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-10 lg:py-20">
          {/* LEFT: INTRODUCTION */}
          <div className="relative z-10 animate-fade-up">
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#c5ff5b]/20 bg-[#c5ff5b]/[0.055] px-3.5 py-2 sm:px-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c5ff5b] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c5ff5b]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#d5f8a5] sm:text-xs sm:tracking-[0.2em]">
                Computer Network & Software
              </span>
            </div>

            <p className="mt-8 text-sm font-medium tracking-wide text-[#a4ada2] sm:mt-10 sm:text-base">
              Hello, welcome to my digital space.
            </p>

            <h1 className="mt-5 max-w-4xl text-[3.3rem] font-semibold leading-[0.94] tracking-[-0.075em] sm:text-7xl lg:text-[5.8rem] xl:text-[6.5rem]">
              Turning ideas
              <br />
              into
              <span className="accent-gradient block pb-3">
                real solutions.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#a4ada2] sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white">Rinanda</span>, a
              computer network technology graduate interested in building
              useful digital products, reliable IT infrastructure, and
              technology-driven solutions.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c5ff5b] px-7 py-3.5 text-sm font-bold text-[#11150c] transition duration-300 hover:-translate-y-1 hover:bg-[#d5ff8a] hover:shadow-[0_12px_40px_rgba(197,255,91,0.18)]"
              >
                Explore My Work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-[#e5eae1] transition duration-300 hover:-translate-y-1 hover:border-[#c5ff5b]/30 hover:bg-[#c5ff5b]/[0.05]"
              >
                Let&apos;s Connect
                <span aria-hidden="true" className="text-[#c5ff5b]">
                  ↗
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-6 sm:mt-12 sm:gap-x-8 sm:pt-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#667063]">
                Find me on
              </span>

              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#9ca69a] transition-colors duration-300 hover:text-[#c5ff5b] sm:text-sm"
                >
                  {social.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: PROFILE VISUAL */}
          <div
            className="relative mx-auto w-full max-w-[470px] animate-fade-up lg:ml-auto"
            style={{ animationDelay: "150ms" }}
          >
            {/* Glow behind profile */}
            <div
              aria-hidden="true"
              className="animate-pulse-glow absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#c5ff5b]/10 via-transparent to-emerald-400/[0.06] blur-2xl"
            />

            

            <div className="relative rounded-[1.8rem] border border-white/[0.1] bg-[#111410]/90 p-3 shadow-2xl shadow-black/50 sm:rounded-[2rem] sm:p-4">
              {/* Card header */}
              <div className="flex items-center justify-between px-2 pb-4 sm:px-3 sm:pb-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#778174] sm:text-[10px]">
                    Personal Portfolio
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#dce4d6]">
                    Digital identity / 2026
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#c5ff5b]/15 bg-[#c5ff5b]/[0.05] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c5ff5b]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#d5f8a5]">
                    IT Enthusiast
                  </span>
                </div>
              </div>

              {/* Profile image */}
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.3rem] bg-[#1a2017] sm:rounded-[1.5rem]">
                <Image
                  src="/images/profile.png"
                  alt="Rinanda — Computer Network Technology and Software"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.035]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 440px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0a] via-[#090b0a]/10 to-transparent" />

                {/* Decorative frame */}
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-[1rem] border border-white/[0.13] sm:inset-5 sm:rounded-[1.1rem]"
                />

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c5ff5b]">
                    The person behind the projects
                  </p>

                  <h2 className="mt-2 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl">
                    Rinanda
                  </h2>

                  <p className="mt-2 max-w-xs text-xs leading-6 text-[#d1d8cc] sm:text-sm">
                    Learning, building, and exploring technology.
                  </p>
                </div>
              </div>

              {/* Focus areas */}
              <div className="grid grid-cols-2 gap-2.5 p-1 pt-3 sm:gap-3 sm:p-2 sm:pt-4">
                {focusAreas.map((item) => (
                  <div
                    key={item.number}
                    className="group rounded-xl border border-white/[0.065] bg-white/[0.025] p-3 transition duration-300 hover:border-[#c5ff5b]/30 hover:bg-[#c5ff5b]/[0.045] sm:rounded-2xl sm:p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold tracking-wider text-[#c5ff5b]">
                        {item.number}
                      </span>

                      <span className="rounded-md border border-white/[0.08] px-1.5 py-0.5 text-[8px] font-semibold tracking-wider text-[#75806f] transition-colors group-hover:border-[#c5ff5b]/20 group-hover:text-[#c5ff5b]">
                        {item.tag}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-medium leading-5 text-[#e0e7da] sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between px-2 pb-2 pt-3 sm:px-3">
                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#667063] sm:text-[9px]">
                  Curious by nature
                </span>

                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#667063] sm:text-[9px]">
                  Driven by technology
                </span>
              </div>
            </div>

            {/* Floating technical label */}
            <div className="animate-float absolute -bottom-5 -left-3 z-20 hidden rounded-2xl border border-white/10 bg-[#131713]/95 px-4 py-3 shadow-xl shadow-black/30 sm:block">
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#7d887c]">
                My approach
              </p>
              <p className="mt-1 text-xs font-semibold text-[#e9eee4]">
                Build. Test. Improve.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom identity strip */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px border-t border-white/[0.07] bg-white/[0.025] sm:grid-cols-3 sm:px-8 lg:px-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 border-b border-white/[0.06] px-5 py-5 sm:border-b-0 sm:border-r sm:border-white/[0.06] sm:px-6 sm:py-6 last:border-r-0"
            >
              <span className="text-2xl font-semibold tracking-[-0.07em] text-[#c5ff5b] sm:text-3xl">
                {stat.value}
              </span>

              <span className="max-w-[190px] text-[10px] leading-5 text-[#929d8e] sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="group mx-auto flex w-fit items-center gap-3 py-7 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#778174] transition-colors hover:text-[#c5ff5b] sm:py-8"
        >
          Scroll to explore
          <span className="transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </section>

      {/* EXISTING PORTFOLIO SECTIONS */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
