"use client";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

const updates = [
    {
        version: "v1.1",
        date: "เม.ย. 2026",
        title: "ปรับปรุงประสิทธิภาพและ UX",
        description: "เพิ่ม Dark mode เต็มรูปแบบ ปรับปรุง Dashboard โหลดเร็วขึ้น 40% แก้ไขปัญหาการแสดงผลบน mobile",
        tags: ["UX", "Performance", "Fix"],
        type: "update" as const,
        href: "/changelog",
    },
    {
        version: "v1.0.0",
        date: "เม.ย. 2026",
        title: "เปิดตัว Seluna Storefront",
        description: "Multi-Tenant Storefront พร้อม Payment หลายช่องทาง Reseller System ครบวงจร และ LINE Bot Integration",
        tags: ["Release", "Payment", "LINE Bot"],
        type: "release" as const,
        href: "/changelog/v1-0-0",
    },
];

const typeConfig = {
    release: {
        icon: Sparkles,
        label: "Release",
        color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
        glow: "from-indigo-500/30 via-blue-500/30 to-purple-500/30",
        dot: "bg-indigo-500",
    },
    update: {
        icon: Zap,
        label: "Update",
        color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
        glow: "from-emerald-500/30 via-teal-500/30 to-cyan-500/30",
        dot: "bg-emerald-500",
    },
    security: {
        icon: Shield,
        label: "Security",
        color: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
        glow: "from-orange-500/30 via-amber-500/30 to-yellow-500/30",
        dot: "bg-orange-500",
    },
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export function UpdatesSection() {
    return (
        <section className="w-full max-w-4xl mx-auto px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10 flex flex-col items-center text-center gap-3"
            >
                <Badge variant="outline" className="rounded-full px-4 py-1 text-xs tracking-wider uppercase text-neutral-500">
                    Changelog
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    การอัพเดตระบบ
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-md text-sm">
                    ติดตามการอัพเดตล่าสุดของ Seluna Cloud ทุกการปรับปรุงและฟีเจอร์ใหม่
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
            >
                {updates.map((update) => {
                    const cfg = typeConfig[update.type];
                    const Icon = cfg.icon;
                    return (
                        <motion.div key={update.version} variants={item}>
                            <Link href={update.href} className="group block">
                                <div className="relative">
                                    <div
                                        className={cn(
                                            "absolute -inset-px rounded-2xl bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm",
                                            cfg.glow
                                        )}
                                    />
                                    <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 transition-colors duration-200 group-hover:border-transparent">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-start gap-4 flex-1 min-w-0">
                                                <div className={cn("mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", cfg.color)}>
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                        <span className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                                            {update.version}
                                                        </span>
                                                        <span className="text-xs text-neutral-400">·</span>
                                                        <span className="text-xs text-neutral-400">{update.date}</span>
                                                        {update.tags.map((tag) => (
                                                            <Badge
                                                                key={tag}
                                                                variant="secondary"
                                                                className="rounded-full text-[11px] px-2 py-0 h-5"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                                                        {update.title}
                                                    </p>
                                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                                                        {update.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 mt-2.5 transition-transform duration-200 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex justify-center"
            >
                <Link
                    href="/changelog"
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                >
                    ดูประวัติการอัพเดตทั้งหมด
                    <ArrowRight className="h-3.5 w-3.5" />
                </Link>
            </motion.div>
        </section>
    );
}
