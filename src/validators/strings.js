'use strict';

angular.module('ngUtilities.validators')
    /**
     * Defines a validator to check for a minimal string length value.
     */
    .directive('nguValLengthMin', ['$filter', function($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValLengthMin = function(value) {
                    var parsedMin = parseInt(attr.nguValLengthMin);
                    if (!isNaN(parsedMin)) {
                        if(value && value.trim) {
                            value = value.trim();
                        }
                        var length = $filter('nguLength')(value);
                        return parsedMin <= length;
                    } else {
                        return false;
                    }
                };
            }
        };
    }])
    /**
     * Defines a validator to check for a maximal length value.
     */
    .directive('nguValLengthMax', ['$filter', function($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValLengthMin = function(value) {
                    var parsedMax = parseInt(attr.nguValLengthMax);
                    if (!isNaN(parsedMax)) {
                        if(value && value.trim) {
                            value = value.trim();
                        }
                        var length = $filter('nguLength')(value);
                        return parsedMax >= length;
                    } else {
                        return false;
                    }
                };
            }
        };
    }]);
