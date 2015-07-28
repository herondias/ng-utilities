'use strict';

angular.module('ngUtilities.numbers')
    /**
     * Defines a filter to generate a range of values.
     * Write as : [5] | nguRange or [1,5] | nguRange
     */
    .filter('nguRange', function() {
        return function(input) {
            if (!input || !angular.isArray(input)) {
                return undefined;
            }

            var lowBound, highBound;
            switch (input.length) {
                case 1:
                    lowBound = 0;
                    highBound = parseInt(input[0]) - 1;
                    break;
                case 2:
                    lowBound = parseInt(input[0]);
                    highBound = parseInt(input[1]);
                    break;
                default:
                    return undefined;
            }
            var result = [];
            for (var i = lowBound; i <= highBound; i++) {
                result.push(i);
            }
            return result;
        };
    });
