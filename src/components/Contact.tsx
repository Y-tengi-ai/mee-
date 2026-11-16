"use client";
import { useState } from "react";
import { personal } from "@/data/personal";
import Section from "./Section";
const types = ["AI / Machine Learning", "AI Automation", "LLM / Chatbot Development", "Software Development", "Research Collaboration", "Other"];
const cls = "w-full rounded-lg border border-soft bg-card px-4 py-3 outline-none focus:border-sky";
export default function Contact() {
  const [err, setErr] = useState<Record<string, string>>({});
  
const submit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const f = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    subject: String(formData.get("subject") || ""),
    type: String(formData.get("type") || ""),
    message: String(formData.get("message") || ""),
  };

  const x: Record<string, string> = {};

  if (!f.name.trim()) x.name = "Enter your name.";

  if (!/^\S+@\S+\.\S+$/.test(f.email)) {
    x.email = "Enter a valid email address.";
  }

  if (!f.subject.trim()) x.subject = "Enter a subject.";

  if (f.message.trim().length < 10) {
    x.message = "Write at least 10 characters.";
  }

  setErr(x);

  if (Object.keys(x).length) return;

  const body = `Name: ${f.name}
Email: ${f.email}
Project type: ${f.type}

${f.message}`;

  location.href = `mailto:${personal.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
};

  const field = (n: string, l: string, t = "text") => <label className="block text-sm">{l}<input name={n} type={t} aria-invalid={!!err[n]} className={`mt-1 ${cls}`} />{err[n] && <span role="alert" className="text-xs text-red-400">{err[n]}</span>}</label>;
  return <Section id="contact" title="Let's build something intelligent.">
    <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
      <div className="space-y-4 text-muted"><p>Interested in AI engineering, machine learning research, software development, or AI automation? I'd be glad to hear your ideas.</p>
        <p>{personal.location}</p>
        <div className="flex flex-wrap gap-3 pt-2">{[["Send email", `mailto:${personal.email}`], ["GitHub", personal.github], ["Instagram", personal.Instagram]].map(([l, h]) =>
          <a key={l} href={h} target={l === "Send email" ? undefined : "_blank"} rel="noreferrer" className="rounded-full border border-soft px-5 py-2 text-white hover:border-sky">{l}</a>)}</div></div>
      <form onSubmit={submit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">{field("name", "Full name")}{field("email", "Email address", "email")}</div>
        {field("subject", "Subject")}
        <label className="block text-sm">Project type<select name="type" className={`mt-1 ${cls}`}>{types.map(t => <option key={t}>{t}</option>)}</select></label>
        <label className="block text-sm">Message<textarea name="message" rows={5} aria-invalid={!!err.message} className={`mt-1 ${cls}`} />{err.message && <span role="alert" className="text-xs text-red-400">{err.message}</span>}</label>
        <button className="rounded-full bg-sky px-7 py-3 font-medium text-bg">Open in email app</button>
        <p className="text-xs text-muted">This opens your email client with the message filled in. Nothing is stored or sent from this site.</p>
      </form></div>
  </Section>;
}
