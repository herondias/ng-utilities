'use strict';

describe('Directive: nguValEqualTo', function() {

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
        $scope.testCompareValue = null;

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue"><input type="text" name="testCompareValue" ng-model="testCompareValue" ngu-val-equal-to="testValue"></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate with equal values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('3');
        expect($scope.testCompareValue).toEqual('3');
        expect(form.testCompareValue.$valid).toBe(true);
    });

    it('shall not validate with different values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('4');
        expect($scope.testCompareValue).toBeUndefined();
        expect(form.testCompareValue.$valid).toBe(false);
    });
});

describe('Directive: nguValGeTo', function() {

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
        $scope.testCompareValue = null;

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue"><input type="text" name="testCompareValue" ng-model="testCompareValue" ngu-val-ge-to="testValue"></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate with equal values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('3');
        expect($scope.testCompareValue).toEqual('3');
        expect(form.testCompareValue.$valid).toBe(true);
    });

    it('shall validate with greater values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('4');
        expect($scope.testCompareValue).toEqual('4');
        expect(form.testCompareValue.$valid).toBe(true);
    });

    it('shall not validate with different values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('2');
        expect($scope.testCompareValue).toBeUndefined();
        expect(form.testCompareValue.$valid).toBe(false);
    });
});

describe('Directive: nguValGtTo', function() {

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
        $scope.testCompareValue = null;

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue"><input type="text" name="testCompareValue" ng-model="testCompareValue" ngu-val-gt-to="testValue"></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate with greater values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('4');
        expect($scope.testCompareValue).toEqual('4');
        expect(form.testCompareValue.$valid).toBe(true);
    });

    it('shall not validate with equal values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('3');
        expect($scope.testCompareValue).toBeUndefined();
        expect(form.testCompareValue.$valid).toBe(false);
    });

    it('shall not validate with different values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('2');
        expect($scope.testCompareValue).toBeUndefined();
        expect(form.testCompareValue.$valid).toBe(false);
    });
});

describe('Directive: nguValLeTo', function() {

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
        $scope.testCompareValue = null;

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue"><input type="text" name="testCompareValue" ng-model="testCompareValue" ngu-val-le-to="testValue"></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate with equal values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('3');
        expect($scope.testCompareValue).toEqual('3');
        expect(form.testCompareValue.$valid).toBe(true);
    });

    it('shall validate with lower values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('2');
        expect($scope.testCompareValue).toEqual('2');
        expect(form.testCompareValue.$valid).toBe(true);
    });

    it('shall not validate with greater values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('4');
        expect($scope.testCompareValue).toBeUndefined();
        expect(form.testCompareValue.$valid).toBe(false);
    });
});

describe('Directive: nguValLtTo', function() {

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
        $scope.testCompareValue = null;

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue"><input type="text" name="testCompareValue" ng-model="testCompareValue" ngu-val-lt-to="testValue"></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate with lower values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('2');
        expect($scope.testCompareValue).toEqual('2');
        expect(form.testCompareValue.$valid).toBe(true);
    });

    it('shall not validate with equal values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('3');
        expect($scope.testCompareValue).toBeUndefined();
        expect(form.testCompareValue.$valid).toBe(false);
    });

    it('shall not validate with greater values.', function() {
        form.testValue.$setViewValue('3');
        expect($scope.testValue).toEqual('3');
        form.testCompareValue.$setViewValue('4');
        expect($scope.testCompareValue).toBeUndefined();
        expect(form.testCompareValue.$valid).toBe(false);
    });
});

