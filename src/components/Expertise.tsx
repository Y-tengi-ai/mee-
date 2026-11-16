import { skills } from "@/data/skills";
import Section from "./Section";
export default function Expertise() {
  return <Section id="expertise" title="Technical expertise & AI exploration" alt>
    <p className="-mt-6 mb-8 max-w-xl text-sm text-muted">Labels reflect honest experience: working knowledge, learning, or exploring.</p>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skills.map(g => <div key={g.group} className="rounded-2xl border border-soft bg-card p-6 transition hover:border-sky/50">
      <h3 className="font-display text-xl">{g.group}</h3>
      <ul className="mt-4 space-y-2">{g.items.map(([n, l]) => <li key={n} className="flex justify-between gap-3 text-sm"><span>{n}</span><span className="font-mono text-xs text-muted">{l}</span></li>)}</ul></div>)}</div>
  </Section>;
}
