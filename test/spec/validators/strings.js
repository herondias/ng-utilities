'use strict';

describe('Directive: nguValLengthMin', function() {

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
    }));

    it('shall validate with valid value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-min="3"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('ABCD');
        expect($scope.testValue).toEqual('ABCD');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall validate with empty value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-min="0"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('');
        expect($scope.testValue).toEqual('');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall not validate with invalid value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-min="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('ABC');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with letter as minimum.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-min="A"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('ABC');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });
});

describe('Directive: nguValLengthMax', function() {

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
    }));

    it('shall validate with valid value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-max="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('ABCDE');
        expect($scope.testValue).toEqual('ABCDE');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall validate with empty value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-max="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('');
        expect($scope.testValue).toEqual('');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall not validate with invalid value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-max="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('ABCDEFGH');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with letter as maximum.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-length-max="A"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('5');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });
});

