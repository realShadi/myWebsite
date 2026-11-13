# myWebsite

Personal website for Shadi Shamasneh. Plain HTML, CSS and a little JavaScript, with no build step.

## Preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Themes

The site currently ships with nine looks so one can be chosen. The dock at the bottom of the page switches between them (the left and right arrow keys work too), and `?skin=<name>` opens a specific one.

| Name | Look |
| --- | --- |
| `daylight` | White space, big type, blue pills |
| `midnight` | Pure black with a stage-light glow |
| `glass` | Frosted panels over a soft wallpaper |
| `titanium` | Warm metal, thin type, machined edges |
| `bento` | Bright widget tiles in a tight grid |
| `editorial` | Serif type, set like a magazine |
| `source` | Code editor colours and monospace |
| `classic` | The 1984 desktop, in black and white |
| `source-bento` | Source's editor colours and monospace in Bento's widget grid |

## Files

- `index.html`: the page.
- `css/site.css`: layout and components, driven by design tokens. Its defaults are the `daylight` look.
- `css/themes.css`: one block per theme that swaps the tokens and adjusts layout.
- `css/theme-picker.css` and `js/theme-picker.js`: the preview dock. These go away once a theme is chosen.

The projects in the Work section are sample content.
