'use strict';

describe('Filter: nguCapitalize', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguCapitalize');
        });
    });

    it('returns empty when given empty or null', function() {
        expect($filter(null)).toEqual('');
        expect($filter('')).toEqual('');
        expect($filter(undefined)).toEqual('');
    });

    it('returns the first character capitalized if 1-length', function() {
        expect($filter('a')).toEqual('A');
        expect($filter('A')).toEqual('A');
    });

    it('returns the capitalized string', function() {
        expect($filter('aBcD')).toEqual('Abcd');
        expect($filter('1234a')).toEqual('1234a');
    });
});

describe('Filter: nguLength', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguLength');
        });
    });

    it('returns 0 when given null', function() {
        expect($filter(null)).toEqual(0);
    });

    it('returns the correct value when given a string of chars', function() {
        expect($filter('abc')).toEqual(3);
    });

    it('returns the correct value when given a number', function() {
        expect($filter(1234)).toEqual(4);
    });
});


describe('Filter: nguRemainingLength', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguRemainingLength');
        });
    });

    it('returns thresold when given null', function() {
        expect($filter(null, 8)).toEqual(8);
    });

    it('returns undefined when given bad thresold', function() {
        expect($filter('abc', 'def')).toBeUndefined();
    });

    it('returns the correct value when given a string of chars', function() {
        expect($filter('abc', 8)).toEqual(5);
        expect($filter('abcdefgh', 8)).toEqual(0);
    });

    it('returns 0 when given a string with length greather than thresold', function() {
        expect($filter('abcdefghijkl', 8)).toEqual(0);
    });

    it('returns the correct value when given a number', function() {
        expect($filter(1234, 8)).toEqual(4);
    });
});