# State Evaluation — my-website-vue

*Evaluated: 2026-03-29*

This document summarizes the current state of the app: what works, what is broken, and what is incomplete. It covers runtime behavior, code quality, and tooling.

---

## Overview

The app is a personal website built with Vue 3, Vuetify 3, Pinia, and Vue Router. It has four routes: an About page, a Blog listing, individual Blog post pages, and a Resume page. Blog content is stored as hardcoded Markdown strings in `src/blogData.js`.

---

## Bugs

### 1. App bar title is undefined (`App.vue:37`)

`<v-app-bar :title="name">` binds to a variable `name` that is never defined or imported in `<script setup>`. The app bar title will always render as blank.

### 2. Blog post view crashes on direct navigation (`BlogPostView.vue:18`)

`blogContent` is a computed property that accesses `blogStore.blogs[blogKey].content`. If a user navigates directly to a blog URL (e.g. `/blog/gardening`) without first visiting the Blog home page, the store's `blogs` object is `{}` — `fetchBlogs` is only called in `BlogHomeView`'s `onMounted`. Accessing `.content` on `undefined` throws a runtime error. The page will be blank or crash.

**Fix:** Either call `fetchBlogs` in `BlogPostView` as well (guarding for an already-populated store), or initialize the store at app startup rather than on mount.

### 3. Resume route is a stub (`ResumeView.vue`)

The `/resume` route renders only the text "Content". It is not implemented. The navigation drawer correctly omits a router link for Resume (it points to an external Google Docs URL instead), but the route still exists and is reachable.

---

## Incomplete / Placeholder Content

- **About page** (`AboutView.vue`): The copy says "I'm still developing it so please check back often." — this reads as a placeholder.
- **Altair Assembler blog post** (`blogData.js:58`): The heading `## Basic Info UPDATE ME` is an unfilled placeholder.
- **Blog has no new posts since January 2024** — the most recent entry is `getting-organized` (01/28/2024), over two years ago.

---

## Code Quality Issues

### Blog ordering

Blog entries in `blogData.js` are in insertion order, with the oldest post at the top. The Blog home renders them in that order, so the oldest posts appear first. There is no sort by date. Posts should be sorted newest-first.

### `reactive()` on static data (`blogData.js:3`)

`blogData` is wrapped in Vue's `reactive()`, but it is never mutated. This is unnecessary and adds a small reactivity tracking overhead for no benefit.

### Parallel data access paths (`router/index.js:3`)

The router's `beforeEach` guard imports `blogData` directly from `blogData.js` to look up page titles, bypassing the Pinia store entirely. This creates two separate entry points to the same data. If the data source ever changes (e.g., a real API), the router guard would need to be updated separately.

### XSS surface in `MarkdownBlock.vue` (`MarkdownBlock.vue:12`)

`v-html="markdown.render(rawMarkdown)"` renders unsanitized HTML. Currently the content is entirely hardcoded so there is no active risk, but if blog content were ever loaded from an external source or made user-editable, this would be a cross-site scripting vulnerability. `markdown-it` should be configured with `html: false` (already the default) and a sanitizer should be added as a precaution.

### `BlogCard` compact mode layout

In `BlogHomeView.vue`, cards are laid out in a vertical `flex-column`. In compact mode, `BlogCard` receives `width="200"`, which makes each card 200px wide inside a full-width column — the cards do not form a horizontal grid or wrap. The visual result on small screens is a narrow column of truncated cards.

### Commented-out code in `BlogPostView.vue`

`BlogPostView.vue:9-11` contains a commented-out `computed` that was replaced by a non-reactive plain assignment (`const blogKey = route.path.split('/').pop()`). If the route changes without a full component remount (e.g., navigating between blog posts), `blogKey` will not update. The commented-out version using `computed` was more correct.

---

## Tooling Issues

These are largely covered by `docs/chronicle-comparison.md`; the key items relevant to the current state:

| Issue | Impact |
|---|---|
| No tests (unit or e2e) | Regressions are invisible |
| ESLint v8 with legacy `.eslintrc.cjs` | Outdated; no TypeScript-aware linting |
| No TypeScript | No compile-time type safety |
| `build-on-push.yml` uses `appleboy/ssh-action@master` | Floating tag is a supply chain security risk |
| `build-on-push.yml` uses password SSH auth | Less secure than key-based auth |
| `npm install` in CI (not `npm ci`) | Non-deterministic installs |
| No linting step in CI | Lint errors can ship to production |
| `vue-router` pinned at `^4.2.5` (v5 available) | Missing router improvements |

---

## What Is Working Well

- Navigation and routing work correctly for the main happy path (visiting About, then Blog, then a blog post).
- Responsive layout: the navigation drawer collapses on mobile via Vuetify's `useDisplay`.
- Vuetify 3 component usage is consistent and idiomatic.
- Markdown rendering works for all existing blog posts.
- 404 handling catches unmatched routes.
- Blog cards display title, subtitle, date, and tags correctly on desktop.
- CI/CD deploys automatically on push to `production`.
- `pinia` store is wired up correctly; the abstraction through `api/blogs.js` leaves room to swap in a real API later.

---

## Priority Summary

| Priority | Item |
|---|---|
| High | Fix app bar title (`name` is undefined) |
| High | Fix blog post direct-navigation crash |
| Medium | Sort blog posts newest-first |
| Medium | Implement or remove `ResumeView` |
| Medium | Fix compact card layout on mobile |
| Medium | Fix `blogKey` reactivity (use `computed`) |
| Low | Remove placeholder copy from About and Altair Assembler post |
| Low | Remove `reactive()` from static `blogData` |
| Low | Consolidate blog data access in router (use store) |
| Low | Pin `appleboy/ssh-action` to a commit SHA |
| Low | Switch CI to `npm ci` |