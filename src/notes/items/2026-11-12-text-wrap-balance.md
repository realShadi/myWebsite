---
title: "Balanced headings in one line of CSS"
topic: css
---
A heading that wraps often leaves one lonely word on the last line. `text-wrap: balance` tells the browser to even out the line lengths instead.

```css
h1, h2, h3 { text-wrap: balance; }
p { text-wrap: pretty; }
```

`balance` is meant for short blocks like headings. For paragraphs, `pretty` is the gentler option: it only tries to avoid a short last line. Browsers that support neither ignore the rule and wrap as they always did.
