---
title: "Fix an old commit without the rebase puzzle"
topic: git
---
You spot a typo that belongs in a commit from three commits ago. Mark the fix as a fixup for that commit, then let Git put it in the right place.

```bash
git commit --fixup <sha>
git rebase -i --autosquash <sha>~1
```

The first command creates a commit named `fixup! ...`. The second opens the rebase list with that commit already moved under its target and set to be squashed in. Only do this on commits you have not shared yet, because it rewrites them.
