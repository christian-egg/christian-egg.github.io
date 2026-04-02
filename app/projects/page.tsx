import ProjectCard from "@/components/projects/project-card";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">Projects</h1>
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
          A modular view of selected work, including live links, source code, and
          implementation notes.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
