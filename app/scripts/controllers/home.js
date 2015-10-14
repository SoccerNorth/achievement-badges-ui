/**
 * Controller: Home
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
    'HomeController',
    [
        '$scope',
        function ($scope)
        {

            $scope.homeMessage = 'This is Home!';

        }
    ]
);

// EOF