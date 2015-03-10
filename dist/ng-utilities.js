'use strict';

angular.module('ngUtilities.debug', [])
    .filter('nguDebugType', function () {
        return function (value) {
            return (typeof value);
        };
    });
'use strict';

angular.module('ngUtilities.numbers')
    /**
     * Defines a filter to display only fractional part.
     * Reuse the angular number filter to extract fractional part.
     */
    .filter('nguFractionalPart', ['$filter', function ($filter) {
        return function (input, length) {

            if (!input) {
                return undefined;
            }

            // Return number.
            var number;
            if(angular.isUndefined(length)) {
                number = input + '';
            } else {
                number = $filter('number')(input, length);
            }

            // Remove integer part.
            var parts = number.split('.');
            var fractionalPart = '';
            if (parts.length > 1) {
                fractionalPart = parts[1];
            }
            return fractionalPart;
        };
    }]);
'use strict';

angular.module('ngUtilities.numbers')
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
                        return undefined;
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
                    if(transformedVal !== '' && transformedVal !== '-') {
                        return parseInt(transformedVal, 10);
                    } else {
                        return undefined;
                    }
                });
            }
        };
    }]);
'use strict';

angular.module('ngUtilities.numbers', []);
'use strict';

angular.module('ngUtilities.strings')
    /**
     * Defines a filter to capitalize a String.
     */
    .filter('nguCapitalize', ['$filter', function($filter) {
        return function(input) {
            var length = $filter('nguLength')(input);
            var formattedString = '';
            if(length > 0) {
                formattedString += $filter('uppercase')(input.toString().substring(0, 1));
            }
            if(length > 1) {
                formattedString += $filter('lowercase')(input.toString().substring(1));
            }
            return formattedString;
        };
    }])
    /**
     * Defines a filter to get the length of a String.
     */
    .filter('nguLength', function() {
        return function(input) {
            return ('' + (input || '')).length;
        };
    })
    /**
     * Defines a filter to get the remaining length of a String, basing on passed thresold.
     */
    .filter('nguRemainingLength', ['$filter', function($filter) {
        return function(input, thresold) {
            var parsedThresold = parseInt(thresold);
            if(!isNaN(parsedThresold)) {
                parsedThresold -= $filter('nguLength')(input);
                if(parsedThresold < 0) {
                    parsedThresold = 0;
                }
                return parsedThresold;
            } else {
                return undefined;
            }
        };
    }]);

'use strict';

angular.module('ngUtilities.strings', []);
'use strict';

angular.module('ngUtilities.strings')
    /**
     * Defines a filter to left-pad a value.
     */
    .filter('nguPadLeft', function () {
        return function (input, pad, length) {
            // if not number.
            if(input && pad) {
                var l = parseInt(length) - input.toString().length;
                for(var i = 0; i < l; i++) {
                    input = pad.toString() + input;
                }
                return input;
            } else {
                return undefined;
            }
        };
    })
    /**
     * Defines a filter to right-pad a value.
     */
    .filter('nguPadRight', function () {
        return function (input, pad, length) {
            // if not number.
            if(input && pad) {
                var l = parseInt(length) - input.toString().length;
                for(var i = 0; i < l; i++) {
                    input += pad.toString();
                }
                return input;
            } else {
                return undefined;
            }
        };
    });
'use strict';

angular.module('ngUtilities', [
    'ngUtilities.strings',
    'ngUtilities.arrays',
    'ngUtilities.numbers',
    'ngUtilities.forms',
    'ngUtilities.dates',
    'ngUtilities.validators',
    'ngUtilities.debug'
]);
