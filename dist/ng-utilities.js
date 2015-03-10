'use strict';

angular.module('ngUtilities.arrays', []);
'use strict';

angular.module('ngUtilities.dates', []);
'use strict';

angular.module('ngUtilities.forms', []);
'use strict';

angular.module('ngUtilities.numbers', []);
'use strict';

angular.module('ngUtilities.strings', []);
'use strict';

angular.module('ngUtilities.validators', ['ngUtilities.strings', 'ngUtilities.arrays', 'ngUtilities.numbers']);
'use strict';

angular.module('ngUtilities.arrays')
    /**
     * Defines a filter to get the length of a String.
     */
    .filter('nguSize', function() {
        return function(input) {
            return angular.isArray(input) ? input.length : 0;
        };
    })
    /**
     * Defines a filter to get the remaining length of a String, basing on passed thresold.
     */
    .filter('nguRemainingSize', ['$filter', function($filter) {
        return function(input, thresold) {
            var parsedThresold = parseInt(thresold);
            if(!isNaN(parsedThresold)) {
                parsedThresold -= $filter('nguSize')(input);
                if(parsedThresold < 0) {
                    parsedThresold = 0;
                }
                return parsedThresold;
            } else {
                return undefined;
            }
        };
    }])
    /**
     * Defines a filter to check the existence of a value in an array.
     */
    .filter('nguInArray', function() {
        return function(input, haystack) {
            if(angular.isArray(haystack)) {
                return haystack.indexOf(input) >= 0;
            } else {
                return false;
            }
        };
    });

'use strict';

angular.module('ngUtilities.dates')
    /**
     * Formats a ISO8601 date as the date in the provided timezone.
     */
    .provider('nguDateTimeFormat', function() {
        this.dateFormat = 'DD-MMM-YYYY';
        this.timeFormat = 'HH:mm';
        this.timeZone = 'UTC';

        this.$get = function() {
            return {
                dateFormat: this.dateFormat,
                timeFormat: this.timeFormat,
                timeZone: this.timeZone
            };
        };
    })
    /**
     * Formats a ISO8601 date as the date in the provided timezone.
     */
    .filter('nguDate', ['nguDateTimeFormat', function(nguDateTimeFormat) {
        return function(input) {
            if (input) {
                var formattedDate = moment(input).tz(nguDateTimeFormat.timeZone).format(nguDateTimeFormat.dateFormat);
                if (formattedDate === 'Invalid date') {
                    return '';
                } else {
                    return formattedDate;
                }
            } else {
                return '';
            }
        };
    }])
    /**
     * Formats a ISO8601 date as a time in the provided timezone.
     */
    .filter('nguTime', ['nguDateTimeFormat', function(nguDateTimeFormat) {
        return function(input) {
            if (input) {
                var formattedTime = moment(input).tz(nguDateTimeFormat.timeZone).format(nguDateTimeFormat.timeFormat);
                if (formattedTime === 'Invalid date') {
                    return '';
                } else {
                    return formattedTime;
                }
            } else {
                return '';
            }
        };
    }])
    /**
     * Formats a ISO8601 date as a date-time in the provided timezone.
     */
    .filter('nguDateTime', ['$filter', function($filter) {
        return function(input) {
            var formattedDate = $filter('nguDate')(input)  || '';
            var formattedTime = $filter('nguTime')(input)  || '';

            var formattedDateTime = formattedDate;
            if (formattedDateTime !== '' && formattedTime !== '') {
                formattedDateTime += ' ';
            }
            formattedDateTime += formattedTime;
            return formattedDateTime;
        };
    }]);

'use strict';

angular.module('ngUtilities.debug', [])
    .filter('nguDebugType', function () {
        return function (value) {
            return (typeof value);
        };
    });
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

'use strict';

angular.module('ngUtilities.validators')
    /**
     * Defines a validator to check for a minimal integer value.
     */
    .directive('nguValIntMin', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValIntMin = function(value) {
                    if (value) {
                        var parsedValue = parseInt(value);
                        var parsedMin = parseInt(attr.nguValIntMin);
                        if (!isNaN(parsedMin) && !isNaN(parsedValue)) {
                            return parsedMin <= parsedValue;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                };
            }
        };
    })
    /**
     * Defines a validator to check for a maximal integer value.
     */
    .directive('nguValIntMax', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                ctrl.$validators.nguValIntMax = function(value) {
                    if (value) {
                        var parsedValue = parseInt(value);
                        var parsedMax = parseInt(attr.nguValIntMax);
                        if (!isNaN(parsedMax) && !isNaN(parsedValue)) {
                            return parsedMax >= parsedValue;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                };
            }
        };
    });

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
                    return $filter('nguLength')(value) >= 8 && /[a-z]/i.test(value) && /[0-9]/.test(value) && /[^a-z0-9]/i.test(value);
                };
            }
        };
    }]);

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
