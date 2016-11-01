angular.module('RelatedContentService',[])
.service('RelContService', function () {

	RelContService = {
		getContent: function() {
			return relContent[Math.floor((Math.random() * relContent.length))];
		}
	};
	console.log(RelContService);
});