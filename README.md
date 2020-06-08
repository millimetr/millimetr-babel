# ⚡️ millimetr-babel

This is a millimetr starting template with Babel integration

Note that [Babel](https://babeljs.io/) only does [transpilation](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them]). If you want module resolution, i.e. via `import`/`require` then use [millimetr-parcel](https://github.com/millimetr/millimetr-parcel) or [millimetr-webpack](https://github.com/millimetr/millimetr-webpack)).

_Note that the CSS selectors in this demo follow the [BEM convention](https://en.bem.info/methodology/css/#selectors). However you are welcome to restructure them according to your preferences._

## Getting started

1. `git clone https://github.com/millimetr/millimetr-default.git`
2. `npm install`
3. `npm start`

## Principles

- 📄 **HTML templates are written in [EJS](https://ejs.co/)**
- 🤖 **The `millimetr.config.js` file is central to this starter.**
- 👓 **No hidden behaviour, everything is documented via `millimetr.config.js` file.**
- ⚡ **All JavaScript files in the `src/js` folder will be transpiled (keeping the same file name) into `src/static/assets`**

## Example routes

This starting template starts with three routes:

- `/`: The basic landing-route.
- `/hardcoded`: Illustrates how hardcoded values can be passed to route templates.
- `/dynamic`: Illustrates how dynamically generated values can be passed to route templates.
- `/remote`: Illustrates how remote data can be fetched and passed to route templates.
