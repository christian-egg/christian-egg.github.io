# Restoring the `/blogs` route

1. Move `blogs.md` to `content/pages/blogs.md`.
2. Add `app/blogs/page.tsx`:

```tsx
import PageMarkdown from "@/components/page-markdown";

export default function BlogsPage() {
  return (
    <section>
      <PageMarkdown page="blogs" />
    </section>
  );
}
```

3. In `lib/page-markdown.ts`, add `"blogs"` to `PAGE_SLUGS` and `blogs: "blogs.md"` to `FILE_BY_PAGE`.
4. In `components/sidebar.tsx`, add a nav item: `{ href: "/blogs", label: "Blogs", icon: PenSquare }` (import `PenSquare` from `lucide-react`).
