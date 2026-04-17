import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';
import dacezuTheme from './dacezu.json';
import { ThemeRegistrationAny } from 'shiki/types';
export const guide = defineDocs({
  dir: 'content/guide',
});

export const blog = defineCollections({
  dir: 'content/blog',
  type: 'doc',
  schema: frontmatterSchema.extend({
    date: z.date(),
  }),
});

export const changelog = defineCollections({
  dir: 'content/changelog',
  type: 'doc',
  schema: frontmatterSchema.extend({
    date: z.date(),
    version: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'min-light',
        dark: dacezuTheme as ThemeRegistrationAny,
      },
      langs: ["python", "javascript", "typescript", "bash"],
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },

  },
});
