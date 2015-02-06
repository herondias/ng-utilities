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
