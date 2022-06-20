import { mapActions } from 'vuex'
import { notificationRoutine } from '@/store/modules/notification/routines'

export default {
  methods: {
    ...mapActions({
      notify: notificationRoutine.TRIGGER
    }),
    notifyError(message = 'Something went wrong, please try again later.') {
      this.notify({
        type: 'error',
        title: 'Error',
        text: message
      })
    }
  }
}
