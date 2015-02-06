'use strict';

describe('Filter: nguDigitsOnly', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguDigitsOnly');
        });
    });

    it('shall extract digits', function() {
        expect($filter('')).toEqual('');
        expect($filter('A9A7')).toEqual('97');
        expect($filter('1234')).toEqual('1234');
        expect($filter('000!')).toEqual('000');
    });

    it('shall return as is if not string', function() {
        expect($filter(null)).toBeNull();
        expect($filter(undefined)).toBeUndefined();
        expect($filter(1234)).toEqual(1234);
    });
});

describe('Filter: nguDigitsMinusOnly', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguDigitsMinusOnly');
        });
    });

    it('shall extract digits', function() {
        expect($filter('')).toEqual('');
        expect($filter('A9A7')).toEqual('97');
        expect($filter('1234')).toEqual('1234');
        expect($filter('-1234----')).toEqual('-1234');
        expect($filter('-1998')).toEqual('-1998');
    });

    it('shall return as is if not string', function() {
        expect($filter(null)).toBeNull();
        expect($filter(undefined)).toBeUndefined();
        expect($filter(1234)).toEqual(1234);
    });
});

describe('Filter: nguFractionalPart', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguFractionalPart');
        });
    });

    it('shall be undefined if null or undefined', function() {
        expect($filter(null)).toBeUndefined();
        expect($filter(undefined)).toBeUndefined();
    });

    it('shall be empty if length set to 0', function() {
        expect($filter(4, 0)).toEqual('');
        expect($filter(4.2, 0)).toEqual('');
        expect($filter(4.25, 0)).toEqual('');
    });

    it('shall be 2-length if length set to 2', function() {
        expect($filter(4, 2)).toEqual('00');
        expect($filter(4.2, 2)).toEqual('20');
        expect($filter(4.25, 2)).toEqual('25');
        expect($filter(4.254, 2)).toEqual('25');
        expect($filter(4.256, 2)).toEqual('26');
    });
});