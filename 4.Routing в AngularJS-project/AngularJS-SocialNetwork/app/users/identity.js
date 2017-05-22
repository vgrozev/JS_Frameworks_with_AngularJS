'use strict'; 

angular.module('socialNetwork.users.identity', [])
	.factory('identity', [
		'$http',
		'$q',
		'BASE_URL',
		function($http, $q, BASE_URL){

		var deferred = $q.defer();
		var currentUser = undefined;

		var accessToken = 'm5HhA6RMEXZspfdqhG7huVgqKk0saUQcbQGoftsSsi7y1odKqqS1uPFntGOQMajl2_K0DT6zmHUCOkRqNwu_AXirUpyl-xp_BI6RfFurfCd63ewbxHlgD99jGMxKH0pbvyPFrQDWhQWYv--D-fTU0jxy7VmEa5SzmWhnQi7yPk2prCNUiLSQ4Tx4mXEMnLYs9c8n7Bs3iGw6dOBrRhtxcKAmH3xmco--ysIFCN03Df7ThTTYO1WNGuNGsZDYGzOjbxKRuXkiSu7Cttk8CA7g2nakNujLQ119Jh3fIGOIzCbUVUdKejo7FPvDcDVtV87oPxX2zDFvXtxZluUQobUKHfDbN12vJGO8gGGj4q35Jyv6jem-SIXC6w4YXDTuvR-Se1NpOO28jnuYUF9nGv9ZHyVHtZrbFHJ00y_hrSFrKQW7wZQX6-KepL7QFbQQeH4OlJd3XN6XWMz05F9xM7nIJH2rcOdf23BDUvZt5J92FOdtcuBgefZYuq6xup-l2i80'

		$http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;

		$http.get(BASE_URL + 'me').then(function(response){
			 	currentUser = response.data;
			 	deferred.resolve(currentUser);
			 });

		//var userName = 'g1234';

		return {

			getCurrentUser: function () { 
								if (currentUser){
									return $q.when(currentUser);
								}
								else {
									return deferred.promise;
								}
							},
			isAuthenticated: function () { 
								return true; 
							},

		}
		
	}])