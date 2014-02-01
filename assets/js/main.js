require(["config"], function() {
    require(["angular", "mortgage"], function(angular, mortgage) {

        "use strict"

        var mortgageApp = angular.module('mortgageApp', []);

        mortgageApp.controller('mortgageCtrl', function ($scope) {
            $scope.mortgage = mortgage;
        });

    });
});