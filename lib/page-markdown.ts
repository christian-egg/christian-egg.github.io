import { readFile } from "node:fs/promises";
import path from "node:path";

export const PAGE_SLUGS = [
  "home",
  "experience",
  "projects",
  "blogs",
  "about",
  "contact",
  "tools",
] as const;

export type PageSlug = (typeof PAGE_SLUGS)[number];

const FILE_BY_PAGE: Record<PageSlug, string> = {
  home: "home.md",
  experience: "experience.md",
  projects: "projects.md",
  blogs: "blogs.md",
  about: "about.md",
  contact: "contact.md",
  tools: "tools.md",
};

const CONTENT_DIRECTORY = path.join(process.cwd(), "content", "pages");

export async function getPageMarkdown(page: PageSlug): Promise<string> {
  const filePath = path.join(CONTENT_DIRECTORY, FILE_BY_PAGE[page]);
  return readFile(filePath, "utf8");
}
