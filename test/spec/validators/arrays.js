'use strict';

describe('Directive: nguValIn', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    var $compile,
        $scope,
        el,
        form;

    // inject filter.
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_;
        $scope.testValue = null;
        $scope.values = ['1', '2', '3', '4'];

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-in="values"></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate with existing values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall not validate with haystack different of array', function() {
        $scope.values = 'foo';
        $scope.$digest();
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with unexisting value', function() {
        form.testValue.$setViewValue('5');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });
});

describe('Directive: nguValNotIn', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    var $compile,
        $scope,
        el,
        form;

    // inject filter.
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_;
        $scope.testValue = null;
        $scope.values = ['1', '2', '3', '4'];

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-not-in="values"></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate with unexisting value.', function() {
        form.testValue.$setViewValue('5');
        expect($scope.testValue).toEqual('5');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall not validate with haystack different of array', function() {
        $scope.values = 'foo';
        $scope.$digest();
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with existing value', function() {
        form.testValue.$setViewValue('1');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });
});