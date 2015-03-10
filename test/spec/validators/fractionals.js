'use strict';

describe('Directive: nguValFractionalLengthMin', function() {

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
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-min="1"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('3.1');
        expect($scope.testValue).toEqual('3.1');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall validate with empty value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-min="1"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('');
        expect($scope.testValue).toEqual('');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall not validate with invalid value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-min="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('3.456');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with letter as input.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-min="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('A');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with letter as minimum.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-min="A"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('5');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });
});

describe('Directive: nguValFractionalLengthMax', function() {

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
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-max="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall validate with empty value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-max="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('');
        expect($scope.testValue).toEqual('');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall not validate with invalid value.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-max="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('7.1234567');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with letter as input.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-max="5"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('A');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });

    it('shall not validate with letter as maximum.', function() {
        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-fractional-length-max="A"></form>')($scope);
        $scope.$digest();
        form = $scope.form;

        form.testValue.$setViewValue('5');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });
});

