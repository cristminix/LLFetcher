(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.js.a38d0dde.js")
    );
  })().catch(console.error);

})();
