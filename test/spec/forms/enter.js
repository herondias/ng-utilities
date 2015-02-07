'use strict';

describe('Directive: nguEnter', function() {

    // load the service's module
    beforeEach(angular.mock.module('ngUtilities'));

    var $compile,
        $scope,
        el;

    // inject filter.
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_;

        $scope.doIt = function() {};
        spyOn($scope, 'doIt');

        el = $compile('<input type="text" ngu-enter="doIt()">')($scope);
    }));

    it('shall intercept enter key with keyCode', function() {
        el.triggerHandler($.Event('keydown', {
            keyCode: 13
        }));
        $scope.$digest();
        expect($scope.doIt).toHaveBeenCalled();
    });

    it('shall intercept enter key with which', function() {
        el.triggerHandler($.Event('keydown', {
            which: 13
        }));
        $scope.$digest();
        expect($scope.doIt).toHaveBeenCalled();
    });

    it('shall ignore shift+enter key', function() {
        el.triggerHandler($.Event('keydown', {
            keyCode: 13,
            shiftKey: true
        }));
        $scope.$digest();
        expect($scope.doIt).not.toHaveBeenCalled();
    });

    it('shall ignore another key', function() {
        el.triggerHandler($.Event('keydown', {
            keyCode: 14
        }));
        $scope.$digest();
        expect($scope.doIt).not.toHaveBeenCalled();
    });
});
