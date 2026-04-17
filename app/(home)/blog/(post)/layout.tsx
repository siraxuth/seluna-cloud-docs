import { blogSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';

export default function PostLayout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={blogSource.pageTree}
            {...baseOptions}
            sidebar={{ className: 'hidden' }}
        >
            {children}
        </DocsLayout>
    );
}
