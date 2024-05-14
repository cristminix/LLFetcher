const devApiUrl = (path)=>{

    return `http://127.0.0.1:5000/dev-api/${path}`
}
const messagingUrl = (path)=>{

    return `http://127.0.0.1:7700/${path}`
}
export {
    devApiUrl,
    messagingUrl
}