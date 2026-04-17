import { changelogSource } from "@/lib/source";
import { formatDate } from "@/lib/utils";
import { sharedMdxComponents } from "@/lib/mdx-components";

export default function ChangelogPage() {
  const pages = changelogSource.getPages();
  const sortedChangelogs = [...pages].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return (
    <div className="min-h-screen bg-background relative">
      {/* <div className="border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="p-3 flex items-center">
            <h1 className="text-3xl font-semibold tracking-tight">Changelog</h1>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10">
        <div className="relative">
          {sortedChangelogs.map((changelog) => {
            const MDX = changelog.data.body;
            const formattedDate = formatDate(changelog.data.date);

            return (
              <div key={changelog.url} className="relative">
                <div className="flex flex-col md:flex-row gap-y-6">
                  <div className="md:w-48 shrink-0">
                    <div className="md:sticky md:top-8 pb-10">
                      <time className="text-sm font-medium text-muted-foreground block mb-3">
                        {formattedDate}
                      </time>
                      {changelog.data.version && (
                        <div className="inline-flex relative z-10 items-center justify-center w-10 h-10 text-foreground border border-border rounded-lg text-sm font-bold">
                          {changelog.data.version}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 md:pl-8 relative pb-10">
                    <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                      <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                    </div>

                    <div className="space-y-6">
                      <div className="relative z-10 flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold tracking-tight text-balance">
                          {changelog.data.title}
                        </h2>
                        {changelog.data.tags && changelog.data.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {changelog.data.tags.map((tag: string) => (
                              <span
                                key={tag}
                                className="h-6 w-fit px-2 text-xs font-medium bg-muted text-muted-foreground rounded-full border flex items-center justify-center"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
                        <MDX components={sharedMdxComponents} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
