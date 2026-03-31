export default function AboutPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          About me
        </h1>
      </header>

      <div className="rounded-lg border border-border bg-sidebar p-5">
        <p className="text-sm leading-6 text-muted-foreground">
          A short bio, interests, and working style details will go here.
        </p>
      </div>
    </section>
  );
}
