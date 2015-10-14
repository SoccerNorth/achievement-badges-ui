/* global toastr */
/**
 * Controller: Main
 *
 * @version 1.0.0
 *
 * @author SoccerNorth <soccernorth2015@gmail.com>
 *
 * @copyright (c) 2015 SoccerNorth
 */

'use strict';

angular.module('achievementBadgesUI')
    .controller(
    'MainController',
    [
        '$scope',
        function ($scope)
        {

            // For Unit Testing Purposes
            //var self = this;

            /**
             * Toaster Default & Custom Options
             * See Demo for Options: http://codeseven.github.io/toastr/demo.html
             */
                // Defaults
            toastr.options = {
                debug: false,
                newestOnTop: false,
                positionClass: 'toast-bottom-right',
                preventDuplicates: false,
                onclick: null,
                showDuration: '300',
                hideDuration: '1000',
                extendedTimeOut: 0,
                showEasing: 'swing',
                hideEasing: 'linear',
                showMethod: 'fadeIn'
            };

            // Custom Message Types
            $scope.messages = {
                msgClose: {
                    closeButton: true,
                    progressBar: false,
                    timeOut: 0,
                    tapToDismiss: true
                },
                msgFade: {
                    closeButton: false,
                    progressBar: true,
                    timeOut: '3000',
                    tapToDismiss: true
                },
                msgUserInfo: {
                    closeButton: true,
                    progressBar: true,
                    timeOut: 0,
                    tapToDismiss: false,
                    positionClass: 'toast-bottom-left'
                }
            };

        }
    ]
);

// EOF