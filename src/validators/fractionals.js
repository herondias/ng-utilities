'use strict';

angular.module('ngUtilities.validators')
    /**
     * Defines a validator to check for a minimal fractional length.
     */
    .directive('nguValFractionalLengthMin', ['$filter', function($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValFractionalLengthMin = function(value) {
                    if (value) {
                        var parsedMin = parseInt(attr.nguValFractionalLengthMin);
                        if (!isNaN(parsedMin) && !isNaN(value)) {
                            var fractionalPart = $filter('nguFractionalPart')(value);
                            return fractionalPart.length >= parsedMin;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                };
            }
        };
    }])
    /**
     * Defines a validator to check for a maximal fractional length.
     */
    .directive('nguValFractionalLengthMax', ['$filter', function($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValFractionalLengthMin = function(value) {
                    if (value) {
                        var parsedMax = parseInt(attr.nguValFractionalLengthMax);
                        if (!isNaN(parsedMax) && !isNaN(value)) {
                            var fractionalPart = $filter('nguFractionalPart')(value);
                            return fractionalPart.length <= parsedMax;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                };
            }
        };
    }]);
