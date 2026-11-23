import { certs, education, experience, jokes, moreCerts, profile, toolbox } from "./data";

const pixel = "font-pixel text-[10px] uppercase tracking-wider";

function Label({ children }: { children: React.ReactNode }) {
  return <p className={`${pixel} text-bug mb-3`}>{"// "}{children}</p>;
}

// Each oopsie is a purely decorative broken-UI demo plus a bug-ticket stamp.
const oopsies: { id: string; title: string; sev: string; status: string; demo: React.ReactNode }[] = [
  {
    id: "BUG-101",
    title: "Button escaped its container",
    sev: "Low",
    status: "Won't fix 🙃",
    demo: (
      <div className="rounded border border-line p-3 w-40">
        <p className="text-sm mb-2">Subscribe?</p>
        <span className="inline-block translate-x-20 rounded bg-fg text-bg px-3 py-1 text-sm">Yes pls</span>
      </div>
    ),
  },
  {
    id: "BUG-404",
    title: "Image not found",
    sev: "Medium",
    status: "Open",
    demo: (
      <div className="flex h-20 w-32 items-center justify-center gap-2 border border-dashed border-line text-xs text-muted">
        <span className="text-2xl">🖼️</span> oopsies.png
      </div>
    ),
  },
  {
    id: "BUG-128",
    title: "Missing translation key",
    sev: "Low",
    status: "In review",
    demo: <p className="font-mono text-sm">hero.subtitle.missing</p>,
  },
  {
    id: "BUG-500",
    title: "Uncaught exception in prod",
    sev: "Critical",
    status: "Refilling ☕",
    demo: (
      <div className="rounded bg-bug/10 border border-bug px-3 py-2 font-mono text-xs text-bug">
        Uncaught TypeError: coffee is undefined
      </div>
    ),
  },
  {
    id: "BUG-777",
    title: "Text overflow",
    sev: "Low",
    status: "Works on my machine",
    demo: (
      <div className="w-32 flex-none rounded border border-line p-2 text-sm whitespace-nowrap">
        Supercalifragilisticexpialidocious
      </div>
    ),
  },
  {
    id: "BUG-999",
    title: "Lorem ipsum shipped to prod",
    sev: "Medium",
    status: "Blame the designer",
    demo: <p className="text-sm italic">Lorem ipsum dolor sit amet, QA consectetur…</p>,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="font-mono text-sm text-muted mb-4">
          $ whoami<span className="caret" />
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-3 text-xl sm:text-2xl text-muted">
          {profile.role} — {profile.tagline}
        </p>

        <div className="mt-8 max-w-sm rounded border border-line bg-card p-4">
          <p className={`${pixel} mb-2`}>
            XP: <s className="text-bug">NaN</s> <span className="text-ok">{profile.yearsInQa} years</span>
          </p>
          <div className="hp h-3 w-full rounded-sm" aria-hidden />
          <p className="mt-2 font-mono text-xs text-muted">✓ fixed in v{profile.yearsInQa}.0 · 📍 {profile.location}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded bg-fg text-bg px-4 py-2 font-medium" href={profile.github}>GitHub</a>
          <a className="rounded border border-line px-4 py-2 font-medium" href={profile.linkedin}>LinkedIn</a>
        </div>
      </section>

      {/* Ticker */}
      <div className="-mx-4 sm:-mx-6 overflow-hidden border-y border-line py-3" aria-hidden>
        <div className="ticker flex w-max gap-10 font-mono text-sm text-muted">
          {[...jokes, ...jokes].map((j, i) => (
            <span key={i}>✦ {j}</span>
          ))}
        </div>
      </div>

      {/* Oopsies */}
      <section className="py-20">
        <Label>known issues</Label>
        <h2 className="text-3xl font-bold">Oopsies!</h2>
        <p className="mt-2 text-muted">A few bugs I found on the way here. Spot them before your users do.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {oopsies.map((o) => (
            <article key={o.id} className="glitch rounded-lg border border-line bg-card p-4">
              <div className="h-28 flex items-center" aria-hidden>
                {o.demo}
              </div>
              <div className="mt-4 border-t border-dashed border-line pt-3">
                <p className={`${pixel} text-bug`}>{o.id}</p>
                <h3 className="mt-1 font-semibold">{o.title}</h3>
                <p className="font-mono text-xs text-muted">
                  Severity: {o.sev} · Status: {o.status}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Toolbox */}
      <section className="py-12">
        <Label>toolbox</Label>
        <h2 className="text-3xl font-bold">What I test with</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {toolbox.map((t) => (
            <li key={t.name}>
              {t.repo ? (
                <a href={`${profile.github}/${t.repo}`} className="block rounded border border-line bg-card px-3 py-1.5 font-mono text-sm hover:border-bug">
                  {t.name} ↗
                </a>
              ) : (
                <span className="block rounded border border-line px-3 py-1.5 font-mono text-sm text-muted">{t.name}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="py-12">
        <Label>git log --career</Label>
        <h2 className="text-3xl font-bold">Experience</h2>
        <ol className="mt-8 border-l border-line">
          {experience.map((e) => (
            <li key={e.role + e.dates} className="relative mb-8 pl-6">
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 bg-bug" aria-hidden />
              <p className="font-mono text-xs text-muted">{e.dates} · {e.place}</p>
              <h3 className="mt-1 font-semibold">
                {e.role} <span className="text-muted">@ {e.company}</span>
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education + certs */}
      <section className="py-12 grid gap-8 sm:grid-cols-2">
        <div>
          <Label>education</Label>
          <h2 className="text-2xl font-bold">{education.school}</h2>
          <p className="mt-1">{education.degree}</p>
          <p className="font-mono text-xs text-muted">{education.dates}</p>
        </div>
        <div>
          <Label>achievements unlocked</Label>
          <h2 className="text-2xl font-bold">Certifications</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {certs.map((c) => (
              <li key={c}>🏆 {c}</li>
            ))}
          </ul>
          <details className="mt-3 text-sm">
            <summary className="cursor-pointer font-mono text-muted">+ show more</summary>
            <ul className="mt-2 space-y-1 text-muted">
              {moreCerts.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-20 border-t border-line mt-12">
        <h2 className="text-3xl font-bold">Found a bug? Let&apos;s talk.</h2>
        <div className="mt-6 flex gap-3">
          <a className="rounded bg-fg text-bg px-4 py-2 font-medium" href={profile.linkedin}>Message me on LinkedIn</a>
        </div>
        <p className="mt-12 font-mono text-xs text-muted">
          © 2026 {profile.name} · 0 known bugs* <br />
          * that we know of
        </p>
      </footer>
    </main>
  );
}
