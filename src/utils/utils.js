import {
  documentTypesDic,
  productRequiredDocumentsDic,
  tenantCookieName,
  gclidCookieName,
  amplitudeEvents,
  subdomainList,
  defaultWhitelabelSubdomains,
  productsAndGoalsDeepLinks
} from '@/utils/constants'

export const removeEmptyKeys = obj => {
  Object.keys(obj).forEach(key => (typeof obj[key] === 'undefined' || obj[key] === null) && delete obj[key])
  return obj
}

export const isPromise = function (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

export const camelToKebab = function (string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export const decodeJWT = token => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const escapeRegExp = str => str.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')

export const downloadFile = (data, filename, mime) => {
  const blob = new Blob([data], { type: mime || 'application/octet-stream' })
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, filename)
  } else {
    const blobURL = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobURL
    link.setAttribute('download', filename)
    link.setAttribute('hidden', true)

    if (typeof link.download === 'undefined') {
      link.setAttribute('target', '_blank')
    }

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    window.URL.revokeObjectURL(blobURL)
  }
}

export const formatDate = date => new Intl.DateTimeFormat('en-GB').format(new Date(date))

export const getCookie = name => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`))
  return matches ? decodeURIComponent(matches[1]) || null : null
}

export const getDomainForCookie = () => location.hostname.substring(location.hostname.indexOf('.swoopfunding') + 1)

export const getSubdomain = () => location.hostname.split('.').shift()

export const setTenantNameCookie = function (tenantName) {
  const maxAge = tenantName ? 365 * 24 * 60 * 60 : 0
  const cookieValue = tenantName || ''
  const domain = getDomainForCookie()
  document.cookie = `${tenantCookieName}=${cookieValue}; max-age=${maxAge}; domain=${domain}; samesite=lax; path=/; secure`
}

export const getOfficerName = officer => officer.fullName || `Unnamed Officer: ${officer.officerId}`

export const getDocumentNameByCategoryAndTitle = (name = '', category = '', title = '') => {
  const fileName = `${documentTypesDic[category] || category}-${title}-${name}`
  return fileName
}

export const makeRequestTillPassCondition = function (reqFn, args = [], conditionFn, time = 1000, limit = -1, res = null) {
  if (limit !== 0 && conditionFn(res)) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        reqFn(...args).then(function (res) {
          const nextLimit = limit > 0 ? limit - 1 : limit
          resolve(makeRequestTillPassCondition(reqFn, args, conditionFn, time, nextLimit, res))
        })
      }, time)
    })
  } else if (limit === 0) {
    return new Promise(resolve => resolve(null))
  }
  return new Promise(resolve => resolve(res))
}

export const convertToDateString = function (date) {
  return new Date(date).toDateString()
}

export function requiredDocumentsAdapter({ documentsList, requiredDocuments, isPrivateLimitedCompany, opportunity }) {
  return Object.entries(requiredDocuments)
    .filter(([key, value]) => {
      let isRequired
      switch (key) {
        case 'hasPersonalGuarantee':
          isRequired = value === 'Yes' || (value === 'YesForPrivateLimitedCompany' && isPrivateLimitedCompany)
          break
        case 'hasBusinessPlan ':
          // For Equity must be always true
          isRequired = opportunity.type === 'Grant' ? true : value
          break
        case 'hasPitchDeck ':
          // For Equity must be always true
          isRequired = opportunity.type === 'Equity' ? true : value
          break
        default:
          isRequired = value
      }
      return isRequired && key in productRequiredDocumentsDic
    })
    .map(([key, value]) => {
      let document
      switch (key) {
        case 'hasPersonalGuarantee':
          document = {
            ...productRequiredDocumentsDic[key],
            isCheckBox: true
          }
          break
        case 'hasBankStatements':
          document = productRequiredDocumentsDic[key][opportunity?.bankStatements || 12]
          break
        case 'filedAccounts':
          document = productRequiredDocumentsDic[key][value]
          break
        default:
          document = productRequiredDocumentsDic[key]
      }
      // remove personal guarantee from the required documents as it's a checkbox and isn't recorded by the server.
      const uploadedDocuments = [...documentsList, { title: 'Personal Guarantee', type: 'Other' }].filter(doc => doc.title === document.title && doc.type === document.type)
      const uploadedDocumentNames = uploadedDocuments.map(doc => doc.name)
      const isDocumentUploaded = uploadedDocuments.length > 0
      return {
        ...document,
        key,
        uploadedDocumentNames,
        isDocumentUploaded
      }
    })
}

export function getGclid() {
  const cookieValue = getCookie(gclidCookieName) || ''
  const [, , gclid = null] = cookieValue.split('.')
  return gclid
}

export const sendBasicEventToAmplitude = (analytics, event) => {
  analytics.trackEvent(event)
}

export const journeyStepsButtonAmplitudeEvent = (isAccountant, eventType) => {
  return isAccountant ? amplitudeEvents.advisorOnboarding[eventType] : amplitudeEvents.businessOnboarding[eventType]
}

export const base64ToSVG = base64 => {
  const name = 'logo.svg'
  const arr = base64.split(',')
  const mime = 'image/svg'
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], name, {
    type: mime
  })
}

export const updateObject = (obj, objToUpdate) => {
  // nested Logic used to update each individual property regarless of object depth.
  // mutates the second object directly.
  Object.keys(obj).forEach(key => {
    if (typeof objToUpdate[key] !== 'undefined') {
      if (Array.isArray(obj[key])) {
        objToUpdate[key] = obj[key]
        return null
      }
      if (typeof obj[key] === 'object') {
        return updateObject(obj[key], objToUpdate[key])
      } else {
        objToUpdate[key] = obj[key]
        return null
      }
    }
    console.log(`Failed to replace ${key} config value`)
  })
}

export const getWhitelabelNameFromSubdomain = subdomain => {
  if (defaultWhitelabelSubdomains.includes(subdomain)) return 'swoop'
  Object.entries(subdomainList).forEach(([key, value]) => {
    if (value.includes(subdomain)) {
      subdomain = key
    }
  })
  return subdomain
}

export const natwestGetLombardLink = group => {
  switch (group) {
    case 'rbs':
      return 'https://quote.lombard.co.uk/landing/cars-and-vans/?intcam=LMB_SF_RBS'
    case 'ulster':
      return 'https://quote.lombard.co.uk/landing/cars-and-vans/?intcam=LMB_SF_UB'
    case 'lombard':
      return 'https://quote.lombard.co.uk/landing/cars-and-vans/?intcam=LMB_SF_L'
    default:
      return 'https://quote.lombard.co.uk/landing/cars-and-vans/?intcam=LMB_SF_NW'
  }
}

export const getDeepLinkName = () => {
  const deepLink = window.localStorage.getItem('deepLinkAction')

  if (!deepLink) return null

  return productsAndGoalsDeepLinks[deepLink]
}

export const getLockedProducts = (goalsCompleted) => {
  if (!goalsCompleted || goalsCompleted.length < 1) goalsCompleted = []
  const completedGoalsTypes = goalsCompleted.map(e => e.type)
  return {
    loansLocked: !completedGoalsTypes.includes('Loan'),
    equityLocked: !completedGoalsTypes.includes('Equity'),
    grantsLocked: !completedGoalsTypes.includes('Grant'),
    mortgageLocked: !completedGoalsTypes.includes('Mortgage')
  }
}
