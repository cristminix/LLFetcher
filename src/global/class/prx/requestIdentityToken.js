import Prx from "./Prx"
export const requestIdentityToken = async (appId, url, toastFn = null) => {
  const formData = new FormData()
  formData.append("appId", appId)
  let token = null
  try {
    const { data, validJson, code, text } = await Prx.post(url, null, formData)
    if (validJson) {
      // console.log(data)
      // const { token } = data
      // setRequestToken(token)
      token = data.token
    } else {
      if (toastFn) {
        toastFn(
          `Failed to get request token ${appId} server sent http ${code} ${text}`,
          "error"
        )
      }
    }
  } catch (e) {
    if (toastFn) {
      toastFn(e.toString(), "error")
    }
  }
  return token
}
