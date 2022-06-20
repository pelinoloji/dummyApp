import VueMultianalytics from 'vue-multianalytics'
import router from '@/router'

import { LinkedinModule, AmplitudeModule } from './vue-multianalytics.module'

const debug = process.env.NODE_ENV !== 'production'

const facebookConfig = {
  token: '201987717295492',
  debug
}

const linkedinConfig = {
  partnerId: '405242',
  debug
}

const amplitudeConfig = {
  apiKey: process.env.VUE_APP_AMPLITUDE_API_KEY,
  debug
}

const optimizeConfig = {
  id: 'OPT-TC7D33B',
  debug
}

const xtremePushConfig = {
  appId: process.env.VUE_APP_XTREME_PUSH_ID,
  debug
}

export const vueMultianalyticsConf = {
  modules: {
    facebook: facebookConfig,
    linkedin: linkedinConfig,
    amplitude: amplitudeConfig,
    xtremePush: xtremePushConfig,
    optimize: optimizeConfig
  },
  routing: {
    vueRouter: router,
    preferredProperty: 'fullPath',
    ignoredViews: ['/login?email='],
    ignoredModules: []
  }
}

VueMultianalytics.addCustomModule('linkedin', LinkedinModule)
VueMultianalytics.addCustomModule('amplitude', AmplitudeModule)

export default VueMultianalytics
