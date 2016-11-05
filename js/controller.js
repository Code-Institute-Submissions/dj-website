angular.module('RouteController', [])
	.controller('HomeController', function($scope, $location, RelContService, GigService) {
		//Page title
		//$scope.title = "DJ Website";

		// Gigs content controller
		var url = "/data/gigs.json";

		$scope.gigList = {};

		GigService.getGigs(url , $scope.data).then(function(results) {
			$scope.gigList = results.data;
			console.log($scope.gigList);
        }).catch(function(err) {
            console.log(err);
        });	
		$scope.gigLimit = 2;
		
		//Related Content controller
		var url = "/data/djContent.json";

		$scope.contents = {};

		RelContService.getContent(url , $scope.data).then(function(results) {
			$scope.contents = results.data;
			console.log($scope.contents);
        }).catch(function(err) {
            console.log(err);
        });	


		//$scope.gigList = allGigs;
		
		//$scope.djShopProd = djTShirtBlack;
		//console.log($scope.djShopProd.img1);

		
	})

	.controller('MixesController', function($scope, $location, TrackService) {
		
		//Tracklist show/hide
		$scope.tracklist = true;
		$scope.showTl = function() {
			$scope.tracklist = false;
		};
		$scope.hideTl = function() {
			$scope.tracklist = true;
		};

		

		// Tracklisting controller
		var url = "/data/tracks.json";

		$scope.tracks = {}

		TrackService.getTracks(url , $scope.data).then(function(results) {
			$scope.tracks = results.data;
			console.log($scope.tracks);
        }).catch(function(err) {
            console.log(err);
        });	
		


		


	})

	.controller('GigsController', function($scope, $location, GigService) {
		$scope.title = "Gigs";

		// Gigs content controller
		var url = "/data/gigs.json";

		$scope.gigList = {};

		GigService.getGigs(url , $scope.data).then(function(results) {
			$scope.gigList = results.data;
			console.log($scope.gigList);
        }).catch(function(err) {
            console.log(err);
        });	


        console.log($scope.gigList.date);
	})

	.controller('ShopController', function($scope, $location) {
		$scope.title = "Shop";
	})

	.controller('ContactController', function($scope, $location) {
		$scope.title = "Contact";
	})






