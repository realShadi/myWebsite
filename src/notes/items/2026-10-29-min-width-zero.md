---
title: "The fix for content that refuses to shrink"
topic: css
---
Flex and grid children have a minimum width of `auto`, which means they will not get narrower than their content. A long URL or a code block can then push the whole layout wider than the screen.

```css
.grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }

.tile { min-width: 0; }
```

Use `minmax(0, 1fr)` for grid tracks and `min-width: 0` on flex children. After that the item can shrink, and its content wraps or scrolls inside it.
