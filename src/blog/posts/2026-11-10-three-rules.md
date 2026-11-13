---
title: "A new site, and three rules for it"
summary: "Why this site exists, and the three constraints I set before writing a line of it."
topics: [meta, web]
---
I finally have a place of my own on the web. Before building it I wrote down three rules, mostly so that future me could not talk present me out of them.

## Every page is plain HTML

The site is put together by a generator on my machine, and what gets published is a folder of ordinary `.html` files. Nothing is assembled in your browser. If JavaScript fails to load, you can still read every post and follow every link. The only pages that need scripts are the toys in the [lab](../lab.html), and they are toys.

## One stylesheet, no framework

All of the styling lives in a single CSS file built on a handful of custom properties: a few surface colours, six syntax colours, two font stacks and one corner radius. A framework would have been quicker on day one and slower on every day after it, because I would be reading someone else's decisions instead of my own.

## A weight budget

Each page has to stay under 100 KB before images. That number is arbitrary, but an arbitrary budget is better than none, because it turns "should I add this?" into a question with an answer. I wrote more about that in [The 100 KB page](100kb-page.html).

## What is here

- **[Work](../projects/index.html)**: things I have built, each with a short write-up.
- **Blog**: longer posts like this one.
- **[Notes](../notes.html)**: one small tip at a time.
- **[Lab](../lab.html)**: random things that do nothing useful.

There is also a [now page](../now.html), a list of [links](../links.html) I keep going back to, and a [colophon](../colophon.html) for anyone who wants to know how it is all made.

That is the whole plan. Write things down, keep the pages light, and see what the site turns into.
