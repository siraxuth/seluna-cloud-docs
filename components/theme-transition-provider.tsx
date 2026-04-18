"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { runThemeTransition } from "@/lib/theme-transition";

export function ThemeTransitionProvider() {
    const { resolvedTheme, setTheme, themes } = useTheme();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            const toggleRoot = target.closest<HTMLElement>("[data-theme-toggle]");
            if (!toggleRoot) return;

            // Skip our own custom toggle — it already handles transition internally
            if (toggleRoot.hasAttribute("data-theme-toggle-custom")) return;

            const clickedButton = target.closest<HTMLButtonElement>("button");
            const valueAttr = clickedButton?.getAttribute("aria-label");

            let next: string | undefined;
            const isDark = resolvedTheme === "dark";

            if (valueAttr && themes?.includes(valueAttr)) {
                next = valueAttr;
            } else {
                next = isDark ? "light" : "dark";
            }

            if (!next || next === resolvedTheme) return;

            e.preventDefault();
            e.stopImmediatePropagation();

            runThemeTransition(() => setTheme(next!));
        };

        document.addEventListener("click", handler, true);
        return () => document.removeEventListener("click", handler, true);
    }, [resolvedTheme, setTheme, themes]);

    return null;
}
