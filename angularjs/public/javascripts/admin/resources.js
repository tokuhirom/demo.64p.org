/* jshint browser: true, globalstrict: true */
/* global angular, $, alert */
(function () {
    "use strict";

    angular.module('admin.resources', ['ngResource'])
    .factory('$userResource', function ($resource) {
        return $resource('/api/user/:id', {id:'@id'});
    })
    .factory('$entryResource', function ($resource) {
        return $resource('/api/entry/:id', {id:'@id'});
    })
    ;
})();
