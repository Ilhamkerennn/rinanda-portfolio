
const documents = [
  {
    number: "01",
    category: "CERTIFICATE",
    title: "Internship Certificate",
    description:
      "Sertifikat resmi sebagai bukti telah menyelesaikan program magang di PT PLN Icon Plus.",
    file: "/documents/sertifikat-magang.pdf",
    action: "View Certificate",
    type: "certificate",
  },
  {
    number: "02",
    category: "INTERNSHIP REPORT",
    title: "Internship Report",
    description:
      "Dokumentasi kegiatan magang, implementasi outbound call, kunjungan pelanggan, dan hasil pekerjaan.",
    file: "/documents/laporan-magang.pdf",
    action: "View Report",
    type: "report",
  },
];

function DocumentIcon({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M7 3.75h7l5 5V20a.75.75 0 0 1-.75.75h-11.5A.75.75 0 0 1 6 20V4.5a.75.75 0 0 1 .75-.75Z" />
      <path d="M14 4v5h5M9 13h6M9 16.5h6" />
      {type === "certificate" && (
        <path d="m12 18 1.2 1.2 2.3-2.4" />
      )}
    </svg>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#0a0a0a] px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#c5ff5b]">
              Proof of Experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Certificates <span className="text-[#c5ff5b]">&</span> Documents
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-400 sm:text-base">
            Dokumen pendukung yang merangkum pengalaman dan hasil kegiatan
            magang profesional saya.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {documents.map((doc) => (
            <article
              key={doc.number}
              className="group rounded-2xl border border-white/10 bg-[#111] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c5ff5b]/50 sm:p-8"
            >
              <div className="mb-10 flex items-start justify-between">
                <div className="rounded-xl border border-[#c5ff5b]/20 bg-[#c5ff5b]/10 p-3 text-[#c5ff5b]">
                  <DocumentIcon type={doc.type} />
                </div>

                <span className="font-mono text-sm text-neutral-600">
                  / {doc.number}
                </span>
              </div>

              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#c5ff5b]">
                {doc.category}
              </p>

              <h3 className="mb-3 text-2xl font-semibold">
                {doc.title}
              </h3>

              <p className="mb-8 min-h-[72px] text-sm leading-6 text-neutral-400">
                {doc.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c5ff5b] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#d5ff85]"
                >
                  {doc.action}
                  <span aria-hidden="true">↗</span>
                </a>

                {doc.type === "report" && (
                  <a
                    href={doc.file}
                    download="Laporan-Magang-Ilham-Rinanda.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-[#c5ff5b]/50 hover:text-[#c5ff5b]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M12 3v12m-4-4 4 4 4-4M5 17v3h14v-3" />
                    </svg>
                    Download PDF
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-neutral-600">
          Official documents available for review.
        </p>
      </div>
    </section>
  );
}
