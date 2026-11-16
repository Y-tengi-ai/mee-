"use client";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { nav } from "@/lib/utils";
import { personal } from "@/data/personal";
export default function Navbar() {
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false), [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const on = () => setSolid(scrollY > 20); on(); addEventListener("scroll", on);
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => { removeEventListener("scroll", on); io.disconnect(); };
  }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition ${solid ? "bg-bg/80 backdrop-blur border-b border-soft" : ""}`}>
    <motion.div style={{ scaleX: scrollYProgress }} className="absolute top-0 h-0.5 w-full origin-left bg-gradient-to-r from-sky to-violet" />
    <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <a href="#home" className="font-display text-lg font-semibold tracking-tight">DS<span className="text-sky">.</span></a>
      <ul className="hidden items-center gap-6 text-sm lg:flex">
        {nav.map(([l, id]) => <li key={id}><a href={`#${id}`} aria-current={active === id ? "true" : undefined} className={active === id ? "text-sky" : "text-muted hover:text-white"}>{l}</a></li>)}
      </ul>
      <div className="flex items-center gap-3">
        <a href={personal.cv} download className="hidden items-center gap-2 rounded-full border border-soft px-4 py-1.5 text-sm hover:border-sky sm:flex"><Download size={14} />CV</a>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>
    </nav>
    {open && <ul className="border-t border-soft bg-bg/95 px-5 py-4 backdrop-blur lg:hidden">
      {nav.map(([l, id]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-lg">{l}</a></li>)}
    </ul>}
  </header>;
}
