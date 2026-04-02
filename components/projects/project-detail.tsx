import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectStatusBadge from "@/components/projects/project-status-badge";
import ProjectTags from "@/components/projects/project-tags";
import ProjectSectionMarkdown from "@/components/projects/project-section-markdown";

type ProjectDetailProps = {
  project: Project;
};

type LinkButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function LinkButton({ href, label, icon }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
    >
      {label}
      {icon}
    </a>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="space-y-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <header className="space-y-4 rounded-xl border border-border bg-background p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-foreground">{project.title}</h1>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
          <ProjectStatusBadge status={project.status} />
        </div>

        <p className="text-sm text-muted-foreground">{formatDate(project.date)}</p>

        <ProjectTags tags={project.tags} />

        <div className="flex flex-wrap gap-2 pt-1">
          {project.links.visit ? (
            <LinkButton
              href={project.links.visit}
              label="Visit"
              icon={<ExternalLink className="h-3.5 w-3.5" />}
            />
          ) : null}
          {project.links.github ? (
            <LinkButton
              href={project.links.github}
              label="GitHub"
              icon={<Code2 className="h-3.5 w-3.5" />}
            />
          ) : null}
        </div>
      </header>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted">
        <div
          role="img"
          aria-label={`${project.title} hero image`}
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${project.heroImage}")` }}
        />
      </div>

      <section className="rounded-xl border border-border bg-background p-6">
        <ProjectSectionMarkdown content={project.content} />
      </section>
    </article>
  );
}
