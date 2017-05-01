'use strict';

angular.module('socialNetwork.users.authentication', [])
.factory('authentication', [
	'$http', 
	'$q',
	'BASE_URL',
	function($http, $q, BASE_URL){

		console.log(BASE_URL);

		function registerUser(user){
			var deferred = $q.defer();

			$http.post(BASE_URL + 'users/Register', user)
				.then(function(responce){
					deferred.resolve(responce.data)

				}, function(error){

				});


			return deferred.promise;

		}

		function loginUser(user){
			var deferred = $q.defer();

			$http.post(BASE_URL + 'users/Login', user)
				.then(function(){
					deferred.resolve(responce.data)

				}, function(){

				});



			return deferred.promise;

		}

		function logout(){

		}

		return{
			registerUser: registerUser,
			loginUser: loginUser,
			logout: logout,
		}

	}]);