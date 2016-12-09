define(["angular", "angular-route","angular-bindonce","menu-ctrl","user-ctrl","interceptor-sevc","business-diretc","module-diretc"], function(angular) {
    var blog = angular.module('blog', ['ui.router','pasvaz.bindonce','menu.ctrl','user.ctrl','interceptor.service','business.direct','module.direct']);
    /**
     * 由于整个应用都会和路由打交道,这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
     * run方法只会在angular启动的时候运行一次。
     * @param  $rootScope     [根作用域]
     * @param  $state         [ui-router 状态对象]
     * @param  $stateParams   [ui-router 路由参数]
     * @return                [无]
     */
    blog.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);


    /**
     * 配置路由
     * 这里用的是ui-router路由，支持视图嵌套，而不是用的ng路由
     * @param  $stateProvider       [状态 Provider]
     * @param  $urlRouterProvider   [ui-router Provider]
     * @return                      [无]
     */
    blog.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        //url重定向
        //$urlRouterProvider.when('', '/index/all');
        $urlRouterProvider.otherwise('/index/all');
        $stateProvider.state('main', {
            url: '/index/:menuid',
            templateUrl: 'tpls/home.html',
        }).state('main.login',{
            url:'/login',
            templateUrl:"tpls/login.html"
        }).state('main.reg',{
            url:'/reg',
            templateUrl:"tpls/reg.html",
        });

    }]);


    /**
     * 配置拦截器
     * @param  $httpProvider  
     * @return                      [无]
     */
    blog.config(['$httpProvider', function($httpProvider) {
        //TokenInterceptor 拦截器添加到 HttpProvider
        $httpProvider.interceptors.push('SessionInjector');
        $httpProvider.interceptors.push('HttpInjector');
    }])



    /**
    * 返回一个实例对象
    */
    return blog;
});
