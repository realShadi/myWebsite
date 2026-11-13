---
layout: layouts/page.njk
permalink: colophon.html
title: Colophon
summary: How this site is made, for anyone who likes to look under the bonnet.
windowPath: "~/colophon.md"
description: How Shadi Shamasneh's website is built.
---
## Build

The site is generated with [Eleventy](https://www.11ty.dev/). Pages are templates, posts and notes are Markdown files, and the result is a folder of plain HTML. There is no client-side framework. The CSS is one hand-written file.

## Look

The design mixes two ideas: a grid of rounded tiles, like widgets on a home screen, and the colours and type of a code editor. Section headings are written as `// MARK:` comments, projects are titled as `struct`s and the page headers are little editor windows.

## Colour

Six syntax colours on a dark background. They are used twice, as text colours in code and as fills for the loud tiles.

<ul class="swatches">
  <li class="swatch"><i style="background:#fc5fa3"></i>Keyword<span>#fc5fa3</span></li>
  <li class="swatch"><i style="background:#5dd8ff"></i>Type<span>#5dd8ff</span></li>
  <li class="swatch"><i style="background:#d0a8ff"></i>Function<span>#d0a8ff</span></li>
  <li class="swatch"><i style="background:#fc6a5d"></i>String<span>#fc6a5d</span></li>
  <li class="swatch"><i style="background:#d0bf69"></i>Number<span>#d0bf69</span></li>
  <li class="swatch"><i style="background:#67b7a4"></i>Success<span>#67b7a4</span></li>
  <li class="swatch"><i style="background:#292a30"></i>Surface<span>#292a30</span></li>
  <li class="swatch"><i style="background:#1f1f24"></i>Background<span>#1f1f24</span></li>
</ul>

## Type

<p class="specimen-mono">Interface in monospace.</p>

The interface uses the monospace font already on your device (SF Mono on Apple devices) and falls back to [JetBrains Mono](https://www.jetbrains.com/lp/mono/).

<p class="specimen-sans">Articles in a proportional font.</p>

Long text uses the system font, with [Inter](https://rsms.me/inter/) as the fallback. I wrote about the split in [Monospace is a design decision](blog/monospace.html).

## Privacy

No analytics, no cookies and no trackers. The fonts are requested from Google Fonts on devices that need them. The reaction-time toy in the [lab](lab.html) saves your best score in your own browser and nowhere else.
