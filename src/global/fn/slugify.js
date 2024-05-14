export const slugify = (str) => {
  const words = str.replace(/\W+/g, " ").split(" ")
  return words.join("-").toLowerCase()
}
