import commarize from './commarize'
import currency from './currency'
import pluralize from './pluralize'
import dateFormat from './dateFormat'
import fileSize from './fileSize'
import fileName from './fileName'
import splitUpperCase from './splitUpperCase'
import numberSeparator from './numberSeparator'
import http from './http'

export default function(Vue) {
  Vue.filter('commarize', commarize)
  Vue.filter('currency', currency)
  Vue.filter('pluralize', pluralize)
  Vue.filter('dateFormat', dateFormat)
  Vue.filter('fileSize', fileSize)
  Vue.filter('fileName', fileName)
  Vue.filter('splitUpperCase', splitUpperCase)
  Vue.filter('numberSeparator', numberSeparator)
  Vue.filter('http', http)
}
