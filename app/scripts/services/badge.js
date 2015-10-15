/**
 * Service: Badge
 *
 * @version 1.0.0
 *
 * @author SoccerNorth <soccernorth2015@gmail.com>
 *
 * @copyright (c) 2015 SoccerNorth
 */

'use strict';

angular.module('achievementBadgesUI')
    .factory(
    'snBadgeService',
    [
        '$http', '$q',
        function ($http, $q)
        {

            /**
             * @since 1.0.0
             */
            var self = this;

            /**
             * @since 1.0.0
             */
            var service = {};

            /**
             * @since 1.0.0
             */
            self.savedBadgeId = null;

            /**
             * Get Saved Badge ID
             *
             * @since 1.0.0
             *
             * return {string}
             */
            service.getSavedBadgeId = function ()
            {
                return self.savedBadgeId;
            };

            /**
             * Save Badge
             *
             * @since 1.0.0
             *
             * @param {Object} $badge
             * @returns {Object}
             */
            service.saveBadge = function ($badge)
            {
                var deferred = $q.defer();

                $http.get('data/development/api/badge/put.json')
                    .then(
                    function ($response)
                    {

                        if ($response.data.status.code === 200) {

                            self.savedBadgeId = $response.data.data.id;
                            deferred.resolve(self.savedBadgeId);

                        } else {
                            deferred.reject('badge not saved');
                        }

                    }, function ()
                    {
                        deferred.reject('badge not saved');
                    }
                );

                return deferred.promise;
            };

            return service;

        }
    ]
);

// EOF
