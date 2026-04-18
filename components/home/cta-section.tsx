"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rocket, BookOpen } from "lucide-react";
import { useRef } from "react";

function GlowOrb({ className }: { className?: string }) {
    return (
        <div
            className={`pointer-events-none absolute rounded-full blur-3xl opacity-20 dark:opacity-30 ${className}`}
        />
    );
}

export function CTASection() {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const gradX = useTransform(smoothX, [0, 1], ["20%", "80%"]);
    const gradY = useTransform(smoothY, [0, 1], ["20%", "80%"]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    }

    function handleMouseLeave() {
        mouseX.set(0.5);
        mouseY.set(0.5);
    }

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-16">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
            >
                {/* Animated glow background */}
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: useTransform(
                            [smoothX, smoothY],
                            ([x, y]) =>
                                `radial-gradient(600px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(99,102,241,0.08), transparent 60%)`
                        ),
                    }}
                />

                {/* Static orbs */}
                <GlowOrb className="w-64 h-64 -top-16 -left-16 bg-indigo-400" />
                <GlowOrb className="w-48 h-48 -bottom-10 -right-10 bg-blue-400" />
                <GlowOrb className="w-32 h-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-400" />

                {/* Grid pattern overlay */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="relative px-8 py-16 md:px-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        </span>
                        พร้อมให้บริการแล้ว
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-neutral-50"
                    >
                        พร้อมกับการใช้งาน
                        <br />
                        <span className="bg-linear-to-r from-indigo-500 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                            Seluna Cloud
                        </span>{" "}
                        หรือยัง?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-10 text-sm md:text-base"
                    >
                        อ่านคู่มือการใช้งานได้เลย ครอบคลุมทุกฟีเจอร์ตั้งแต่เริ่มต้นจนถึงขั้นสูง
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                        <Link href="/guide" target="_blank">
                            <Button
                                size="lg"
                                className="gap-2.5 font-medium cursor-pointer text-base px-6 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-shadow"
                            >
                                <Rocket className="h-4 w-4" />
                                เริ่มต้นใช้งาน
                            </Button>
                        </Link>
                        <Link href="/guide/introduction" target="_blank">
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2.5 font-medium cursor-pointer text-base px-6"
                            >
                                <BookOpen className="h-4 w-4" />
                                อ่าน Document
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
