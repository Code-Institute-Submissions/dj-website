angular.module('RouteController', [])
	.controller('HomeController', function($scope, $location, DataService) {
		//Page title
		//$scope.title = "DJ Website";

		// Gigs content controller
		var url = "/data/gigs.json";

		$scope.gigList = {};

		DataService.getData(url , $scope.data).then(function(results) {
			$scope.gigList = results.data;
			console.log($scope.gigList);
        }).catch(function(err) {
            console.log(err);
        });	
		$scope.gigLimit = 2;

		//Related Content controller
		var url = "/data/djContent.json";

		$scope.contents = {};

		var shuffleArray = function(ary) {
			var m = ary.length, t, i;

			// While there remain elements to shuffle
			while (m) {
				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = ary[m];
				ary[m] = ary[i];
				ary[i] = t;
			}
		  	console.log(ary);
		  	return ary;
		};

		DataService.getData(url , $scope.data).then(function(results) {
			$scope.contents = shuffleArray(results.data.contents);
			return $scope.contents
        }).catch(function(err) {
            console.log(err);
        });

        //Product Carousel
       	var url = "/data/products.json"

        $scope.djShopProd = {};

        DataService.getData(url , $scope.data).then(function(results) {
			$scope.djShopProd = results.data.products;
			console.log($scope.djShopProd);
        }).catch(function(err) {
            console.log(err);
        });	
	    

       	
	
	})


	.controller('MixesController', function($scope, $location, DataService) {
		
		//Tracklist show/hide
		$scope.tracklist1 = true;
		$scope.showTl1 = function() {
			$scope.tracklist1 = false;
		};
		$scope.hideTl1 = function() {
			$scope.tracklist1 = true;
		};

		$scope.tracklist2 = true;
		$scope.showTl2 = function() {
			$scope.tracklist2 = false;
		};
		$scope.hideTl2 = function() {
			$scope.tracklist2 = true;
		};

		$scope.tracklist3 = true;
		$scope.showTl3 = function() {
			$scope.tracklist3 = false;
		};
		$scope.hideTl3 = function() {
			$scope.tracklist3 = true;
		};

		$scope.tracklist4 = true;
		$scope.showTl4 = function() {
			$scope.tracklist4 = false;
		};
		$scope.hideTl4 = function() {
			$scope.tracklist4 = true;
		};

		

		// Tracklisting controller
		var url = "/data/tracks.json";

		$scope.tracks = {}

		DataService.getData(url , $scope.data).then(function(results) {
			$scope.tracks = results.data.mixes;
			console.log($scope.tracks);
        }).catch(function(err) {
            console.log(err);
        });	
		


		


	})

	.controller('GigsController', function($scope, $location, DataService) {
		$scope.title = "Gigs";

		// Gigs content controller
		var url = "/data/gigs.json";

		$scope.gigList = {};

		DataService.getData(url , $scope.data).then(function(results) {
			$scope.gigList = results.data;
			console.log($scope.gigList);
        }).catch(function(err) {
            console.log(err);
        });	


        console.log($scope.gigList.date);
	})

	.controller('ShopController', function($scope, $location, DataService) {
		$scope.title = "Shop";
	

		var url = "/data/products.json";
		$scope.shopProd = {};

		DataService.getData(url , $scope.data).then(function(results) {
			$scope.shopProd = results.data.products;
			console.log($scope.shopProd);
        }).catch(function(err) {
            console.log(err);
        });	
    })
	.controller('ContactController', function($scope, $location, DataService) {
		//form controller
		$scope.submitForm = function() {
			alert("Thanks for your " + $scope.contact.type + " enquiry " + $scope.contact.name + ", we will contact you soon by phone on " + $scope.contact.phone + " or the email address " + $scope.contact.email );
		};
		
		//Related Content controller
		var url = "/data/djContent.json";

		$scope.contents = {};
        	
		DataService.getData(url , $scope.data).then(function(results) {
			$scope.contents = results.data.contents;
			return $scope.contents
        }).catch(function(err) {
            console.log(err);
        });

		
	})







