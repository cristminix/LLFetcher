/**
 * Example route
 * /search
 * URL changed to /search?contentBy=urn%3Ali%3Aorganization%3A1337&difficultyLevel=BEGINNER&durations=BETWEEN_0_TO_10_MIN&entityType=COURSE&keywords=puppeteer&u=95231473
 * */
export const getUrlSearchParams = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  // let value = params.some_key; // "some_value"
  // console.log(params)
}
