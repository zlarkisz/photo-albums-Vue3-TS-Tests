const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/photo-albums-Vue3-TS-Tests/'
    : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";',
        // eslint-disable-next-line global-require
        //       implementation: require('node-sass'),
      },
    },
  },
});
