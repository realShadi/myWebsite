---
title: "Monospace is a design decision"
summary: "This site sets its interface in a monospace font and its articles in a regular one. Here is where each earns its place."
topics: [design, type]
---
Most of this site is set in a monospace font: the navigation, the headings, the tiles, the numbers. This paragraph is not. Both choices are on purpose.

## Where monospace works

**Short text.** Labels, headings, tags and dates are read in a glance. The even rhythm of a monospace font gives them a tidy, mechanical look that suits a site about building things.

**Numbers.** Every digit has the same width, so a ticking clock does not jiggle and a column of years lines up without any extra work.

**Code.** Obviously. Alignment carries meaning there.

## Where it does not

Long paragraphs. In a regular font an `i` is narrow and an `m` is wide, and that variety helps your eye recognise words by their shape. A monospace font gives every letter the same slot, so words get longer and each line fits fewer of them. For a label that is not a problem. Over a few hundred words it gets tiring.

So articles and notes here switch to a proportional font for the body and keep monospace for headings and code.

## Details that make it work

**Tighten the big sizes.** Monospace letters are spaced for small sizes. At heading size the gaps look enormous, so the large headings here pull the letters together:

```css
.display {
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
}
```

**Ask for the system font first.** Good monospace fonts are already installed on most devices, so the stack starts with those and only then names a web font:

```css
font-family: ui-monospace, "SF Mono", "JetBrains Mono",
  Menlo, Consolas, monospace;
```

**Keep lines short.** Monospace text reads best in narrow columns. Tiles here cap their paragraphs at a few dozen characters.

## The general point

A typeface says something before anyone reads a word. Monospace says tool, terminal, work in progress. That is the tone I want for the frame of the site. For the writing inside it, I want you to forget about the font entirely.
