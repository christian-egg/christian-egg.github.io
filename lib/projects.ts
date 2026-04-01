export type ProjectStatus = "planned" | "in-progress" | "shipped" | "archived";

export type ProjectLinks = {
  visit?: string;
  github?: string;
};

export type ProjectDetailSections = {
  overview: string;
  problem: string;
  solution: string;
  techStackNotes: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortBlurb: string;
  thumbnail: string;
  heroImage: string;
  tags: string[];
  status: ProjectStatus;
  featured: boolean;
  date: string;
  author: string;
  stack: string[];
  links: ProjectLinks;
  sections: ProjectDetailSections;
};

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    subtitle: "Static Next.js portfolio deployed to GitHub Pages",
    shortBlurb:
      "A statically exported portfolio with a sidebar layout, semantic theme tokens, and App Router pages.",
    thumbnail: "/projects/portfolio-site-thumb.png",
    heroImage: "/projects/portfolio-site-hero.png",
    tags: ["nextjs", "portfolio", "github-pages"],
    status: "in-progress",
    featured: true,
    date: "2026-03-31",
    author: "Christian Egg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    links: {
      visit: "https://christian-egg.github.io/",
      github: "https://github.com/christian-egg/christian-egg.github.io",
    },
    sections: {
      overview:
        "This project modernizes my personal website with Next.js App Router while keeping deployment simple through static export.",
      problem:
        "The previous site made content updates and layout evolution harder over time, especially for sections that should share visual patterns.",
      solution:
        "I introduced a reusable page shell, semantic design tokens, and content modules so pages can scale without repeating structure or hardcoded styling decisions.",
      techStackNotes:
        "The site uses static export mode for GitHub Pages compatibility and avoids server-only features so everything builds to plain static assets.",
      highlights: [
        "Built a shared sidebar + main content shell for consistent navigation.",
        "Established semantic color tokens to support easy palette swaps.",
        "Configured GitHub Actions to build and deploy the exported site.",
      ],
    },
  },
  {
    slug: "workflow-utility",
    title: "Workflow Utility",
    subtitle: "CLI automation for repeatable project setup",
    shortBlurb:
      "A TypeScript command-line utility for reducing manual setup steps and standardizing daily workflows.",
    thumbnail: "/projects/workflow-utility-thumb.png",
    heroImage: "/projects/workflow-utility-hero.png",
    tags: ["cli", "automation", "typescript"],
    status: "planned",
    featured: false,
    date: "2026-02-14",
    author: "Christian Egg",
    stack: ["Node.js", "TypeScript", "Commander", "pnpm"],
    links: {
      github: "https://github.com/christian-egg",
    },
    sections: {
      overview:
        "Workflow Utility is a local-first CLI intended to remove repeated setup work when starting projects or running common maintenance tasks.",
      problem:
        "Project bootstrapping and routine scripts often drift between repositories, which increases friction and introduces small but costly inconsistencies.",
      solution:
        "The utility wraps common setup flows in declarative commands with preset templates, default checks, and optional prompts for project-specific details.",
      techStackNotes:
        "TypeScript keeps command contracts explicit while Node.js APIs handle file operations and shell integration across development environments.",
      highlights: [
        "Designing command interfaces around reusable templates.",
        "Adding validation so generated files stay predictable.",
        "Keeping outputs deterministic for easier CI integration later.",
      ],
    },
  },
  {
    slug: "data-dashboard",
    title: "Data Dashboard",
    subtitle: "Operational reporting experience for quick analysis",
    shortBlurb:
      "A metrics dashboard that emphasizes readable visuals and efficient filtering for day-to-day monitoring.",
    thumbnail: "/projects/data-dashboard-thumb.png",
    heroImage: "/projects/data-dashboard-hero.png",
    tags: ["analytics", "dashboard", "react"],
    status: "shipped",
    featured: true,
    date: "2025-09-20",
    author: "Christian Egg",
    stack: ["React", "TypeScript", "REST API", "Chart.js"],
    links: {
      visit: "https://example.com/dashboard",
    },
    sections: {
      overview:
        "Data Dashboard centralizes operational indicators so stakeholders can quickly assess trends and respond to changes in performance.",
      problem:
        "Teams previously relied on fragmented reports across different tools, which made trend comparisons and incident triage slower than necessary.",
      solution:
        "I built a focused dashboard with shared filters, reusable metric cards, and clear chart legends to reduce interpretation time for common reporting tasks.",
      techStackNotes:
        "The frontend consumes REST endpoints and caches query responses strategically to keep interactions responsive during repeated filtering.",
      highlights: [
        "Delivered role-focused views for different stakeholder groups.",
        "Improved readability with consistent chart legends and labels.",
        "Reduced reporting turnaround by consolidating key metrics.",
      ],
    },
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
