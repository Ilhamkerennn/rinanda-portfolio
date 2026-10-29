export default function Footer() {
  return (
    <footer className="border-t border-[#d7a76d]/10 bg-[#120f0d] px-5 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div>
          <p className="text-sm font-semibold tracking-[-0.03em] text-[#f8f4ee] sm:text-base">
            Rinanda.
          </p>

          <p className="mt-1.5 text-xs leading-5 text-[#bcae9d]">
            Computer Network & Software Enthusiast
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#bcae9d] sm:gap-6 sm:text-sm">
          <a
            href="https://github.com/Ilhamkerennn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#f8f4ee]"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com/ilhamrnd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-[#f8f4ee]"
          >
            Instagram
          </a>

          <a
            href="mailto:nandailham79@gmail.com"
            className="transition duration-300 hover:text-[#f8f4ee]"
          >
            Email
          </a>
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-7xl border-t border-[#d7a76d]/10 pt-5 sm:mt-8 sm:pt-6">
        <p className="text-center text-[11px] leading-5 text-[#d7c7b8] sm:text-xs">
          © {new Date().getFullYear()} Ilham Rinanda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}