# scss-dom

## [Demo](https://codesandbox.io/s/5362v6rzvk?fontsize=14)
If you do a development in accordance with the BEM methodology, you'll get html outputs with high dimensions in size. Using "scss-dom" reduces the size of html files.


## import script
```html
<head>
  <script src="/path/to/scss-dom.js"></script>
</head>
```

You can use the reference selector using the **scss** attribute.
```html
<div class="header other-class" scss>
  <div class="&-menu">
    <div class="&__item">1</div>
    <div class="&__item">2</div>
    <div class="&__item">3</div>
    <div class="&__item">4</div>
  </div>
</div>
```

## init
```js
document.addEventListener("DOMContentLoaded", () => {
  scssDom();
});
```

## after init dom

```html
<div class="header other-class" scss>
  <div class="header-menu">
    <div class="header-menu__item">1</div>
    <div class="header-menu__item">2</div>
    <div class="header-menu__item">3</div>
    <div class="header-menu__item">4</div>
  </div>
</div>
```

## or

## Install

```sh
npm install scss-dom
```

## Usage
```js
// import
import scssDom from 'scssDom';

// init
scssDom();
```