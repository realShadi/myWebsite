---
title: "Stop anchors hiding under a sticky header"
topic: css
---
Jump to an `#anchor` on a page with a sticky header and the heading lands underneath the header. `scroll-margin-top` gives the target some breathing room.

```css
section,
[id] { scroll-margin-top: 4rem; }
```

Set it to the height of the header plus a little extra. It only affects where scrolling stops, so the layout itself does not move.
