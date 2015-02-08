'use strict';

describe('Filter: nguDate', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter, nguDateTimeFormat;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_, _nguDateTimeFormat_) {
            $filter = _$filter_('nguDate');
            nguDateTimeFormat = _nguDateTimeFormat_;
        });
    });

    it('returns empty when given null', function() {
        expect($filter(null)).toEqual('');
    });

    it('returns empty when given bad value', function() {
        expect($filter('ABCD')).toEqual('');
    });

    it('returns the correct day for given date in UTC', function() {
        expect($filter('2014-12-31T23:00:00Z')).toEqual('31-Dec-2014');
    });

    it('returns the correct day for given date and provider', function() {
        nguDateTimeFormat.dateFormat = 'DD/MMM/YYYY';
        nguDateTimeFormat.timeZone = 'Europe/Paris';
        expect($filter('2014-12-31T23:00:00Z')).toEqual('01/Jan/2015');
    });
});

describe('Filter: nguTime', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter, nguDateTimeFormat;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_, _nguDateTimeFormat_) {
            $filter = _$filter_('nguTime');
            nguDateTimeFormat = _nguDateTimeFormat_;
        });
    });

    it('returns empty when given null', function() {
        expect($filter(null)).toEqual('');
    });

    it('returns empty when given bad value', function() {
        expect($filter('ABCD')).toEqual('');
    });

    it('returns the correct time for given date', function() {
        expect($filter('2014-12-31T23:00:00Z')).toEqual('23:00');
    });

    it('returns the correct time for given date and provider', function() {
        nguDateTimeFormat.timeFormat = 'HH|mm';
        nguDateTimeFormat.timeZone = 'Europe/Paris';
        expect($filter('2014-12-31T23:00:00Z')).toEqual('00|00');
    });
});

describe('Filter: nguDateTime', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter, nguDateTimeFormat;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_, _nguDateTimeFormat_) {
            $filter = _$filter_('nguDateTime');
            nguDateTimeFormat = _nguDateTimeFormat_;
        });
    });

    it('returns empty when given null', function() {
        expect($filter(null)).toEqual('');
    });

    it('returns empty when given bad value', function() {
        expect($filter('ABCD')).toEqual('');
    });

    it('returns the correct date/time for given date', function() {
        expect($filter('2014-12-31T23:00:00Z')).toEqual('31-Dec-2014 23:00');
    });

    it('returns the correct date/time for given date and provider', function() {
        nguDateTimeFormat.dateFormat = 'DD/MMM/YYYY';
        nguDateTimeFormat.timeFormat = 'HH|mm';
        nguDateTimeFormat.timeZone = 'Europe/Paris';
        expect($filter('2014-12-31T23:00:00Z')).toEqual('01/Jan/2015 00|00');
    });
});
