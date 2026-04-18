import { guideSource } from "@/lib/source";
import { DocsGrid } from "./docs-grid";

const EXCLUDED_SLUGS = ["index", "introduction"];

export async function DocsGridServer() {
    const pages = guideSource.getPages();

    const cards = pages
        .filter((p) => {
            const last = p.slugs[p.slugs.length - 1] ?? "";
            return !EXCLUDED_SLUGS.includes(last);
        })
        .map((p) => ({
            title: p.data.title,
            description: p.data.description ?? "",
            href: p.url,
            slug: p.slugs.join("/"),
        }));

    return <DocsGrid pages={cards} />;
}
