import { canRead, canCreate } from './permissions'
import store from '@/store'

export default {
  user: {
    handler: function () {
      return store.getters.IS_AUTHENTICATED
    },
    permissions: [canRead, canCreate]
  },
  guest: {
    handler: function () {
      return !store.getters.IS_AUTHENTICATED
    },
    permissions: [canRead]
  }
}
