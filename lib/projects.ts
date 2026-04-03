import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export type ProjectStatus = "planned" | "in-progress" | "shipped" | "archived" | "completed";

export type ProjectLink = {
  text: string;
  url: string;
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
  stack: string[];
  links: ProjectLink[];
  content: string;
};

type ProjectFileData = Omit<Project, "slug" | "content"> & {
  order?: number;
};

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content", "projects");
const VALID_STATUSES: ReadonlySet<ProjectStatus> = new Set<ProjectStatus>([
  "planned",
  "in-progress",
  "shipped",
  "archived",
  "completed"
]);

function readProjectContent(projectDirectory: string): string {
  const contentPath = path.join(projectDirectory, "content.md");
  return readFileSync(contentPath, "utf8").trim();
}

function parseProjectLinks(raw: unknown, slug: string): ProjectLink[] {
  if (!Array.isArray(raw)) {
    throw new Error(`Project "${slug}": "links" must be an array of { "text", "url" } objects.`);
  }

  return raw.map((entry, index) => {
    if (typeof entry !== "object" || entry === null) {
      throw new Error(`Project "${slug}": links[${index}] must be an object.`);
    }

    const { text, url } = entry as Record<string, unknown>;

    if (typeof text !== "string" || typeof url !== "string") {
      throw new Error(
        `Project "${slug}": links[${index}] must have string "text" and "url" fields.`,
      );
    }

    return { text, url };
  });
}

function parseProjectFile(projectDirectory: string, slug: string): ProjectFileData {
  const jsonPath = path.join(projectDirectory, "project.json");
  const parsed = JSON.parse(readFileSync(jsonPath, "utf8")) as Record<string, unknown>;

  const links = parseProjectLinks(parsed.links, slug);

  return { ...(parsed as ProjectFileData), links };
}

function loadProjects(): Project[] {
  const directoryEntries = readdirSync(PROJECTS_DIRECTORY, { withFileTypes: true });
  const projectFolders = directoryEntries.filter((entry) => entry.isDirectory());

  const sortedProjects = projectFolders
    .map((entry) => {
      const slug = entry.name;
      const projectDirectory = path.join(PROJECTS_DIRECTORY, slug);
      const fileData = parseProjectFile(projectDirectory, slug);

      if (!VALID_STATUSES.has(fileData.status)) {
        throw new Error(`Invalid project status "${fileData.status}" in ${slug}.`);
      }

      const project: Project = {
        ...fileData,
        slug,
        content: readProjectContent(projectDirectory),
      };

      return {
        order: fileData.order ?? Number.MAX_SAFE_INTEGER,
        project,
      };
    })
    .sort((a, b) => a.order - b.order);

  return sortedProjects.map((entry) => entry.project);
}

export function getProjects(): Project[] {
  return loadProjects();
}

export function getProjectBySlug(slug: string): Project | undefined {
  return loadProjects().find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return loadProjects().map((project) => project.slug);
}
