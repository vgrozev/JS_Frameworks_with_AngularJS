'use strict';

angular.module('socialNetwork.home', [
	'socialNetwork.users.authentication',
	])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/home/home.html',
		controller: 'homeController',
	})
}])
.controller('homeController', [
	'$scope',
	'$location', 
	'authentication',
	function ($scope, $location, authentication) {
		$scope.login = function(user){
			authentication.loginUser(user)
				.then(function(loggedInUser){
					console.log(loggedInUser);
					$location.path('/NewsFeed');
				})
		};
		$scope.register = function(user) {
			authentication.registerUser(user)
				.then(function(registeredUser){
					console.log(registeredUser);
				});
		};
	}])