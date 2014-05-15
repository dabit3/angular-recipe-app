var snack = angular.module('ionicApp');

snack.controller('SnackCtrl', function($scope, SnackService) {
    $scope.recipes = SnackService.all();
});