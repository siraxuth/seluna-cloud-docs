import { CalendarIcon } from "lucide-react";
import type { Metadata } from "next";
import { blogSource } from "@/lib/source";

export const metadata: Metadata = {
    title: "Blog",
    description: "Updates, release notes, and news about Seyfert",
};

export default function BlogIndexPage() {
    const pages = blogSource.getPages();
    const sortedPages = [...pages].sort(
        (a, b) => b.data.date.getTime() - a.data.date.getTime(),
    );

    return (
        <div className="py-12 sm:py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-linear-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                    Blog
                </h1>
                <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto px-4">
                    Updates, release notes, and news about Seyfert
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {sortedPages.map((page) => (
                    <a
                        href={page.url}
                        key={page.url}
                        className="group flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 hover:border-gray-600 hover:ring-2 hover:ring-gray-700/50 transition-all duration-200"
                    >
                        <div className="p-4 sm:p-6 flex flex-col flex-1">
                            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-200 group-hover:text-gray-100 transition-colors line-clamp-2">
                                {page.data.title || "Untitled"}
                            </h2>

                            {page.data.date && (
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mt-2 mb-3">
                                    <CalendarIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                                    <span>
                                        {new Date(page.data.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            timeZone: "UTC",
                                        })}
                                    </span>
                                </div>
                            )}

                            {page.data.description && (
                                <p className="mt-2 line-clamp-3 text-sm sm:text-base text-neutral-400 flex-1">
                                    {page.data.description}
                                </p>
                            )}

                            <div className="mt-4 flex items-center text-sm sm:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                                Read more
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
