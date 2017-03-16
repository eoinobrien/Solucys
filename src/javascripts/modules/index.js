const main = () => {
  require('../analytics/base.js').then((analytics) => analytics.init());
};

// Start the app through its main entry point.
main();

/*
  Automatically instantiates modules based on data-attrubiutes
  specifying module file-names.
*/
const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const Module = require(`./${name}`).default
  new Module(el)
}

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = none
    }
  }
*/
