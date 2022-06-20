const UNITS = ['B', 'KB', 'MB', 'GB', 'TB']
const STEP = 1024
const format = (value, power) => (value / Math.pow(STEP, power)).toFixed(2) + UNITS[power]

export default function (value) {
  let i = 0
  value = parseFloat(value, 10)
  for (i = 0; i < UNITS.length; i++) {
    if (value < Math.pow(STEP, i)) {
      if (UNITS[i - 1]) {
        return format(value, i - 1)
      }
      return value + UNITS[i]
    }
  }
  return format(value, i - 1)
}
