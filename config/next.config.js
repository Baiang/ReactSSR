/* eslint-disable */
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const jsonfile = require('jsonfile');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {  WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');

const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const conf = require('../config/config.global');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const es3ifyPlugin = require('es3ify-webpack-plugin');

const { ANALYZE } = process.env;

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

let isDev = true;

const nextConfig = {
  distDir: '../build',
  assetPrefix: conf[env].cdn,
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
      alias: {
          react: 'anujs/dist/ReactIE.js',
          'react-dom': 'anujs/dist/ReactIE.js',
          'prop-types': 'anujs/lib/ReactPropTypes',
          devtools: 'anujs/lib/devtools',
          'create-react-class': 'anujs/lib/createClass',
      }
    };

    if(isDev){
      const file = 'config/.conf.json';
      config.plugins.push(new es3ifyPlugin());
      try {
        const obj = jsonfile.readFileSync(file);
        if(obj.opne){
          jsonfile.writeFile(file, {"opne": false})
          config.plugins.push(new OpenBrowserPlugin({ url: `http://localhost:${conf[env].port}`, delay: 1000 }));
        }
      } catch (e) {

      }
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
    return commonsChunkConfig(config, /\.(less|sass|scss|css)$/)
  }
}

module.exports = withTypescript(withCss(withSass(withLess(withSourceMaps(
  nextConfig
)))))
