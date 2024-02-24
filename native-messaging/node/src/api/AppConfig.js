import fs from "fs"
const fixConfigTemplateValue = (source, target, defaultSourceKey = "app") => {
  const contentKeys = Object.keys(target)
  for (const key of contentKeys) {
    let origValue = target[key]
    let newValue = origValue
    // console.log(key)
    if (typeof origValue === "string") {
      newValue = origValue.replace(/\${(.*?)}/g, (match, group) => {
        // Use group.replace() to replace the desired character
        // console.log(match)
        // console.log(group)
        if (typeof source[defaultSourceKey] === "object") {
          if (typeof source[defaultSourceKey][group] !== "undefined") {
            return source[defaultSourceKey][group]
          }
        }

        if (group.match(/\./)) {
          const [sourceKey, prop] = group.split(".")
          if (typeof source[sourceKey] === "object") {
            if (typeof source[sourceKey][prop] !== "undefined") {
              return source[sourceKey][prop]
            }
          }
        }
        return group //"${" + group.replace('e', 'X') + "}";
      })
      target[key] = newValue
    }
  }
  return target
}
class AppConfig {
  data = {}
  path = "config"
  keys = ["app", "db", "module", "auth", "dev"]
  logger = null
  static instance = null
  static getInstance() {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig()
    }
    return AppConfig.instance
  }

  setLogger(logger) {
    this.logger = logger
  }
  setPath(path) {
    this.path = path
  }
  async loadJsonFile(key) {
    const buffer = await fs.readFileSync(`${this.path}/${key}.json`)
    let content = {}
    try {
      content = JSON.parse(buffer)
    } catch (e) {
      console.error(e)
    }
    return content
  }
  async load() {
    // const configKeys = Object.keys(this.keys)
    for (const key of this.keys) {
      // console.log(key)
      const content = await this.loadJsonFile(key)
      // console.log(content)
      this.data[key] = content
      // console.log(this.data)
      this.data[key] = fixConfigTemplateValue(this.data, this.data[key], key)
    }
    // console.log(this.data)
  }
  get(key) {
    if (typeof this.data.app[key] !== "undefined") {
      return this.data.app[key]
    }
    if (key.match(/\./)) {
      const [sourceKey, prop] = key.split(".")
      if (typeof this.data[sourceKey] !== "undefined") {
        return this.data[sourceKey][prop]
      }
    }
    return null
  }
  set(key, value) {
    if (typeof this.data.app[key] !== "undefined") {
      this.data.app[key] = value
    }
    if (key.match(/\./)) {
      const [sourceKey, prop] = key.split(".")
      if (typeof this.data[sourceKey] !== "undefined") {
        this.data[sourceKey][prop] = value
      }
    }
    return this
  }
}

export default AppConfig
