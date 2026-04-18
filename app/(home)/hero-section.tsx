"use client";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, BookOpen, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function HeroSection() {
    const { resolvedTheme } = useTheme();
    const [heroHeight, setHeroHeight] = useState(800);

    useEffect(() => {
        const update = () => setHeroHeight(window.innerHeight);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const { scrollY } = useScroll();

    // Doodle background scroll effects
    const bgOpacityDark = useTransform(scrollY, [0, heroHeight * 0.5, heroHeight], [0.08, 0.02, 0]);
    const bgOpacityLight = useTransform(scrollY, [0, heroHeight * 0.5, heroHeight], [0.55, 0.35, 0]);
    const bgOpacity = resolvedTheme === "light" ? bgOpacityLight : bgOpacityDark;
    const bgScale = useTransform(scrollY, [0, heroHeight], [1, 1.08]);

    // Mockup parallax
    const mockupY = useTransform(scrollY, [0, heroHeight], [0, 80]);
    const mockupOpacity = useTransform(scrollY, [0, heroHeight * 1.2], [1, 0]);

    return (
        <div className="relative isolate w-full overflow-hidden">
            {/* Doodle background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-background" />
                <motion.div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ opacity: bgOpacity }}
                >
                    <motion.img
                        src={resolvedTheme === "light" ? "/banner/pranakorn-doodle.svg" : "/banner/pranakorn-doodle.png"}
                        alt=""
                        className="h-full w-full object-cover"
                        style={{ scale: bgScale }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/60 via-60% to-white dark:via-[#030303]/60 dark:to-[#030303]" />
                </motion.div>
            </div>

            <Spotlight
                className="-top-20 left-1/2 -translate-x-1/2"
                fill={resolvedTheme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(99,102,241,0.3)"}
            />

            <div className="min-h-screen flex flex-col px-6 pb-12 py-60">
                {/* Text — flex-1 fills remaining height, centers badge+title+buttons only */}
                <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center pt-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/changelog"
                            className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-3 py-1 text-sm text-neutral-700 dark:text-neutral-300 shadow-sm ring-1 shadow-black/10 ring-black/10 dark:ring-white/10 transition-all hover:shadow-md active:scale-[0.98]"
                        >
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                            Seluna Cloud v1.0 เปิดตัวแล้ว
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="mt-6 text-4xl font-medium tracking-tight text-neutral-700 dark:text-neutral-300 md:text-7xl"
                    >
                        คู่มือการใช้งาน
                        <br />
                        <span className="bg-linear-to-r from-indigo-400 via-blue-400 to-violet-400 bg-clip-text text-transparent font-bold">
                            Seluna Cloud
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-5 max-w-xs md:max-w-xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg"
                    >
                        ศูนย์รวมคู่มือการใช้งาน Seluna Cloud ครบครัน ครอบคลุมทั้งฝั่งผู้ดูแลระบบ ผู้ใช้งาน และการจัดการหลังบ้าน
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.22 }}
                        className="mt-8 flex items-center gap-3"
                    >
                        <Link href="/guide">
                            <Button className="rounded-full px-6 py-3 text-sm font-medium shadow-sm gap-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all active:scale-[0.98]">
                                เริ่มต้นใช้งาน
                                <Rocket className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/guide/introduction">
                            <Button variant="outline" className="rounded-full px-6 py-3 text-sm font-medium gap-2 transition-all active:scale-[0.98] bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm">
                                <BookOpen className="h-4 w-4" />
                                อ่านเอกสาร
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Browser mockup — outside flex-1, sits below centered text */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: mockupY, opacity: mockupOpacity }}
                    className="mx-auto w-full max-w-7xl mt-4"
                >
                        <div className="relative">
                            <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 blur-2xl" />
                            <div className="relative overflow-hidden rounded-xl border border-neutral-300/50 dark:border-neutral-700/50 shadow-2xl shadow-black/10 dark:shadow-black/40">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 border-b border-neutral-200/60 dark:border-neutral-700/60 bg-neutral-50/90 dark:bg-neutral-900/90 px-4 py-3 backdrop-blur-sm">
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-3 w-3 rounded-full bg-red-400/80" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                        <div className="h-3 w-3 rounded-full bg-green-400/80" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-0.5 text-[11px] text-neutral-500 dark:text-neutral-400 shadow-sm min-w-35 justify-center">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                                            seluna.cloud/storefront
                                        </div>
                                    </div>
                                    <div className="w-12" />
                                </div>
                                <div className="relative w-full aspect-16/10">
                                    <Image
                                        src="/banner/home.hero-section.png"
                                        alt="Seluna Cloud Dashboard"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
            </div>
        </div>
    );
}
