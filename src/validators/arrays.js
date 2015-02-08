'use strict';

angular.module('ngUtilities.validators')
    /**
     * Defines a validator to check if a value is in a array.
     */
    .directive('nguValIn', ['$filter', function($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                haystack: '=nguValIn'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValIn = function(value) {
                    return $filter('nguInArray')(value, scope.haystack);
                };
            }
        };
    }])
    /**
     * Defines a validator to check if a value is not in a array.
     */
    .directive('nguValNotIn', ['$filter', function($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                haystack: '=nguValNotIn'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValNotIn = function(value) {
                    return angular.isArray(scope.haystack) && $filter('nguInArray')(value, scope.haystack) === false;
                };
            }
        };
    }]);
