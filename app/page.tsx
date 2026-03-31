export default function Home() {
  return (
    <section className="space-y-6">
      <p className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
        Portfolio in progress
      </p>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Hey, I&apos;m Christian.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          I build practical software products with a focus on clean user
          experience, maintainable architecture, and fast iteration.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-sidebar p-5">
        <h2 className="text-lg font-semibold text-foreground">What&apos;s next</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          I&apos;m currently filling out project, experience, and contact pages.
          Use the sidebar to navigate as sections go live.
        </p>
      </div>
    </section>
  );
}
