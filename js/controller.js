angular.module('RouteController', [])
	.controller('HomeController', function($scope, $location) {
		$scope.title = "DJ Website";

		$scope.gigList = allGigs;
		$scope.gigLimit = 2;
		$scope.djShopProd = djTShirtBlack;
		console.log($scope.djShopProd.img1);
	})

	.controller('MixesController', function($scope, $location) {
		$scope.tracklist = true;
		$scope.showTl = function() {
			$scope.tracklist = false;
		};
		$scope.hideTl = function() {
			$scope.tracklist = true;
		};

		$scope.tracks = dnbTracks;
		

		


	})

	.controller('GigsController', function($scope, $location) {
		$scope.title = "Gigs";

		$scope.gigList = allGigs;
	})

	.controller('ShopController', function($scope, $location) {
		$scope.title = "Shop";
	})

	.controller('ContactController', function($scope, $location) {
		$scope.title = "Contact";
	})


