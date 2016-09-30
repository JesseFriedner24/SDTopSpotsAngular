myApp = angular.module('myApp', []);
//controller
myApp.controller('SpotsCtrl', ['$scope', '$http', function($scope, $http){
//gets data from json	
	$http.get('index.json')
	.then(function (response) {
$scope.spots = response.data.topspots;

	});
}]);






