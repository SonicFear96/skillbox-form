const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/skillbox-form/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/index.scss";`,
      },
    },
  },
});
