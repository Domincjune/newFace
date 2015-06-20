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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
