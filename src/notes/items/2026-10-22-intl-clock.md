---
title: "A clock for another time zone, no library"
topic: javascript
---
The clock on this site shows the time in Jerusalem wherever you are reading from. `Intl.DateTimeFormat` handles the time zone and daylight saving on its own.

```js
const clock = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Jerusalem",
});

element.textContent = clock.format(new Date());
```

Create the formatter once and reuse it. Building a new one on every tick is the slow part.
