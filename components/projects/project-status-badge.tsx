import type { ProjectStatus } from "@/lib/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  planned: "border-border bg-muted text-muted-foreground",
  "in-progress": "border-accent bg-accent text-accent-foreground",
  shipped: "border-nav-active bg-nav-active text-nav-active-foreground",
  archived: "border-border bg-background text-muted-foreground",
  completed: "border-nav-active bg-nav-active text-nav-active-foreground",
};

const STATUS_LABELS: Record<ProjectStatus, string> = {
  planned: "Planned",
  "in-progress": "In Progress",
  shipped: "Shipped",
  archived: "Archived",
  completed: "Completed",
};

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

export default function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
