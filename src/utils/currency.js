import config from '@/config/global'

// Helper functions to format input numeric values to currency.

// Amount of numbers on the decimal places.
const PRECISION = 0
const separators = config.whitelabel.country.currency.defaultCurrencyFormat

// Receives a numeric value and transforms it to currency format.
export const formatToCurrency = value => {
  // If the value format is numeric and PRECISION is greater than 0 it adds the decimal places.

  value = typeof value === 'number' ? value.toFixed(PRECISION) : value

  // Check if the number is negative. If true adds '-' at the beggining of the number.
  const negative = value.indexOf('-') >= 0 ? '-' : ''

  const numbers = onlyNumbers(value)
  const currency = numbersToCurrency(numbers)
  const parts = toStr(currency).split('.')

  const decimal = parts[1]
  let integer = parts[0]

  integer = addThousandSeparator(integer, separators.thousandsSeparator)

  return negative + joinIntegerAndDecimal(integer, decimal, separators.decimalsSeparator)
}

// Transforms string into number.
export const toNumber = value => {
  if (!value) return ''

  return Number(onlyNumbers(value))
}

// Removes all dots and commas off of the number.
export function onlyNumbers(input) {
  return toStr(input).replace(/\D+/g, '') || '0'
}

// Transforms the given value into a string.
export function toStr(value) {
  return value ? value.toString() : ''
}

// Transforms the given value to the correct currency format and adds the decimals places based on the desired precision.
function numbersToCurrency(numbers) {
  const exp = Math.pow(10, PRECISION)
  const float = parseFloat(numbers) / exp
  return float.toFixed(PRECISION)
}

// Regex to split the number in groups up to three numbers by the separator character.
function addThousandSeparator(integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`)
}

// Concat the thousands and decimal with the separator character.
export function joinIntegerAndDecimal(integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer
}

// Parses the string to number.
export function removeSeparatorsAndParseToNumber(numberAsString) {
  return parseFloat(numberAsString.replace(/[.,\s]/g, ''))
}
