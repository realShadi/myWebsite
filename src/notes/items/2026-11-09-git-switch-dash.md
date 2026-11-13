---
title: "Jump back to the previous branch"
topic: git
---
A dash means "the branch I was on before this one", the same way `cd -` works in a shell.

```bash
git switch -
```

Run it again and you are back where you started. It is the quickest way to hop between a feature branch and `main` while comparing the two. `git checkout -` does the same thing, and `git merge -` merges the branch you just left.
