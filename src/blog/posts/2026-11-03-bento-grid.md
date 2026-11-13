---
title: "A bento grid in twenty lines of CSS"
summary: "The tile layout on this site is one grid, three helper classes and a single media query."
topics: [css, layout]
---
The layout of this site looks more complicated than it is. Every hub page is the same six-column grid with tiles that span two, three, four or all six columns. Here is all of it:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
}

.span-2 { grid-column: span 2; }
.span-3 { grid-column: span 3; }
.span-4 { grid-column: span 4; }
.span-6 { grid-column: span 6; }

@media (max-width: 760px) {
  .span-2,
  .span-3,
  .span-4 { grid-column: 1 / -1; }
}
```

## Why six columns

Six divides by two and by three. That gives you halves, thirds and a two-thirds plus one-third split without any fractions. Twelve columns would do the same with more precision than a handful of tiles needs.

## Why minmax(0, 1fr)

A bare `1fr` is shorthand for `minmax(auto, 1fr)`, and that `auto` minimum means a column refuses to shrink below its content. One long word or a wide code block is enough to push the whole grid sideways. Setting the minimum to `0` lets every column shrink, and the content inside wraps or scrolls instead.

## Making it feel like bento

The grid only gives you boxes. The look comes from three small choices:

- **Uneven rows.** A wide tile next to a narrow one, then the reverse on the next row. Four and two, then two and four.
- **One radius.** Every tile uses the same corner radius, so the gaps between them read as a deliberate pattern.
- **Colour as hierarchy.** Most tiles share one quiet surface. A few are filled with a strong colour, and those are the ones the eye lands on first.

## Equal heights for free

Grid items stretch to the height of their row by default. Two tiles side by side always line up, however much text is in each. To pin something to the bottom of a tile, make the tile a flex column and give that element `margin-top: auto`.

```css
.tile {
  display: flex;
  flex-direction: column;
}

.tile-meta { margin-top: auto; }
```

On a phone the media query collapses everything to one column, and the tiles simply stack in source order. No reordering, no second layout to maintain.
