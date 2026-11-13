# myWebsite

Personal website for Shadi Shamasneh: work, a blog, short notes, a lab of small toys, and the usual about, now, links, colophon and contact pages.

It is a static site built with [Eleventy](https://www.11ty.dev/). Templates and Markdown go in, a folder of plain HTML comes out. There is no client-side framework and one hand-written stylesheet.

## Run it

```bash
npm install
```

```bash
npm start
```

`npm start` serves the site locally and rebuilds on every change. To build once into `_site/`:

```bash
npm run build
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/_data/site.json` | Name, tagline, location, links, navigation. Set `email` here to show it on the contact page. |
| `src/_data/links.json` | The bookmarks on the links page. |
| `src/blog/posts/` | Blog posts, one Markdown file each. |
| `src/notes/items/` | Short notes, one Markdown file each. All of them appear on the notes page. |
| `src/projects/items/` | Project write-ups, one Markdown file each. |
| `src/*.njk`, `src/*.md` | The other pages: home, about, lab, now, links, colophon, contact, 404. |
| `src/_includes/` | Layouts, the header and footer, and shared template macros. |
| `src/assets/css/site.css` | All styling. Colours, fonts and spacing are custom properties at the top. |
| `src/assets/js/` | `site.js` (clock, random page button) and `lab.js` (the toys). |

## Add a blog post

Create `src/blog/posts/YYYY-MM-DD-some-title.md`. The date comes from the file name and the URL becomes `blog/some-title.html`.

```markdown
---
title: "Post title"
summary: "One sentence shown on the blog index and under the title."
topics: [css, web]
---
Write the post here in Markdown.
```

## Add a note

Create `src/notes/items/YYYY-MM-DD-some-title.md` with a `title` and a `topic` in the front matter.

## Add a project

Create `src/projects/items/name.md`. Front matter: `title`, `summary`, `kind`, `year`, `order`, `stack` (a list), `icon` (`globe`, `tally`, `book`, `plane`, `dice` or `pen`) and optionally `fill` (`type`, `kw`, `fn`, `ok` or `num`) for a coloured tile.

## Sample content

The four projects are placeholders and say so on their pages. The blog posts, notes, about text and link list are first drafts to edit or replace.

## Hosting

`_site/` can be served by any static host. All links are relative, so the site works from a sub-folder as well as from a domain root. The one exception is `404.html`, which only finds its stylesheet when the missing page is at the top level.
