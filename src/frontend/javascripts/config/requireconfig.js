require.config({
    baseUrl: "/",
    paths: {
        "angular": "libs/angular/angular.min",
        "angular-route": "libs/ui-router/angular-ui-router.min",
        "angular-resource": "libs/angular-resource/angular-resource",
        "angular-bindonce": "libs/angular-bindonce/bindonce.min",



        "bootstrap": "config/bootstrap", //手动启动angular
        "app": "javascripts/app",

        "business-diretc": "javascripts/directive/businessdirective",
        "module-diretc": "javascripts/directive/moduledirective",
        "menu-ctrl": "javascripts/controller/menucontroller",
        "user-ctrl": "javascripts/controller/usercontroller",
        "directive-ctrl": "javascripts/controller/directivecontroller",
        "interceptor-sevc": "javascripts/service/InterceptorService",
        "menu-sevc": "javascripts/service/menuservice",
        "user-sevc": "javascripts/service/userservice"
    },
    //不支持ADM规范 使用的时候定义他们的特征
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angularRoute'
        },
        'angular-resource': {
            deps: ['angular'],
            exports: 'angularResource'
        },
        'angular-bindonce': {
            exports: 'angularBindonce'
        }
    }
});


/**
 * 手动启动angular
 * @param  {[object]} angular [依赖angular模块]
 * @param  {[object]} app     [依赖app模块]
 */
require(['angular', 'app'], function(angular, app) { 
    angular.element().ready(function() {
        angular.bootstrap(document, ['blog']); 
    });
});
