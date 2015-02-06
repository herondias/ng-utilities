'use strict';

angular.module('ngUtilities.numbers', [])
    /**
     * Defines a filter to remove all characters but digits from a String.
     */
    .filter('nguDigitsOnly', function () {
        return function (input) {
            if(angular.isString(input)) {
                return input.replace(/[^0-9]/g, '');
            } else {
                return input;
            }
        };
    })
    /**
     * Defines a filter to remove all characters but digits and minus sign from a String.
     */
    .filter('nguDigitsMinusOnly', function () {
        return function (input) {
            if(angular.isString(input)) {
                return input.replace(/[^0-9\-]/g, '').replace(/(?!^)[^0-9]/g,'');
            } else {
                return input;
            }
        };
    })
    /**
     * Force a input[type=text] to accept only digits as input.
     */
    .directive('nguInputDigitsOnly', ['$filter', function($filter) {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attr, ctrl) {
                ctrl.$parsers.push(function(val) {
                    var transformedVal = $filter('nguDigitsOnly')(val);
                    if (transformedVal !== val) {
                        ctrl.$setViewValue(transformedVal);
                        ctrl.$render();
                    }
                    if(transformedVal !== '') {
                        return parseInt(transformedVal, 10);
                    } else {
                        return;
                    }
                });
            }
        };
    }])
    /**
     * Force a input[type=text] to accept only digits and minus sign as input.
     */
    .directive('nguInputDigitsMinusOnly', ['$filter', function($filter) {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attr, ctrl) {
                ctrl.$parsers.push(function(val) {
                    var transformedVal = $filter('nguDigitsMinusOnly')(val);
                    if (transformedVal !== val) {
                        ctrl.$setViewValue(transformedVal);
                        ctrl.$render();
                    }
                    if(transformedVal !== '') {
                        return parseInt(transformedVal, 10);
                    } else {
                        return;
                    }
                });
            }
        };
    }]);