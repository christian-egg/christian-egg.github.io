import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ProjectSectionMarkdownProps = {
  content: string;
};

export default function ProjectSectionMarkdown({
  content,
}: ProjectSectionMarkdownProps) {
  return (
    <div className="[&>*+*]:mt-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold text-foreground">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-foreground">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-sm leading-7 text-muted-foreground">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              {children}
            </ol>
          ),
          a: ({ href, children }) => {
            const isExternal = Boolean(href?.startsWith("http"));

            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {children}
              </a>
            );
          },
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
              {children}
            </code>
          ),
          hr: () => <hr className="border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
