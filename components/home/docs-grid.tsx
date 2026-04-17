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
    ArrowRight,
    BookOpen,
} from "lucide-react";

const guides = [
    {
        title: "Dashboard",
        description: "ภาพรวมร้านค้า ยอดขาย และสถิติแบบ realtime",
        href: "/guide/แอดมิน/dashboard",
        icon: LayoutDashboard,
        gradient: "from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-500",
        iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
        title: "สินค้าและสต๊อก",
        description: "จัดการสินค้า ราคา หมวดหมู่ และสต๊อกสินค้า",
        href: "/guide/แอดมิน/products",
        icon: Package,
        gradient: "from-violet-500/20 to-purple-500/20",
        iconColor: "text-violet-500",
        iconBg: "bg-violet-500/10 dark:bg-violet-500/20",
    },
    {
        title: "คำสั่งซื้อ",
        description: "ติดตามและจัดการคำสั่งซื้อทั้งหมดในระบบ",
        href: "/guide/แอดมิน/orders",
        icon: ShoppingCart,
        gradient: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-500",
        iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    },
    {
        title: "ลูกค้า",
        description: "ข้อมูลลูกค้า ประวัติการสั่งซื้อ และการจัดการ",
        href: "/guide/แอดมิน/users",
        icon: Users,
        gradient: "from-pink-500/20 to-rose-500/20",
        iconColor: "text-pink-500",
        iconBg: "bg-pink-500/10 dark:bg-pink-500/20",
    },
    {
        title: "การชำระเงิน",
        description: "ตั้งค่าช่องทางชำระเงินและการจัดการ Wallet",
        href: "/guide/หน้าร้านค้า/wallet",
        icon: Wallet,
        gradient: "from-amber-500/20 to-orange-500/20",
        iconColor: "text-amber-500",
        iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
    },
    {
        title: "การจัดส่ง",
        description: "ตั้งค่าขนส่ง Kerry, Flash, J&T, ThaiPost และอื่นๆ",
        href: "/guide/แอดมิน/shipping",
        icon: Truck,
        gradient: "from-cyan-500/20 to-sky-500/20",
        iconColor: "text-cyan-500",
        iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    },
    {
        title: "ตั้งค่าร้านค้า",
        description: "ปรับแต่งร้านค้า โลโก้ โดเมน และการตั้งค่าทั่วไป",
        href: "/guide/แอดมิน/settings",
        icon: Settings,
        gradient: "from-neutral-400/20 to-slate-500/20",
        iconColor: "text-neutral-500",
        iconBg: "bg-neutral-500/10 dark:bg-neutral-500/20",
    },
    {
        title: "หน้าร้านค้า",
        description: "มุมมองลูกค้า การเรียกดูสินค้า ตะกร้า และ checkout",
        href: "/guide/หน้าร้านค้า/browsing",
        icon: Store,
        gradient: "from-indigo-500/20 to-blue-500/20",
        iconColor: "text-indigo-500",
        iconBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    },
    {
        title: "เริ่มต้นใช้งาน",
        description: "คู่มือสำหรับผู้เริ่มต้น ติดตั้งและตั้งค่าระบบครั้งแรก",
        href: "/guide",
        icon: BookOpen,
        gradient: "from-fuchsia-500/20 to-pink-500/20",
        iconColor: "text-fuchsia-500",
        iconBg: "bg-fuchsia-500/10 dark:bg-fuchsia-500/20",
        featured: true,
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

const item = {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export function DocsGrid() {
    return (
        <section className="w-full max-w-5xl mx-auto px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10 flex flex-col items-center text-center gap-3"
            >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    บทความล่าสุด
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-md text-sm">
                    คู่มือการใช้งานครอบคลุมทุกฟีเจอร์ของ Seluna Cloud ตั้งแต่เริ่มต้นจนถึงขั้นสูง
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
                {guides.map((guide) => {
                    const Icon = guide.icon;
                    return (
                        <motion.div key={guide.href} variants={item}>
                            <Link href={guide.href} className="group block h-full">
                                <div
                                    className={cn(
                                        "relative h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 overflow-hidden transition-all duration-300",
                                        "hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30",
                                        guide.featured && "sm:col-span-2 lg:col-span-1"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            guide.gradient
                                        )}
                                    />
                                    <div className="relative flex flex-col gap-3 h-full">
                                        <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110", guide.iconBg)}>
                                            <Icon className={cn("h-5 w-5", guide.iconColor)} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                                                {guide.title}
                                            </p>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                                {guide.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200">
                                            อ่านคู่มือ
                                            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
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
