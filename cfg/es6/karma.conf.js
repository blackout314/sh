var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'test/**/*.js', watched: true}
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['coverage'],
      'test/**/*.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: webpackConfig.module.loaders,
        postLoaders: [{
          test: /\.js$/,
          exclude: /(test|node_modules|bower_components)\//,
          loader: 'istanbul-instrumenter'
        }]
      },
      externals: webpackConfig.externals
    },

    webpackMiddleware: {
      noInfo: true
    },

    //reporters: [],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
