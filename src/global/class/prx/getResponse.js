export const getResponse = async (response) => {
  let data = null,
    text = "",
    validData = false,
    code = response.status,
    ok = response.ok

  try {
    data = await response.text()
    validData = true
  } catch (error) {
    text = response.statusText
    // console.log(error)
  }
  return { data, text, ok, code, validData }
}
