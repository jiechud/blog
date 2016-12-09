define(['angular', 'angular-resource'], function() {

    var menuService = angular.module('menu.service', ['ngResource']);

    menuService.service('MenuBaseService', ['$resource', '$http', function($resource, $http) {

        var menuResource = $resource('api/menu/:id', {
            id: '@id'
        });

        return {
            getById: function(id) {

            },
            getAll: function() {
                return menuResource.get().$promise;
            }
        };

        return menuResource;
    }]);
    return menuService;
});
