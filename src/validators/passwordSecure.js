'use strict';

angular.module('ngUtilities.validators')
    /**
     * Ensure that a password is secure.
     */
    .directive('nguValPasswordSecure', ['$filter', function($filter) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValPasswordSecure = function(value) {
                    return $filter('nguLength')(value) >= 8 
                        && /[a-z]/i.test(value) 
                        && /[0-9]/.test(value)
                        && /[^a-z0-9]/i.test(value);
                };
            }
        };
    }]);
