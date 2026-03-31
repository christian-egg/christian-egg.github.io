import MarkdownContent from "@/components/markdown-content";
import { getPageMarkdown, type PageSlug } from "@/lib/page-markdown";

type PageMarkdownProps = {
  page: PageSlug;
};

export default async function PageMarkdown({ page }: PageMarkdownProps) {
  const content = await getPageMarkdown(page);
  return <MarkdownContent content={content} />;
}
