/* jshint browser: true, globalstrict: true */
/* global angular, $, alert */
(function () {
    "use strict";

    angular.module('adminApp', ['admin.controller.user', 'admin.controller.entry', 'ngRoute'])
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
    ;
})();
