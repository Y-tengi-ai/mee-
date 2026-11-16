export default function Section({ id, title, children, alt }: { id: string; title: string; children: React.ReactNode; alt?: boolean }) {
  return <section id={id} className={alt ? "bg-bg2" : ""}><div className="mx-auto max-w-6xl px-5 py-24">
    <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2><div className="mt-12">{children}</div></div></section>;
}
