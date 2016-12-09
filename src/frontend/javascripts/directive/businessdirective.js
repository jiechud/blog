define(['angular','directive-ctrl'], function() {
    var businessDiretcive = angular.module('business.direct', ['direct.ctrl']);

    businessDiretcive.directive('directMenu', function() {
        return {
            scope: {},
            restrict: 'AE',
            templateUrl:'menu.html',
            repalce: true,
            controller:'MenuCtrl',
            link: function(scope, element, attrs) {
                //console.log(scope);
            }


        };
    })

	return businessDiretcive;

})
