import { blog as blogPosts, guide, changelog as changelogPosts } from 'fumadocs-mdx:collections/server';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { loader } from 'fumadocs-core/source';

export const guideSource = loader({
  baseUrl: '/guide',
  source: guide.toFumadocsSource(),
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blogPosts, []),
});

export const changelogSource = loader({
  baseUrl: '/changelog',
  source: toFumadocsSource(changelogPosts, []),
});
