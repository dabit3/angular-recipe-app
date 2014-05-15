var lunch = angular.module('ionicApp');

lunch.controller('LunchCtrl', function($scope, LunchService) {
    $scope.recipes = LunchService.all();
});