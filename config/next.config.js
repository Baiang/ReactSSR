/* eslint-disable */
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {  WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');

const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')

const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')

const { ANALYZE } = process.env;

let isDev = true;

const nextConfig = {
  distDir: '../build',
  // custom webpack config
  webpack(config, { dev }) {
    switch (ANALYZE) {
      case 'BUNDLES':
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: dev ? 8888 : 8889,
            openAnalyzer: true,
          }),
        );
        break;
      case 'SIZE':
        config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
        break;
    }

    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./utils/polyfills.ts')) {
        entries['main.js'].unshift('./utils/polyfills.ts')
      }

      return entries
    }

    config.module.rules.push({
      test: /\.(png|jpg|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })
    config.resolve = {
      ...config.resolve,
      extensions: ['.js', '.jsx', '.tsx', '.json'],
    };

    if(isDev){
      config.plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:3000' }));

    }
    if (dev) {
      config.devtool = 'cheap-module-source-map'
      isDev = false;

      if(ANALYZE === 'ESLINT'){
        config.module.rules.push({
          test: /\.(jsx|tsx)$/,
          enforce: "pre",
          loader: "eslint-loader",
          exclude: ['/node_modules/', '/build/'],
          options: {
            formatter: require('eslint-friendly-formatter'),
            emitError: true
          }
        })
      }
    }else{

    }
    // Add support for both css and scss
    // https://github.com/zeit/next-plugins/issues/127
    return commonsChunkConfig(config, /\.(sass|scss|css)$/)
  }
}

module.exports = withTypescript(withCss(withSass(withSourceMaps(
  nextConfig
))))
