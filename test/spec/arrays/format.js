'use strict';

describe('Filter: nguSize', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguSize');
        });
    });

    it('returns 0 when given null', function() {
        expect($filter(null)).toEqual(0);
    });

    it('returns 0 when not given an array', function() {
        expect($filter('a')).toEqual(0);
    });

    it('returns the correct value when given an array', function() {
        expect($filter(['a','b','c'])).toEqual(3);
    });
});


describe('Filter: nguRemainingSize', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguRemainingSize');
        });
    });

    it('returns thresold when given null', function() {
        expect($filter(null, 8)).toEqual(8);
    });

    it('returns thresold when not given an array', function() {
        expect($filter('abc', 8)).toEqual(8);
    });

    it('returns undefined when given bad thresold', function() {
        expect($filter('abc', 'def')).toBeUndefined();
    });

    it('returns the correct value when given a string of chars', function() {
        expect($filter(['a','b','c'], 8)).toEqual(5);
        expect($filter(['a','b','c'], 3)).toEqual(0);
    });

    it('returns 0 when given a string with length greather than thresold', function() {
        expect($filter(['a','b','c','d'], 2)).toEqual(0);
    });
});

describe('Filter: nguInArray', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguInArray');
        });
    });

    it('returns 0 when given null', function() {
        expect($filter('a', null)).toBe(false);
    });

    it('returns false when not given an array', function() {
        expect($filter('a', 'a')).toBe(false);
    });

    it('returns true if value is in array', function() {
        expect($filter('a', ['a','b','c'])).toBe(true);
    });

    it('returns true if value is in array', function() {
        expect($filter('d', ['a','b','c'])).toBe(false);
    });
});