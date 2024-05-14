export const getJsonResponse = async (response) => {
  let data = null,
    text = "",
    validJson = false,
    validData = false,
    code = response.status,
    ok = response.ok

  try {
    data = await response.json()
    validJson = true
  } catch (error) {
    text = response.statusText
    // console.log(error)
  }
  return { data, text, ok, code, validJson, validData }
}
