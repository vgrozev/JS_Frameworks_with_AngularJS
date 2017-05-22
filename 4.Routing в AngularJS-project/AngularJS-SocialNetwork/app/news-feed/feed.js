angular.module('socialNetwork.newsFeed.feed', [])
	   .factory('feed', [
	   		'$http',
	   		'$q',
	   		'BASE_URL',
	   		function ($http, $q, BASE_URL) {
	   	
		   		function latestF(pageSize) {

		   			pageSize = pageSize || 10;

		   			var deferred = $q.defer();

		   			$http.get(BASE_URL + 'me/feed?PageSize=' + pageSize)
		   				.then(function(feed){
		   					deferred.resolve(feed);
		   				});

		   			return deferred.promise;

		   		}

			 	return {
			   		latest: latestF
			   	};
	   }])