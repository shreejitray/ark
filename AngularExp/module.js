var app = angular.module('myApp',[]).controller("controller",function($scope){
    //var $scope = $rootScope;
    $scope.$watch('enabled', function(val) {
        console.log('You are now: ' + (val ? 'enabled' : 'disabled'));
    });
    $scope.enabled = true;
    $scope.enabled = false;
    $scope.enabled = 1;
});
