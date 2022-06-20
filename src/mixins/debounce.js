import debounce from '@/utils/debounce'
import config from '@/config/global'

export default {
  methods: {
    debounceInput: debounce(event => event, config.debounce)
  }
}
