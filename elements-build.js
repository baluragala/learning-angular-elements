const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/learning-angular-elements/runtime.js",
    "./dist/learning-angular-elements/polyfills.js",
    "./dist/learning-angular-elements/scripts.js",
    "./dist/learning-angular-elements/main.js"
  ];

  await fs.ensureDir("elements");
  await concat(files, "elements/counter-element.js");
  await fs.copyFile(
    "./dist/learning-angular-elements/styles.css",
    "elements/styles.css"
  );
})();
