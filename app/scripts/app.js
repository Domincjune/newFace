'use strict';

/**
 * @ngdoc overview
 * @name newFaceAngularApp
 * @description
 * # newFaceAngularApp
 *
 * Main module of the application.
 */
angular
  .module('newFaceAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://flashservice.xvideos.com/**'
    ]);
    $routeProvider
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/item', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
