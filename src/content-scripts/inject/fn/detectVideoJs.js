import { waitForElm } from "./waitForElm"
export const detectVideoJs = (callback) => {
  waitForElm(".video-js").then((elm) => {
    // console.log('.video-js is ready');
    callback(elm)
  })
}
