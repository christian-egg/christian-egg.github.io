import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/project-detail";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
