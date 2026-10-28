# Jerimiah Riesgo: learning log

A personal site and learning log built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Add a log entry

Create a Markdown file in `src/content/log/`, for example `src/content/log/astro-by-analogy.md`:

```md
---
title: 'Learning Astro by mapping it to what I know'
description: 'One sentence on what the entry is about.'
pubDate: '2026-10-28'
tags: ['astro']
draft: false
---

What I learned, the principle behind it, and the angle that made it click.
```

Push to `main` and GitHub Actions rebuilds and deploys the site. Set `draft: true` to keep an entry off the site.

## Edit the site

- Name, description and profile links: `src/consts.ts`
- Home page (intro, principles, work history): `src/pages/index.astro`
- Colors and type: `src/styles/global.css`
- Site URL: `site` in `astro.config.mjs`

## Run locally

```sh
npm install
npm run dev
```

## First-time GitHub Pages setup

In the repository's **Settings › Pages**, set **Source** to **GitHub Actions**.
