---
title: "Page transitions without JavaScript"
topic: css
---
One rule in the stylesheet makes navigating between pages of the same site cross-fade instead of flashing.

```css
@media (prefers-reduced-motion: no-preference) {
  @view-transition { navigation: auto; }
}
```

Both pages need the rule, and they have to be on the same origin. Browsers that do not support it yet just load the next page as usual, so there is nothing to fall back to. Wrapping it in the media query respects people who have asked their device for less motion.
