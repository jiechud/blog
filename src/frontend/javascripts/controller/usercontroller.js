/**
 * 用户控制器
 */

define(['angular','user-sevc'], function(angular) {
    var userCtrl = angular.module('user.ctrl', ['user.service']);

    userCtrl.controller('RegCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

        // 视图模型
        $scope.vm = {
            userName: '', //用户名
            pwd: '', //密码
            confirmPwd: '', //确认密码
            rememberPwd: false //是否记住密码
        }

        // 功能模型
        $scope.bm ={
        	submitValid :false,
        }


        /**
         * 注册
         * @return {[object]} [注册结果对象]
         */
        $scope.save = function() {
        	if(!$scope.regForm.$valid){
        		$scope.bm.submitValid = true;
        	}

            console.log($scope.vm);
            console.log($scope.bm.submitValid);

        }


    }]);


    return userCtrl;

})
