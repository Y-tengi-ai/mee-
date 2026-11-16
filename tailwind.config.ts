import type { Config } from "tailwindcss";
export default { content:["./src/**/*.{ts,tsx}"], theme:{extend:{colors:{bg:"#080B12",bg2:"#0D111B",card:"#111827",sky:"#38BDF8",violet:"#8B5CF6",cyan:"#22D3EE",muted:"#94A3B8"},
fontFamily:{display:["var(--f-display)"],sans:["var(--f-body)"],mono:["var(--f-mono)"]}}},plugins:[]} satisfies Config;
