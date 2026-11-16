"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Section from "./Section";
import Img from "./Img";
const cats = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
export default function Projects() {
  const [c, setC] = useState("All");
  const list = projects.filter(p => c === "All" || p.category === c);
  return <Section id="projects" title="Selected projects & engineering experiments">
    <div className="mb-8 flex flex-wrap gap-2">{cats.map(k => <button key={k} onClick={() => setC(k)} aria-pressed={c === k}
      className={`rounded-full border px-4 py-1.5 text-sm ${c === k ? "border-sky text-sky" : "border-soft text-muted"}`}>{k}</button>)}</div>
    <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><AnimatePresence>{list.map(p => <motion.article layout key={p.title}
      initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="group overflow-hidden rounded-2xl border border-soft bg-card">
      <Img src={p.image} alt={`${p.title} preview`} className="aspect-video transition group-hover:brightness-110" />
      <div className="p-5"><div className="flex justify-between font-mono text-xs"><span className="text-cyan">{p.category}</span><span className="text-muted">{p.status}</span></div>
        <h3 className="mt-2 font-display text-lg">{p.title}</h3><p className="mt-1 text-sm text-muted">{p.description}</p>
        <p className="mt-2 text-xs text-muted/80">{p.overview}</p>
        <p className="mt-3 font-mono text-xs text-muted">{p.technologies.join(", ")}</p>
        <div className="mt-4 flex gap-4 text-sm"><a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky"><Github size={14} />Code</a>
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky"><ExternalLink size={14} />Demo</a>}</div></div>
    </motion.article>)}</AnimatePresence></motion.div>
  </Section>;
}
