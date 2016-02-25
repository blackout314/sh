module.exports = function (grunt) {
  'use strict';
	require('load-grunt-tasks')(grunt);

  var webpack       = require('webpack');
  var webpackConfig = require('./webpack.config.js');
	grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    webpack: {
      options: webpackConfig,
      dev: {
        output: {
          path: './dist',
          filename: 'app.js'
        },
        debug: true,
        devtool: 'source-map'
      },
      prod: {
        output: {
          path: './dist',
          filename: 'app.min.js'
        },
        plugins: webpackConfig.plugins.concat(
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin()
        )
      }
    }
	});

	grunt.registerTask('default', ['karma', 'webpack']);
};
