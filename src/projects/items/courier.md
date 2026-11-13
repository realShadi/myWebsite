---
title: Courier
summary: Email templates in plain HTML that survive every inbox.
kind: Open source
year: 2024
icon: plane
order: 4
stack: [HTML, CSS]
---
## What it is

Courier is a small set of email templates: a receipt, a welcome message, a password reset and a newsletter. Each is a single HTML file with nothing to build.

## The interesting part

Email clients are years behind browsers and all behind in different ways. Layout that takes two lines on the web needs tables, inline styles and a few well-known workarounds to look the same everywhere.

The templates keep that mess in one place and leave clear slots for the content, so you can change the words without touching the scaffolding.

## What I would change

The first release tried to support dark mode in every client. Some of them recolour emails on their own, with no way to opt out. The honest answer was to pick colours that still read well after being inverted.
