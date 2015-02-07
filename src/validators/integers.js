'use strict';

angular.module('ngUtilities.validators')
    /**
     * Defines a validator to check for a minimal integer value.
     */
    .directive('nguValIntMin', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValIntMin = function(value) {
                    if (value) {
                        var parsedValue = parseInt(value);
                        var parsedMin = parseInt(attr.nguValIntMin);
                        if (!isNaN(parsedMin) && !isNaN(parsedValue)) {
                            return parsedMin <= parsedValue;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                };
            }
        };
    })
    /**
     * Defines a validator to check for a maximal integer value.
     */
    .directive('nguValIntMax', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValIntMax = function(value) {
                    if (value) {
                        var parsedValue = parseInt(value);
                        var parsedMax = parseInt(attr.nguValIntMax);
                        if (!isNaN(parsedMax) && !isNaN(parsedValue)) {
                            return parsedMax >= parsedValue;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                };
            }
        };
    });
