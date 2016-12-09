/**
 * 公共组件指令
 */

define(['angular','directive-ctrl'], function(angular) {

    var moduleDirective = angular.module('module.direct', ['direct.ctrl']);

    //用户名验证指令
    moduleDirective.directive('userValid', function() {

        return {
            restrict: 'AE',
            require: 'ngModel',
            repalce: true,
            link: function(scope, element, attrs, $c) {

            }
        }
    });

    moduleDirective.directive('remoteValid', function() {

        return {
            scope: {},
            restrict: 'AE',
            require: '?^ngModel',
            repalce: true,
            controller:'UserRemoteCtrl',
            link: function(scope, element, attrs, $c) {
                console.log($c);

                //$c.vali

                // element.bind('focus', function(evt) {
                //     console.log('focus');
                // }).bind('blur', function(evt) {
                //     console.log('blur');
                // });
            }
        }
    }) 
});
