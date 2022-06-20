// Maps API fields to form schema data.
import config from '@/config/global'

export default {
  methods: {
    mapFields(data, mapMetaDataTo) {
      this.form = this.form.map(field => {
        if (field && field.name && field.name.includes('.')) {
          // Only works with objects one layer deep. Can be set as a boolean on the field definitons.
          const objectDepth = field.name.split('.')

          if (typeof data[objectDepth[0]] === 'object') {
            field.value = data[objectDepth[0]][objectDepth[1]]
          } else {
            field.value = data[field.name]
          }
        }

        if (typeof field === 'string') return field

        // Attach metadata to the form from the api response.
        if (field.metaDataMappedFrom && data.pageMetadata && Array.isArray(data.pageMetadata[field.metaDataMappedFrom]) && field.metaDataMappedFrom === 'countries') {
          field.options = data.pageMetadata[field.metaDataMappedFrom].sort(item => {
            if (item.label.toLowerCase() === config.whitelabel.country.defaultCountry.toLocaleLowerCase()) {
              return -1
            }

            return 1
          })
        } else if (field.metaDataMappedFrom && data.pageMetadata && data.pageMetadata[field.metaDataMappedFrom]) {
          field.options = data.pageMetadata[field.metaDataMappedFrom]
        } else if (field.name === mapMetaDataTo) {
          field.options = data
        }
        // Attach api values to the form from the response.
        if (data[field.name] == null && field.value !== null) {
          return field
        }

        if (Array.isArray(data[field.name]) && (field.type === 'multiselect' || field.type === 'CustomMultiSelect')) {
          field.value = [...new Set(data[field.name])].map(value => {
            let foundIndex

            if (data.pageMetadata[field.name]) {
              foundIndex = data.pageMetadata[field.name].findIndex(option => option.value === value)

              return {
                value,
                label: data.pageMetadata[field.name][foundIndex].label
              }
            } else if (data.pageMetadata[field.metaDataMappedFrom]) {
              foundIndex = data.pageMetadata[field.metaDataMappedFrom].findIndex(option => option.value === value)

              return {
                value,
                label: data.pageMetadata[field.metaDataMappedFrom][foundIndex].label
              }
            }
          })
        } else if (data[field.name] && field.dataType === 'month') {
          field.value = this.timestampToMonthValue(data[field.name])
        } else if (typeof data[field.name] !== 'undefined') {
          field.value = data[field.name]
        }

        return field
      })
    },
    getFieldValue(fieldName) {
      const foundField = this.form.find(field => field.name === fieldName)

      return foundField ? foundField.value : null
    },
    getFieldOptions(fieldName) {
      return this.form.find(field => field.name === fieldName).options || []
    },
    getSelectedOptionLabel(fieldName) {
      const fieldValue = this.getFieldValue(fieldName)
      const fieldOptions = this.getFieldOptions(fieldName)

      if (fieldValue && Array.isArray(fieldOptions) && fieldOptions.length) {
        return fieldOptions.find(option => option.value === fieldValue).label
      }
    },
    getSelectedOptionLabels(fieldName) {
      let selectedValues = this.getFieldValue(fieldName)

      if (!selectedValues) {
        return []
      } else if (!Array.isArray(selectedValues)) {
        selectedValues = [{ label: '', value: selectedValues }]
      }

      selectedValues = selectedValues.map(option => option.value)

      return this.getFieldOptions(fieldName)
        .filter(fieldOption => selectedValues.includes(fieldOption.value))
        .map(fieldOption => fieldOption.label)
    },
    attachToField(fieldName, property, data) {
      const foundIndex = this.form.findIndex(field => field.name === fieldName)

      if (foundIndex !== -1) {
        this.form[foundIndex][property] = data
      }
    },
    attachToFieldValue(fieldName, data) {
      this.attachToField(fieldName, 'value', data)
    },
    watchField(fieldName, callback) {
      const foundIndex = this.form.findIndex(field => field.name === fieldName)

      if (foundIndex === -1) {
        throw new Error(`watchField cannot find field with name ${fieldName}.`)
      } else {
        this.$watch(`form.${foundIndex}.value`, callback, {
          deep: true
        })
      }
    },
    timestampToMonthValue(timestamp) {
      const date = new Date(timestamp * 1000)
      const year = date.getFullYear()
      let month = date.getMonth() + 1 // JS months are 0 based indexes.

      month = month >= 10 ? month : '0' + month

      return `${year}-${month}`
    }
  }
}
