'use strict';

angular.module('ngUtilities.validators')
    /**
     * Defines a validator to check if a value is in a array.
     */
    .directive('nguValIn', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                haystack: '=nguValIn'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValIn = function(value) {
                    if(angular.isArray(scope.haystack)) {
                        return scope.haystack.indexOf(value) >= 0;
                    } else {
                        return false;
                    }
                };
            }
        };
    })
    /**
     * Defines a validator to check if a value is not in a array.
     */
    .directive('nguValNotIn', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                haystack: '=nguValNotIn'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValNotIn = function(value) {
                    if(angular.isArray(scope.haystack)) {
                        return scope.haystack.indexOf(value) < 0;
                    } else {
                        return false;
                    }
                };
            }
        };
    });
