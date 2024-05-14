import $ from "jquery"
export const createReactRootElement = (f) => {
  $(document.body).prepend(
    `<div id="app-container"><div id="content-script-root">ROOT</div></div>`
  )
}
