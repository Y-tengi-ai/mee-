"use client";
import Image from "next/image";
import { useState } from "react";
// Shows a gradient placeholder until the real image exists at `src`.
export default function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [bad, setBad] = useState(false);
  return <div className={`relative overflow-hidden bg-gradient-to-br from-card via-bg2 to-violet/30 ${className}`}>
    {!bad && <Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" onError={() => setBad(true)} />}
  </div>;
}
