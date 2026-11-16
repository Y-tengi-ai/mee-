import { experience, education } from "@/data/personal";
import Section from "./Section";
const Line = ({ items }: { items: typeof experience }) => <ol className="space-y-8 border-l border-soft pl-6">{items.map(e => <li key={e.org} className="relative">
  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky" /><p className="font-mono text-xs text-muted">{e.period}</p>
  <h3 className="font-display text-xl">{e.role}</h3><p className="text-cyan">{e.org}</p><p className="mt-2 max-w-xl text-sm text-muted">{e.text}</p></li>)}</ol>;
export default function Experience() {
  return <Section id="experience" title="Professional journey & academic foundation" alt>
    <div className="grid gap-12 md:grid-cols-2"><Line items={experience} /><Line items={education} /></div>
    <p className="mt-12 text-sm text-muted">Certificates: none listed yet. Add entries when you have verifiable credentials.</p>
  </Section>;
}
