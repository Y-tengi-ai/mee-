import { personal } from "@/data/personal";
import Section from "./Section";
export default function Automation() {
  return <Section id="automation" title="Turning intelligence into automation." alt>
    <p className="-mt-6 mb-10 max-w-xl text-muted">Exploring AI-powered automation, intelligent workflows, and systems that reduce repetitive work. These are areas of interest and active learning.</p>
    <div className="grid gap-5 md:grid-cols-3">{personal.automation.map(a => <div key={a.title} className="rounded-2xl border border-soft bg-card p-6">
      <h3 className="font-display text-xl">{a.title}</h3><ul className="mt-4 space-y-2 text-sm text-muted">{a.items.map(i => <li key={i}>{i}</li>)}</ul></div>)}</div>
    <div className="mt-10 rounded-2xl border border-soft bg-gradient-to-r from-sky/10 to-violet/10 p-8">
      <h3 className="font-display text-2xl">Have an idea worth automating?</h3>
      <p className="mt-2 text-muted">Let's explore how AI and intelligent automation could improve your workflow.</p>
      <a href="#contact" className="mt-5 inline-block rounded-full bg-sky px-6 py-3 font-medium text-bg">Discuss an AI automation project</a></div>
  </Section>;
}
