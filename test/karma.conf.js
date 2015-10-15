/**
 * @version 1.0.0
 *
 * @copyright (c) 2015 SoccerNorth
 */

module.exports = function (config)
{
    'use strict';

    config.set(
        {
            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

            // base path, that will be used to resolve files and exclude
            basePath: '../',

            // testing framework to use (jasmine/mocha/qunit/...)
            frameworks: ['jasmine'],

            // list of files / patterns to load in the browser
            files: [
                'app/bower_components/jquery/dist/jquery.js',
                'app/bower_components/angular/angular.js',
                'app/bower_components/angular-mocks/angular-mocks.js',
                'app/bower_components/angular-animate/angular-animate.js',
                'app/bower_components/angular-cookies/angular-cookies.js',
                'app/bower_components/angular-resource/angular-resource.js',
                'app/bower_components/angular-route/angular-route.js',
                'app/bower_components/angular-sanitize/angular-sanitize.js',
                'app/bower_components/angular-touch/angular-touch.js',
                'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'app/bower_components/moment/min/moment.min.js',
                'app/bower_components/angular-moment/angular-moment.js',
                'app/bower_components/angular-ui-router/release/angular-ui-router.js',
                'app/bower_components/angular-ui-sortable/sortable.js',
                'app/bower_components/fastclick/lib/fastclick.js',
                'app/bower_components/angular-smart-table/dist/smart-table.js',
                'app/scripts/**/*.js',
                'test/spec/**/*.js',
                'app/bower_components/cookies-js/src/*.js',
                'app/bower_components/toastr/toastr.js',
                'app/bower_components/angulartics/dist/angulartics.min.js',
                'app/bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min.js'
            ],

            // list of files / patterns to exclude
            exclude: [],

            // web server port
            port: 8080,

            // Start these browsers, currently available:
            // - Chrome
            // - ChromeCanary
            // - Firefox
            // - Opera
            // - Safari (only Mac)
            // - PhantomJS
            // - IE (only Windows)
            browsers: [
                'PhantomJS'
            ],

            // Which plugins to enable
            plugins: [
                'karma-phantomjs-launcher',
                'karma-jasmine',
                'karma-coverage'
            ],

            // Continuous Integration mode
            // if true, it capture browsers, run tests and exit
            singleRun: false,

            colors: true,

            // level of logging
            // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
            logLevel: config.LOG_INFO,

            coverageReporter: {
                type: 'html',
                dir: 'coverage'
            },
            reporters: ['progress', 'coverage'],
            preprocessors: {
                'app/scripts/*.js': ['coverage'],
                'app/scripts/controllers/*.js': ['coverage'],
                'app/scripts/directives/*.js': ['coverage'],
                'app/scripts/filters/*.js': ['coverage'],
                'app/scripts/services/*.js': ['coverage']
            }

            // Uncomment the following lines if you are using grunt's server to run the tests
            // proxies: {
            //   '/': 'http://localhost:9000/'
            // },
            // URL root prevent conflicts with the site root
            // urlRoot: '_karma_'
        }
    );
};

// EOF