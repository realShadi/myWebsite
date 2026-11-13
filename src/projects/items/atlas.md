---
title: Atlas
summary: A trip planner that keeps working when the signal drops.
kind: Web app
year: 2026
icon: globe
fill: type
order: 1
stack: [HTML, CSS, JavaScript]
---
## What it is

Atlas keeps a trip in one place: where you are staying, how you get there and what you wanted to see. The whole plan is saved on the device, so it opens on a plane, in a tunnel or in a town with one bar of signal.

## The interesting part

Working offline is easy to promise and fiddly to deliver. The app has to load with no network, save changes with no network, and sort things out sensibly when the network comes back and the same trip was edited on two devices.

The rule I settled on was simple: the copy on your device is always the one you see, and syncing happens quietly in the background. Nothing ever waits on a spinner.

## What I would change

The first version tried to merge edits field by field. It was clever and nobody could predict what it would do. Keeping the most recent change per day of the trip turned out to be easier to explain and good enough in practice.
