'use strict';

describe('Directive: nguValPasswordSecure', function() {

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


        el = $compile('<form name="form"><input type="text" name="testValue" ng-model="testValue" ngu-val-password-secure></form>')($scope);
        $scope.$digest();
        form = $scope.form;
    }));

    it('shall validate if enough secure.', function() {
        form.testValue.$setViewValue('abcd1234!!');
        expect($scope.testValue).toEqual('abcd1234!!');
        expect(form.testValue.$valid).toBe(true);
    });

    it('shall not validate with invalid value.', function() {
        form.testValue.$setViewValue('abcd');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);

        form.testValue.$setViewValue('abcdefgh');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);

        form.testValue.$setViewValue('abcd12345');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);

        form.testValue.$setViewValue('12345678');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);

        form.testValue.$setViewValue('12345678!!');
        expect($scope.testValue).toBeUndefined();
        expect(form.testValue.$valid).toBe(false);
    });
});

