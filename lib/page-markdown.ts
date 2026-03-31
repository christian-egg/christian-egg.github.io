import { readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

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
export type PageFrontmatter = {
  title?: string;
  description?: string;
  summary?: string;
  updatedAt?: string;
  tags?: string[];
};

export type PageMarkdownData = {
  frontmatter: PageFrontmatter;
  content: string;
};

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

function parseStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const items = value.filter((entry): entry is string => typeof entry === "string");
  return items.length ? items : undefined;
}

function parseFrontmatter(data: Record<string, unknown>): PageFrontmatter {
  return {
    title: typeof data.title === "string" ? data.title : undefined,
    description: typeof data.description === "string" ? data.description : undefined,
    summary: typeof data.summary === "string" ? data.summary : undefined,
    updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : undefined,
    tags: parseStringArray(data.tags),
  };
}

export async function getPageMarkdown(page: PageSlug): Promise<PageMarkdownData> {
  const filePath = path.join(CONTENT_DIRECTORY, FILE_BY_PAGE[page]);
  const source = await readFile(filePath, "utf8");
  const parsed = matter(source);

  return {
    frontmatter: parseFrontmatter(parsed.data),
    content: parsed.content,
  };
}
