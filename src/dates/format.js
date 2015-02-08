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
