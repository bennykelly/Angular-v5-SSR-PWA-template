var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/_)/],
  stripPrefix: 'dist',
  root: 'dist/browser/',
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'PWA Starter Kit',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'dist/browser/index.html',
        'dist/browser/**.js',
        'dist/browser/**.css',
      ],
      stripPrefix: 'dist/browser/assets/',
      mergeStaticsConfig: true
    })
  ]
}
