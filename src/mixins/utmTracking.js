import { swoopPartnerReferralCookieName, swoopPartnerTypeCookieName } from '@/utils/constants'
import { getCookie, getDomainForCookie } from '@/utils/utils'

export default {
  beforeMount() {
    const { spr } = this.$route.query
    const params = new URLSearchParams(window.location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    for (const [key, value] of params) {
      if (utmKeys.includes(key)) {
        document.cookie = `${key}=${value}; path=/;`
      }
    }
    if (spr) {
      const domain = getDomainForCookie()
      document.cookie = `${swoopPartnerReferralCookieName}=${spr}; max-age=${365 * 24 * 60 * 60}; domain=${domain}; samesite=lax; path=/; secure`
      document.cookie = `${swoopPartnerTypeCookieName}=; max-age=0; domain=${domain}; SameSite=lax; path=/; secure`
    } else {
      this.originType = getCookie(swoopPartnerTypeCookieName)
    }
  }
}
