import { getDeepLinkName } from '@/utils/utils'

export default {
  mounted() {
    this.setDeepLinkAction()
  },
  methods: {
    setDeepLinkAction() {
      if (this.$route.query && this.$route.query.deepLinkAction) {
        window.localStorage.setItem('deepLinkAction', this.$route.query.deepLinkAction)
      }
    },
    getDeepLinkAction() {
      return window.localStorage.getItem('deepLinkAction')
    },
    removeDeepLinkAction() {
      window.localStorage.removeItem('deepLinkAction')
    },
    removeDeepLinkActionOrRedirectToCorrectRoute(currentRoute) {
      const deepLinkName = getDeepLinkName()
      if (deepLinkName && deepLinkName === currentRoute) {
        this.removeDeepLinkAction()
      } else if (deepLinkName) {
        this.$router.push({ name: deepLinkName })
      }
    }
  }
}
