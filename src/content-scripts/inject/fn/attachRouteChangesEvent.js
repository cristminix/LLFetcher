export const attachRouteChangesEvent = (callback) => {
  let previousUrl = ""

  let observer = new MutationObserver(function (mutations) {
    if (location.href !== previousUrl) {
      previousUrl = location.href
      const path = location.href.replace(
        /https\:\/\/www\.linkedin\.com\/learning/,
        ""
      )
      callback(path)
    }
  })

  const config = { subtree: true, childList: true }
  observer.observe(document, config)
}
