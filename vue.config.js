const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: '@import "@/assets/styles/global.scss";',
  // eslint-disable-next-line global-require
  //       implementation: require('node-sass'),
  //     },
  //   },
  // },
});
