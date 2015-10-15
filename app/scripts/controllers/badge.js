/**
 * Controller: Badge
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
    'BadgeController',
    [
        '$scope', 'snBadgeService',
        function ($scope, snBadgeService)
        {
            snBadgeService.saveBadge({})
                .then(
                function ($response)
                {
                    $scope.badgeResponse = $response;
                }, function ($response)
                {
                    $scope.badgeResponse = $response;
                }
            );
        }
    ]
);

// EOF