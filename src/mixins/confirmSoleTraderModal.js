import config from '@/config/global'

export default {
  data() {
    return {
      isSoleTraderModalOpen: false,
      isSoleTraderConfirmed: false
    }
  },
  computed: {
    shouldConfirmSoleTrader() {
      return this.hasCorrectSoleTraderState && this.hasCorrectSoleTraderType
    },
    hasCorrectSoleTraderState() {
      return config.whitelabel.companySearch.soleTraderConfirmation && this.company && !this.isSoleTraderConfirmed
    },
    hasCorrectSoleTraderType() {
      return this.company.entityTypeCode === 'IND' || this.company.sourceType === 'SoleTrader'
    }
  },
  watch: {
    isSoleTraderConfirmed(isSoleTraderConfirmed) {
      if (isSoleTraderConfirmed && this.onSoleTraderConfirmation) {
        this.onSoleTraderConfirmation()
      }
    }
  },
  methods: {
    toggleSoleTraderModal(active) {
      this.isSoleTraderModalOpen = active
    },
    confirmSoleTrader(confirmed) {
      this.isSoleTraderConfirmed = confirmed
    }
  }
}
