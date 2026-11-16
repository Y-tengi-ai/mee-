"use client";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import Img from "./Img";
const chips = ["Python", "Machine Learning", "Deep Learning", "Neural Networks", "AI Automation", "Data Science"];
export default function Hero() {
  return <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
    <div className="grid-bg absolute inset-0" aria-hidden />
    <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" aria-hidden />
    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p className="font-mono text-sm text-cyan">{personal.role}</p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">{personal.name}</h1>
        <p className="mt-5 font-display text-xl text-sky sm:text-2xl">{personal.headline}</p>
        <p className="mt-5 max-w-xl text-muted">{personal.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-sky px-6 py-3 font-medium text-bg transition hover:-translate-y-0.5">Explore my work</a>
          <a href="#contact" className="rounded-full border border-soft px-6 py-3 transition hover:border-sky">Let's connect</a>
          <a href={personal.cv} download className="px-4 py-3 text-muted hover:text-white">Download CV</a>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted"><span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/70" /><span className="h-2 w-2 rounded-full bg-emerald-400" /></span>{personal.availability}</p>
      </motion.div>
      <div className="relative mx-auto w-full max-w-sm">
        <Img src={personal.profileImage} alt={`Portrait of ${personal.name}`} className="aspect-[4/5] rounded-3xl border border-soft" />
        {chips.map((c, i) => <motion.span key={c} animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i * .5, repeat: Infinity }}
          className="absolute hidden rounded-full border border-soft bg-bg/70 px-3 py-1 font-mono text-xs backdrop-blur sm:block"
          style={{ top: `${8 + i * 15}%`, [i % 2 ? "right" : "left"]: "-12%" }}>{c}</motion.span>)}
      </div>
    </div>
  </section>;
}
