'use strict';

describe('Directive: nguValCompareTo', function() {

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

        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue"><input type="text" name="testCompareValue" ng-model="testCompareValue" ngu-val-compare-to="testValue"></form>')($scope);
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
