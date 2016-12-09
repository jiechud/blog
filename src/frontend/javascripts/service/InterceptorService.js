define(['angular'], function() {

    //拦截器服务
    var interceptor = angular.module('interceptor.service', []);

    //Session 拦截器
    interceptor.factory('SessionInjector', ['$q', '$window', function($q, $window) {
        return {
            request: function(config) {
                //console.log(config);
                return config;
            },
            response: function(response) {
                return response;
            },
            requestError: function(reqError) {
                console.log(reqError);
            },
            responseError: function(resError) {
                console.log(resError);
            }
        };
    }]);

    //Http 拦截器
    interceptor.factory('HttpInjector', ['$q', '$window', function($q, $window) {
        return {
            request: function(config) {
                //console.log(config);
                return config;
            },
            response: function(response) {

                if (angular.isObject(response.data)) {

                    if (!(response.data.status && response.data.status == 200)) {

                        alert(response.data.message);
                    }
                }
                return response;
            },
            requestError: function(reqError) {
                console.log(reqError);
            },
            responseError: function(resError) {
                console.log(resError);
            }
        };
    }])

    return interceptor;
});
