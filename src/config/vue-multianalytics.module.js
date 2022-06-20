import amplitude from 'amplitude-js/amplitude'
import { amplitudeEvents } from '@/utils/constants'

class BasicModule {
  constructor(name, config = {}) {
    this.name = name
    this.config = config
  }

  trackView() {
    /* Overridden by modules */
  }

  trackEvent() {
    /* Overridden by modules */
  }

  trackException() {
    /* Overridden by modules */
  }

  trackTiming() {
    /* Overridden by modules */
  }

  setAlias() {
    /* Overridden by modules */
  }

  identify() {
    /* Overridden by modules */
  }

  setUsername() {
    /* Overridden by modules */
  }

  setUserProperties() {
    /* Overridden by modules */
  }

  setUserPropertiesOnce() {
    /* Overridden by modules */
  }

  incrementUserProperties() {
    /* Overridden by modules */
  }

  setSuperProperties() {
    /* Overridden by modules */
  }

  setSuperPropertiesOnce() {
    /* Overridden by modules */
  }

  ecommerceTrackEvent() {
    /* Overridden by modules */
  }

  addTransaction() {
    /* Overridden by modules */
  }

  addItem() {
    /* Overridden by modules */
  }

  trackTransaction() {
    /* Overridden by modules */
  }

  clearTransactions() {
    /* Overridden by modules */
  }

  reset() {
    /* Overridden by modules */
  }
}
export class LinkedinModule extends BasicModule {
  constructor() {
    super('linkedin', {})
  }

  init(initConf = {}) {
    (function () {
      const s = document.getElementsByTagName('script')[0]
      const b = document.createElement('script')
      b.type = 'text/javascript'
      b.async = true
      b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
      s.parentNode.insertBefore(b, s)
    })()

    // Apply default configuration
    // initConf = { ...pluginConfig, ...initConf }
    const mandatoryParams = ['partnerId']

    mandatoryParams.forEach(el => {
      if (!initConf[el]) throw new Error(`VueAnalytics : Please provide a "${el}" from the config.`)
    })

    this.config.debug = initConf.debug
    window._linkedin_data_partner_id = initConf.partnerId
  }
}

export class AmplitudeModule extends BasicModule {
  init(initConf = {}) {
    amplitude.getInstance().init(initConf.apiKey)
  }

  trackView({ viewName }) {
    if (amplitudeEvents.pageViews[viewName]) {
      amplitude.getInstance().logEvent(amplitudeEvents.pageViews[viewName])
    }
  }

  /**
   * Dispatch an amplitude event
   * event may be an object containing eventType and eventProperties
   * or just a string
   * @param event
   */
  trackEvent(event) {
    let eventType, eventProperties
    if (typeof event === 'object' && event !== null) {
      ;({ eventType, eventProperties } = event)
    } else {
      eventType = event
    }
    amplitude.getInstance().logEvent(eventType, eventProperties)
  }

  setUserProperties(properties) {
    if (Object.keys(properties).length > 0) {
      amplitude.getInstance().setUserProperties(properties)
    }
  }

  setUserPropertiesOnce(properties) {
    const identify = new amplitude.Identify()
    if (Object.keys(properties).length > 0) {
      const propertiesArray = Object.entries(properties)
      propertiesArray.forEach(property => {
        identify.setOnce(property[0], property[1])
      })
      amplitude.getInstance().setUserId(properties.userId)
    } else {
      amplitude.getInstance().setUserId(null)
      amplitude.getInstance().regenerateDeviceId()
    }
    amplitude.getInstance().identify(identify)
  }

  incrementUserProperties(property, amount) {
    const identify = new amplitude.Identify().add(property, amount)
    amplitude.getInstance().identify(identify)
  }

  addItem(objectToAdd) {
    const identify = new amplitude.Identify()
    const itemsArray = Object.entries(objectToAdd)
    itemsArray.forEach(([key, value]) => {
      identify.add(key, value)
    })
    amplitude.getInstance().identify(identify)
  }

  identify(properties) {
    if (Object.keys(properties).length > 0) {
      amplitude.getInstance().setUserId(properties.userId)
    }
  }
}
