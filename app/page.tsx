import { CiStatus } from "./ci";
import { certs, education, experience, jokes, learningRepos, moreCerts, profile, toolbox } from "./data";

const h2 = "text-[length:clamp(28px,4vw,40px)] font-bold tracking-tight";
const meta = "font-mono text-[13px] text-muted";
const primaryBtn = "inline-flex h-11 items-center rounded-lg bg-fg px-5 font-medium text-bg";
const outlineBtn = "inline-flex h-11 items-center rounded-lg border border-line px-5 font-medium hover:border-line-hi";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-pixel text-[12px] uppercase tracking-[0.12em] text-bug mb-3">{"// "}{children}</p>;
}

// "use cache" lets the page stay prerendered; the year refreshes on the default cache revalidation.
async function Year() {
  "use cache";
  return new Date().getFullYear();
}

const sevStyle: Record<string, string> = {
  Critical: "text-bug bg-bug/12",
  Medium: "text-warn bg-warn/12",
  Low: "text-muted bg-muted/12",
};

// Each oopsie is a deliberately broken-UI demo plus a bug-ticket stamp.
const oopsies: { id: string; title: string; sev: string; status: string; emoji?: string; label: string; demo: React.ReactNode }[] = [
  {
    id: "BUG-101",
    title: "Button escaped its container",
    sev: "Low",
    status: "Won't fix",
    emoji: "🙃",
    label: "button overflowing its container",
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
    label: "intentionally broken image, oopsies.png",
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
    label: "raw translation key shown instead of text",
    demo: <p className="font-mono text-sm">hero.subtitle.missing</p>,
  },
  {
    id: "BUG-500",
    title: "Uncaught exception in prod",
    sev: "Critical",
    status: "Refilling",
    emoji: "☕",
    label: "uncaught TypeError message",
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
    label: "long word overflowing its box",
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
    label: "placeholder lorem ipsum text",
    demo: <p className="text-sm italic">Lorem ipsum dolor sit amet, QA consectetur…</p>,
  },
];

// Consecutive roles at the same company render as one branch (a promotion, not two jobs).
const careers = experience.reduce<{ company: string; roles: typeof experience }[]>((groups, e) => {
  const last = groups.at(-1);
  if (last?.company === e.company) last.roles.push(e);
  else groups.push({ company: e.company, roles: [e] });
  return groups;
}, []);

const pct = Math.round((education.credits / education.totalCredits) * 100);

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  address: profile.location,
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }}
      />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[1120px] px-6 grid items-center gap-12 py-24 min-[960px]:grid-cols-[1.3fr_1fr] min-[960px]:gap-16">
          <div>
            <p className={`${meta} mb-4`}>
              $ whoami<span className="caret" aria-hidden />
            </p>
            <h1 className="text-[length:clamp(44px,7vw,80px)] font-bold leading-none tracking-[-0.03em]">{profile.name}</h1>
            <p className="mt-4 text-[22px] text-text-2">
              {profile.role} — {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className={primaryBtn} href={profile.linkedin}>Get in touch</a>
              <a className={outlineBtn} href={profile.github}>GitHub</a>
              <a className={outlineBtn} href={profile.linkedin}>LinkedIn</a>
            </div>
          </div>

          <div className="rounded-[10px] border border-line bg-card font-mono text-[13px]">
            <div className="flex items-center gap-3 border-b border-line px-4 py-3 text-muted">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-line-hi" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-hi" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-hi" />
              </span>
              ~/diogo — status
            </div>
            <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 p-4">
              <dt className="text-muted">XP</dt>
              <dd>
                <s className="text-bug decoration-2">NaN</s> <span className="text-ok">{profile.yearsInQa} years</span>
                <span className="mt-2 flex gap-1" aria-hidden>
                  {Array.from({ length: 10 }, (_, i) => (
                    <span key={i} className={`h-3 flex-1 rounded-sm ${i < profile.yearsInQa ? "bg-ok" : "bg-line"}`} />
                  ))}
                </span>
                <span className="mt-2 block text-muted"><span aria-hidden>✓ </span>fixed in v{profile.yearsInQa}.0</span>
              </dd>
              <dt className="text-muted">role</dt>
              <dd className="text-text-2">{profile.role}</dd>
              <dt className="text-muted">location</dt>
              <dd className="text-text-2">{profile.location}</dd>
              <dt className="text-muted">stack</dt>
              <dd className="text-text-2">{profile.stack}</dd>
              <CiStatus />
            </dl>
          </div>
        </section>

        {/* Ticker: full bleed, first copy is read, second copy only exists for the seamless loop */}
        <div className="ticker-band flex h-12 items-center overflow-hidden border-y border-line font-mono text-[13px] text-muted">
          <div className="ticker flex w-max">
            {[false, true].map((dup) => (
              <ul key={String(dup)} className="flex gap-10 pr-10" aria-hidden={dup || undefined}>
                {jokes.map((j) => (
                  <li key={j} className="whitespace-nowrap">
                    <span className="text-ok/60" aria-hidden>✦ </span>{j}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1120px] px-6">
          {/* Oopsies */}
          <section className="py-12 mt-12">
            <Label>known issues</Label>
            <h2 className={h2}>Oopsies!</h2>
            <p className="mt-2 text-text-2">A few bugs I found on the way here. Spot them before your users do.</p>
            <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-4">
              {oopsies.map((o) => (
                <article key={o.id} className="lift flex flex-col gap-4 rounded-[10px] border border-line bg-card p-4">
                  <div
                    className="flex h-[140px] items-center justify-center rounded-lg bg-card-2 p-4"
                    role="img"
                    aria-label={`Demo of bug: ${o.label} (intentional)`}
                  >
                    {o.demo}
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-[13px] text-bug">{o.id}</p>
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[12px] ${sevStyle[o.sev]}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                        {o.sev}
                      </span>
                    </div>
                    <h3 className="mt-1 text-[17px] font-semibold">{o.title}</h3>
                    <p className="mt-1 font-mono text-[13px] whitespace-nowrap">
                      <span className="text-muted">Status</span>{" "}
                      <span className="text-text-2">{o.status}</span>
                      {o.emoji && <span aria-hidden> {o.emoji}</span>}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Toolbox */}
          <section className="py-12">
            <Label>toolbox</Label>
            <h2 className={h2}>What I test with</h2>
            <p className={`${meta} mt-6 mb-3`}>
              Frameworks I&apos;ve built: private repos <span aria-hidden>🔒</span>, happy to walk you through them
            </p>
            <ul className="flex flex-wrap gap-2">
              {toolbox.filter((t) => t.private).map((t) => (
                <li key={t.name} className="flex h-9 items-center gap-1.5 rounded-full border border-line bg-card px-4 text-[14px]">
                  {t.name} <span className="text-[12px]" aria-hidden>🔒</span>
                </li>
              ))}
            </ul>
            <p className={`${meta} mt-6 mb-3`}>Also used</p>
            <ul className="flex flex-wrap gap-2">
              {toolbox.filter((t) => !t.private).map((t) => (
                <li key={t.name} className="flex h-9 items-center rounded-full border border-line bg-card px-4 text-[14px] text-text-2">
                  {t.name}
                </li>
              ))}
            </ul>
            <p className={`${meta} mt-6 mb-3`}>
              Learning repos: check at your own risk <span aria-hidden>😱💥</span>
            </p>
            <ul className="flex flex-wrap gap-3">
              {learningRepos.map((t) => (
                <li key={t.repo}>
                  {t.private ? (
                    <span className="flex h-full items-center gap-1.5 rounded-2xl border border-dashed border-line bg-card px-4 py-2 text-[14px]">
                      {t.name} <span className="text-[12px]" aria-hidden>🔒</span>
                    </span>
                  ) : (
                    <a
                      href={`${profile.github}/${t.repo}`}
                      className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-card px-4 py-2 hover:border-warn"
                    >
                      <span className="text-[14px]">{t.name} <span aria-hidden>↗</span></span>
                      <span className="font-mono text-[12px] text-muted">{t.repo}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Experience */}
          <section className="py-12">
            <Label>git log --career</Label>
            <h2 className={h2}>Experience</h2>
            <ol className="mt-6 border-l border-line">
              {careers.map((g, gi) => (
                <li key={g.company + gi} className="relative mb-8 pl-6">
                  <span
                    className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${gi === 0 ? "border-ok bg-ok" : "border-muted bg-bg"}`}
                    aria-hidden
                  />
                  <p className="mb-2 font-semibold">{g.company}</p>
                  <div className="space-y-5">
                    {g.roles.map((e) => (
                      <div key={e.hash}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <h3 className="font-semibold">
                            <span className="mr-2 font-mono text-[13px] font-normal text-muted" aria-hidden>{e.hash} </span>
                            {e.role}
                          </h3>
                          <p className={meta}>{e.dates} · {e.place}</p>
                        </div>
                        <ul className="mt-2 list-disc pl-5 text-[15px] text-text-2">
                          {e.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Education + certs */}
          <section className="py-12 grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Label>education</Label>
              <h2 className={h2}>{education.school}</h2>
              <p className="mt-2 text-text-2">{education.degree}</p>
              <p className={`${meta} mt-1`}>{education.dates}</p>
              <p className={`${meta} mt-3`}>
                loading… {pct}% <span className="text-muted">({education.credits}/{education.totalCredits} credits)</span>
                <span className="caret" aria-hidden />
              </p>
              <div
                className="mt-2 h-2 max-w-xs overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-label="Degree progress"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="h-full bg-ok" style={{ width: `${pct}%` }} />
              </div>
            </div>
            <div>
              <Label>achievements unlocked</Label>
              <h2 className={h2}>Certifications</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {certs.map((c) => (
                  <li key={c.name} className="flex gap-3 rounded-[10px] border border-line bg-card p-3">
                    <span aria-hidden>🏆</span>
                    <div>
                      <p className="text-[15px] font-medium leading-snug">{c.name}</p>
                      <p className={meta}>{c.issuer} · {c.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <details className="mt-4 text-[15px]">
                <summary className={`${meta} cursor-pointer`}>+ {moreCerts.length} more courses</summary>
                <ul className="mt-2 gap-x-6 space-y-1 text-text-2 sm:columns-2">
                  {moreCerts.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </details>
            </div>
          </section>

          {/* Contact */}
          <footer className="py-24 border-t border-line mt-12">
            <h2 className={h2}>Found a bug? Let&apos;s talk.</h2>
            <div className="mt-6 flex gap-3">
              <a className={primaryBtn} href={profile.linkedin}>Get in touch</a>
            </div>
            <p className={`${meta} mt-12`}>
              © <Year /> {profile.name} · 0 known bugs* <br />
              * that we know of
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
