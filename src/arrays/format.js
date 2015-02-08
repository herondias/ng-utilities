'use strict';

angular.module('ngUtilities.arrays')
    /**
     * Defines a filter to get the length of a String.
     */
    .filter('nguSize', function() {
        return function(input) {
            return angular.isArray(input) ? input.length : 0;
        };
    })
    /**
     * Defines a filter to get the remaining length of a String, basing on passed thresold.
     */
    .filter('nguRemainingSize', ['$filter', function($filter) {
        return function(input, thresold) {
            var parsedThresold = parseInt(thresold);
            if(!isNaN(parsedThresold)) {
                parsedThresold -= $filter('nguSize')(input);
                if(parsedThresold < 0) {
                    parsedThresold = 0;
                }
                return parsedThresold;
            } else {
                return undefined;
            }
        };
    }])
    /**
     * Defines a filter to check the existence of a value in an array.
     */
    .filter('nguInArray', function() {
        return function(input, haystack) {
            if(angular.isArray(haystack)) {
                return haystack.indexOf(input) >= 0;
            } else {
                return false;
            }
        };
    });
