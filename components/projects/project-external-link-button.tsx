import type { ReactNode } from "react";

type ProjectExternalLinkButtonProps = {
  href: string;
  children: ReactNode;
  size?: "sm" | "md";
};

const sizeClasses: Record<NonNullable<ProjectExternalLinkButtonProps["size"]>, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-2 text-sm",
};

export default function ProjectExternalLinkButton({
  href,
  children,
  size = "md",
}: ProjectExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-md bg-foreground font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground ${sizeClasses[size]}`}
    >
      {children}
    </a>
  );
}
