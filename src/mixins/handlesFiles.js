import config from '@/config/global'

// Maps file events to form data

export default {
  methods: {
    handleFiles({ field, files }) {
      if (!files || !files.length) return
      if (files[0].size >= config.maxUploadFileSizeInKB * 1024) {
        alert(`Maximum file size is ${config.maxUploadFileSizeInKB / 1024}Mb. \n
              The file you are trying to upload has ${files[0].size / (1024 * 1024)}Mb`)
        return
      }
      const formData = new FormData()
      Array
        .from(Array(files.length).keys())
        .map(x => formData.append(field, files[x], files[x].name))

      if (this.uploadFiles) {
        this.uploadFiles(formData)
      }
    }
  }
}
