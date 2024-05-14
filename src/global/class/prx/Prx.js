import { getJsonResponse } from "./getJsonResponse"
import { getResponse } from "./getResponse"
class Prx {
  static async request(
    url,
    method = "get",
    requestToken = null,
    formData = null,
    headers = {},
    responseType = "json"
  ) {
    return new Promise((resolve, reject) => {
      const options = { headers }
      if (method) {
        options.method = method.toUpperCase()
      }
      if (formData) {
        options.body = formData
      }
      if (requestToken) {
        options.headers.Authorization = `Bearer ${requestToken}`
      }
      fetch(url, options)
        .then((response) => {
          if (responseType == "json") {
            getJsonResponse(response).then((jsonResponse) => {
              resolve(jsonResponse)
            })
          } else {
            getResponse().then((jsonResponse) => {
              resolve(jsonResponse)
            })
          }
        })

        .catch((error) => {
          reject(error)
        })
    })
  }
  static async get(
    url,
    requestToken = null,
    headers = {},
    responseType = "json"
  ) {
    return await Prx.request(
      url,
      "get",
      requestToken,
      null,
      headers,
      responseType
    )
  }
  static async post(
    url,
    requestToken,
    formData = null,
    headers = {},
    responseType = "json"
  ) {
    return await Prx.request(
      url,
      "post",
      requestToken,
      formData,
      headers,
      responseType
    )
  }
  static async put(
    url,
    requestToken,
    formData = null,
    headers = {},
    responseType = "json"
  ) {
    return await Prx.request(
      url,
      "put",
      requestToken,
      formData,
      headers,
      responseType
    )
  }
  static async delete(
    url,
    requestToken,
    formData = null,
    headers = {},
    responseType = "json"
  ) {
    return await Prx.request(
      url,
      "delete",
      requestToken,
      formData,
      headers,
      responseType
    )
  }
}

export default Prx
