angular.module('NavDirective', []).directive('djNav', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/directives/dj-nav.html'
	}
})

angular.module('FooterDirective', []).directive('djFooter', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/directives/dj-footer.html'
	}
});