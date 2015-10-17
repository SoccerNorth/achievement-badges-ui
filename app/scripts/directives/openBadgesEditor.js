/**
 * Directive: Open Badges
 *
 * @version 1.0.0
 *
 * @see https://www.openbadges.me/api.html
 *
 * @author SoccerNorth <soccernorth2015@gmail.com>
 *
 * @copyright (c) 2015 SoccerNorth
 */

'use strict';

angular.module('achievementBadgesUI')
    .directive(
    'openBadgesEditor',
    function () {
        return {
            restrict: 'E',

            controller: function ($scope) {

                $scope.openBadgeDesigner = function () {
                    var URL = 'https://www.openbadges.me/designer.html?';
                    URL = URL + 'origin=' + $scope.returnUrl;
                    URL = URL + '&email=' + $scope.email;
                    var options = 'width=800,height=600,location=0,menubar=0,status=0,toolbar=0';
                    var designerWindow = window.open(URL, '', options);
                }

            },

            scope: {
                returnUrl: '@',
                email: '@'
            },

            templateUrl: 'views/templates/openBadgesEditor.html'
        }
    }
);

// EOF