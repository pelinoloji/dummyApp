import config from '@/config/global'

export default function (value, currency = config.whitelabel.country.currency.defaultCurrencySymbol) {
  const amount = String(value)
  const isNegative = amount.startsWith('-')
  const positiveAmount = isNegative ? amount.slice(1) : amount
  return `${isNegative ? '-' : ''}${currency}${positiveAmount}`
}
