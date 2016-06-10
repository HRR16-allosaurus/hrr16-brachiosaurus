const source = `${__dirname}/client/source/`;
const command = process.env.npm_lifecycle_event;
// minify css
const cssnano = require('cssnano');
const webpack = require('webpack');
// automatically add vendor prefixes for browser compatibility
const autoprefixer = require('autoprefixer');
// minify html and auot generate build html with css and js links
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
// webpack only works with js. this plugin finds all of your css files
// through import/require statements
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// open up browser tab when starting server
const loadBrowse = new WebpackBrowserPlugin();
// removes duplicate dependency files from libraries
const removeDup = new webpack.optimize.DedupePlugin();
const extractCSS = new ExtractTextPlugin("style.min.css");
// minify javascript
const minJS = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
});
const addHTML = new HtmlWebpackPlugin({
  template: `${source}index.html`,
  // minify: {
  //   collapseWhitespace: true,
  //   conservativeCollapse: true, // test this
  //   html5: true,
  //   removeComments: true,
  //   sortAttributes: true,
  //   sortClassName: true,
  // },
});

// Configuration settings according to npm command used
const settings = {
  // npm run start
  start: {
    filename: 'bundle.js',
    loaders: {
      js: ['babel?presets[]=es2015,presets[]=react'],
      css: ExtractTextPlugin.extract('isomorphic-style', 'css', 'postcss'),
    },
    plugins: [loadBrowse, extractCSS, addHTML],
  },

  // npm run build
  build: {
    filename: 'bundle.min.js',
    loaders: {
      js: ['babel?presets[]=es2015,presets[]=react', 'eslint'],
      css: ExtractTextPlugin.extract('isomorphic-style', 'css', 'postcss'),
    },
    plugins: [extractCSS, addHTML, removeDup], // minJS
  },
};

module.exports = {
  entry: source,
  output: {
    path: `${__dirname}/client/build/`,
    filename: settings[command].filename,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: source,
        loaders: settings[command].loaders.js,
      },
      {
        test: /\.css$/,
        include: source,
        loader: settings[command].loaders.css,
      }
    ],
  },
  postcss: [autoprefixer, cssnano],
  plugins: settings[command].plugins,
};
