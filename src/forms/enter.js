'use strict';

angular.module('ngUtilities.forms')
    /**
     * Listen for enter key.
     */
    .directive('nguEnter', function() {
        return function(scope, element, attrs) {
            element.bind('keydown keypress', function(event) {
                var code = event.keyCode || event.which;
                if (code === 13 && !event.shiftKey) {
                    event.preventDefault();
                    scope.$apply(attrs.nguEnter);
                }
            });
        };
    });
