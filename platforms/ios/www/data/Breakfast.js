var breakfast = angular.module('ionicApp');

breakfast.controller('BreakfastCtrl', function($scope, BreakfastService) {
    $scope.recipes = BreakfastService.all();
});