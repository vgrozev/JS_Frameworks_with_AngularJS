'use strict';

angular.module('socialNetwork.home', [
	'socialNetwork.users.authentication',
	])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/home/home.html',
		controller: 'homeController'
	})
}])
.controller('homeController', [
	'$scope', 
	'authentication',
	function ($scope, authentication) {
		$scope.login = function(user){
			authentication.loginUser(user);
		};
		$scope.register = function(user) {
			authentication.registerUser(user)
				.then(function(registeredUser){
					console.log(registeredUser);
				});
		};
	}])