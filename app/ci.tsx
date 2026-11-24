import { cacheLife } from "next/cache";

const repo = "diogosantana2011/qa-portfolio";
const api = `https://api.github.com/repos/${repo}`;
const workflow = `https://github.com/${repo}/actions/workflows/ci.yml`;

async function get(path: string) {
  const res = await fetch(`${api}${path}`, { headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json();
}

// Latest main CI run plus the counts the "Publish test counts" step annotates on it. null = show the badge only.
// Fetched once per build. Vercel builds on push while that push's CI is still running, so this is usually the previous run.
async function latestRun() {
  "use cache";
  cacheLife("max");
  try {
    const [run] = (await get("/actions/workflows/ci.yml/runs?branch=main&event=push&status=completed&per_page=1")).workflow_runs;
    const { check_runs } = await get(`/check-suites/${run.check_suite_id}/check-runs`);
    const job = check_runs.find((c: { name: string }) => c.name === "smoke-tests");
    const notes: { title: string; message: string }[] = await get(`/check-runs/${job.id}/annotations`);
    const counts = JSON.parse(notes.find((n) => n.title === "smoke-results")!.message);
    return { url: run.html_url as string, ...(counts as { passed: number; failed: number; total: number }) };
  } catch {
    return null;
  }
}

export async function CiStatus() {
  const run = await latestRun();
  return (
    <>
      <dt className="text-muted">tests</dt>
      <dd className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {run && (
          <a href={run.url} className={`underline-offset-4 hover:underline ${run.failed ? "text-bug" : "text-ok"}`}>
            <span aria-hidden>{run.failed ? "✗ " : "✓ "}</span>
            {run.passed}/{run.total} passed{run.failed > 0 && ` · ${run.failed} failed`}
          </a>
        )}
        <a href={workflow} aria-label="CI status on GitHub Actions">
          {/* eslint-disable-next-line @next/next/no-img-element -- external SVG badge, nothing for next/image to optimise */}
          <img src={`${workflow}/badge.svg`} alt="CI status" height={20} />
        </a>
      </dd>
    </>
  );
}
