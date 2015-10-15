/**
 * Test: Main Controller
 *
 * @version 1.0.0
 *
 * @copyright (c) 2015 SoccerNorth
 */

'use strict';

describe(
    'Controller: MainController', function ()
    {

        // load the controller's module
        beforeEach(module('achievementBadgesUI'));

        /**
         * @since 1.0.0
         */
        var $scope;

        /**
         * @since 1.0.0
         */
        var controller;

        // Initialize the controller and a mock scope
        beforeEach(
            inject(
                function (_$rootScope_, $controller)
                {
                    $scope = _$rootScope_.$new();

                    // Initialise Controller
                    controller = $controller('MainController', {$scope: $scope});

                }
            )
        );

        /**
         * @since 1.0.0
         */
        describe(
            'default test container', function ()
            {
                /**
                 * @since 1.0.0
                 */
                it(
                    'default test', function ()
                    {
                        expect(true).toBe(true);
                    }
                );

            }
        );

    }
);

// EOF