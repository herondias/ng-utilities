'use strict';

angular.module('ngUtilities.debug', [])
    .filter('nguDebugType', function () {
        return function (value) {
            return (typeof value);
        };
    });