angular.module('DjWebsite', ['ngRoute', 'RouteController', 'NavDirective', 'FooterDirective', 'RelatedDirective', 'RelatedContentService']);

angular.module('DjWebsite').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})

	.when('/mixes', {
		templateUrl: 'templates/mixes.html',
		controller: 'MixesController'
	})

	.when('/gigs', {
		templateUrl: 'templates/gigs.html',
		controller: 'GigsController'
	})

	.when('/shop', {
		templateUrl: 'templates/shop.html',
		controller: 'ShopController'
	})

	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	})
});