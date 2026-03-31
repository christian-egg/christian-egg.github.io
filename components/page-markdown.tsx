import MarkdownContent from "@/components/markdown-content";
import { getPageMarkdown, type PageSlug } from "@/lib/page-markdown";

type PageMarkdownProps = {
  page: PageSlug;
};

export default async function PageMarkdown({ page }: PageMarkdownProps) {
  const { content, frontmatter } = await getPageMarkdown(page);

  return (
    <section className="space-y-6">
      {frontmatter.title ? (
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {frontmatter.title}
          </h1>
          {frontmatter.description ? (
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
              {frontmatter.description}
            </p>
          ) : null}
        </header>
      ) : null}

      <MarkdownContent content={content} />
    </section>
  );
}
