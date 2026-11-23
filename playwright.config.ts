import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  use: { baseURL: "http://localhost:3000" },
  webServer: { command: "npm run start", url: "http://localhost:3000", reuseExistingServer: true },
  projects: [
    { name: "desktop", use: { viewport: { width: 1280, height: 800 } } },
    { name: "mobile", use: { viewport: { width: 375, height: 740 } } },
  ],
});
