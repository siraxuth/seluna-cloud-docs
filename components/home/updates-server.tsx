import { changelogSource } from "@/lib/source";
import { UpdatesSection, type ChangelogEntry } from "./updates";

function detectType(tags: string[]): ChangelogEntry["type"] {
    const lower = tags.map((t) => t.toLowerCase());
    if (lower.some((t) => t.includes("security") || t.includes("fix"))) return "security";
    if (lower.some((t) => t.includes("release"))) return "release";
    return "update";
}

function formatThaiDate(date: Date): string {
    return date.toLocaleDateString("th-TH", { month: "short", year: "numeric" });
}

export async function UpdatesSectionServer() {
    const pages = changelogSource.getPages();

    const entries: ChangelogEntry[] = [...pages]
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
        .map((p) => ({
            version: p.data.version ? `v${p.data.version}` : p.slugs.join("/"),
            date: formatThaiDate(p.data.date),
            title: p.data.title,
            description: p.data.description ?? "",
            tags: p.data.tags ?? [],
            type: detectType(p.data.tags ?? []),
            href: p.url,
        }));

    return <UpdatesSection entries={entries} />;
}
