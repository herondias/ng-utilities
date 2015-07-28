'use strict';

describe('Filter: nguRange', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguRange');
        });
    });

    it('shall be undefined if null or undefined or invalid length or not an array', function() {
        expect($filter(null)).toBeUndefined();
        expect($filter(undefined)).toBeUndefined();
        expect($filter(5)).toBeUndefined();
        expect($filter([])).toBeUndefined();
        expect($filter([1,2,3])).toBeUndefined();
    });

    it('shall be 0,1,2,3 if set to [4]', function() {
        expect($filter([4])).toEqual([0,1,2,3]);
    });

    it('shall be 1,2,3,4,5 if set to [1,5]', function() {
        expect($filter([1,5])).toEqual([1,2,3,4,5]);
    });
});
