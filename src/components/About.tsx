import { personal } from "@/data/personal";
import Section from "./Section";
export default function About() {
  return <Section id="about" title="Beyond code. Exploring intelligence.">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4 text-muted">{personal.bio.map(p => <p key={p}>{p}</p>)}</div>
      <div className="grid gap-4">{personal.pillars.map(p => <div key={p.title} className="rounded-2xl border border-soft bg-card p-5">
        <h3 className="font-display text-lg">{p.title}</h3><p className="mt-1 text-sm text-muted">{p.items.join(" · ")}</p></div>)}</div>
    </div></Section>;
}
