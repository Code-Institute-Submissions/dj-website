angular.module('RouteController', [])
	.controller('HomeController', function($scope, $location) {
		$scope.title = "DJ Website";
	})

	.controller('MixesController', function($scope, $location) {
		$scope.title = "Mixes";
	})

	.controller('GigsController', function($scope, $location) {
		$scope.title = "Gigs";
	})

	.controller('ShopController', function($scope, $location) {
		$scope.title = "Shop";
	})

	.controller('ContactController', function($scope, $location) {
		$scope.title = "Contact";
	})

