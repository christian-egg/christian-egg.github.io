import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectStatusBadge from "@/components/projects/project-status-badge";
import ProjectTags from "@/components/projects/project-tags";

type ProjectCardProps = {
  project: Project;
};

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
        className="group relative block aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted outline-none ring-offset-background transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 md:min-h-[14rem]"
      >
        <div
          aria-hidden
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-200 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url("${project.thumbnail}")` }}
        />
        <span className="pointer-events-none absolute right-2 top-2 z-10 drop-shadow-sm">
          <ProjectStatusBadge status={project.status} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col px-5 pt-3 pb-3">
        <div className="mb-2">
          <h3 className="text-lg font-semibold leading-snug text-foreground">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent-foreground"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
            {project.subtitle}
          </p>
          <p className="mt-1 text-sm leading-6 text-foreground">{project.shortBlurb}</p>
        </div>

        <ProjectTags tags={project.tags} />

        <div className="mt-2 border-t border-border pt-3">
          <p className="mb-2 text-xs text-muted-foreground">{formatDate(project.date)}</p>
          <div className="flex flex-wrap gap-2">
            {project.links.visit ? (
              <a
                href={project.links.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground transition-colors hover:bg-nav-active"
              >
                Visit
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
              >
                GitHub
                <Code2 className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
