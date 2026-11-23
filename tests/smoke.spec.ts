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
