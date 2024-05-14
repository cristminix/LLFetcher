export const getQueryStringFromUrlAsObject = (url) => {
  const urlObj = new URL(url)
  const queryParams = urlObj.searchParams
  const queryParamsObj = {}

  for (const [key, value] of queryParams) {
    queryParamsObj[key] = value
  }

  return queryParamsObj
}
