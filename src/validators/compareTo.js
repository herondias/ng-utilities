'use strict';

angular.module('ngUtilities.validators')
    /**
     * Ensure that a model value is equal to another one.
     */
    .directive('nguValEqualTo', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                otherModelValue: '=nguValEqualTo'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValEqualTo = function(value) {
                    return value === scope.otherModelValue;
                };
                scope.$watch('otherModelValue', function() {
                    ctrl.$validate();
                });
            }
        };
    })

    /**
     * Ensure that a model value is less or equal to another one.
     */
    .directive('nguValLeTo', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                otherModelValue: '=nguValLeTo'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValLeTo = function(value) {
                    return value <= scope.otherModelValue;
                };
                scope.$watch('otherModelValue', function() {
                    ctrl.$validate();
                });
            }
        };
    })

    /**
     * Ensure that a model value is less or equal to another one.
     */
    .directive('nguValLtTo', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                otherModelValue: '=nguValLtTo'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValLtTo = function(value) {
                    return value < scope.otherModelValue;
                };
                scope.$watch('otherModelValue', function() {
                    ctrl.$validate();
                });
            }
        };
    })

    /**
     * Ensure that a model value is greater or equal to another one.
     */
    .directive('nguValGeTo', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                otherModelValue: '=nguValGeTo'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValGeTo = function(value) {
                    return value >= scope.otherModelValue;
                };
                scope.$watch('otherModelValue', function() {
                    ctrl.$validate();
                });
            }
        };
    })

    /**
     * Ensure that a model value is greater or equal to another one.
     */
    .directive('nguValGtTo', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                otherModelValue: '=nguValGtTo'
            },
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValGtTo = function(value) {
                    return value > scope.otherModelValue;
                };
                scope.$watch('otherModelValue', function() {
                    ctrl.$validate();
                });
            }
        };
    });
