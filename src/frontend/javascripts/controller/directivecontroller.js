define(['angular','menu-sevc','user-sevc'],function(angular,serv){
	
	var directModel = angular.module('direct.ctrl', ['menu.service','user.service']);

	/**
	 * 菜单控制器
	 * @param  {[type]} $scope){			}] [description]
	 * @return {[type]}                 [description]
	 */
	directModel.controller('MenuCtrl', ['$scope','MenuBaseService','$state','$stateParams','$location', function($scope,MenuBaseService,$state,$stateParams,$location){
		
		$scope.menuid = $stateParams.menuid;
     
		//获取菜单数据b
		MenuBaseService.getAll().then(function(data){
			$scope.data = data.message;
		});

		//菜单选择
		$scope.MenuSwitch = function(item){
			var menuid = item._id;
			$state.go('main',{menuid:menuid});
		}
	}]);

	directModel.controller('UserRemoteCtrl', ['$scope','UserBaseService', function($scope,UserBaseService){

		
	}])


	return directModel;

})