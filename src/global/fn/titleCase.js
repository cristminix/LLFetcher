export const titleCase = (str) => {
  let words = str
    .replace(/\W+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  return words.join(" ")
}
