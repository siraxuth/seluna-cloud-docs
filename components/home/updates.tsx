"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight, Zap, Shield, Sparkles, Rss } from "lucide-react";

export interface ChangelogEntry {
    version: string;
    date: string;
    title: string;
    description: string;
    tags: string[];
    type: "release" | "update" | "security";
    href: string;
}

const typeConfig = {
    release: {
        icon: Sparkles,
        color: "text-indigo-500",
        dot: "bg-indigo-500",
        ring: "ring-indigo-500/20",
        glow: "from-indigo-500/30 via-blue-500/30 to-transparent",
        label: "Release",
    },
    update: {
        icon: Zap,
        color: "text-emerald-500",
        dot: "bg-emerald-500",
        ring: "ring-emerald-500/20",
        glow: "from-emerald-500/30 via-teal-500/30 to-transparent",
        label: "Update",
    },
    security: {
        icon: Shield,
        color: "text-orange-500",
        dot: "bg-orange-500",
        ring: "ring-orange-500/20",
        glow: "from-orange-500/30 via-amber-500/30 to-transparent",
        label: "Security",
    },
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
};

export function UpdatesSection({ entries }: { entries: ChangelogEntry[] }) {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
            {/* Subtle grid background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                    maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 100%)",
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mb-14 flex flex-col items-center text-center gap-3"
            >
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                    <Rss className="h-3 w-3" />
                    Changelog
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-neutral-900 via-neutral-800 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent">
                    การอัพเดตระบบ
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-md text-[15px]">
                    ติดตามการอัพเดตล่าสุดของ Seluna Cloud ทุกการปรับปรุงและฟีเจอร์ใหม่
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative max-w-3xl mx-auto"
            >
                {/* Timeline vertical line */}
                <div className="absolute left-2.75 top-2 bottom-2 w-px bg-linear-to-b from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />

                <div className="flex flex-col gap-4">
                    {entries.map((entry) => {
                        const cfg = typeConfig[entry.type];
                        const Icon = cfg.icon;
                        return (
                            <motion.div key={entry.version} variants={item} className="relative pl-10">
                                {/* Timeline dot */}
                                <div className="absolute left-2 top-6 flex items-center justify-center">
                                    <span className={cn("absolute inline-flex h-5 w-5 rounded-full opacity-40 blur-sm", cfg.dot)} />
                                    <span className={cn("relative h-1.5 w-1.5 rounded-full ring-4 bg-white dark:bg-neutral-950", cfg.ring)}>
                                        <span className={cn("absolute inset-0 rounded-full", cfg.dot)} />
                                    </span>
                                </div>

                                <Link href={entry.href} className="group block">
                                    <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950/40 p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px] hover:shadow-black/10 dark:hover:shadow-black/40">
                                        {/* Side glow on hover */}
                                        <div className={cn(
                                            "pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-linear-to-r opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-3xl",
                                            cfg.glow
                                        )} />

                                        <div className="relative flex items-start gap-4">
                                            <div className={cn(
                                                "mt-0.5 shrink-0 flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/50"
                                            )}>
                                                <Icon className={cn("h-4 w-4", cfg.color)} />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                                                    <span className="font-mono text-[13px] font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                                                        {entry.version}
                                                    </span>
                                                    <span className={cn(
                                                        "inline-flex items-center rounded-full px-2 h-4.5 text-[10px] font-medium tracking-wider uppercase",
                                                        cfg.color,
                                                        "bg-neutral-100 dark:bg-neutral-900"
                                                    )}>
                                                        {cfg.label}
                                                    </span>
                                                    <span className="text-xs text-neutral-300 dark:text-neutral-700">·</span>
                                                    <span className="text-[12px] text-neutral-400 dark:text-neutral-500 font-mono">{entry.date}</span>
                                                </div>

                                                <p className="font-semibold text-[15px] text-neutral-900 dark:text-neutral-100 mb-1 tracking-tight">
                                                    {entry.title}
                                                </p>
                                                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                                                    {entry.description}
                                                </p>

                                                {entry.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {entry.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="inline-flex items-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 px-1.5 h-5 text-[10.5px] font-medium text-neutral-600 dark:text-neutral-400"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-300 dark:text-neutral-700 mt-2 transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative mt-8 flex justify-center"
            >
                <Link
                    href="/changelog"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/40 px-4 py-1.5 text-[13px] text-neutral-600 dark:text-neutral-400 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                    ดูประวัติทั้งหมด
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
            </motion.div>
        </section>
    );
}
