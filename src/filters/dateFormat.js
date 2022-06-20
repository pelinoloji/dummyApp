import { parseISO, format, isValid } from 'date-fns'

export default function (date, formatValue = 'dd/MM/yyyy') {
  if (!isValid(parseISO(date))) return date
  if (String(date) === date && date.slice(-1).toLowerCase() !== 'z') {
    date = `${date}Z`
  }
  return format(parseISO(date), formatValue)
}
