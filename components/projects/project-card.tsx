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
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted">
        <div
          aria-label={`${project.title} thumbnail`}
          role="img"
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${project.thumbnail}")` }}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors hover:text-accent-foreground"
              >
                {project.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <ProjectStatusBadge status={project.status} />
        </div>

        <p className="mb-4 text-sm leading-6 text-foreground">{project.shortBlurb}</p>
        <ProjectTags tags={project.tags} />

        <div className="mt-5 border-t border-border pt-4">
          <p className="mb-3 text-xs text-muted-foreground">
            {project.author} · {formatDate(project.date)}
          </p>
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
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
