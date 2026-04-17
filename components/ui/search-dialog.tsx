"use client";

import { useDocsSearch } from "fumadocs-core/search/client";
import { useMemo, useState } from "react";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogListItem,
  SearchDialogOverlay,
  useSearch,
  type SearchItemType,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";

function CustomItem({ item, onClick }: { item: SearchItemType; onClick: () => void }) {
  const { onOpenChange } = useSearch();

  return (
    <SearchDialogListItem
      item={item}
      onClick={() => {
        if ("url" in item && item.url?.includes("#")) {
          onOpenChange(false);
          setTimeout(() => {
            window.location.href = (item as { url: string }).url;
          }, 50);
        } else {
          onClick();
        }
      }}
    />
  );
}

export default function CustomSearchDialog({
  defaultTag,
  tags = [],
  api,
  delayMs,
  type = "fetch",
  allowClear = false,
  links = [],
  footer,
  ...props
}: SharedProps & {
  defaultTag?: string;
  tags?: { name: string; value: string }[];
  api?: string;
  delayMs?: number;
  type?: "fetch" | "static";
  allowClear?: boolean;
  links?: [string, string][];
  footer?: React.ReactNode;
}) {
  const [tag, setTag] = useState(defaultTag);

  const { search, setSearch, query } = useDocsSearch(
    type === "fetch"
      ? { type: "fetch", api, tag, delayMs }
      : { type: "static", from: api as never, tag, delayMs }
  );

  const defaultItems = useMemo(() => {
    if (links.length === 0) return null;
    return links.map(([name, link]) => ({
      type: "page" as const,
      id: name,
      content: name,
      url: link,
    }));
  }, [links]);

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList
          items={query.data !== "empty" ? query.data : defaultItems}
          Item={CustomItem}
        />
      </SearchDialogContent>
      <SearchDialogFooter>{footer}</SearchDialogFooter>
    </SearchDialog>
  );
}
