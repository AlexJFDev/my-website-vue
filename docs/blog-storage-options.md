# Blog Storage Options

This document evaluates approaches for storing blog posts as files rather than hardcoded
strings in `blogData.js`. The comparison is scoped to this project's constraints: a
**static Vite + Vue 3 SPA** with no server-side rendering and no backend. All file access
must happen either at build time (via Vite's module system) or at runtime (via `fetch`).

---

## Background: How Vite Can Load Files

Vite provides two relevant mechanisms:

- **`import.meta.glob`** — at build time, Vite resolves a glob pattern and either inlines
  the matched files into the bundle (`eager: true`) or generates lazy import functions for
  them. Either way the files become part of the bundle; they do not need to be fetched at
  runtime.
- **Static assets in `public/`** — files placed in `public/` are served as-is and can be
  fetched at runtime with the browser's `fetch` API. They are not processed by Vite.

---

## Option A: Frontmatter in Markdown

Each post is a single `.md` file. Metadata (title, subtitle, date, tags) lives in a YAML
frontmatter block at the top of the file. `import.meta.glob` loads all files; a frontmatter
parser such as `gray-matter` splits the metadata from the body.

**File layout:**
```
src/assets/blogs/
  gardening.md
  java-dates.md
  anagram-algorithms.md
  ...
```

**Example file:**
```markdown
---
title: Gardening
subtitle: Last year I started a garden...
date: 07/22/2022
tags: [gardening, outdoors, hobbies]
---

# Gardening
Last year I started a garden...
```

**Loading in `api/blogs.js`:**
```js
import matter from 'gray-matter'

const modules = import.meta.glob('../assets/blogs/*.md', { as: 'raw', eager: true })

export const fetchBlogs = async () => {
  const result = {}
  for (const [path, raw] of Object.entries(modules)) {
    const slug = path.split('/').pop().replace('.md', '')
    const { data, content } = matter(raw)
    result[slug] = { ...data, content }
  }
  return result
}
```

**Pros:**
- One file per post — metadata and content stay together, no synchronization needed.
- Frontmatter is a widely understood convention (Jekyll, Hugo, Astro, VitePress all use it).
- No index file to maintain; new posts are discovered automatically by the glob.
- `import.meta.glob` handles everything at build time; no runtime fetches.

**Cons:**
- Requires adding `gray-matter` (or a lighter alternative like `vite-plugin-md`) as a
  dependency.
- Vite's `as: 'raw'` glob import loads the entire file content into the bundle, including
  the full Markdown body. For a blog with many long posts, all post bodies are in the
  bundle even when the user only visits the listing page. (Lazy imports can mitigate this
  but complicate the loading logic slightly.)
- Slightly non-obvious for contributors who are not familiar with frontmatter.

---

## Option B: Single Index File + Plain Markdown Files

A single `blogs.json` (or `blogs.js`) contains all metadata and the slug-to-filename
mapping. Each `.md` file contains only the post body, no frontmatter.

**File layout:**
```
src/assets/blogs/
  index.json
  gardening.md
  java-dates.md
  ...
```

**Example `index.json`:**
```json
[
  {
    "slug": "gardening",
    "title": "Gardening",
    "subtitle": "Last year I started a garden...",
    "date": "07/22/2022",
    "tags": ["gardening", "outdoors", "hobbies"]
  },
  ...
]
```

**Pros:**
- Metadata is all in one place — easy to scan the full list, reorder posts, or add
  list-level fields (e.g., `featured`, `draft`) without touching the markdown files.
- Markdown files are clean prose with no special syntax; any plain-text editor works.
- The listing page only needs to load `index.json`; individual `.md` files can be
  lazy-loaded when a post is opened.
- No additional npm dependency needed (Vite can import JSON natively).

**Cons:**
- Metadata and content are in separate files. When adding a post, two edits in two places
  are required. It is possible for them to fall out of sync (e.g., a slug in the index
  with no corresponding `.md` file).
- The index file must be manually maintained; new `.md` files are not auto-discovered.
- Ordering is implicit in the array order of the index, which is convenient but not
  self-documenting.

---

## Option C: Per-Post Folder (Content + Metadata Files)

Each post lives in its own directory containing a `content.md` and a `meta.json`.

**File layout:**
```
src/assets/blogs/
  gardening/
    content.md
    meta.json
  java-dates/
    content.md
    meta.json
  ...
```

**Pros:**
- Each post is self-contained. Related assets (images, attachments) can live alongside the
  post without polluting a shared directory.
- Metadata is structured and machine-readable without requiring a parser.

**Cons:**
- Most complex layout of the three options. Navigating the file tree is less convenient
  when there are many posts.
- `import.meta.glob` requires two separate globs (one for `meta.json`, one for
  `content.md`) that then need to be correlated by folder name.
- Two files for every post adds friction when authoring.
- The folder-per-post structure only pays off if posts have associated assets (images,
  attachments). Currently, the blog posts link to external images (Imgur), so there are
  no local assets to co-locate.

---

## Comparison Table

| Criterion | A: Frontmatter | B: Index + Plain MD | C: Per-Post Folder |
|---|---|---|---|
| Files per post | 1 | 2 (shared index + md) | 2 (meta + md) |
| Index auto-discovery | Yes (glob) | No (manual) | Yes (glob, two passes) |
| Metadata/content sync risk | None | Low–medium | None |
| Extra npm dependency | Yes (`gray-matter`) | No | No |
| Lazy-load post bodies | Possible | Natural | Possible |
| Asset co-location | No | No | Yes |
| Authoring friction | Low | Medium | Medium |
| Familiarity | High (convention) | Medium | Low |

---

## Recommendation

**Option A (Frontmatter)** is the best fit for this project.

The blog is authored by one person, posts are self-contained prose, and there are no local
per-post assets to co-locate. Frontmatter is the established convention in the Vue/Vite
ecosystem — VitePress, Nuxt Content, and Astro all use it — which keeps the approach
unsurprising. Auto-discovery via `import.meta.glob` eliminates the maintenance burden of
an index file, which is the main drawback of Option B.

The one trade-off is adding `gray-matter` as a dependency. It is a small, stable, widely
used library (used by Gatsby, Eleventy, etc.) with no transitive dependencies of its own,
so this is a low-risk addition.

If the bundle size of loading all post bodies eagerly becomes a concern later, the loading
strategy in `api/blogs.js` can be changed to use lazy `import.meta.glob` for the body
while keeping metadata eager — all without changing the file format.

Option C becomes worth revisiting only if the posts start to accumulate local assets
(images, code samples as separate files, etc.).
