'use strict';

angular.module('ngUtilities.numbers')
    /**
     * Defines a filter to display only fractional part.
     * Reuse the angular number filter to extract fractional part.
     */
    .filter('nguFractionalPart', ['$filter', function ($filter) {
        return function (input, length) {

            if (!input) {
                return undefined;
            }

            // Return number.
            var number;
            if(angular.isUndefined(length)) {
                number = input + '';
            } else {
                number = $filter('number')(input, length);
            }

            // Remove integer part.
            var parts = number.split('.');
            var fractionalPart = '';
            if (parts.length > 1) {
                fractionalPart = parts[1];
            }
            return fractionalPart;
        };
    }]);