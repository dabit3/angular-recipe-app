angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: "/home",
                templateUrl: "templates/home.html"
            })

            .state('breakfast', {
                url: "/breakfast",
                templateUrl: 'templates/breakfast.html',
                controller: 'BreakfastCtrl'
            })
            .state('lunch', {
                url: "/lunch",
                templateUrl: 'templates/lunch.html',
                controller: 'LunchCtrl'
            })
            .state('dinner', {
                url: "/dinner",
                templateUrl: 'templates/dinner.html',
                controller: 'DinnerCtrl'
            })
            .state('snacks', {
                url: "/snacks",
                templateUrl: 'templates/snacks.html',
                controller: 'SnackCtrl'
            })
            .state('brecipe', {
                url: "^/breakfast/:recipeId" ,
                templateUrl: 'templates/breakfast.recipe.html',
                controller: "BreakfastDetailController"
            })
            .state('lrecipe', {
                url: "^/lunch/:recipeId",
                templateUrl: 'templates/lunch.recipe.html',
                controller: "LunchDetailController"
            })
            .state('drecipe', {
                url: "^/dinner/:recipeId",
                templateUrl: 'templates/dinner.recipe.html',
                controller: "DinnerDetailController"
            })
            .state('srecipe', {
                url: "^/snack/:recipeId",
                templateUrl: 'templates/snack.recipe.html',
                controller: "SnackDetailController"
            })
            .state('shopping-list', {
                url: "/shopping-list",
                templateUrl: 'templates/shopping-list.html',
                controller: "ShoppingListController"
            })



    $urlRouterProvider.otherwise("/home");
    })

    .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {

    })
    .controller('BreakfastDetailController', function($scope, $stateParams, BreakfastService) {
        $scope.recipe = BreakfastService.get($stateParams.recipeId);
    })

    .controller('LunchDetailController', function($scope, $stateParams, LunchService) {
        $scope.recipe = LunchService.get($stateParams.recipeId);
    })
    .controller('DinnerDetailController', function($scope, $stateParams, DinnerService) {
        $scope.recipe = DinnerService.get($stateParams.recipeId);
    })
    .controller('SnackDetailController', function($scope, $stateParams, SnackService) {
        $scope.recipe = SnackService.get($stateParams.recipeId);
    })
    .controller('BreakfastController', function($scope) {

    })
    .controller('ShoppingListController', function($scope) {
        $scope.shoppingRecipes = [
            {title: "One", ingredients: "two"}
        ];

        $scope.addRecipe = function() {
            var newShoppingRecipe = {title: $scope.rTitle , ingredients: $scope.rIngredient  };
            $scope.shoppingRecipes.push(newShoppingRecipe);
        }
    })

