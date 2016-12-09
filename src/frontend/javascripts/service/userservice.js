define(['angular', 'angular-resource'], function() {

    var userService = angular.module('user.service', ['ngResource']);

    userService.service('UserBaseService', ['$resource', '$http', function($resource, $http) {

        var userResource = $resource('api/user/:id', {
            id: '@id'
        }, {
            userexists: {
                method: 'get',
                params: {
                    username: '@username'
                }
            }
        });

        return {
            post: function() {

            },
            getById: function(id) {

            },
            getAll: function() {
                return userResource.get().$promise;
            },
            userRemoteValid: function(username) {
                return userResource.userexists({
                    username: username
                }).$promise;
            }
        };


    }]);
    return userService;
});
