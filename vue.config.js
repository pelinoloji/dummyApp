const { defineConfig } = require("@vue/cli-service");
const { plugins } = require("./plugins");

module.exports = defineConfig({
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `
  //       ./assets/styles/swoop/_variables
  //       `
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
           prependData: `@import" @ / css / _variables.scss ";`,
        }
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [...plugins],
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  },
});
