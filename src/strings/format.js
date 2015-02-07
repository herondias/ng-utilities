'use strict';

angular.module('ngUtilities.strings')
    /**
     * Defines a filter to capitalize a String.
     */
    .filter('nguCapitalize', ['$filter', function($filter) {
        return function(input) {
            var length = $filter('nguLength')(input);
            var formattedString = '';
            if(length > 0) {
                formattedString += $filter('uppercase')(input.toString().substring(0, 1));
            }
            if(length > 1) {
                formattedString += $filter('lowercase')(input.toString().substring(1));
            }
            return formattedString;
        };
    }])
    /**
     * Defines a filter to get the length of a String.
     */
    .filter('nguLength', function() {
        return function(input) {
            return ('' + (input || '')).length;
        };
    })
    /**
     * Defines a filter to get the remaining length of a String, basing on passed thresold.
     */
    .filter('nguRemainingLength', ['$filter', function($filter) {
        return function(input, thresold) {
            var parsedThresold = parseInt(thresold);
            if(!isNaN(parsedThresold)) {
                parsedThresold -= $filter('nguLength')(input);
                if(parsedThresold < 0) {
                    parsedThresold = 0;
                }
                return parsedThresold;
            } else {
                return undefined;
            }
        };
    }]);
