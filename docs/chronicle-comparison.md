# Comparison with Chronicle: Recommended Improvements

This document captures findings from a comparison between `my-website-vue` and
[Chronicle](https://github.com/AlexJFDev/Chronicle), a newer project on a similar Vue.js
stack. It covers recommended improvements and what would be required to migrate hosting
from Linode to GitHub Pages.

---

## 1. TypeScript

`my-website-vue` uses plain JavaScript throughout (`main.js`, `blogData.js`,
`vite.config.js`). Chronicle is fully TypeScript.

**Recommended improvements:**
- Migrate to TypeScript (rename files to `.ts`/`.vue` with `<script lang="ts">`, add
  `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `env.d.ts`)
- Add `vue-tsc` to devDependencies for compile-time type checking
- Add `"type": "module"` to `package.json`
- Convert `vite.config.js` → `vite.config.ts`

---

## 2. Linting

| | `my-website-vue` | `Chronicle` |
|---|---|---|
| Config format | `.eslintrc.cjs` (legacy) | `eslint.config.ts` (flat config) |
| ESLint version | v8 | v10 |
| Extra linter | None | oxlint (fast Rust-based linter) |
| TypeScript-aware | No | Yes (`@vue/eslint-config-typescript`) |
| Prettier integration | `@vue/eslint-config-prettier` | `eslint-config-prettier` |
| Auxiliary patch | `@rushstack/eslint-patch` (workaround) | Not needed |

**Recommended improvements:**
- Migrate from `.eslintrc.cjs` to a flat `eslint.config.ts`, removing the
  `@rushstack/eslint-patch` workaround that was only needed for the legacy config format
- Upgrade to ESLint v10
- Add `@vue/eslint-config-typescript` (requires TS migration above)
- Add oxlint + `eslint-plugin-oxlint` for faster linting passes
- Add a `lint:ci` script (no `--fix`, for use in CI) and a `type-check` script

---

## 3. GitHub Actions Workflows

`my-website-vue` has one workflow (`build-on-push.yml`) that SSHes into the Linode.
Chronicle has four purpose-built workflows.

**Issues with the current `build-on-push.yml`:**
- Uses `appleboy/ssh-action@master` — pinned to a **floating tag**, which is a supply
  chain security risk. Should be pinned to a specific commit SHA or release tag.
- Uses **password authentication** over SSH (less secure than key-based auth)
- Uses `npm install` instead of `npm ci` (non-deterministic, slower)
- No `npm` cache — installs from scratch every time
- No linting step in CI

**What Chronicle has that's missing:**
- `lint.yml` — runs `npm run lint:ci` on PRs, catching issues before merge
- A type-check step as part of CI (via the `build` script)

---

## 4. Testing

`my-website-vue` has no tests at all. Chronicle has:
- **Vitest** for unit tests
- **Playwright** for e2e tests

At minimum, adding Vitest would be worthwhile.

---

## 5. `package.json` Scripts

`my-website-vue`'s `build` script just runs `vite build`. Chronicle runs `type-check` in
parallel with the build using `npm-run-all2`, catching type errors at build time.

**Recommended improvements:**
- Add `npm-run-all2` and update `build` to `run-p type-check "build-only {@}" --`
- Add `type-check`, `build-only`, `lint:ci` scripts
- Add `"engines": { "node": "^20.19.0 || >=22.12.0" }` to enforce Node version

---

## 6. Config & Tooling Files

| File | `my-website-vue` | `Chronicle` |
|---|---|---|
| `.editorconfig` | Missing | Present |
| `.gitattributes` | Missing | Present |
| `CLAUDE.md` | Missing | Present |
| `.gitignore` | Minimal | More complete (adds `.tsbuildinfo`, `.eslintcache`, playwright/vitest artifacts, `.claude/`) |

**Recommended improvements:**
- Add `.editorconfig` (enforces consistent indentation, line endings, etc. across editors)
- Add `.gitattributes` (at minimum for consistent line endings)
- Update `.gitignore` to include `.eslintcache`, `*.tsbuildinfo`
- Add `CLAUDE.md` for AI session context

---

## 7. VSCode Extensions

`my-website-vue` recommends `Vue.vscode-typescript-vue-plugin`, which has been
**deprecated** — its functionality was merged into `Vue.volar`. It should be removed.
Chronicle's recommendations also include `EditorConfig.EditorConfig` and `oxc.oxc-vscode`
(if those tools are adopted).

---

## 8. Prettier Config

`my-website-vue` has `"trailingComma": "none"` and an explicit `"tabWidth": 2`
(redundant, as 2 is the default). Chronicle omits both. Minor, but worth aligning with
your preferred style.

---

## 9. Dependency Versions

| Package | `my-website-vue` | `Chronicle` |
|---|---|---|
| `vue-router` | `^4.2.5` | `^5.0.1` |
| `markdown-it` | `^13.0.2` | `^14.1.0` |

Both `vue-router` v5 and `markdown-it` v14 are available and worth upgrading to.

---

## GitHub Pages Migration

Here is what is needed to move from Linode to GitHub Pages.

### 1. `vite.config` — set `base`

GitHub Pages serves from `https://alexjfdev.github.io/my-website-vue/`, so you need:

```js
base: '/my-website-vue/'
```

If using a custom domain (e.g. `alexjf.dev`), the base can stay as `/`.

### 2. Vue Router history mode

If using `createWebHistory()`, you must either:
- Switch to `createWebHashHistory()` (simpler, but URLs have `#`), **or**
- Keep `createWebHistory()` but add a `404.html` redirect hack. GitHub Pages serves a
  `404.html` for any unmatched path — a small script there encodes the path into a query
  param, and `index.html` has a corresponding script to restore it. Chronicle already
  implements this pattern and can be used as a reference.

### 3. Replace the deploy workflow

Delete `build-on-push.yml` and add a `deploy.yml` modeled on Chronicle's, using
`JamesIves/github-pages-deploy-action@v4`. The only differences would be branch names
and no `clean-exclude: previews` unless PR previews are also wanted.

### 4. Enable GitHub Pages in repo settings

Set the source to the `gh-pages` branch (which the deploy action creates and manages
automatically).

### 5. Custom domain (if applicable)

If `alexjf.dev` currently points to the Linode, update DNS to point to GitHub Pages IPs
and add a `CNAME` file to `public/` containing the domain name.

### 6. Cleanup

Once migrated, remove the `HOST`, `USERNAME`, and `PASSWORD` secrets from the repository
settings, and decommission the Linode if it is no longer needed.
