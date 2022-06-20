export default function (value, separator = ',', precision = 2) {
  if (!(typeof value === 'number' || typeof value === 'string')) return value
  const num = Number(value)
  if (isNaN(num)) return value
  const numStr = parseInt(num) === num ? num.toString() : num.toFixed(precision)
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}
