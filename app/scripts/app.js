/* global FastClick */
'use strict';

/**
 * Main module of the application.
 *
 * @version 1.0.0
 *
 * @copyright (c) 2015 https://github.com/SoccerNorth
 */
angular.module(
    'achievementBadgesUI', [

        // Core Angular Modules
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',

        // Analytics
        'angulartics',
        'angulartics.google.analytics',

        // Extended Angular Modules
        'angularMoment',
        'ui.bootstrap',
        'ui.router',

        // Smart Table
        'smart-table'

    ]
).config(
    [
        '$urlRouterProvider', '$stateProvider', '$provide', '$analyticsProvider',
        function ($urlRouterProvider, $stateProvider, $provide, $analyticsProvider)
        {
            $urlRouterProvider.otherwise('/main/home');

            // https://github.com/angulartics/angulartics#full-path-tracking-for-pages-without-a-router
            $analyticsProvider.firstPageview(true); // Records pages that don't use $state or $route
            $analyticsProvider.withAutoBase(true); // Records full path

            // Solution Found Here: https://github.com/angular/angular.js/issues/7699
            $provide.decorator(
                '$browser', [
                    '$delegate', function ($delegate)
                    {
                        var originalUrl = $delegate.url;
                        $delegate.url = function ()
                        {
                            var result = originalUrl.apply(this, arguments);
                            /* istanbul ignore else */
                            if (result && result.replace) {
                                result = result.replace(/%23/g, '#');
                            }
                            return result;
                        };
                        return $delegate;
                    }
                ]
            );

            $stateProvider

                // The main controller is loaded and resolved before all others
                .state(
                'achievementBadgesUI', {
                    abstract: true,
                    url: '/main',
                    templateUrl: 'views/main.html',
                    controller: 'MainController'
                }
            )

                .state(
                'achievementBadgesUI.home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                }
            )

                .state(
                'achievementBadgesUI.adminEditBadge', {
                    url: '/admin/badge/edit',
                    templateUrl: 'views/admin/badge/edit.html',
                    controller: 'BadgeController'
                }
            )


        }
    ]
)
    .run(
    function ()
    {
        // Third part plugin used to remove the 300ms delay on touch devices - https://github.com/ftlabs/fastclick
        FastClick.attach(document.body);
    }
);

// EOF
