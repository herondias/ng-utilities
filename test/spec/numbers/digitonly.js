'use strict';

describe('Directive: nguInputDigitsOnly', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    var $compile,
        $scope,
        el;

    // inject filter.
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_;
        el = $compile('<input type="text" ng-model="val" ngu-input-digits-only>')($scope);
    }));

    it('shall allow digit inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue(1234);
        expect($scope.val).toEqual(1234);
    });

    it('shall ignore letter inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('A6789');
        expect($scope.val).toEqual(6789);
    });

    it('shall be undefined if letter inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('ABCD');
        expect($scope.val).toBeUndefined();
    });

    it('shall not allow negative inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('-6789');
        expect($scope.val).toEqual(6789);
    });

    it('shall not allow bad inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('-6789-------A');
        expect($scope.val).toEqual(6789);
    });
});

describe('Directive: nguInputDigitsMinusOnly', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    var $compile,
        $scope,
        el;

    // inject filter.
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_;
        el = $compile('<input type="text" ng-model="val" ngu-input-digits-minus-only>')($scope);
    }));

    it('shall allow digit inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue(1234);
        expect($scope.val).toEqual(1234);
        ngModelController.$setViewValue(-1234);
        expect($scope.val).toEqual(-1234);
        ngModelController.$setViewValue('-1234');
        expect($scope.val).toEqual(-1234);
    });

    it('shall ignore letter inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('A6789');
        expect($scope.val).toEqual(6789);
    });

    it('shall be undefined if letter inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('ABCD');
        expect($scope.val).toBeUndefined();
        ngModelController.$setViewValue('-');
        expect($scope.val).toBeUndefined();
    });

    it('shall not allow negative inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('-6789');
        expect($scope.val).toEqual(-6789);
    });

    it('shall not allow bad inputs', function() {
        var ngModelController = el.controller('ngModel');
        ngModelController.$setViewValue('-6789-------A');
        expect($scope.val).toEqual(-6789);
    });
});

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
