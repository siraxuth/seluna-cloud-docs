"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Settings,
    Store,
    Wallet,
    Truck,
    ArrowUpRight,
    BookOpen,
    Archive,
    Gift,
    UserCircle,
    LogIn,
    MessageSquare,
    ShoppingBag,
    Building2,
    Tag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface GuideCardData {
    title: string;
    description: string;
    href: string;
    slug: string;
}

interface IconCfg {
    icon: LucideIcon;
    color: string;
    accent: string;
}

function getIconConfig(slug: string): IconCfg {
    if (slug.includes("dashboard"))
        return { icon: LayoutDashboard, color: "text-blue-500", accent: "from-blue-500/40 via-indigo-500/40 to-transparent" };
    if (slug.includes("products"))
        return { icon: Package, color: "text-violet-500", accent: "from-violet-500/40 via-purple-500/40 to-transparent" };
    if (slug.includes("stock"))
        return { icon: Archive, color: "text-purple-500", accent: "from-purple-500/40 via-violet-500/40 to-transparent" };
    if (slug.includes("orders"))
        return { icon: ShoppingCart, color: "text-emerald-500", accent: "from-emerald-500/40 via-teal-500/40 to-transparent" };
    if (slug.includes("users"))
        return { icon: Users, color: "text-pink-500", accent: "from-pink-500/40 via-rose-500/40 to-transparent" };
    if (slug.includes("wallet"))
        return { icon: Wallet, color: "text-amber-500", accent: "from-amber-500/40 via-orange-500/40 to-transparent" };
    if (slug.includes("shipping"))
        return { icon: Truck, color: "text-cyan-500", accent: "from-cyan-500/40 via-sky-500/40 to-transparent" };
    if (slug.includes("settings"))
        return { icon: Settings, color: "text-neutral-500", accent: "from-neutral-400/40 via-slate-500/40 to-transparent" };
    if (slug.includes("browsing"))
        return { icon: Store, color: "text-indigo-500", accent: "from-indigo-500/40 via-blue-500/40 to-transparent" };
    if (slug.includes("cart") || slug.includes("checkout"))
        return { icon: ShoppingBag, color: "text-orange-500", accent: "from-orange-500/40 via-amber-500/40 to-transparent" };
    if (slug.includes("coupons") || slug.includes("topup"))
        return { icon: Gift, color: "text-rose-500", accent: "from-rose-500/40 via-pink-500/40 to-transparent" };
    if (slug.includes("account"))
        return { icon: UserCircle, color: "text-sky-500", accent: "from-sky-500/40 via-cyan-500/40 to-transparent" };
    if (slug.includes("auth"))
        return { icon: LogIn, color: "text-teal-500", accent: "from-teal-500/40 via-emerald-500/40 to-transparent" };
    if (slug.includes("blog") || slug.includes("contact") || slug.includes("email"))
        return { icon: MessageSquare, color: "text-lime-600", accent: "from-lime-500/40 via-green-500/40 to-transparent" };
    if (slug.includes("subscriptions") || slug.includes("line"))
        return { icon: Tag, color: "text-green-500", accent: "from-green-500/40 via-teal-500/40 to-transparent" };
    if (slug.includes("sites"))
        return { icon: Building2, color: "text-fuchsia-500", accent: "from-fuchsia-500/40 via-purple-500/40 to-transparent" };
    if (slug.includes("platform") || slug.includes("overview"))
        return { icon: Store, color: "text-indigo-500", accent: "from-indigo-500/40 via-violet-500/40 to-transparent" };
    return { icon: BookOpen, color: "text-fuchsia-500", accent: "from-fuchsia-500/40 via-pink-500/40 to-transparent" };
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
};

export function DocsGrid({ pages }: { pages: GuideCardData[] }) {
    const enriched = pages.map((p) => ({ ...p, ...getIconConfig(p.slug) }));

    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 py-20">
            {/* Subtle dotted background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
                }}
            />

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
                    <BookOpen className="h-3 w-3" />
                    Documentation
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-neutral-900 via-neutral-800 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent">
                    คู่มือการใช้งาน
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-md text-[15px]">
                    ครอบคลุมทุกฟีเจอร์ของ Seluna Cloud ตั้งแต่เริ่มต้นจนถึงขั้นสูง
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {enriched.map((guide) => {
                    const Icon = guide.icon;
                    return (
                        <motion.div key={guide.href} variants={item}>
                            <Link href={guide.href} className="group relative block h-full">
                                {/* Gradient top accent line */}
                                <div
                                    className={cn(
                                        "absolute inset-x-6 top-0 h-px bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                        guide.accent
                                    )}
                                />

                                <div
                                    className={cn(
                                        "relative h-full rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950/40 p-5 overflow-hidden transition-all duration-300",
                                        "hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px] hover:shadow-black/10 dark:hover:shadow-black/40"
                                    )}
                                >
                                    {/* Soft radial glow on hover */}
                                    <div
                                        className={cn(
                                            "pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-linear-to-b opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl",
                                            guide.accent
                                        )}
                                    />

                                    <div className="relative flex flex-col gap-4 h-full">
                                        <div className="flex items-center justify-between">
                                            <div className={cn(
                                                "relative flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-300",
                                                "group-hover:border-neutral-300 dark:group-hover:border-neutral-700"
                                            )}>
                                                <Icon className={cn("h-4 w-4 transition-colors duration-300", guide.color)} />
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 text-neutral-300 dark:text-neutral-700 transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </div>

                                        <div className="flex-1">
                                            <p className="font-semibold text-[15px] text-neutral-900 dark:text-neutral-100 mb-1.5 tracking-tight">
                                                {guide.title}
                                            </p>
                                            <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                                                {guide.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
