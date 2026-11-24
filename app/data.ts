export const profile = {
  name: "Diogo Santana",
  role: "Senior QA Engineer",
  tagline: "I break things so your users don't.",
  location: "Cork, Ireland",
  github: "https://github.com/diogosantana2011",
  linkedin: "https://www.linkedin.com/in/diogo-santana-8a83bbb2/",
  stack: "Playwright · Cypress · k6",
  yearsInQa: 8, // shortcut: hardcoded (static prerender), bump yearly
};

export const jokes = [
  "works on my machine ✓",
  "it's not a bug, it's a feature",
  "flaky ≠ fine",
  "have you tried clearing the cache?",
  "LGTM 👀 (didn't look)",
  "100% coverage, 0% confidence",
  "closed: cannot reproduce",
  "who tests the tests?",
];

// private: built a framework/repo with it, but the repo is private (mention, never link).
export const toolbox: { name: string; private?: true }[] = [
  { name: "Playwright", private: true },
  { name: "Cypress", private: true },
  { name: "k6", private: true },
  { name: "Karate", private: true },
  { name: "Appium", private: true },
  { name: "TestCafe", private: true },
  { name: "PactumJS", private: true },
  { name: "JMeter" },
  { name: "Postman" },
  { name: "Selenium / Python" },
  { name: "OWASP ZAP" },
  { name: "TestRail" },
];

// Raw learning repos, shown with a "check at your own risk" warning.
export const learningRepos: { name: string; repo: string; private?: true }[] = [
  { name: "JavaScript", repo: "JS_test" },
  { name: "Python", repo: "Python" },
  { name: "rom-gba", repo: "rom-gba", private: true },
];

export const experience = [
  {
    hash: "a1f3c2",
    company: "NS90",
    role: "Senior QA Engineer",
    dates: "Feb 2024 - Present",
    place: "Cork, Ireland",
    points: ["Quality across web products, from test strategy to release."],
  },
  {
    hash: "7be019",
    company: "NEORIS",
    role: "QA Engineer",
    dates: "Dec 2023 - Feb 2024",
    place: "Remote · Madrid",
    points: ["QA engineering on client projects."],
  },
  {
    hash: "4c9e1d",
    company: "Playtech",
    role: "QA Automation Engineer",
    dates: "Apr 2022 - Oct 2023",
    place: "Gibraltar",
    points: [
      "Extended UI and API automation (Cypress, Python/Selenium, Postman).",
      "Maintained QA CI/CD pipelines and documented test cases in TestRail.",
    ],
  },
  {
    hash: "2d07ab",
    company: "Playtech",
    role: "QA Engineer",
    dates: "Nov 2019 - Mar 2022",
    place: "Gibraltar",
    points: [
      "Owned test strategy and plans; automated API and frontend tests with Cypress.",
      "Performance testing with JMeter and k6; exploratory security with OWASP ZAP.",
    ],
  },
  {
    hash: "e5b830",
    company: "Ladbrokes Coral Group",
    role: "Digital Quality Analyst",
    dates: "Aug 2018 - Nov 2019",
    place: "Gibraltar",
    points: ["Release testing across gaming brands, keeping compliance scripts up to date."],
  },
];

export const education = {
  school: "The Open University",
  degree: "BSc (Hons) Computing & IT",
  dates: "2021 - present · part-time",
  credits: 180, // passed credits only (stage 1: 120, stage 2 so far: 60); bump as modules pass
  totalCredits: 360,
};

export const certs = [
  { name: "JSE-40-01 Certified Entry-Level JavaScript Programmer", issuer: "OpenEDG", year: 2023 },
  { name: "TestJS Summit participant", issuer: "GitNation", year: 2022 },
  { name: "JavaScript Essentials 1", issuer: "Cisco", year: 2023 },
  { name: "Networking Essentials", issuer: "Cisco", year: 2023 },
];

export const moreCerts = [
  "Become a Test Automation Engineer",
  "Robot Framework Test Automation (Selenium)",
  "JMeter: Performance and Load Testing",
  "API Testing Foundations",
  "Agile Testing",
  "Behavior-Driven Development",
  "Unit Testing and TDD in Python",
  "Advanced Python",
  "Jenkins Essential Training",
  "Selenium Essential Training",
  "Introducing Postman",
];
