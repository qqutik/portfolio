export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  chips: string[];
}

export interface ProjectItem {
  num: string;
  title: string;
  description: string;
  role: string;
  tools: string[];
}

export interface WorkItem {
  company: string;
  period: string;
  role: string;
  duties: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  field: string;
  description: string;
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
];

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Now",
    title: "Senior Front-end Developer",
    description:
      "Leading the front-end direction for a B2B SaaS platform: architecture, performance budgets, and mentoring a team of four developers.",
    chips: ["React", "TypeScript", "Architecture", "Mentoring"],
  },
  {
    period: "2021 — 2023",
    title: "Front-end Developer",
    description:
      "Built and maintained a component library used across five products; cut UI development time by ~40% and unified the visual language.",
    chips: ["Design systems", "Storybook", "Testing"],
  },
  {
    period: "2019 — 2021",
    title: "Web Developer",
    description:
      "Delivered 20+ marketing and e-commerce websites for agency clients, from layout to deployment, with a focus on speed and accessibility.",
    chips: ["JavaScript", "CSS", "Accessibility", "SEO"],
  },
  {
    period: "2018 — 2019",
    title: "Junior Developer",
    description:
      "Started with HTML/CSS production work and small interactive features; learned the craft of clean, maintainable markup.",
    chips: ["HTML", "CSS", "jQuery"],
  },
];

export const projects: ProjectItem[] = [
  {
    num: "P–01",
    title: "Atlas CRM",
    description:
      "A customer platform for logistics teams: real-time dashboards, route analytics, and a fully keyboard-driven workflow.",
    role: "Lead front-end developer",
    tools: ["React", "TypeScript", "WebSocket"],
  },
  {
    num: "P–02",
    title: "Brick & Beam",
    description:
      "E-commerce store for an industrial furniture brand — custom configurator, 3D previews, and a 98 Lighthouse performance score.",
    role: "Full-stack developer",
    tools: ["Next.js", "Three.js", "Stripe"],
  },
  {
    num: "P–03",
    title: "Grid UI Kit",
    description:
      "Open-source design system with 60+ accessible components, theming, and full documentation. 2k+ GitHub stars.",
    role: "Author & maintainer",
    tools: ["Design tokens", "a11y", "CI"],
  },
  {
    num: "P–04",
    title: "Metronome",
    description:
      "Analytics tool for content teams: editorial calendar, publishing metrics, and automated weekly reports.",
    role: "Front-end developer",
    tools: ["Vue", "D3.js", "Node.js"],
  },
];

export const work: WorkItem[] = [
  {
    company: "Northline Digital",
    period: "2023 — Now",
    role: "Senior Front-end Developer",
    duties: [
      "Own the front-end architecture of the core SaaS product used by 40k+ monthly users.",
      "Introduced a testing culture that reduced production regressions by 60%.",
      "Run code reviews and technical interviews; mentor junior developers.",
    ],
  },
  {
    company: "Forge Studio",
    period: "2019 — 2023",
    role: "Web Developer → Front-end Developer",
    duties: [
      "Shipped 20+ client projects on time across e-commerce, media, and fintech.",
      "Built the studio's internal component library and project starter kit.",
      "Worked directly with designers and clients to scope and estimate work.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    period: "2015 — 2019",
    title: "Kyiv Polytechnic Institute",
    field: "B.Sc. Computer Science",
    description:
      "Algorithms, databases, and software engineering. Thesis on client-side performance optimization for data-heavy web apps.",
  },
  {
    period: "2020",
    title: "IT STEP Academy",
    field: "Advanced Front-end Development",
    description:
      "Intensive course: modern JavaScript, React ecosystem, tooling, and production deployment workflows.",
  },
  {
    period: "2022",
    title: "Certification",
    field: "AWS Certified Developer — Associate",
    description:
      "Cloud fundamentals, serverless architecture, and CI/CD pipelines for web applications.",
  },
];

export const contacts = {
  email: "hello@dkovalenko.dev",
  phone: "+380 67 123 45 67",
  phoneHref: "tel:+380671234567",
  social: [
    { label: "GitHub", href: "#contact" },
    { label: "LinkedIn", href: "#contact" },
    { label: "Telegram", href: "#contact" },
  ],
};
