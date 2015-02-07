'use strict';

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