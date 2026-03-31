import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-8 text-xl font-semibold text-foreground">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-5 text-lg font-semibold text-foreground">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
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
        hr: () => <hr className="my-6 border-border" />,
      }}
      className="rounded-lg border border-border bg-sidebar p-5"
    >
      {content}
    </ReactMarkdown>
  );
}
