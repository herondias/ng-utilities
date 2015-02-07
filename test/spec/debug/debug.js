'use strict';

describe('Filter: nguDebugType', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguDebugType');
        });
    });

    it('shall output the type of var', function() {
        expect($filter(4)).toEqual('number');
        expect($filter('A')).toEqual('string');
        expect($filter(true)).toEqual('boolean');
        expect($filter([1,2,3,4])).toEqual('object');
        expect($filter({name:'John', age:34})).toEqual('object');
    });
});
