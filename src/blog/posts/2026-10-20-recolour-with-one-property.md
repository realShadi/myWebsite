---
title: "Recolour a whole component with one custom property"
summary: "How the filled tiles on this site flip all of their text colours at once, and the inheritance trap I fell into on the way."
topics: [css]
---
Some tiles on this site sit on a dark surface with light text. Others are filled with a bright colour and need dark text. I did not want two sets of rules for every element inside a tile, so the tiles read their colours from custom properties and a filled tile just changes the properties.

```css
:root {
  --ink: #dfdfe0;
  --ink-2: #8b97a3;
}

.tile { color: var(--ink); }
.tile p { color: var(--ink-2); }

.fill-pink {
  background: #fc5fa3;
  --ink: #1f1f24;
  --ink-2: rgba(31, 31, 36, 0.86);
}
```

Nothing inside the tile knows which kind of tile it is in. A paragraph asks for `--ink-2` and gets whichever value is closest above it in the tree. Adding a new fill colour is one rule.

## The trap

It worked until I got clever and made one property point at another:

```css
:root {
  --ink: white;
  --heading: var(--ink);
}

.card { --ink: black; }
.card h2 { color: var(--heading); } /* still white */
```

I expected the heading to turn black. It stayed white.

The reason is that `var()` inside a custom property is resolved on the element where that property is declared. `--heading` is declared on `:root`, so it is worked out there, where `--ink` is white. What the card inherits is the finished value, not the recipe.

## Two ways out

Use the property you are actually overriding:

```css
.card h2 { color: var(--ink); }
```

Or declare the dependent property again wherever its ingredients change:

```css
.card {
  --ink: black;
  --heading: var(--ink);
}
```

I went with the first one wherever I could. A short chain is easier to follow than a long one, and every extra link is another place for this to happen again.

## A rule of thumb

Custom properties inherit values, not formulas. If a property needs to react to its surroundings, declare it in those surroundings.
