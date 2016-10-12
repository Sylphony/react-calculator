// Karma configuration
// Generated on Wed Sep 28 2016 02:25:57 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  var configObj = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'entry-test.js'
    ],


    // list of files to exclude
    exclude: [
      'src/app/build.js',
      'src/app/build.js.map'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'entry-test.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      cache: true,
      module: {
          loaders: [
              {
                  test: /\.jsx?$/,
                  loader: "babel-loader",
                  exclude: /node_modules/,
                  query: {
                      // presets: ["es2015", "react"],
                      // plugins: ["transform-object-rest-spread"]
                      presets: ["airbnb"]
                  }
              }
          ]
      },
      externals: {
          'cheerio': 'window',
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  // For Travis CI
  if (process.env.TRAVIS){
    configObj.browsers = ['Firefox'];
  }

  config.set(configObj);
}
