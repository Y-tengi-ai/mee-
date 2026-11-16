import { personal } from "@/data/personal";
import Section from "./Section";
export default function Research() {
  return <Section id="research" title="Research interests & what's next">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{personal.research.map(([t, d]) => <div key={t} className="rounded-xl border border-soft p-5"><h3 className="font-display">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>)}</div>
    <div className="mt-10"><h3 className="font-display text-xl">Currently exploring</h3>
      <ul className="mt-3 flex flex-wrap gap-2">{personal.exploring.map(e => <li key={e} className="rounded-full border border-sky/40 px-4 py-1.5 text-sm text-sky">{e}</li>)}</ul></div>
  </Section>;
}
