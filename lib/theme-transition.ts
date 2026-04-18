import { flushSync } from "react-dom";

export function runThemeTransition(apply: () => void) {
    if (typeof document === "undefined" || typeof document.startViewTransition !== "function") {
        apply();
        return;
    }

    const transition = document.startViewTransition(() => {
        flushSync(apply);
    });

    transition.ready.then(() => {
        const duration = 1200;
        const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

        document.documentElement.animate(
            {
                opacity: [0, 1],
                filter: ["blur(8px)", "blur(0px)"],
                transform: ["scale(1.04)", "scale(1)"],
                transformOrigin: ["50% 50%", "50% 50%"],
            },
            {
                duration,
                easing,
                pseudoElement: "::view-transition-new(root)",
                fill: "forwards",
            },
        );

        document.documentElement.animate(
            {
                opacity: [1, 0],
                filter: ["blur(0px)", "blur(6px)"],
                transform: ["scale(1)", "scale(0.98)"],
                transformOrigin: ["50% 50%", "50% 50%"],
            },
            {
                duration,
                easing,
                pseudoElement: "::view-transition-old(root)",
                fill: "forwards",
            },
        );
    });
}
