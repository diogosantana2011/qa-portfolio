import { test, expect } from "@playwright/test";

test("page renders the main sections and links", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Diogo Santana");
  for (const h of ["Oopsies!", "What I test with", "Experience", "Certifications"]) {
    await expect(page.getByRole("heading", { name: h })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: "GitHub", exact: true })).toHaveAttribute("href", /github\.com\/diogosantana2011/);
  await expect(page.getByRole("link", { name: "LinkedIn", exact: true })).toHaveAttribute("href", /linkedin\.com\/in\//);
});

test("no accidental horizontal scroll (the bugs are on purpose, the scrollbar isn't)", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test("hero: XP joke renders as intended and primary CTA is there (AC-01..03)", async ({ page }) => {
  await page.goto("/");
  const nan = page.locator("s", { hasText: "NaN" });
  await expect(nan).toHaveCSS("text-decoration-line", "line-through");
  await expect(nan).toHaveCSS("text-transform", "none");
  const cta = page.getByRole("link", { name: "Get in touch" }).first();
  await expect(cta).toHaveAttribute("href", /linkedin\.com\/in\//);
  expect((await cta.boundingBox())!.height).toBeGreaterThanOrEqual(44);
});

test("hero status panel shows the CI row", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("tests", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "CI status on GitHub Actions" })).toHaveAttribute("href", /actions\/workflows\/ci\.yml/);
});

test("every bug card shows a severity pill and an unwrapped status (AC-09, AC-10)", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("article");
  await expect(cards).toHaveCount(6);
  for (const card of await cards.all()) {
    await expect(card.getByText(/^(Critical|Medium|Low)$/)).toBeVisible();
    const status = card.locator("p", { hasText: "Status" });
    const { height } = (await status.boundingBox())!;
    expect(height).toBeLessThan(24); // one line
  }
});

test("bug cards glitch-shake on hover", async ({ page }) => {
  await page.goto("/");
  const card = page.locator("article").first();
  await card.hover();
  await expect(card).toHaveCSS("animation-name", "glitch");
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });
  test("ticker is static (AC-06)", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".ticker")).toHaveCSS("animation-name", "none");
  });
  test("bug cards don't shake", async ({ page }) => {
    await page.goto("/");
    const card = page.locator("article").first();
    await card.hover();
    await expect(card).toHaveCSS("animation-name", "none");
  });
});

// Needs network. Catches links to private/renamed repos (they 404 for visitors).
test("every GitHub link is publicly reachable @network", async ({ page, request }) => {
  await page.goto("/");
  const hrefs = new Set(await page.locator('a[href*="github.com"]').evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href)));
  for (const href of hrefs) {
    expect((await request.get(href)).status(), href).toBe(200);
  }
});
