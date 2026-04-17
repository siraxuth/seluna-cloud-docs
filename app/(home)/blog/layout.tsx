import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: {
        template: '%s | Blog',
        default: 'Blog',
    },
    description: 'Updates, release notes, and news',
    openGraph: {
        images: {
            type: 'image/png',
            url: './banner.png',
        },
    },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
