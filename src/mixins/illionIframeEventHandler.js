import { illionIframeEvents } from '@/utils/constants'

export default {
  data() {
    return {
      illionIframeEvents
    }
  },
  methods: {
    trackIframeEvent(event) {
      this.$ma.trackEvent({
        eventType: illionIframeEvents[event.event],
        eventProperties: {
          'Event Origin': event.origin || 'No origin specified',
          'Event Status': event.status || 'No status specified'
        }
      })
    }
  }
}
