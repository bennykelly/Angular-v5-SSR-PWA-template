var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/_)/],
  stripPrefix: 'dist',
  root: 'dist/browser/',
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'PWA Kit',
      filename: 'service-worker.js',
      filePath: 'dist/browser/service-worker.js',
      staticFileGlobs: [
        'dist/browser/index.html',
        'dist/browser/**.js',
        'dist/browser/**.css',
        'dist/browser/assets/images/icons/**.png',
        'dist/browser/assets/images/icons/**.svg',
        'dist/browser/assets/images/icons/**.ico'
      ],
      minify: true,
      mergeStaticsConfig: true,
      stripPrefix: 'dist/browser/assets/',
      stripPrefixMulti: {
        'dist/browser/assets/': 'assets/',
        'dist/browser/': ''
      },
      verbose: true,
      navigateFallback: '/index.html'
    })
  ]
}
