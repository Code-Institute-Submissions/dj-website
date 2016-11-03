/*angular.module('UserService',[])
.factory('UserAPIService', function($http) {

	UserAPIService = {
		callAPI: function(url, data) {
			return $http.post(url, data);
		}
	};
	return UserAPIService;
});*/

angular.module('RelatedContentService',[])
.service('RelContService', function ($http) {

	RelContService = {
		getContent: function(url, data) {
			return $http.get(url, data)
		}
	};
	return RelContService;
});

angular.module('GigsListingService',[])
.service('GigService', function ($http) {

	GigService = {
		getGigs: function(url, data) {
			return $http.get(url, data)
		}
	};
	return GigService;
});

angular.module('ProductService',[])
.service('ProdService', function ($http) {

	ProdService = {
		getProds: function(url, data) {
			return $http.get(url, data)
		}
	};
	return ProdService;
});

angular.module('TracklistingService',[])
.service('TrackService', function ($http) {

	TrackService = {
		getTracks: function(url, data) {
			return $http.get(url, data)
		}
	};
	return TrackService;
});


