export default {
  data() {
    return {
      allowedTenants: ['Australia']
    }
  },
  methods: {
    isAllowedTenant(tenant) {
      return this.allowedTenants.includes(tenant)
    }
  }
}
