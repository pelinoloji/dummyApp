export default function (value, precision = 2) {
  if (typeof value !== 'number') return value
  const absValue = Math.abs(value)
  if (absValue >= 1000) {
    const units = ['K', 'M', 'B', 'T']
    const sign = value < 0 ? '-' : ''
    const precisionCorrection = Math.pow(10, precision)
    const unit = Math.floor((absValue.toFixed(0).length - 1) / 3) * 3
    const num = Math.floor((absValue / Math.pow(10, unit)) * precisionCorrection) / precisionCorrection
    const unitName = units[Math.floor(unit / 3) - 1]
    return sign + num + unitName
  }
  return value.toString()
}
