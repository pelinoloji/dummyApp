const WebpackAssetsManifest = require('webpack-assets-manifest')

const plugins = [
  new WebpackAssetsManifest({
    output: 'asset-manifest.json',
    customize (entry) {
      return {
        key: `${entry.key.replace('app', 'main')}`,
        value: `/${entry.value}`
      }
    },
    transform (assets) {
      return {
        files: assets
      }
    }
  })
]

module.exports = {
  plugins
}