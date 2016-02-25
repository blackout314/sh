module.exports = {
  target: "web",
  entry: "./src/app.js",
  output: {},
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /(bower_components|node_modules)/,
        test: /\.js$/,
        query: {
          plugins: [
            ['transform-runtime']
          ],
          presets: ['es2015']
        }
      },
      { test: /\.hbs/, loader: "handlebars-loader" },
      { test: /\.json/, loader: "json-loader" }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [],
  externals: {}
};
