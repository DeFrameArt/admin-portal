var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
  loaders: [{
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['react', 'es2015', 'stage-1']
    }
  }]
},
  resolve: {
  extensions: ['', '.js', '.jsx']
},
devServer: {
  historyApiFallback: true,
  contentBase: './'
},
plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    new CompressionPlugin({ // this is the new code you have to add
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
  ]

}
