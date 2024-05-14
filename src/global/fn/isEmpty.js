export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "") ||
    (typeof value === "number" && isNaN(value)) ||
    (Array.isArray(value) && value.length > 0)
  )
}
