'use strict';

describe('Filter: nguPadLeft', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguPadLeft');
        });
    });

    it('shall add pad to left if less', function() {
        expect($filter('A', '0', 4)).toEqual('000A');
        expect($filter('AAA', '0', 4)).toEqual('0AAA');
    });

    it('shall not add pad to left if equal or more', function() {
        expect($filter('ABCD', '0', 4)).toEqual('ABCD');
        expect($filter('ABCDE', '0', 4)).toEqual('ABCDE');
    });

    it('shall return undefined if null string', function() {
        expect($filter(null, '0', 4)).toBeUndefined();
    });

    it('shall return undefined if null pad', function() {
        expect($filter('A', null, 4)).toBeUndefined();
    });

    it('shall not change input if pad length is 0', function() {
        expect($filter('A', '0', 0)).toEqual('A');
    });

    it('shall handle various objects', function() {
        expect($filter(456, '0', 4)).toEqual('0456');
    });
});

describe('Filter: nguPadRight', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    // Get filter.
    var $filter;

    // inject filter.
    beforeEach(function() {
        angular.mock.inject(function(_$filter_) {
            $filter = _$filter_('nguPadRight');
        });
    });

    it('shall add pad to right if less', function() {
        expect($filter('A', '0', 4)).toEqual('A000');
        expect($filter('AAA', '0', 4)).toEqual('AAA0');
    });

    it('shall not add pad to right if equal or more', function() {
        expect($filter('ABCD', '0', 4)).toEqual('ABCD');
        expect($filter('ABCDE', '0', 4)).toEqual('ABCDE');
    });

    it('shall return undefined if null string', function() {
        expect($filter(null, '0', 4)).toBeUndefined();
    });

    it('shall return undefined if null pad', function() {
        expect($filter('A', null, 4)).toBeUndefined();
    });

    it('shall not change input if pad length is 0', function() {
        expect($filter('A', '0', 0)).toEqual('A');
    });

    it('shall handle various objects', function() {
        expect($filter(456, '0', 4)).toEqual('4560');
    });
});
