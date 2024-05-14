export const formatLeadingZeros = (number, size = 2) => {
  // Ensure the input is a number
  if (typeof number !== "number") {
    throw new Error("Input must be a number")
  }

  // Use toLocaleString to format the number with leading zeros
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: size,
    useGrouping: false,
  })
}
