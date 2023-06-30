export const formatDecimal = (value: number, digits = 2) =>
  Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)
