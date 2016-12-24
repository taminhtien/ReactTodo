var webpack = require('webpack'); // Webpack utils
var path = require('path')

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', // Those are script files so we will let script loader to load, no need webpack to handle it
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.js',
  ],
  externals: { // Set of key-value pair, key is module name and value is a variable we want to available when loading script files in entry
    jquery: 'jQuery' 
  },
  // Create a new provide plugin, will give us shortcuts to use in component files, for example '$' variable
  plugins: [ // Set of key-value pair, key is variable, value is module name
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)|(bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'inline-source-map'
};
