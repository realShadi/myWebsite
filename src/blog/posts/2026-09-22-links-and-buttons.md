---
title: "Links go places, buttons do things"
summary: "One rule that settles most arguments about which element to use, and why getting it wrong hurts real people."
topics: [html, accessibility]
---
If activating it takes you to another URL, it is a link. If it changes something on the page you are already on, it is a button. That one rule settles most arguments about which element to reach for.

```html
<a href="/blog/">Read the blog</a>

<button type="button">Copy hex</button>
```

## Why it matters

Browsers give each element behaviour that people rely on without thinking about it.

- A **link** can be opened in a new tab, copied, bookmarked and previewed. It is activated with Enter.
- A **button** is activated with Enter or Space, can be disabled, and submits a form when it lives inside one.

Screen readers also announce which one it is. Someone who hears "button" expects something to happen here. Someone who hears "link" expects to leave.

## The usual mistakes

A `div` with a click handler:

```html
<div class="btn" onclick="save()">Save</div>
```

It cannot be reached with the Tab key, it does not respond to Enter or Space, and assistive technology has no idea it is interactive. You can patch each of those by hand, or you can type `button`.

A link that goes nowhere:

```html
<a href="#" onclick="openMenu()">Menu</a>
```

It looks like navigation, jumps the page to the top if the script fails, and offers "open in new tab" for something that has no address. This one is a button too.

## Making a whole card clickable

Tiles on this site are clickable anywhere, but each contains exactly one real link. The trick is a pseudo-element that stretches the link over its tile:

```css
.tile { position: relative; }

.tile a::after {
  content: "";
  position: absolute;
  inset: 0;
}
```

The heading stays a normal link with normal link behaviour, so it works with a keyboard, a screen reader and a middle click. Nothing is nested inside anything it should not be.

## When it is not obvious

Ask what happens if you open it in a new tab. If the answer makes sense, it is a link. If the answer is "nothing useful", it is a button.
