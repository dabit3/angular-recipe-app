var dinner = angular.module('ionicApp');

dinner.controller('DinnerCtrl', function($scope, DinnerService) {
    $scope.recipes = DinnerService.all();
});