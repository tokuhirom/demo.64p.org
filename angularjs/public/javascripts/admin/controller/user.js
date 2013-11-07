/* jshint browser: true, globalstrict: true */
/* global angular, $, alert */
(function () {
    "use strict";

    angular.module('admin.controller.user', ['admin.resources'])
    .controller('userIndexCtrl', function ($scope, $log, $http, $resource) {
        var rows = 10;
        $scope.users = [];
        $scope.page  = 1;

        function search() {
            $resource('/api/user').query({rows: rows, page:$scope.page}, function (data) {
                $scope.users = $scope.users.concat(data);
                $scope.has_next = data.length == rows;
            });
        }
        search();

        $scope.readMore = function () {
            $scope.page++;
            search();
        };
    })
    ;
})();
