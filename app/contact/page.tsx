export default function ContactPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Contact</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Get in touch
        </h1>
      </header>

      <div className="rounded-lg border border-border bg-sidebar p-5">
        <p className="text-sm leading-6 text-muted-foreground">
          This page will include preferred contact methods and response
          expectations.
        </p>
      </div>
    </section>
  );
}
