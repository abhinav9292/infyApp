var app = angular.module('searchApp', []);

app.config(function($logProvider){
    $logProvider.debugEnabled(false);
});

app.controller('searchController', function ($scope, $http,$log) {


    $http.get('resources/items.json').then(function (success) {
        $scope.playerList = success.data.Players;
        $log.debug($scope.playerList);
    }, function (error) {
        $log.debug(error);
    });



});
