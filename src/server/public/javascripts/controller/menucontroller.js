define(['angular','menu-sevc'], function(angular,dirctrl) {

    var menuModel = angular.module('menu.ctrl', ['menu.service']);
    menuModel.controller('demo', ['$scope','MenuBaseService', function($scope,MenuBaseService) {
    

    }])

    return menuModel;

})
