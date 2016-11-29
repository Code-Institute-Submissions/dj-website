angular.module('FetchService',[])
.service('DataService', function ($http) {

	DataService = {
		getData: function(url, data) {
			return $http.get(url, data)
		}
	};
	return DataService;
});