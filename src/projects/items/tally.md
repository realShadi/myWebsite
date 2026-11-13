---
title: Tally
summary: Split a bill with friends. No account, no app to install.
kind: Web app
year: 2025
icon: tally
fill: kw
order: 2
stack: [HTML, CSS, JavaScript]
---
## What it is

Tally answers one question at the end of a meal: who owes what. Add the people, add what each one had, and it works out the totals, including a shared tip.

## The interesting part

There is no sign-up and no server-side state. The whole bill is stored in the link itself, so sharing the bill means sending the link. Whoever opens it sees the same numbers and can keep editing.

That one decision removed accounts, passwords, a database and a privacy policy. It also set a hard limit on how big a bill can get, which has never been a problem for a dinner.

## What I would change

Rounding. Splitting 10.00 three ways leaves a cent with nowhere to go, and people really do notice. The second version gives the spare cent to whoever added the bill and says so on screen.
