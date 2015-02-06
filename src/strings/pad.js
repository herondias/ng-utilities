'use strict';

angular.module('ngUtilities.strings', [])
    /**
     * Defines a filter to left-pad a value.
     */
    .filter('nguPadLeft', function () {
        return function (input, pad, length) {
            // if not number.
            if(input && pad) {
                var l = parseInt(length) - input.toString().length;
                for(var i = 0; i < l; i++) {
                    input = pad.toString() + input;
                }
                return input;
            } else {
                return undefined;
            }
        };
    })
    /**
     * Defines a filter to right-pad a value.
     */
    .filter('nguPadRight', function () {
        return function (input, pad, length) {
            // if not number.
            if(input && pad) {
                var l = parseInt(length) - input.toString().length;
                for(var i = 0; i < l; i++) {
                    input += pad.toString();
                }
                return input;
            } else {
                return undefined;
            }
        };
    });