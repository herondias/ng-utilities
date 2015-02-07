'use strict';

angular.module('ngUtilities.validators')
    /**
     * Ensure that a model value is equal to another one.
     */
    .directive('nguValCompareTo', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                otherModelValue: '=nguValCompareTo'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValCompareTo = function(value) {
                    return value === scope.otherModelValue;
                };
                scope.$watch('otherModelValue', function() {
                    ctrl.$validate();
                });
            }
        };
    });
