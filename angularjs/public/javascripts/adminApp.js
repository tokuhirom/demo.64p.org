/* jshint browser: true, globalstrict: true */
/* global angular, $, alert */
(function () {
    "use strict";

    angular.module('adminApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/entry/create', {
            templateUrl: 'templates/entry/create.html',
            controller: 'entryCreateCtrl'
        }).when('/entry/:id', {
            templateUrl: 'templates/entry/show.html',
            controller: 'entryShowCtrl'
        }).when('/entry', {
            templateUrl: 'templates/entry/index.html',
            controller: 'entryIndexCtrl'
        }).when('/user', {
            templateUrl: 'templates/user/index.html',
            controller: 'userIndexCtrl'
        }).otherwise( {
            templateUrl: 'templates/index.html'
        });
    })
    .factory('$userResource', function ($resource) {
        return $resource('/api/user/:id', {id:'@id'});
    })
    .factory('$entryResource', function ($resource) {
        return $resource('/api/entry/:id', {id:'@id'});
    })
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
    .controller('entryIndexCtrl', function ($scope, $log, $entryResource) {
        var rows = 10;
        $scope.entries = [];
        $scope.page  = 1;

        function search() {
            $entryResource.query({rows: rows, page:$scope.page}, function (data) {
                $scope.entries = $scope.entries.concat(data);
                $log.info(data.length);
                $log.info(rows);
                $scope.has_next = data.length == rows;
            });
        }
        search();

        $scope.readMore = function () {
            $scope.page++;
            search();
        };

        $scope.remove = function (id) {
            $entryResource.remove({id:id}, function () {
                $scope.entries = $scope.entries.filter(function (e) {
                    return e.id != id;
                });
            });
        };
    })
    .controller('entryShowCtrl', function ($scope, $entryResource, $routeParams) {
        $scope.entry = $entryResource.get({id:$routeParams.id});
    })
    .controller('entryCreateCtrl', function ($scope, $entryResource, $routeParams, $log, $location) {
        $scope.save = function () {
          $entryResource.save($scope.entry, function (dat) {
              $log.info(dat);
            $location.path('/entry/' + dat.id);
          });
        };
    })
    ;
})();
