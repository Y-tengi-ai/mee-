import { personal } from "@/data/personal";
export default function Footer() {
  return <footer className="border-t border-soft px-5 py-10"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-muted sm:flex-row">
    <div><p className="font-display text-white">{personal.name}</p><p>{personal.role}. Exploring Intelligence. Engineering Possibilities.</p></div>
    <div className="flex gap-5"><a href={personal.github} className="hover:text-sky">GitHub</a><a href={personal.Instagram} className="hover:text-sky">LinkedIn</a><a href={`mailto:${personal.email}`} className="hover:text-sky">Email</a></div>
    <p>© {new Date().getFullYear()} {personal.name}</p></div></footer>;
}
