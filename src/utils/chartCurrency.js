import config from '@/config/global'

const localeString = config.whitelabel.country.defaultLocaleString
const currencyName = config.whitelabel.country.currency.defaultCurrencyName

// Helper function to format and build the echart's currency tooltips
export const buildTooltip = (params) => {
  const value1 = formatLocalCurrency(params[0].value)
  const value2 = formatLocalCurrency(params[1].value)

  return `${params[0].axisValue} 
        <br>
        ${params[0].marker} ${params[0].seriesName}:
        <span style="float: right; margin-left:20px; font-weight: bold">${value1}</span> 
        <br/> 
        ${params[1].marker} ${params[1].seriesName}:
        <span style="float: right; margin-left:20px; font-weight: bold">${value2}</span> 
        `
}

function formatLocalCurrency(value) {
  return parseFloat(value).toLocaleString(
    localeString,
    {
      style: 'currency',
      currency: currencyName
    }
  )
}
