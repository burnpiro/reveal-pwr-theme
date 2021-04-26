# RevealJS PWR Theme (university template)

Adds university theme into presentation. [Demo](https://burnpiro.github.io/presentation-template/#/1) (go to menu and change theme to `PWR` or `WUST`).

> This theme only works with [RevealJS](https://revealjs.com/) `v4.x` or higher.

No external dependencies.

## Installation

Copy `dist/*.png` and `dist/*-theme.css` into `dist/theme/*`:

```html
[...]
<link rel="stylesheet" href="dist/theme/pwr-theme.css" id="theme" />
[...]
```
and/or (english version of the logo)
```html
[...]
<link rel="stylesheet" href="dist/theme/wust-theme.css" id="theme" />
[...]
```

Copy `dist/pwr-theme.js` into `plugins/pwr-theme/pwr-theme.js` and import script:

```html
[...]
<script src="plugin/pwr-theme/pwr-theme.js"></script>
[...]
```

Add `PWRTheme` into your plugins initialization:

```javascript
plugins: [PWRTheme];
```

### Usage

Add class for different types of slides (optional):

- `main-slide`
- `compressed-slide` (default)
- `full-width-slide`
- `full-width-compressed-slide`

example:

```html
<section class="main-slide">
  <h2>Presentation Template</h2>
  <small>Authors...</small>
</section>
```
