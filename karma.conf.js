module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true,
    files: [
      'app/lib/jquery.min.js',
      'app/lib/angular.min.js',
      'app/lib/angular-route.min.js',
      'app/lib/angular-mocks.js',
      'app/modules/access-control/*.js',
      'app/modules/dashboard/*.js',
      'app/modules/main/*.js',
      'app/modules/**/*.js',
      'spec/**/*.spec.js'
    ]
  })
}